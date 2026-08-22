import {
  UserProfile,
  Employee,
  Department,
  Designation,
  AttendanceRecord,
  AttendanceEvent,
  LeaveRequest,
  LeaveBalance,
  PayrollRecord,
  NotificationItem,
  AuditLog,
  WorkforceSignal,
} from '../types';
import {
  INITIAL_PROFILES,
  INITIAL_EMPLOYEES,
  INITIAL_DEPARTMENTS,
  INITIAL_DESIGNATIONS,
  INITIAL_ATTENDANCE,
  INITIAL_LEAVE_BALANCES,
  INITIAL_LEAVE_REQUESTS,
  INITIAL_PAYROLL,
  INITIAL_NOTIFICATIONS,
  INITIAL_AUDIT_LOGS,
  INITIAL_SIGNALS,
  INITIAL_LEAVE_TYPES,
} from './mockData';

const STORAGE_KEYS = {
  CURRENT_USER: 'dayflow_current_user',
  ATTENDANCE: 'dayflow_attendance',
  LEAVE_REQUESTS: 'dayflow_leave_requests',
  LEAVE_BALANCES: 'dayflow_leave_balances',
  NOTIFICATIONS: 'dayflow_notifications',
  AUDIT_LOGS: 'dayflow_audit_logs',
  PAYROLL: 'dayflow_payroll',
  EMPLOYEES: 'dayflow_employees',
  SIGNALS: 'dayflow_signals',
};

// Helper for local storage persistence
function loadStorage<T>(key: string, fallback: T): T {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (e) {
    return fallback;
  }
}

function saveStorage<T>(key: string, data: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save to localStorage:', e);
  }
}

class MockEngine {
  private currentUser: UserProfile;
  private employees: Employee[];
  private attendance: AttendanceRecord[];
  private leaveRequests: LeaveRequest[];
  private leaveBalances: LeaveBalance[];
  private notifications: NotificationItem[];
  private auditLogs: AuditLog[];
  private payroll: PayrollRecord[];
  private signals: WorkforceSignal[];

  constructor() {
    this.currentUser = loadStorage(STORAGE_KEYS.CURRENT_USER, INITIAL_PROFILES[0]); // Ananya (Employee)
    this.employees = loadStorage(STORAGE_KEYS.EMPLOYEES, INITIAL_EMPLOYEES);
    this.attendance = loadStorage(STORAGE_KEYS.ATTENDANCE, INITIAL_ATTENDANCE);
    this.leaveRequests = loadStorage(STORAGE_KEYS.LEAVE_REQUESTS, INITIAL_LEAVE_REQUESTS);
    this.leaveBalances = loadStorage(STORAGE_KEYS.LEAVE_BALANCES, INITIAL_LEAVE_BALANCES);
    this.notifications = loadStorage(STORAGE_KEYS.NOTIFICATIONS, INITIAL_NOTIFICATIONS);
    this.auditLogs = loadStorage(STORAGE_KEYS.AUDIT_LOGS, INITIAL_AUDIT_LOGS);
    this.payroll = loadStorage(STORAGE_KEYS.PAYROLL, INITIAL_PAYROLL);
    this.signals = loadStorage(STORAGE_KEYS.SIGNALS, INITIAL_SIGNALS);
  }

  // --- AUTH & ROLES ---
  getCurrentUser(): UserProfile {
    return this.currentUser;
  }

  setCurrentUser(profileId: string): UserProfile {
    const found = INITIAL_PROFILES.find((p) => p.id === profileId) || INITIAL_PROFILES[0];
    this.currentUser = found;
    saveStorage(STORAGE_KEYS.CURRENT_USER, found);
    this.logAudit('USER_ROLE_SWITCH', 'profile', found.id, { role: found.role, name: found.full_name });
    return found;
  }

  getProfiles(): UserProfile[] {
    return INITIAL_PROFILES;
  }

  getCurrentEmployee(): Employee | undefined {
    return this.employees.find((e) => e.profile_id === this.currentUser.id);
  }

  // --- EMPLOYEES & DEPARTMENTS ---
  getEmployees(): Employee[] {
    return this.employees;
  }

  getEmployeeById(id: string): Employee | undefined {
    return this.employees.find((e) => e.id === id);
  }

  getDepartments(): Department[] {
    return INITIAL_DEPARTMENTS;
  }

  getDesignations(): Designation[] {
    return INITIAL_DESIGNATIONS;
  }

