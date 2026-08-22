import React, { useState, useEffect } from 'react';
import { Calendar, Plus, Clock, AlertTriangle, CheckCircle2, XCircle, Users, Info } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { mockEngine } from '../../mock/mockEngine';
import { LeaveBalance, LeaveRequest, LeaveType } from '../../types';

export const TimeOff: React.FC = () => {
  const { employee, isHR } = useAuth();
  const [leaveBalances, setLeaveBalances] = useState<LeaveBalance[]>([]);
  const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

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
    if (employee) {
      setLeaveBalances(mockEngine.getLeaveBalances(employee.id));
      setLeaveRequests(mockEngine.getLeaveRequests(employee.id));
    } else if (isHR) {
      setLeaveRequests(mockEngine.getLeaveRequests());
    }
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
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Time Off & Leave Management</h1>
          <p className="text-sm text-slate-500 mt-1">
            Track annual leave balances, submit vacation requests, and review approvals.
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center space-x-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl shadow-md shadow-blue-600/20 transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Request Time Off</span>
        </button>
      </div>

      {/* Leave Balances Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {leaveBalances.map((bal) => {
          const available = bal.total_allocated - bal.used - bal.pending;
          return (
            <div key={bal.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {bal.leave_type?.name}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded font-mono bg-slate-100 text-slate-600 font-semibold">
                  {bal.year}
                </span>
              </div>

              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-extrabold text-slate-900">{available}</span>
                <span className="text-xs text-slate-400 font-medium">/ {bal.total_allocated} Days Remaining</span>
              </div>

              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-blue-600 h-full transition-all duration-300"
                  style={{ width: `${(available / bal.total_allocated) * 100}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium pt-1">
                <span>Used: {bal.used}d</span>
                <span>Pending: {bal.pending}d</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Leave Requests Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-bold text-slate-900 text-base">Leave Request History</h3>
          <span className="text-xs text-slate-400 font-mono">{leaveRequests.length} Requests</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-semibold border-b border-slate-100">
              <tr>
                {isHR && <th className="px-6 py-3">Employee</th>}
                <th className="px-6 py-3">Leave Type</th>
                <th className="px-6 py-3">Date Range</th>
                <th className="px-6 py-3">Days</th>
                <th className="px-6 py-3">Reason</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Submitted</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {leaveRequests.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-8 text-center text-slate-400">
                    No leave requests found.
                  </td>
                </tr>
              ) : (
                leaveRequests.map((req) => (
                  <tr key={req.id} className="hover:bg-slate-50/80 transition-colors">
                    {isHR && (
                      <td className="px-6 py-3.5 font-semibold text-slate-900">
                        {req.employee?.profile?.full_name}
                      </td>
                    )}
                    <td className="px-6 py-3.5 font-medium text-slate-800">{req.leave_type?.name}</td>
                    <td className="px-6 py-3.5 font-mono">
                      {req.start_date} to {req.end_date}
                    </td>
                    <td className="px-6 py-3.5 font-bold">{req.total_days}d</td>
                    <td className="px-6 py-3.5 text-slate-600 max-w-xs truncate">{req.reason}</td>
                    <td className="px-6 py-3.5">
                      <span
                        className={`px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide border ${
                          req.status === 'approved'
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : req.status === 'rejected'
                            ? 'bg-rose-50 text-rose-700 border-rose-200'
                            : 'bg-amber-50 text-amber-700 border-amber-200 animate-pulse'
                        }`}
                      >
                        {req.status}
                      </span>
                    </td>
                    <td className="px-6 py-3.5 text-slate-400 font-mono">
                      {new Date(req.created_at).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Leave Request Submission Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4 animate-in fade-in duration-150">
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-bold text-slate-900 text-lg">Request Time Off</h3>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600 font-bold">
                ✕
              </button>
            </div>

            {/* Contextual Team Availability Warning (Requirement 14) */}
            <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-xl flex items-start space-x-3 text-xs text-blue-900">
              <Users className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Team Availability Context: </span>
                <span>
                  {availability.available} of {availability.total} teammates available in {employee?.department?.name}.
                </span>
              </div>
            </div>

            {errorMsg && (
              <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-xs font-semibold">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Leave Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {leaveTypes.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.name} ({t.code})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Start Date</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">End Date</label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Reason for Leave</label>
                <textarea
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  rows={3}
                  placeholder="Explain why leave is required..."
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="flex items-center justify-end space-x-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-sm"
                >
                  Submit Leave Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
