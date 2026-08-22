import { describe, it, expect, beforeEach } from 'vitest';
import { mockEngine } from '../src/mock/mockEngine';

describe('DAYFLOW HRMS Business Logic & Security Engine Tests', () => {
  beforeEach(() => {
    // Reset user role to Ananya (Employee)
    mockEngine.setCurrentUser('p1');
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

  it('REQ-09 & REQ-10 & REQ-11: Attendance Check-In & Check-Out Workflow', () => {
    // Test for Priya Nair (e4) who doesn't have an active check-in for today in test run
    mockEngine.setCurrentUser('p4'); // Priya Nair
    const emp = mockEngine.getCurrentEmployee();
    expect(emp).toBeDefined();

    // Verify existing active check-in is handled or check out existing
    const existing = mockEngine.getTodayAttendance(emp!.id);
    if (!existing) {
      const record = mockEngine.checkIn(emp!.id, 'Testing check-in');
      expect(record.status).toBe('present');
      expect(record.check_in).toBeDefined();
    }

    // Verify checkout functionality
    const activeEmp = mockEngine.getCurrentEmployee()!;
    const att = mockEngine.getTodayAttendance(activeEmp.id);
    if (att && att.check_in && !att.check_out) {
      const completed = mockEngine.checkOut(activeEmp.id);
      expect(completed.check_out).toBeDefined();
    }
  });

  it('REQ-13 & REQ-14: Leave Submission with Balance Check', () => {
    mockEngine.setCurrentUser('p1');
    const emp = mockEngine.getCurrentEmployee()!;

    // Initial balances
    const balances = mockEngine.getLeaveBalances(emp.id);
    const casualBal = balances.find((b) => b.leave_type_id === 'lt1')!;
    const initialPending = casualBal.pending;

    // Submit leave request for 2 days
    const req = mockEngine.submitLeaveRequest({
      employee_id: emp.id,
      leave_type_id: 'lt1',
      start_date: '2026-10-01',
      end_date: '2026-10-02',
      reason: 'Automated test leave request',
    });

    expect(req.status).toBe('pending');
    expect(req.total_days).toBe(2);

    // Verify balance pending updated
    const updatedBalances = mockEngine.getLeaveBalances(emp.id);
    const updatedCasual = updatedBalances.find((b) => b.leave_type_id === 'lt1')!;
    expect(updatedCasual.pending).toBe(initialPending + 2);
  });

  it('REQ-15 & REQ-38: Atomic HR Decision Approval & Cascading State Updates', () => {
    // 1. Employee submits leave
    mockEngine.setCurrentUser('p1');
    const emp = mockEngine.getCurrentEmployee()!;
    const newReq = mockEngine.submitLeaveRequest({
      employee_id: emp.id,
      leave_type_id: 'lt2', // Sick leave
      start_date: '2026-11-05',
      end_date: '2026-11-05',
      reason: 'Dental appointment',
    });

    const initialUsed = mockEngine.getLeaveBalances(emp.id).find((b) => b.leave_type_id === 'lt2')!.used;

    // 2. HR approves leave request
    mockEngine.setCurrentUser('p2'); // Switch to HR
    const approvedReq = mockEngine.processLeaveDecision(newReq.id, 'approved');
    expect(approvedReq.status).toBe('approved');

    // 3. Verify cascading state updates: Used balance increased by 1
    const updatedUsed = mockEngine.getLeaveBalances(emp.id).find((b) => b.leave_type_id === 'lt2')!.used;
    expect(updatedUsed).toBe(initialUsed + 1);

    // 4. Verify audit log entry created
    const logs = mockEngine.getAuditLogs();
    const approvalLog = logs.find((l) => l.action === 'LEAVE_APPROVED' && l.target_id === newReq.id);
    expect(approvalLog).toBeDefined();
  });

  it('REQ-16 & REQ-05: Payroll Data Isolation Security Policy', () => {
    // Employee role: can only view own payroll
    mockEngine.setCurrentUser('p1');
    const empPayroll = mockEngine.getPayrollRecords();
    expect(empPayroll.every((p) => p.employee_id === 'e1')).toBe(true);

    // HR role: can view all company payroll
    mockEngine.setCurrentUser('p2');
    const hrPayroll = mockEngine.getPayrollRecords();
    expect(hrPayroll.length).toBeGreaterThan(1);
  });
});