  // --- WORKDAY & ATTENDANCE ---
  getTodayAttendance(employeeId: string): AttendanceRecord | undefined {
    const todayStr = new Date().toISOString().split('T')[0];
    return this.attendance.find((a) => a.employee_id === employeeId && a.date === todayStr);
  }

  getEmployeeAttendanceHistory(employeeId: string): AttendanceRecord[] {
    return this.attendance.filter((a) => a.employee_id === employeeId);
  }

  getAllAttendance(): AttendanceRecord[] {
    return this.attendance;
  }

  checkIn(employeeId: string, notes?: string): AttendanceRecord {
    const todayStr = new Date().toISOString().split('T')[0];
    const nowIso = new Date().toISOString();

    let record = this.getTodayAttendance(employeeId);
    if (record && record.check_in && !record.check_out) {
      throw new Error('Active check-in already recorded for today.');
    }

    if (!record) {
      record = {
        id: 'att_' + Date.now(),
        employee_id: employeeId,
        date: todayStr,
        status: 'present',
        check_in: nowIso,
        total_minutes: 0,
        break_minutes: 0,
        overtime_minutes: 0,
        notes,
        events: [
          {
            id: 'ev_' + Date.now(),
            attendance_id: 'att_' + Date.now(),
            event_type: 'CHECK_IN',
            timestamp: nowIso,
            device_info: 'Web Workday Interface',
          },
        ],
      };
      this.attendance.unshift(record);
    } else {
      record.check_in = nowIso;
      record.events?.push({
        id: 'ev_' + Date.now(),
        attendance_id: record.id,
        event_type: 'CHECK_IN',
        timestamp: nowIso,
        device_info: 'Web Workday Interface',
      });
    }

    saveStorage(STORAGE_KEYS.ATTENDANCE, this.attendance);
    this.logAudit('CHECK_IN', 'attendance', record.id, { check_in: nowIso });

    // Notification
    this.createNotification(
      this.currentUser.id,
      'Checked In Successfully',
      `You checked in at ${new Date(nowIso).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}. Have a productive workday!`,
      'success'
    );

    return record;
  }

  checkOut(employeeId: string): AttendanceRecord {
    const record = this.getTodayAttendance(employeeId);
    if (!record || !record.check_in) {
      throw new Error('Cannot check out without an active check-in.');
    }
    if (record.check_out) {
      throw new Error('Check-out already completed for today.');
    }

    const nowIso = new Date().toISOString();
    record.check_out = nowIso;

    // Calculate duration
    const startMs = new Date(record.check_in).getTime();
    const endMs = new Date(nowIso).getTime();
    record.total_minutes = Math.max(0, Math.floor((endMs - startMs) / 60000) - record.break_minutes);

    record.events?.push({
      id: 'ev_' + Date.now(),
      attendance_id: record.id,
      event_type: 'CHECK_OUT',
      timestamp: nowIso,
      device_info: 'Web Workday Interface',
    });

    saveStorage(STORAGE_KEYS.ATTENDANCE, this.attendance);
    this.logAudit('CHECK_OUT', 'attendance', record.id, { check_out: nowIso, duration: record.total_minutes });

    this.createNotification(
      this.currentUser.id,
      'Checked Out',
      `Worked ${Math.floor(record.total_minutes / 60)}h ${record.total_minutes % 60}m today. Have a great evening!`,
      'info'
    );

    return record;
  }

  startBreak(employeeId: string): AttendanceRecord {
    const record = this.getTodayAttendance(employeeId);
    if (!record || !record.check_in || record.check_out) {
      throw new Error('Active check-in required to start a break.');
    }
    const lastEvent = record.events?.[record.events.length - 1];
    if (lastEvent?.event_type === 'BREAK_START') {
      throw new Error('Already on break.');
    }

    const nowIso = new Date().toISOString();
    record.events?.push({
      id: 'ev_' + Date.now(),
      attendance_id: record.id,
      event_type: 'BREAK_START',
      timestamp: nowIso,
      device_info: 'Web Workday Interface',
    });

    saveStorage(STORAGE_KEYS.ATTENDANCE, this.attendance);
    this.logAudit('BREAK_START', 'attendance', record.id, { break_start: nowIso });
    this.createNotification(this.currentUser.id, 'Break Started', 'Enjoy your break time!', 'info');

    return record;
  }

