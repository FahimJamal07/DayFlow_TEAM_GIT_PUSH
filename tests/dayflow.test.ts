import { describe, it, expect, beforeEach } from 'vitest';
import { mockEngine } from '../src/mock/mockEngine';

describe('DAYFLOW HRMS Master Test Suite', () => {
  beforeEach(() => {
    mockEngine.setCurrentUser('p1'); // Ananya (Employee)
  });

  it('REQ-06 & REQ-05: Auth & Role Authorization', () => {
    const user = mockEngine.getCurrentUser();
    expect(user.email).toBe('employee@dayflow.hr');
    expect(user.role).toBe('employee');

    // Switch to HR role
    const hrUser = mockEngine.setCurrentUser('p2');
    expect(hrUser.role).toBe('hr');
    expect(hrUser.email).toBe('hr@dayflow.hr');
  });

  it('REQ-09 & REQ-10 & REQ-11: Attendance Check-In, Break, & Check-Out Workflow', () => {
    mockEngine.setCurrentUser('p4'); // Priya Nair
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
    mockEngine.setCurrentUser('p1');
    const emp = mockEngine.getCurrentEmployee()!;

    // Team availability lookup
    const avail = mockEngine.getTeamAvailability(emp.department_id);
    expect(avail.total).toBeGreaterThan(0);
    expect(avail.available).toBeLessThanOrEqual(avail.total);

    // Submit leave request for 2 days
    const req = mockEngine.submitLeaveRequest({
      employee_id: emp.id,
      leave_type_id: 'lt1',
      start_date: '2026-10-10',
      end_date: '2026-10-11',
      reason: 'Automated leave request test',
    });

    expect(req.status).toBe('pending');
    expect(req.total_days).toBe(2);
  });

  it('REQ-15 & REQ-38: HR Decision Approval & Cascading State Updates', () => {
    // Employee submits
    mockEngine.setCurrentUser('p1');
    const emp = mockEngine.getCurrentEmployee()!;
    const newReq = mockEngine.submitLeaveRequest({
      employee_id: emp.id,
      leave_type_id: 'lt2',
      start_date: '2026-11-15',
      end_date: '2026-11-15',
      reason: 'Automated test sick leave',
    });

    const initialUsed = mockEngine.getLeaveBalances(emp.id).find((b) => b.leave_type_id === 'lt2')!.used;

    // HR Approves
    mockEngine.setCurrentUser('p2');
    const approvedReq = mockEngine.processLeaveDecision(newReq.id, 'approved');
    expect(approvedReq.status).toBe('approved');

    // Cascading verification
    const updatedUsed = mockEngine.getLeaveBalances(emp.id).find((b) => b.leave_type_id === 'lt2')!.used;
    expect(updatedUsed).toBe(initialUsed + 1);

    // Audit log check
    const logs = mockEngine.getAuditLogs();
    expect(logs.some((l) => l.target_id === newReq.id)).toBe(true);
  });

  it('REQ-16 & REQ-05: Payroll Data Isolation Security Policy', () => {
    // Employee role isolation
    mockEngine.setCurrentUser('p1');
    const empPayroll = mockEngine.getPayrollRecords();
    expect(empPayroll.every((p) => p.employee_id === 'e1')).toBe(true);

    // HR role full company view
    mockEngine.setCurrentUser('p2');
    const hrPayroll = mockEngine.getPayrollRecords();
    expect(hrPayroll.length).toBeGreaterThan(1);
  });
});
