import { supabase, isMockMode } from './supabaseClient';
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

export class SupabaseService {
  // --- PROFILES & EMPLOYEES ---
  async getProfiles(): Promise<UserProfile[]> {
    const { data, error } = await supabase.from('profiles').select('*');
    if (error || !data) return [];
    return data;
  }

  async getEmployees(): Promise<Employee[]> {
    const { data, error } = await supabase
      .from('employees')
      .select('*, profile:profiles(*), department:departments(*), designation:designations(*)');
    if (error || !data) return [];
    return data;
  }

  async getDepartments(): Promise<Department[]> {
    const { data, error } = await supabase.from('departments').select('*');
    if (error || !data) return [];
    return data;
  }

  async getDesignations(): Promise<Designation[]> {
    const { data, error } = await supabase.from('designations').select('*');
    if (error || !data) return [];
    return data;
  }

  // --- ATTENDANCE ---
  async getTodayAttendance(employeeId: string): Promise<AttendanceRecord | undefined> {
    const todayStr = new Date().toISOString().split('T')[0];
    const { data, error } = await supabase
      .from('attendance')
      .select('*, events:attendance_events(*)')
      .eq('employee_id', employeeId)
      .eq('date', todayStr)
      .maybeSingle();

    if (error || !data) return undefined;
    return data as AttendanceRecord;
  }

  async getAttendanceHistory(employeeId?: string): Promise<AttendanceRecord[]> {
    let query = supabase.from('attendance').select('*, events:attendance_events(*)').order('date', { ascending: false });
    if (employeeId) {
      query = query.eq('employee_id', employeeId);
    }
    const { data, error } = await query;
    if (error || !data) return [];
    return data as AttendanceRecord[];
  }

  async checkIn(employeeId: string, notes?: string): Promise<AttendanceRecord> {
    const todayStr = new Date().toISOString().split('T')[0];
    const nowIso = new Date().toISOString();

    // Check existing
    const existing = await this.getTodayAttendance(employeeId);
    if (existing && existing.check_in && !existing.check_out) {
      throw new Error('Active check-in already recorded for today.');
    }

    let recordId = existing?.id;
    if (!recordId) {
      const { data: newRecord, error } = await supabase
        .from('attendance')
        .insert({
          employee_id: employeeId,
          date: todayStr,
          status: 'present',
          check_in: nowIso,
          notes,
        })
        .select()
        .single();
      if (error) throw new Error(error.message);
      recordId = newRecord.id;
    } else {
      const { error } = await supabase
        .from('attendance')
        .update({ check_in: nowIso, notes })
        .eq('id', recordId);
      if (error) throw new Error(error.message);
    }

    // Insert timeline event
    await supabase.from('attendance_events').insert({
      attendance_id: recordId,
      event_type: 'CHECK_IN',
      timestamp: nowIso,
      device_info: 'Web Workday Interface',
    });

    return (await this.getTodayAttendance(employeeId))!;
  }

  async checkOut(employeeId: string): Promise<AttendanceRecord> {
    const existing = await this.getTodayAttendance(employeeId);
    if (!existing || !existing.check_in) throw new Error('Cannot check out without an active check-in.');
    if (existing.check_out) throw new Error('Check-out already completed for today.');

    const nowIso = new Date().toISOString();
    const startMs = new Date(existing.check_in).getTime();
    const endMs = new Date(nowIso).getTime();
    const totalMinutes = Math.max(0, Math.floor((endMs - startMs) / 60000) - (existing.break_minutes || 0));

    const { error } = await supabase
      .from('attendance')
      .update({ check_out: nowIso, total_minutes: totalMinutes })
      .eq('id', existing.id);
    if (error) throw new Error(error.message);

    await supabase.from('attendance_events').insert({
      attendance_id: existing.id,
      event_type: 'CHECK_OUT',
      timestamp: nowIso,
      device_info: 'Web Workday Interface',
    });

    return (await this.getTodayAttendance(employeeId))!;
  }