  endBreak(employeeId: string): AttendanceRecord {
    const record = this.getTodayAttendance(employeeId);
    if (!record || !record.check_in || record.check_out) {
      throw new Error('Active check-in required.');
    }
    const lastEvent = record.events?.[record.events.length - 1];
    if (lastEvent?.event_type !== 'BREAK_START') {
      throw new Error('Not currently on break.');
    }

    const nowIso = new Date().toISOString();
    const breakStartMs = new Date(lastEvent.timestamp).getTime();
    const breakEndMs = new Date(nowIso).getTime();
    const durationMinutes = Math.max(1, Math.floor((breakEndMs - breakStartMs) / 60000));

    record.break_minutes += durationMinutes;
    record.events?.push({
      id: 'ev_' + Date.now(),
      attendance_id: record.id,
      event_type: 'BREAK_END',
      timestamp: nowIso,
      device_info: 'Web Workday Interface',
    });

    saveStorage(STORAGE_KEYS.ATTENDANCE, this.attendance);
    this.logAudit('BREAK_END', 'attendance', record.id, { break_end: nowIso, duration: durationMinutes });
    this.createNotification(this.currentUser.id, 'Break Ended', `Resumed active workday after ${durationMinutes} minutes break.`, 'success');

    return record;
  }

  // --- TIME OFF / LEAVE ENGINE ---
  getLeaveBalances(employeeId: string): LeaveBalance[] {
    return this.leaveBalances.filter((b) => b.employee_id === employeeId);
  }

  getLeaveRequests(employeeId?: string): LeaveRequest[] {
    if (employeeId) {
      return this.leaveRequests.filter((r) => r.employee_id === employeeId);
    }
    return this.leaveRequests;
  }

  getPendingDecisionsCount(): number {
    return this.leaveRequests.filter((r) => r.status === 'pending').length;
  }

  getTeamAvailability(departmentId: string): { total: number; available: number } {
    const deptEmployees = this.employees.filter((e) => e.department_id === departmentId);
    const todayStr = new Date().toISOString().split('T')[0];

    const unavailableCount = this.leaveRequests.filter((r) => {
      if (r.status !== 'approved') return false;
      const emp = this.getEmployeeById(r.employee_id);
      if (emp?.department_id !== departmentId) return false;
      return r.start_date <= todayStr && r.end_date >= todayStr;
    }).length;

    return {
      total: deptEmployees.length,
      available: Math.max(0, deptEmployees.length - unavailableCount),
    };
  }

  submitLeaveRequest(params: {
    employee_id: string;
    leave_type_id: string;
    start_date: string;
    end_date: string;
    reason: string;
  }): LeaveRequest {
    // Calculate total days
    const start = new Date(params.start_date);
    const end = new Date(params.end_date);
    if (end < start) {
      throw new Error('End date cannot be prior to start date.');
    }
    const diffMs = end.getTime() - start.getTime();
    const days = Math.ceil(diffMs / (1000 * 60 * 60 * 24)) + 1;

    // Check balance
    const balance = this.leaveBalances.find(
      (b) => b.employee_id === params.employee_id && b.leave_type_id === params.leave_type_id
    );
    const lType = INITIAL_LEAVE_TYPES.find((t) => t.id === params.leave_type_id);

    if (balance && balance.total_allocated - balance.used - balance.pending < days) {
      throw new Error(`Insufficient leave balance. Requested ${days} days, but only ${balance.total_allocated - balance.used - balance.pending} days available.`);
    }

    const emp = this.getEmployeeById(params.employee_id);

    const newRequest: LeaveRequest = {
      id: 'lr_' + Date.now(),
      employee_id: params.employee_id,
      leave_type_id: params.leave_type_id,
      start_date: params.start_date,
      end_date: params.end_date,
      total_days: days,
      reason: params.reason,
      status: 'pending',
      created_at: new Date().toISOString(),
      employee: emp,
      leave_type: lType,
    };

    this.leaveRequests.unshift(newRequest);

    // Update pending balance
    if (balance) {
      balance.pending += days;
      saveStorage(STORAGE_KEYS.LEAVE_BALANCES, this.leaveBalances);
    }

    saveStorage(STORAGE_KEYS.LEAVE_REQUESTS, this.leaveRequests);

    // Audit log
    this.logAudit('LEAVE_SUBMITTED', 'leave_request', newRequest.id, {
      employee: emp?.profile?.full_name,
      start: params.start_date,
      end: params.end_date,
      days,
    });

    // Notify HR
    const hrUsers = INITIAL_PROFILES.filter((p) => p.role === 'hr' || p.role === 'admin');
    hrUsers.forEach((hr) => {
      this.createNotification(
        hr.id,
        'New Leave Decision Required',
        `${emp?.profile?.full_name || 'An employee'} requested ${days} day(s) of ${lType?.name || 'Leave'}.`,
        'action',
        '/decisions'
      );
    });

    return newRequest;
  }

