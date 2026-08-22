import { describe, it, expect, beforeEach } from 'vitest';
import { mockEngine } from '../src/mock/mockEngine';

describe('DAYFLOW HRMS Master Test Suite & Adversarial QA', () => {
  beforeEach(() => {
    mockEngine.setCurrentUser('f1000000-0000-0000-0000-000000000001'); // Ananya (Employee)
  });

  it('REQ-06 & REQ-05: Auth & Role Authorization', () => {
    const user = mockEngine.getCurrentUser();
    expect(user.email).toBe('employee@dayflow.hr');
    expect(user.role).toBe('employee');

    // Switch to HR role
    const hrUser = mockEngine.setCurrentUser('f1000000-0000-0000-0000-000000000002');
    expect(hrUser.role).toBe('hr');
    expect(hrUser.email).toBe('hr@dayflow.hr');
  });

  it('REQ-09 & REQ-10 & REQ-11: Attendance Check-In, Break, & Check-Out Workflow', () => {
    mockEngine.setCurrentUser('f1000000-0000-0000-0000-000000000004'); // Priya Nair
    const emp = mockEngine.getCurrentEmployee()!;

    // Check In if not active
    const att = mockEngine.getTodayAttendance(emp.id);
    if (!att) {
      const record = mockEngine.checkIn(emp.id, 'Morning check-in');
      expect(record.status).toBe('present');
    }

    // Start Break
    const activeAtt = mockEngine.getTodayAttendance(emp.id)!;
    if (activeAtt.check_in && !activeAtt.check_out) {
      const lastEvent = activeAtt.events?.[activeAtt.events.length - 1];
      if (lastEvent?.event_type !== 'BREAK_START') {
        const breakRecord = mockEngine.startBreak(emp.id);
        const breakEvent = breakRecord.events?.[breakRecord.events.length - 1];
        expect(breakEvent?.event_type).toBe('BREAK_START');

        // End Break
        const endBreakRecord = mockEngine.endBreak(emp.id);
        const endEvent = endBreakRecord.events?.[endBreakRecord.events.length - 1];
        expect(endEvent?.event_type).toBe('BREAK_END');
      }
    }
  });

  it('REQ-13 & REQ-14: Leave Submission & Team Availability Calculation', () => {
    mockEngine.setCurrentUser('f1000000-0000-0000-0000-000000000001');
    const emp = mockEngine.getCurrentEmployee()!;

    // Team availability lookup
    const avail = mockEngine.getTeamAvailability(emp.department_id);
    expect(avail.total).toBeGreaterThan(0);
    expect(avail.available).toBeLessThanOrEqual(avail.total);

    // Submit leave request for 2 days
    const req = mockEngine.submitLeaveRequest({
      employee_id: emp.id,
      leave_type_id: 'c1000000-0000-0000-0000-000000000001',
      start_date: '2026-10-10',
      end_date: '2026-10-11',
      reason: 'Automated leave request test',
    });

    expect(req.status).toBe('pending');
    expect(req.total_days).toBe(2);
  });

  it('REQ-15 & REQ-38: HR Decision Approval & Cascading State Updates', () => {
    // Employee submits
    mockEngine.setCurrentUser('f1000000-0000-0000-0000-000000000001');
    const emp = mockEngine.getCurrentEmployee()!;
    const newReq = mockEngine.submitLeaveRequest({
      employee_id: emp.id,
      leave_type_id: 'c1000000-0000-0000-0000-000000000002',
      start_date: '2026-11-15',
      end_date: '2026-11-15',
      reason: 'Automated test sick leave',
    });

    const initialUsed = mockEngine.getLeaveBalances(emp.id).find((b) => b.leave_type_id === 'c1000000-0000-0000-0000-000000000002')!.used;

    // HR Approves
    mockEngine.setCurrentUser('f1000000-0000-0000-0000-000000000002');
    const approvedReq = mockEngine.processLeaveDecision(newReq.id, 'approved');
    expect(approvedReq.status).toBe('approved');

    // Cascading verification
    const updatedUsed = mockEngine.getLeaveBalances(emp.id).find((b) => b.leave_type_id === 'c1000000-0000-0000-0000-000000000002')!.used;
    expect(updatedUsed).toBe(initialUsed + 1);

    // Audit log check
    const logs = mockEngine.getAuditLogs();
    expect(logs.some((l) => l.target_id === newReq.id)).toBe(true);
  });

  it('REQ-16 & REQ-05: Payroll Data Isolation Security Policy', () => {
    // Employee role isolation
    mockEngine.setCurrentUser('f1000000-0000-0000-0000-000000000001');
    const empPayroll = mockEngine.getPayrollRecords();
    expect(empPayroll.every((p) => p.employee_id === 'e1000000-0000-0000-0000-000000000001')).toBe(true);

    // HR role full company view
    mockEngine.setCurrentUser('f1000000-0000-0000-0000-000000000002');
    const hrPayroll = mockEngine.getPayrollRecords();
    expect(hrPayroll.length).toBeGreaterThan(1);
  });

  // --- INTELLIGENCE ENGINE TESTS ---
  it('REQ-INT-01: Rule A - Late Check-in Pattern Detection', () => {
    mockEngine.setCurrentUser('f1000000-0000-0000-0000-000000000001'); // Ananya
    const emp = mockEngine.getCurrentEmployee()!;
    
    // Create 3 late check-ins by directly adding to attendance in mockEngine
    // Since mockEngine.checkIn uses current time, we'll manually push late records
    const attendanceRecords = mockEngine.getAllAttendance();
    const mockLateDate = '2026-08-25';
    for (let i = 0; i < 3; i++) {
      attendanceRecords.push({
        id: `att_late_${i}`,
        employee_id: emp.id,
        date: `2026-08-${25 + i}`,
        status: 'late',
        total_minutes: 400,
        break_minutes: 0,
        overtime_minutes: 0,
      });
    }

    const signals = mockEngine.getSignals();
    const lateSignal = signals.find(s => s.signal_type === 'LATE_CHECKIN_PATTERN' && s.employee_id === emp.id);
    expect(lateSignal).toBeDefined();
    expect(['medium', 'high']).toContain(lateSignal?.severity);
    expect(lateSignal?.metadata?.late_count).toBeGreaterThanOrEqual(3);
  });

  it('REQ-INT-02: Rule B - Leave Concentration Risk', () => {
    // HR User
    mockEngine.setCurrentUser('f1000000-0000-0000-0000-000000000002');
    
    // The mock data already seeds 4 overlapping leaves for ENG dept on 2026-09-10
    // We can just assert that the engine detects this.
    const signals = mockEngine.getSignals();
    const overlapSignal = signals.find(s => s.signal_type === 'LEAVE_CONCENTRATION' && s.department_id === 'd1000000-0000-0000-0000-000000000001' && (s.metadata?.date === '2026-09-10' || s.metadata?.date === '2026-09-11'));
    
    expect(overlapSignal).toBeDefined();
    expect(['medium', 'high']).toContain(overlapSignal?.severity);
    expect(overlapSignal?.metadata?.overlap_percentage).toBeGreaterThanOrEqual(40);
  });

  // --- ADVERSARIAL QA TESTS ---
  it('ADVERSARIAL: Rejects duplicate check-in while active', () => {
    mockEngine.setCurrentUser('f1000000-0000-0000-0000-000000000001');
    const emp = mockEngine.getCurrentEmployee()!;
    
    // Ensure active check-in exists
    const att = mockEngine.getTodayAttendance(emp.id);
    if (!att) {
      mockEngine.checkIn(emp.id, 'Initial check-in');
    }

    // Duplicate check-in should throw error
    expect(() => mockEngine.checkIn(emp.id, 'Duplicate attempt')).toThrowError('Active check-in already recorded');
  });

  it('ADVERSARIAL: Rejects leave request with end_date before start_date', () => {
    mockEngine.setCurrentUser('f1000000-0000-0000-0000-000000000001');
    const emp = mockEngine.getCurrentEmployee()!;

    expect(() =>
      mockEngine.submitLeaveRequest({
        employee_id: emp.id,
        leave_type_id: 'c1000000-0000-0000-0000-000000000001',
        start_date: '2026-10-15',
        end_date: '2026-10-10', // Prior to start_date!
        reason: 'Invalid date request',
      })
    ).toThrowError('End date cannot be prior to start date.');
  });

  it('ADVERSARIAL: Rejects leave request exceeding available balance', () => {
    mockEngine.setCurrentUser('f1000000-0000-0000-0000-000000000001');
    const emp = mockEngine.getCurrentEmployee()!;

    expect(() =>
      mockEngine.submitLeaveRequest({
        employee_id: emp.id,
        leave_type_id: 'c1000000-0000-0000-0000-000000000001',
        start_date: '2026-12-01',
        end_date: '2026-12-31', // 31 days exceeds 12 days total balance!
        reason: 'Exceeding balance request',
      })
    ).toThrowError('Insufficient leave balance.');
  });

  it('ADVERSARIAL: Prevents unauthorized employee from processing HR decisions', () => {
    // Set employee user
    mockEngine.setCurrentUser('f1000000-0000-0000-0000-000000000001');

    expect(() =>
      mockEngine.processLeaveDecision('a1000000-0000-0000-0000-000000000001', 'approved')
    ).toThrowError('Unauthorized. HR or Admin role required.');
  });
});
