import React, { useState, useEffect } from 'react';
import { Inbox, CheckCircle2, XCircle, Sparkles, AlertTriangle, ArrowRight, User, Calendar, MessageSquare, Shield, HelpCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { mockEngine } from '../../mock/mockEngine';
import { LeaveRequest } from '../../types';
import { Panel } from '../ui/Panel';
import { PageHeader } from '../ui/PageHeader';
import { StatusBadge } from '../ui/StatusBadge';
import { Button } from '../ui/Button';
import { DataTable } from '../ui/DataTable';

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
  const [selectedRequestId, setSelectedRequestId] = useState<string | null>(null);

  useEffect(() => {
    refreshRequests();
  }, []);

  const refreshRequests = () => {
    const all = mockEngine.getLeaveRequests();
    const pending = all.filter((r) => r.status === 'pending');
    setPendingRequests(pending);
    setHistoryRequests(all.filter((r) => r.status !== 'pending'));
    
    // Auto-select first item if nothing is selected or selected item is gone
    if (pending.length > 0) {
      if (!selectedRequestId || !pending.find(r => r.id === selectedRequestId)) {
        setSelectedRequestId(pending[0].id);
      }
    } else {
      setSelectedRequestId(null);
    }
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
      <Panel padding="lg">
        <div className="text-center space-y-3 py-8">
          <Shield className="w-10 h-10 mx-auto" style={{ color: 'var(--df-status-absent)' }} />
          <h2 className="df-heading">HR Decision Access Required</h2>
          <p className="text-sm max-w-md mx-auto" style={{ color: 'var(--df-text-muted)' }}>
            The Decision Inbox is restricted to authorized HR Managers and System Administrators. Please switch roles using the top bar switcher.
          </p>
        </div>
      </Panel>
    );
  }

  const currentFocusRequest = pendingRequests[focusIndex];
  const selectedRequest = pendingRequests.find(r => r.id === selectedRequestId) || pendingRequests[0];

  return (
    <div className="space-y-5 animate-in fade-in duration-200">
      {decisionFeedback && (
        <div
          className="p-3.5 flex items-center justify-between text-xs font-semibold animate-in slide-in-from-top duration-200"
          style={{
            background: 'var(--df-status-present)',
            color: '#ffffff',
            borderRadius: 'var(--df-radius)',
          }}
        >
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>{decisionFeedback}</span>
          </div>
          <button onClick={() => setDecisionFeedback('')} className="font-bold hover:opacity-80">✕</button>
        </div>
      )}

      <PageHeader
        eyebrow={`HR Queue • ${pendingRequests.length} Pending`}
        title="Decision Inbox"
        description="Review pending leave requests, inspect previews, and execute approvals."
        actions={
          pendingRequests.length > 0 ? (
            <Button
              variant="primary"
              size="lg"
              onClick={() => { setFocusMode(true); setFocusIndex(0); }}
            >
              <Sparkles className="w-4 h-4 fill-current mr-2" />
              Focus Mode ({pendingRequests.length})
            </Button>
          ) : undefined
        }
      />

      <div className="flex" style={{ borderBottom: '1px solid var(--df-border)' }}>
        <button
          onClick={() => setActiveTab('pending')}
          className="pb-3 px-4 df-label transition-colors border-b-2"
          style={{
            borderBottomColor: activeTab === 'pending' ? 'var(--df-accent)' : 'transparent',
            color: activeTab === 'pending' ? 'var(--df-accent)' : 'var(--df-text-muted)',
          }}
        >
          Pending ({pendingRequests.length})
        </button>
        <button
          onClick={() => setActiveTab('history')}
          className="pb-3 px-4 df-label transition-colors border-b-2"
          style={{
            borderBottomColor: activeTab === 'history' ? 'var(--df-accent)' : 'transparent',
            color: activeTab === 'history' ? 'var(--df-accent)' : 'var(--df-text-muted)',
          }}
        >
          History ({historyRequests.length})
        </button>
      </div>

      {activeTab === 'pending' && (
        <div className="flex flex-col lg:flex-row gap-5">
          {pendingRequests.length === 0 ? (
            <Panel padding="lg" className="w-full">
              <div className="text-center space-y-4 py-16">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                  style={{ background: 'var(--df-status-present-subtle)', color: 'var(--df-status-present)' }}
                >
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="df-heading" style={{ fontSize: '1.25rem' }}>Inbox Clear!</h3>
                  <p className="text-sm mt-1" style={{ color: 'var(--df-text-muted)' }}>
                    All pending requests have been processed.
                  </p>
                </div>
              </div>
            </Panel>
          ) : (
            <>
              {/* Left Panel - Inbox List (~40%) */}
              <Panel padding="none" className="w-full lg:w-[40%] flex-shrink-0 flex flex-col h-[600px] overflow-hidden">
                <div className="p-4" style={{ borderBottom: '1px solid var(--df-border)' }}>
                  <h3 className="df-label font-bold" style={{ color: 'var(--df-text-primary)' }}>Queue</h3>
                </div>
                <div className="flex-1 overflow-y-auto">
                  {pendingRequests.map((req) => {
                    const isSelected = selectedRequestId === req.id;
                    const isUrgent = req.total_days >= 3;
                    return (
                      <div
                        key={req.id}
                        onClick={() => setSelectedRequestId(req.id)}
                        className="p-4 cursor-pointer transition-colors flex items-start space-x-3"
                        style={{
                          background: isSelected ? 'var(--df-surface)' : 'transparent',
                          borderBottom: '1px solid var(--df-border)',
                          borderLeft: isSelected ? '3px solid var(--df-accent)' : '3px solid transparent'
                        }}
                      >
                        <img
                          src={req.employee?.profile?.avatar_url}
                          alt={req.employee?.profile?.full_name}
                          className="w-10 h-10 rounded-full object-cover shrink-0"
                          style={{ border: '1px solid var(--df-border)' }}
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-sm truncate pr-2" style={{ color: 'var(--df-text-primary)' }}>
                              {req.employee?.profile?.full_name}
                            </span>
                            {isUrgent && <StatusBadge status="warning">Urgent</StatusBadge>}
                          </div>
                          <p className="text-xs truncate mt-0.5" style={{ color: 'var(--df-text-secondary)' }}>
                            {req.leave_type?.name}
                          </p>
                          <p className="df-mono text-[10px] mt-1" style={{ color: 'var(--df-text-muted)' }}>
                            {req.start_date} - {req.end_date}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Panel>

              {/* Right Panel - Detail View (~60%) */}
              {selectedRequest && (
                <Panel padding="none" className="w-full lg:w-[60%] flex flex-col h-[600px] overflow-hidden">
                  <div className="p-6 pb-5" style={{ borderBottom: '1px solid var(--df-border)' }}>
                    <div className="flex items-center space-x-4 mb-6">
                      <img
                        src={selectedRequest.employee?.profile?.avatar_url}
                        alt={selectedRequest.employee?.profile?.full_name}
                        className="w-14 h-14 rounded-full object-cover shrink-0"
                        style={{ border: '1px solid var(--df-border)' }}
                      />
                      <div>
                        <h2 className="df-heading" style={{ fontSize: '1.25rem' }}>{selectedRequest.employee?.profile?.full_name}</h2>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="df-mono text-[11px] px-2 py-0.5 rounded" style={{ background: 'var(--df-surface)', color: 'var(--df-text-secondary)' }}>
                            {selectedRequest.employee?.employee_code}
                          </span>
                          <span className="text-xs" style={{ color: 'var(--df-text-muted)' }}>
                            {selectedRequest.employee?.designation?.title} • {selectedRequest.employee?.department?.name}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-2">
                      <div>
                        <p className="df-label" style={{ color: 'var(--df-text-muted)' }}>Leave Type</p>
                        <p className="text-sm font-semibold mt-1" style={{ color: 'var(--df-text-primary)' }}>{selectedRequest.leave_type?.name}</p>
                      </div>
                      <div>
                        <p className="df-label" style={{ color: 'var(--df-text-muted)' }}>Requested Dates</p>
                        <p className="text-sm font-bold mt-1" style={{ color: 'var(--df-text-primary)' }}>
                          {selectedRequest.start_date} to {selectedRequest.end_date} <span className="text-xs font-normal ml-1" style={{ color: 'var(--df-text-secondary)' }}>({selectedRequest.total_days} days)</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    <div>
                      <h4 className="df-label mb-2" style={{ color: 'var(--df-text-primary)' }}>Reason for Request</h4>
                      <p 
                        className="text-sm p-4 leading-relaxed"
                        style={{ 
                          background: 'var(--df-surface)', 
                          borderRadius: 'var(--df-radius)', 
                          color: 'var(--df-text-secondary)',
                          border: '1px solid var(--df-border)'
                        }}
                      >
                        "{selectedRequest.reason}"
                      </p>
                    </div>

                    <div
                      className="p-4 text-xs font-medium space-y-1"
                      style={{
                        background: 'var(--df-status-info-subtle)',
                        borderRadius: 'var(--df-radius)',
                        border: '1px solid var(--df-status-info)',
                        color: 'var(--df-status-info-text)',
                      }}
                    >
                      <div className="flex items-center space-x-2 mb-2 font-bold">
                        <AlertTriangle className="w-4 h-4" />
                        <span>System Impact Preview</span>
                      </div>
                      <p>• Approving deducts <strong>{selectedRequest.total_days} day(s)</strong> from the {selectedRequest.leave_type?.name} balance.</p>
                      <p>• Requires manager signature for records.</p>
                    </div>
                  </div>

                  <div className="p-4 flex items-center justify-end space-x-3 bg-opacity-50" style={{ background: 'var(--df-surface)', borderTop: '1px solid var(--df-border)' }}>
                     <Button variant="secondary" size="lg" onClick={() => setShowRejectModal(selectedRequest.id)}>
                        <XCircle className="w-4 h-4 mr-2" style={{ color: 'var(--df-status-absent)' }} />
                        Reject Request
                      </Button>
                      <Button variant="primary" size="lg" onClick={() => handleApprove(selectedRequest.id)}>
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        Approve Request
                      </Button>
                  </div>
                </Panel>
              )}
            </>
          )}
        </div>
      )}

      {activeTab === 'history' && (
        <DataTable
          headers={['Employee', 'Leave Type', 'Dates', 'Decision', 'Reviewed At']}
          isEmpty={historyRequests.length === 0}
          emptyMessage="No processed requests."
        >
          {historyRequests.map((req) => (
            <tr key={req.id} style={{ borderBottom: '1px solid var(--df-border)' }}>
              <td className="px-5 py-3 font-semibold" style={{ color: 'var(--df-text-primary)' }}>{req.employee?.profile?.full_name}</td>
              <td className="px-5 py-3 font-medium" style={{ color: 'var(--df-text-primary)' }}>{req.leave_type?.name}</td>
              <td className="px-5 py-3 df-mono text-[11px]">{req.start_date} to {req.end_date}</td>
              <td className="px-5 py-3">
                <StatusBadge status={req.status === 'approved' ? 'approved' : 'rejected'}>
                  {req.status}
                </StatusBadge>
              </td>
              <td className="px-5 py-3 df-mono text-[11px]" style={{ color: 'var(--df-text-muted)' }}>
                {req.reviewed_at ? new Date(req.reviewed_at).toLocaleString() : 'System'}
              </td>
            </tr>
          ))}
        </DataTable>
      )}

      {/* Focus Mode Overlay */}
      {focusMode && currentFocusRequest && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-4 animate-in fade-in duration-200"
          style={{ background: 'rgba(0, 0, 0, 0.6)' }}
        >
          <div
            className="w-full max-w-xl p-8 space-y-6 relative"
            style={{
              background: 'var(--df-surface)',
              borderRadius: 'var(--df-radius)',
              border: '1px solid var(--df-border)',
              boxShadow: 'var(--df-shadow-overlay)',
            }}
          >
            <div className="flex items-center justify-between pb-4" style={{ borderBottom: '1px solid var(--df-border)' }}>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5" style={{ color: 'var(--df-status-pending)' }} />
                <h3 className="df-heading">Focus Mode</h3>
              </div>
              <StatusBadge status="pending">
                {focusIndex + 1} of {pendingRequests.length}
              </StatusBadge>
            </div>

            <div className="space-y-5">
              <div className="flex items-center space-x-4">
                <img
                  src={currentFocusRequest.employee?.profile?.avatar_url}
                  alt={currentFocusRequest.employee?.profile?.full_name}
                  className="w-14 h-14 rounded-full object-cover"
                  style={{ border: '2px solid var(--df-border)' }}
                />
                <div>
                  <h4 className="text-lg font-bold" style={{ color: 'var(--df-text-primary)' }}>
                    {currentFocusRequest.employee?.profile?.full_name}
                  </h4>
                  <p className="text-xs" style={{ color: 'var(--df-text-muted)' }}>
                    {currentFocusRequest.employee?.designation?.title} • {currentFocusRequest.employee?.department?.name}
                  </p>
                </div>
              </div>

              <div
                className="p-5 space-y-3 text-xs"
                style={{
                  background: 'var(--df-bg)',
                  borderRadius: 'var(--df-radius)',
                  border: '1px solid var(--df-border)',
                }}
              >
                <div className="flex justify-between">
                  <span className="df-label" style={{ color: 'var(--df-text-secondary)' }}>Leave Type:</span>
                  <span className="font-bold" style={{ color: 'var(--df-text-primary)' }}>{currentFocusRequest.leave_type?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="df-label" style={{ color: 'var(--df-text-secondary)' }}>Dates:</span>
                  <span className="font-bold" style={{ color: 'var(--df-text-primary)' }}>
                    {currentFocusRequest.start_date} to {currentFocusRequest.end_date} ({currentFocusRequest.total_days}d)
                  </span>
                </div>
                <div className="pt-3" style={{ borderTop: '1px solid var(--df-border)' }}>
                  <span className="df-label block mb-2" style={{ color: 'var(--df-text-secondary)' }}>Reason:</span>
                  <p className="italic leading-relaxed" style={{ color: 'var(--df-text-primary)' }}>"{currentFocusRequest.reason}"</p>
                </div>
              </div>

              {/* Keyboard Hints */}
              <div
                className="p-3.5 flex items-center justify-between text-xs"
                style={{
                  background: 'var(--df-bg)',
                  borderRadius: 'var(--df-radius)',
                  color: 'var(--df-text-secondary)',
                  border: '1px solid var(--df-border)',
                }}
              >
                <span className="df-label">Keyboard:</span>
                <div className="space-x-3 df-mono text-[11px]">
                  <span className="inline-flex items-center"><kbd className="px-1.5 py-0.5 mr-1.5 font-bold" style={{ background: 'var(--df-surface)', border: '1px solid var(--df-status-present)', borderRadius: '3px', color: 'var(--df-status-present)' }}>A</kbd> Approve</span>
                  <span className="inline-flex items-center"><kbd className="px-1.5 py-0.5 mr-1.5 font-bold" style={{ background: 'var(--df-surface)', border: '1px solid var(--df-status-absent)', borderRadius: '3px', color: 'var(--df-status-absent)' }}>R</kbd> Reject</span>
                  <span className="inline-flex items-center"><kbd className="px-1.5 py-0.5 mr-1.5 font-bold" style={{ background: 'var(--df-surface)', border: '1px solid var(--df-border)', borderRadius: '3px', color: 'var(--df-text-secondary)' }}>ESC</kbd> Exit</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-5" style={{ borderTop: '1px solid var(--df-border)' }}>
              <button
                onClick={() => setFocusMode(false)}
                className="text-xs font-semibold hover:underline"
                style={{ color: 'var(--df-text-muted)' }}
              >
                Exit Focus Mode
              </button>
              <div className="flex items-center space-x-3">
                <Button variant="secondary" onClick={() => setShowRejectModal(currentFocusRequest.id)}>
                  Reject [R]
                </Button>
                <Button variant="primary" onClick={() => handleApprove(currentFocusRequest.id)}>
                  Approve [A]
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reject Modal */}
      {showRejectModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-4 animate-in fade-in duration-200"
          style={{ background: 'rgba(0, 0, 0, 0.6)' }}
        >
          <div
            className="w-full max-w-md p-6 space-y-4"
            style={{
              background: 'var(--df-surface)',
              borderRadius: 'var(--df-radius)',
              boxShadow: 'var(--df-shadow-overlay)',
              border: '1px solid var(--df-border)',
            }}
          >
            <h3 className="df-heading" style={{ fontSize: '1.125rem' }}>State Rejection Reason</h3>
            <textarea
              value={rejectionReason}
              onChange={(e) => setRejectionReason(e.target.value)}
              rows={3}
              placeholder="Provide context for rejection..."
              className="w-full p-3 text-sm focus:outline-none"
              style={{
                background: 'var(--df-bg)',
                border: '1px solid var(--df-border)',
                borderRadius: 'var(--df-radius)',
                color: 'var(--df-text-primary)',
              }}
              autoFocus
            />
            <div className="flex justify-end space-x-3 pt-2">
              <Button variant="ghost" onClick={() => setShowRejectModal(null)}>Cancel</Button>
              <Button variant="destructive" onClick={() => handleReject(showRejectModal)}>Confirm Rejection</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