  // --- ATOMIC DECISION PIPELINE ---
  processLeaveDecision(requestId: string, status: 'approved' | 'rejected', rejectionReason?: string): LeaveRequest {
    const req = this.leaveRequests.find((r) => r.id === requestId);
    if (!req) throw new Error('Leave request not found.');
    if (req.status !== 'pending') throw new Error('Request has already been processed.');

    // 1. Authorization check
    if (this.currentUser.role !== 'hr' && this.currentUser.role !== 'admin') {
      throw new Error('Unauthorized. HR or Admin role required.');
    }

    // 2. State update
    req.status = status;
    req.reviewed_by = this.currentUser.id;
    req.reviewed_at = new Date().toISOString();
    if (rejectionReason) req.rejection_reason = rejectionReason;

    // 3. Downstream balance update
    const balance = this.leaveBalances.find(
      (b) => b.employee_id === req.employee_id && b.leave_type_id === req.leave_type_id
    );

    if (balance) {
      balance.pending = Math.max(0, balance.pending - req.total_days);
      if (status === 'approved') {
        balance.used += req.total_days;
      }
      saveStorage(STORAGE_KEYS.LEAVE_BALANCES, this.leaveBalances);
    }

    saveStorage(STORAGE_KEYS.LEAVE_REQUESTS, this.leaveRequests);

    // 4. Notify requester
    const emp = this.getEmployeeById(req.employee_id);
    if (emp?.profile_id) {
      this.createNotification(
        emp.profile_id,
        `Leave Request ${status.toUpperCase()}`,
        `Your request for ${req.total_days} day(s) starting ${req.start_date} has been ${status}.`,
        status === 'approved' ? 'success' : 'warning'
      );
    }

    // 5. Audit Log
    this.logAudit(`LEAVE_${status.toUpperCase()}`, 'leave_request', req.id, {
      reviewed_by: this.currentUser.full_name,
      employee: emp?.profile?.full_name,
      days: req.total_days,
      reason: rejectionReason,
    });

    return req;
  }

  // --- PAYROLL ENGINE ---
  getPayrollRecords(employeeId?: string): PayrollRecord[] {
    if (this.currentUser.role === 'employee') {
      // Strict security isolation
      const emp = this.getCurrentEmployee();
      return this.payroll.filter((p) => p.employee_id === emp?.id);
    }
    if (employeeId) {
      return this.payroll.filter((p) => p.employee_id === employeeId);
    }
    return this.payroll;
  }

  // --- NOTIFICATIONS & AUDIT LOGS ---
  getNotifications(): NotificationItem[] {
    return this.notifications.filter((n) => n.user_id === this.currentUser.id);
  }

  markNotificationRead(notificationId: string): void {
    const notif = this.notifications.find((n) => n.id === notificationId);
    if (notif) {
      notif.read = true;
      saveStorage(STORAGE_KEYS.NOTIFICATIONS, this.notifications);
    }
  }

  createNotification(userId: string, title: string, message: string, type: 'info' | 'success' | 'warning' | 'action', link?: string): NotificationItem {
    const item: NotificationItem = {
      id: 'n_' + Date.now() + Math.random().toString(36).substr(2, 4),
      user_id: userId,
      title,
      message,
      type,
      read: false,
      link,
      created_at: new Date().toISOString(),
    };
    this.notifications.unshift(item);
    saveStorage(STORAGE_KEYS.NOTIFICATIONS, this.notifications);
    return item;
  }

  getAuditLogs(): AuditLog[] {
    if (this.currentUser.role === 'employee') {
      return this.auditLogs.filter((a) => a.actor_id === this.currentUser.id);
    }
    return this.auditLogs;
  }

  logAudit(action: string, targetType: string, targetId?: string, metadata?: Record<string, any>): AuditLog {
    const log: AuditLog = {
      id: 'a_' + Date.now(),
      actor_id: this.currentUser.id,
      actor_name: this.currentUser.full_name,
      action,
      target_type: targetType,
      target_id: targetId,
      metadata,
      timestamp: new Date().toISOString(),
    };
    this.auditLogs.unshift(log);
    saveStorage(STORAGE_KEYS.AUDIT_LOGS, this.auditLogs);
    return log;
  }

  // --- SIGNALS ENGINE ---
  getSignals(): WorkforceSignal[] {
    return this.signals;
  }
}

export const mockEngine = new MockEngine();
