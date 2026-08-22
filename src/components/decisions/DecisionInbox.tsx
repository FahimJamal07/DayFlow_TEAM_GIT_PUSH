import React, { useState, useEffect } from 'react';
import { Inbox, CheckCircle2, XCircle, Sparkles, AlertCircle, ArrowRight, User, Calendar, MessageSquare, Shield } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { mockEngine } from '../../mock/mockEngine';
import { LeaveRequest } from '../../types';

export const DecisionInbox: React.FC = () => {
  const { isHR } = useAuth();
  const [requests, setRequests] = useState<LeaveRequest[]>([]);
  const [focusMode, setFocusMode] = useState<boolean>(false);
  const [focusIndex, setFocusIndex] = useState<number>(0);
  const [rejectionReason, setRejectionReason] = useState<string>('');
  const [showRejectModal, setShowRejectModal] = useState<string | null>(null);

  useEffect(() => {
    refreshRequests();
  }, []);

  const refreshRequests = () => {
    const all = mockEngine.getLeaveRequests();
    setRequests(all.filter((r) => r.status === 'pending'));
  };

  const handleApprove = (id: string) => {
    try {
      mockEngine.processLeaveDecision(id, 'approved');
      refreshRequests();
      if (focusMode && focusIndex >= requests.length - 1) {
        setFocusIndex(Math.max(0, requests.length - 2));
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
      mockEngine.processLeaveDecision(id, 'rejected', rejectionReason);
      setShowRejectModal(null);
      setRejectionReason('');
      refreshRequests();
    } catch (e: any) {
      alert(e.message);
    }
  };

  if (!isHR) {
    return (
      <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center space-y-3">
        <Shield className="w-10 h-10 text-rose-500 mx-auto" />
        <h2 className="text-lg font-bold text-slate-900">HR Decision Access Required</h2>
        <p className="text-sm text-slate-500 max-w-md mx-auto">
          The Decision Inbox is restricted to authorized HR Managers and System Administrators. Please switch roles to HR using the top bar switcher to review pending approvals.
        </p>
      </div>
    );
  }

  const currentFocusRequest = requests[focusIndex];

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold text-amber-600 uppercase tracking-wider mb-1">
            <span>HR Control Queue</span>
            <span>•</span>
            <span>{requests.length} Pending Actions</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Decision Inbox</h1>
          <p className="text-sm text-slate-500 mt-1">
            Review and execute atomic decision approvals for leave requests and workforce exceptions.
          </p>
        </div>

        {requests.length > 0 && (
          <button
            onClick={() => {
              setFocusMode(true);
              setFocusIndex(0);
            }}
            className="flex items-center space-x-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-xl shadow-md transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Enter Focus Mode ({requests.length})</span>
          </button>
        )}
      </div>

      {/* Main Queue View */}
      <div className="space-y-4">
        {requests.length === 0 ? (
          <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center space-y-3">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Your decision inbox is clear!</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              All pending leave requests and workforce corrections have been processed.
            </p>
          </div>
        ) : (
          requests.map((req) => (
            <div
              key={req.id}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs hover:border-slate-300 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              {/* Left Details */}
              <div className="flex items-start space-x-4">
                <img
                  src={req.employee?.profile?.avatar_url}
                  alt={req.employee?.profile?.full_name}
                  className="w-12 h-12 rounded-full object-cover border border-slate-200"
                />
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-slate-900 text-base">{req.employee?.profile?.full_name}</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-100 font-mono text-slate-600">
                      {req.employee?.employee_code}
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                      {req.leave_type?.name}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600">
                    <span className="font-semibold text-slate-900">Requested: </span>
                    {req.start_date} to {req.end_date} ({req.total_days} days)
                  </p>

                  <p className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-100 mt-2 max-w-xl">
                    "{req.reason}"
                  </p>
                </div>
              </div>

              {/* Right Action Buttons */}
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
          ))
        )}
      </div>

      {/* Focus Mode Overlay (Requirement 24) */}
      {focusMode && currentFocusRequest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 p-8 space-y-6 relative">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <h3 className="font-bold text-slate-900 text-lg">Focus Mode Decision Review</h3>
              </div>
              <span className="text-xs font-mono bg-amber-50 text-amber-800 px-2.5 py-1 rounded-full font-bold">
                Item {focusIndex + 1} of {requests.length}
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
                  <span className="font-semibold text-slate-600">Dates:</span>
                  <span className="font-bold text-slate-900">
                    {currentFocusRequest.start_date} to {currentFocusRequest.end_date} ({currentFocusRequest.total_days} Days)
                  </span>
                </div>
                <div className="pt-2 border-t border-slate-200">
                  <span className="font-semibold text-slate-600 block mb-1">Stated Reason:</span>
                  <p className="text-slate-800 italic">"{currentFocusRequest.reason}"</p>
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
                  className="px-4 py-2 bg-rose-50 text-rose-700 font-semibold text-xs rounded-xl border border-rose-200"
                >
                  Reject
                </button>
                <button
                  onClick={() => handleApprove(currentFocusRequest.id)}
                  className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl shadow-md"
                >
                  Approve Request
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
