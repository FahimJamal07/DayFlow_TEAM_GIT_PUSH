import React, { useState, useEffect } from 'react';
import { Calendar, Plus, Clock, AlertTriangle, CheckCircle2, XCircle, Users, Info } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { mockEngine } from '../../mock/mockEngine';
import { LeaveBalance, LeaveRequest, LeaveType } from '../../types';
import { PageHeader } from '../ui/PageHeader';
import { Panel } from '../ui/Panel';
import { StatusBadge } from '../ui/StatusBadge';
import { DataTable } from '../ui/DataTable';
import { Button } from '../ui/Button';
import { StatBlock } from '../ui/StatBlock';
import { CardSkeleton } from '../ui/Skeleton';

export const TimeOff: React.FC = () => {
  const { employee, isHR } = useAuth();
  const [leaveBalances, setLeaveBalances] = useState<LeaveBalance[]>([]);
  const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Form states
  const [selectedType, setSelectedType] = useState<string>('c1000000-0000-0000-0000-000000000001');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [reason, setReason] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');

  useEffect(() => {
    refreshData();
  }, [employee, isHR]);

  const refreshData = () => {
    setIsLoading(true);
    if (employee) {
      setLeaveBalances(mockEngine.getLeaveBalances(employee.id));
      setLeaveRequests(mockEngine.getLeaveRequests(employee.id));
    } else if (isHR) {
      setLeaveRequests(mockEngine.getLeaveRequests());
    }
    setTimeout(() => setIsLoading(false), 300);
  };

  const leaveTypes: LeaveType[] = [
    { id: 'c1000000-0000-0000-0000-000000000001', name: 'Casual Leave', code: 'CASUAL', max_days_per_year: 12, requires_approval: true, is_paid: true },
    { id: 'c1000000-0000-0000-0000-000000000002', name: 'Sick Leave', code: 'SICK', max_days_per_year: 10, requires_approval: true, is_paid: true },
    { id: 'c1000000-0000-0000-0000-000000000003', name: 'Earned Privilege Leave', code: 'EARNED', max_days_per_year: 15, requires_approval: true, is_paid: true },
  ];

  // Calculate team availability
  const availability = employee?.department_id
    ? mockEngine.getTeamAvailability(employee.department_id)
    : { total: 5, available: 4 };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    if (!employee) return;
    if (!startDate || !endDate || !reason.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    try {
      mockEngine.submitLeaveRequest({
        employee_id: employee.id,
        leave_type_id: selectedType,
        start_date: startDate,
        end_date: endDate,
        reason,
      });

      setShowModal(false);
      setStartDate('');
      setEndDate('');
      setReason('');
      refreshData();
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to submit leave request');
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <PageHeader
        title={isHR ? "Time Off Management" : "Time Off & Leave"}
        description={isHR ? "Company-wide leave activity and history" : "Track leave balances, submit requests, and review approvals."}
        actions={
          !isHR ? (
            <Button variant="primary" size="lg" onClick={() => setShowModal(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Request Time Off
            </Button>
          ) : undefined
        }
      />

      {/* Leave Balances Cards */}
      {!isHR && (
        isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
        ) : (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {leaveBalances.map((bal) => {
          const available = bal.total_allocated - bal.used - bal.pending;
          return (
            <Panel key={bal.id} padding="lg">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="df-label">{bal.leave_type?.name}</span>
                  <span
                    className="df-mono text-[10px] px-2 py-0.5 font-semibold"
                    style={{
                      background: 'var(--df-bg)',
                      borderRadius: 'var(--df-radius)',
                      color: 'var(--df-text-secondary)',
                    }}
                  >
                    {bal.year}
                  </span>
                </div>

                <div className="flex items-baseline space-x-2">
                  <span className="df-display" style={{ fontSize: '2.5rem' }}>{available}</span>
                  <span className="text-sm font-medium" style={{ color: 'var(--df-text-muted)' }}>/ {bal.total_allocated} Days</span>
                </div>

                <div
                  className="w-full h-1.5 overflow-hidden"
                  style={{ background: 'var(--df-bg)', borderRadius: 'var(--df-radius-full)' }}
                >
                  <div
                    className="h-full transition-all duration-300"
                    style={{
                      width: `${(available / bal.total_allocated) * 100}%`,
                      background: 'var(--df-accent)',
                      borderRadius: 'var(--df-radius-full)',
                    }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs font-medium pt-1" style={{ color: 'var(--df-text-muted)' }}>
                  <span>Used: {bal.used}d</span>
                  <span>Pending: {bal.pending}d</span>
                </div>
              </div>
            </Panel>
          );
        })}
      </div>
        )
      )}

      {/* Leave Requests Table */}
      {isLoading ? (
        <div className="space-y-4">
          <CardSkeleton />
          <CardSkeleton />
        </div>
      ) : (
      <DataTable
        title="Leave Request History"
        count={`${leaveRequests.length} Requests`}
        headers={[...(isHR ? ['Employee'] : []), 'Leave Type', 'Date Range', 'Days', 'Reason', 'Status', 'Submitted']}
        isEmpty={leaveRequests.length === 0}
        emptyMessage="No leave requests found."
        colSpan={7}
      >
        {leaveRequests.map((req) => (
          <tr
            key={req.id}
            className="transition-colors"
            style={{ borderBottom: '1px solid var(--df-border)' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--df-bg)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
          >
            {isHR && (
              <td className="px-5 py-3 font-semibold" style={{ color: 'var(--df-text-primary)' }}>
                {req.employee?.profile?.full_name}
              </td>
            )}
            <td className="px-5 py-3 font-medium" style={{ color: 'var(--df-text-primary)' }}>{req.leave_type?.name}</td>
            <td className="px-5 py-3 df-mono text-[11px]">{req.start_date} to {req.end_date}</td>
            <td className="px-5 py-3 font-bold">{req.total_days}d</td>
            <td className="px-5 py-3 max-w-xs truncate text-xs" style={{ color: 'var(--df-text-secondary)' }}>{req.reason}</td>
            <td className="px-5 py-3">
              <StatusBadge
                status={req.status === 'approved' ? 'approved' : req.status === 'rejected' ? 'rejected' : 'pending'}
                pulse={req.status === 'pending'}
              >
                {req.status}
              </StatusBadge>
            </td>
            <td className="px-5 py-3 df-mono text-[11px]" style={{ color: 'var(--df-text-muted)' }}>
              {new Date(req.created_at).toLocaleDateString()}
            </td>
          </tr>
        ))}
      </DataTable>
      )}

      {/* Leave Request Submission Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-4 animate-in fade-in duration-150"
          style={{ background: 'rgba(0, 0, 0, 0.6)' }}
        >
          <div
            className="w-full max-w-lg p-6 space-y-5 relative"
            style={{
              background: 'var(--df-surface)',
              borderRadius: 'var(--df-radius)',
              border: '1px solid var(--df-border)',
              boxShadow: 'var(--df-shadow-overlay)',
            }}
          >
            <div className="flex items-center justify-between pb-4" style={{ borderBottom: '1px solid var(--df-border)' }}>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" style={{ color: 'var(--df-accent)' }} />
                <h3 className="df-heading">Request Time Off</h3>
              </div>
              <button onClick={() => setShowModal(false)} style={{ color: 'var(--df-text-muted)' }} className="font-bold hover:opacity-80 transition-opacity">
                ✕
              </button>
            </div>

            {/* Team Availability Context */}
            <div
              className="p-3.5 flex items-start space-x-3 text-xs"
              style={{
                background: 'var(--df-status-info-subtle)',
                borderRadius: 'var(--df-radius)',
                border: '1px solid var(--df-status-info)',
                color: 'var(--df-status-info-text)',
              }}
            >
              <Users className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--df-status-info)' }} />
              <div>
                <span className="font-bold">Team Availability Context: </span>
                <span>
                  {availability.available} out of {availability.total} teammates are available in {employee?.department?.name}.
                </span>
              </div>
            </div>

            {errorMsg && (
              <div
                className="p-3 text-xs font-semibold flex items-center space-x-2"
                style={{
                  background: 'var(--df-status-absent-subtle)',
                  border: '1px solid var(--df-status-absent)',
                  borderRadius: 'var(--df-radius)',
                  color: 'var(--df-status-absent-text)',
                }}
              >
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 pt-1">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--df-text-primary)' }}>Start Date</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full p-2.5 text-sm font-medium focus:outline-none"
                    style={{
                      background: 'var(--df-bg)',
                      border: '1px solid var(--df-border)',
                      borderRadius: 'var(--df-radius)',
                      color: 'var(--df-text-primary)',
                    }}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--df-text-primary)' }}>End Date</label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full p-2.5 text-sm font-medium focus:outline-none"
                    style={{
                      background: 'var(--df-bg)',
                      border: '1px solid var(--df-border)',
                      borderRadius: 'var(--df-radius)',
                      color: 'var(--df-text-primary)',
                    }}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--df-text-primary)' }}>Leave Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full p-2.5 text-sm font-medium focus:outline-none"
                  style={{
                    background: 'var(--df-bg)',
                    border: '1px solid var(--df-border)',
                    borderRadius: 'var(--df-radius)',
                    color: 'var(--df-text-primary)',
                  }}
                >
                  {leaveTypes.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.name} ({t.code})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--df-text-primary)' }}>Reason</label>
                <textarea
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  rows={3}
                  placeholder="Explain why leave is required..."
                  className="w-full p-2.5 text-sm focus:outline-none"
                  style={{
                    background: 'var(--df-bg)',
                    border: '1px solid var(--df-border)',
                    borderRadius: 'var(--df-radius)',
                    color: 'var(--df-text-primary)',
                  }}
                  required
                />
              </div>

              <div className="flex items-center justify-end space-x-3 pt-4" style={{ borderTop: '1px solid var(--df-border)' }}>
                <Button variant="ghost" type="button" onClick={() => setShowModal(false)}>
                  Cancel
                </Button>
                <Button variant="primary" type="submit">
                  Submit Request
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
