import React, { useState, useEffect } from 'react';
import { Inbox, CheckCircle2, XCircle, Sparkles, AlertCircle, ArrowRight, User, Calendar, MessageSquare, Shield, HelpCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { mockEngine } from '../../mock/mockEngine';
import { LeaveRequest } from '../../types';

export const DecisionInbox: React.FC = () => {
  const { isHR } = useAuth();
  const [pendingRequests, setPendingRequests] = useState<LeaveRequest[]>([]);
  const [historyRequests, setHistoryRequests] = useState<LeaveRequest[]>([]);
  const [activeTab, setActiveTab] = useState<'pending' | 'history'>('pending');
  const [focusMode, setFocusMode] = useState<boolean>(false);
  const [focusIndex, setFocusIndex] = useState<number>(0);
  const [rejectionReason, setRejectionReason] = useState<string>('');
  const [showRejectModal, setShowRejectModal] = useState<string | null>(null);
  const [decisionFeedback, setDecisionFeedback] = useState<string>('');

  useEffect(() => {
    refreshRequests();
  }, []);

  const refreshRequests = () => {
    const all = mockEngine.getLeaveRequests();
    setPendingRequests(all.filter((r) => r.status === 'pending'));
    setHistoryRequests(all.filter((r) => r.status !== 'pending'));
  };

  const handleApprove = (id: string) => {
    try {
      const req = pendingRequests.find((r) => r.id === id);
      mockEngine.processLeaveDecision(id, 'approved');
      triggerFeedback(`Approved leave request for ${req?.employee?.profile?.full_name}. Balance & team availability updated.`);
      refreshRequests();
      if (focusMode && focusIndex >= pendingRequests.length - 1) {
        setFocusIndex(Math.max(0, pendingRequests.length - 2));
      }
    } catch (e: any) {
      alert(e.message);
    }
  };

  const handleReject = (id: string) => {
    if (!rejectionReason.trim()) {
      alert('Please state a reason for rejection.');
      return;
    }
    try {
      const req = pendingRequests.find((r) => r.id === id);
      mockEngine.processLeaveDecision(id, 'rejected', rejectionReason);
      triggerFeedback(`Rejected leave request for ${req?.employee?.profile?.full_name}. Requester notified.`);
      setShowRejectModal(null);
      setRejectionReason('');
      refreshRequests();
    } catch (e: any) {
      alert(e.message);
    }
  };

  const triggerFeedback = (msg: string) => {
    setDecisionFeedback(msg);
    setTimeout(() => setDecisionFeedback(''), 4000);
  };

  // Keyboard shortcut handler for Focus Mode
  useEffect(() => {
    if (!focusMode || pendingRequests.length === 0) return;
    const current = pendingRequests[focusIndex];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === 'a' || e.key === 'A') {
        e.preventDefault();
        if (current) handleApprove(current.id);
      } else if (e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        if (current) setShowRejectModal(current.id);
      } else if (e.key === 'Escape') {
        setFocusMode(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [focusMode, focusIndex, pendingRequests]);

  if (!isHR) {
    return (
      <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center space-y-3">
        <Shield className="w-10 h-10 text-rose-500 mx-auto" />
        <h2 className="text-lg font-bold text-slate-900">HR Decision Access Required</h2>
        <p className="text-sm text-slate-500 max-w-md mx-auto">
          The Decision Inbox is restricted to authorized HR Managers and System Administrators. Please switch roles using the top bar switcher to review pending approvals.
        </p>
      </div>
    );
  }

  const currentFocusRequest = pendingRequests[focusIndex];

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Toast Feedback */}
      {decisionFeedback && (
        <div className="p-4 bg-emerald-600 text-white rounded-xl shadow-lg flex items-center justify-between text-xs font-semibold animate-in slide-in-from-top duration-200">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>{decisionFeedback}</span>
          </div>
          <button onClick={() => setDecisionFeedback('')} className="font-bold hover:opacity-80">
            ✕
          </button>
        </div>
      )}

      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold text-amber-600 uppercase tracking-wider mb-1">
            <span>HR Control Queue</span>
            <span>•</span>
            <span>{pendingRequests.length} Decisions Pending</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Decision Inbox</h1>
          <p className="text-sm text-slate-500 mt-1">
            Review pending leave requests, inspect causality previews, and execute atomic approvals.
          </p>
        </div>

        {pendingRequests.length > 0 && (
          <button
            onClick={() => {
              setFocusMode(true);
              setFocusIndex(0);
            }}
            className="flex items-center space-x-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-xl shadow-md transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Enter Focus Mode ({pendingRequests.length})</span>
          </button>
        )}
      </div>

      {/* Tab Controls */}
      <div className="flex border-b border-slate-200">
        <button
          onClick={() => setActiveTab('pending')}
          className={`pb-3 px-4 text-xs font-bold transition-colors border-b-2 ${
            activeTab === 'pending'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-400 hover:text-slate-600'
          }`}
        >
          Pending Queue ({pendingRequests.length})
        </button>
        <button
          onClick={() => setActiveTab('history')}
          className={`pb-3 px-4 text-xs font-bold transition-colors border-b-2 ${
            activeTab === 'history'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-400 hover:text-slate-600'
          }`}
        >
          Processed History ({historyRequests.length})
        </button>
      </div>

      {/* Pending Queue List */}
      {activeTab === 'pending' && (
        <div className="space-y-4">
          {pendingRequests.length === 0 ? (
            <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Decision Inbox Clear!</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                All pending leave requests and workforce corrections have been processed.
              </p>
            </div>
          ) : (
            pendingRequests.map((req) => {
              const isUrgent = req.total_days >= 3;
              return (
                <div
                  key={req.id}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs hover:border-slate-300 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="flex items-start space-x-4">
                    <img
                      src={req.employee?.profile?.avatar_url}
                      alt={req.employee?.profile?.full_name}
                      className="w-12 h-12 rounded-full object-cover border border-slate-200"
                    />
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-slate-900 text-base">
                          {req.employee?.profile?.full_name}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded bg-slate-100 font-mono text-slate-600">
                          {req.employee?.employee_code}
                        </span>
                        {isUrgent && (
                          <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-300">
                            Urgent ({req.total_days}d)
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-slate-600">
                        <span className="font-semibold text-slate-900">Requested: </span>
                        {req.start_date} to {req.end_date} ({req.total_days} days) • {req.leave_type?.name}
                      </p>

                      <p className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100 mt-2 max-w-xl">
                        "{req.reason}"
                      </p>

                      {/* Causality Impact Preview */}
                      <div className="mt-2 text-[11px] text-blue-700 bg-blue-50/70 p-2 rounded-md border border-blue-100 font-medium">
                        ⚡ <span className="font-bold">Causality Preview:</span> Approving will deduct{' '}
                        {req.total_days} day(s) from {req.employee?.profile?.full_name}'s {req.leave_type?.name} balance, trigger notification, and append an immutable audit log.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 shrink-0">
                    <button
                      onClick={() => setShowRejectModal(req.id)}
                      className="flex items-center space-x-1.5 px-4 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 font-semibold text-xs rounded-xl border border-rose-200 transition-colors cursor-pointer"
                    >
                      <XCircle className="w-4 h-4" />
                      <span>Reject</span>
                    </button>

                    <button
                      onClick={() => handleApprove(req.id)}
                      className="flex items-center space-x-1.5 px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl shadow-sm transition-colors cursor-pointer"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Approve Request</span>
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}

      {/* History Tab */}
      {activeTab === 'history' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-semibold border-b border-slate-100">
              <tr>
                <th className="px-6 py-3">Employee</th>
                <th className="px-6 py-3">Leave Type</th>
                <th className="px-6 py-3">Dates</th>
                <th className="px-6 py-3">Decision</th>
                <th className="px-6 py-3">Reviewed At</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {historyRequests.map((req) => (
                <tr key={req.id}>
                  <td className="px-6 py-3.5 font-semibold text-slate-900">{req.employee?.profile?.full_name}</td>
                  <td className="px-6 py-3.5">{req.leave_type?.name}</td>
                  <td className="px-6 py-3.5 font-mono">{req.start_date} to {req.end_date}</td>
                  <td className="px-6 py-3.5">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase ${
                        req.status === 'approved' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {req.status}
                    </span>
                  </td>
                  <td className="px-6 py-3.5 font-mono text-slate-400">
                    {req.reviewed_at ? new Date(req.reviewed_at).toLocaleString() : 'System'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Focus Mode Overlay with Keyboard Shortcuts */}
      {focusMode && currentFocusRequest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 p-8 space-y-6 relative">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <h3 className="font-bold text-slate-900 text-lg">Focus Mode Decision Review</h3>
              </div>
              <span className="text-xs font-mono bg-amber-50 text-amber-800 px-2.5 py-1 rounded-full font-bold">
                Item {focusIndex + 1} of {pendingRequests.length}
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <img
                  src={currentFocusRequest.employee?.profile?.avatar_url}
                  alt={currentFocusRequest.employee?.profile?.full_name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-slate-200"
                />
                <div>
                  <h4 className="text-xl font-bold text-slate-900">
                    {currentFocusRequest.employee?.profile?.full_name}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {currentFocusRequest.employee?.designation?.title} • {currentFocusRequest.employee?.department?.name}
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-600">Leave Type:</span>
                  <span className="font-bold text-slate-900">{currentFocusRequest.leave_type?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-600">Requested Dates:</span>
                  <span className="font-bold text-slate-900">
                    {currentFocusRequest.start_date} to {currentFocusRequest.end_date} ({currentFocusRequest.total_days} Days)
                  </span>
                </div>
                <div className="pt-2 border-t border-slate-200">
                  <span className="font-semibold text-slate-600 block mb-1">Stated Reason:</span>
                  <p className="text-slate-800 italic">"{currentFocusRequest.reason}"</p>
                </div>
              </div>

              {/* Keyboard Shortcut Guidance */}
              <div className="p-3 bg-slate-100 rounded-xl flex items-center justify-between text-xs text-slate-600">
                <span className="font-semibold">Keyboard Shortcuts Enabled:</span>
                <div className="space-x-2 font-mono text-[11px]">
                  <kbd className="px-2 py-0.5 bg-white border border-slate-300 rounded font-bold text-emerald-700">A</kbd> Approve
                  <kbd className="px-2 py-0.5 bg-white border border-slate-300 rounded font-bold text-rose-700">R</kbd> Reject
                  <kbd className="px-2 py-0.5 bg-white border border-slate-300 rounded font-bold text-slate-700">ESC</kbd> Exit
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                onClick={() => setFocusMode(false)}
                className="text-xs font-semibold text-slate-500 hover:text-slate-700"
              >
                Exit Focus Mode
              </button>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setShowRejectModal(currentFocusRequest.id)}
                  className="px-4 py-2 bg-rose-50 text-rose-700 font-semibold text-xs rounded-xl border border-rose-200 cursor-pointer"
                >
                  Reject [R]
                </button>
                <button
                  onClick={() => handleApprove(currentFocusRequest.id)}
                  className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl shadow-md cursor-pointer"
                >
                  Approve Request [A]
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reject Modal */}
      {showRejectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 space-y-4">
            <h3 className="font-bold text-slate-900 text-base">State Rejection Reason</h3>
            <textarea
              value={rejectionReason}
              onChange={(e) => setRejectionReason(e.target.value)}
              rows={3}
              placeholder="Provide constructive context for why this leave request is rejected..."
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-rose-500"
              autoFocus
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowRejectModal(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600"
              >
                Cancel
              </button>
              <button
                onClick={() => handleReject(showRejectModal)}
                className="px-4 py-2 bg-rose-600 text-white text-xs font-semibold rounded-xl"
              >
                Confirm Rejection
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