  // --- TIME OFF & LEAVE ---
  async getLeaveBalances(employeeId: string): Promise<LeaveBalance[]> {
    const { data, error } = await supabase
      .from('leave_balances')
      .select('*, leave_type:leave_types(*)')
      .eq('employee_id', employeeId);
    if (error || !data) return [];
    return data as LeaveBalance[];
  }

  async getLeaveRequests(employeeId?: string): Promise<LeaveRequest[]> {
    let query = supabase
      .from('leave_requests')
      .select('*, employee:employees(*, profile:profiles(*)), leave_type:leave_types(*)')
      .order('created_at', { ascending: false });

    if (employeeId) {
      query = query.eq('employee_id', employeeId);
    }
    const { data, error } = await query;
    if (error || !data) return [];
    return data as LeaveRequest[];
  }

  async submitLeaveRequest(params: {
    employee_id: string;
    leave_type_id: string;
    start_date: string;
    end_date: string;
    reason: string;
  }): Promise<LeaveRequest> {
    const start = new Date(params.start_date);
    const end = new Date(params.end_date);
    const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;

    const { data, error } = await supabase
      .from('leave_requests')
      .insert({
        employee_id: params.employee_id,
        leave_type_id: params.leave_type_id,
        start_date: params.start_date,
        end_date: params.end_date,
        total_days: days,
        reason: params.reason,
        status: 'pending',
      })
      .select('*, employee:employees(*, profile:profiles(*)), leave_type:leave_types(*)')
      .single();

    if (error) throw new Error(error.message);
    return data as LeaveRequest;
  }

  async processLeaveDecision(requestId: string, status: 'approved' | 'rejected', reviewerId: string, reason?: string): Promise<LeaveRequest> {
    const { data, error } = await supabase
      .from('leave_requests')
      .update({
        status,
        reviewed_by: reviewerId,
        reviewed_at: new Date().toISOString(),
        rejection_reason: reason,
      })
      .eq('id', requestId)
      .select('*, employee:employees(*, profile:profiles(*)), leave_type:leave_types(*)')
      .single();

    if (error) throw new Error(error.message);

    // If approved, update balance
    if (status === 'approved') {
      const req = data as LeaveRequest;
      const balances = await this.getLeaveBalances(req.employee_id);
      const bal = balances.find((b) => b.leave_type_id === req.leave_type_id);
      if (bal) {
        await supabase
          .from('leave_balances')
          .update({
            used: bal.used + req.total_days,
            pending: Math.max(0, bal.pending - req.total_days),
          })
          .eq('id', bal.id);
      }
    }

    return data as LeaveRequest;
  }

  // --- PAYROLL ---
  async getPayrollRecords(employeeId?: string): Promise<PayrollRecord[]> {
    let query = supabase
      .from('payroll')
      .select('*, employee:employees(*, profile:profiles(*))')
      .order('pay_period_year', { ascending: false });

    if (employeeId) {
      query = query.eq('employee_id', employeeId);
    }
    const { data, error } = await query;
    if (error || !data) return [];
    return data as PayrollRecord[];
  }

  // --- NOTIFICATIONS & AUDIT ---
  async getNotifications(userId: string): Promise<NotificationItem[]> {
    const { data, error } = await supabase
      .from('notifications')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
    if (error || !data) return [];
    return data as NotificationItem[];
  }

  async getAuditLogs(): Promise<AuditLog[]> {
    const { data, error } = await supabase
      .from('audit_logs')
      .select('*')
      .order('timestamp', { ascending: false });
    if (error || !data) return [];
    return data as AuditLog[];
  }

  async getSignals(): Promise<WorkforceSignal[]> {
    const { data, error } = await supabase.from('signals').select('*');
    if (error || !data) return [];
    return data as WorkforceSignal[];
  }
}

export const supabaseService = new SupabaseService();
