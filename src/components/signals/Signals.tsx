import React, { useState, useEffect } from 'react';
import { AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';
import { mockEngine } from '../../mock/mockEngine';
import { WorkforceSignal } from '../../types';
import { useNavigate } from 'react-router-dom';
import { PageHeader } from '../ui/PageHeader';
import { Panel } from '../ui/Panel';
import { StatusBadge } from '../ui/StatusBadge';
import { Button } from '../ui/Button';
import { EmptyState } from '../ui/EmptyState';
import { CardSkeleton } from '../ui/Skeleton';

export const Signals: React.FC = () => {
  const navigate = useNavigate();
  const [signals, setSignals] = useState<WorkforceSignal[]>([]);
  const [actionSuccess, setActionSuccess] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    setSignals(mockEngine.getSignals());
    setTimeout(() => setIsLoading(false), 300);
  }, []);

  const handleExecuteAction = (sig: WorkforceSignal) => {
    if (sig.signal_type === 'LEAVE_CONCENTRATION') {
      navigate('/decisions');
    } else if (sig.signal_type === 'LATE_CHECKIN_PATTERN') {
      navigate(`/people?id=${sig.employee_id}`);
    } else {
      navigate('/control-room');
    }
    setActionSuccess(`Navigated to resolve signal: ${sig.title}`);
    setTimeout(() => setActionSuccess(''), 3000);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Toast */}
      {actionSuccess && (
        <div
          className="p-4 flex items-center space-x-3 text-sm font-bold"
          style={{
            background: 'var(--df-accent)',
            color: '#ffffff',
            borderRadius: 'var(--df-radius)',
          }}
        >
          <CheckCircle2 className="w-5 h-5" />
          <span>{actionSuccess}</span>
        </div>
      )}

      {/* Header Banner */}
      <PageHeader
        eyebrow="Intelligence Engine • Pattern Alerts"
        title="Explainable Signals"
        description="Rule-driven operational signals providing evidence, impact assessments, and HR response recommendations."
      />

      {/* Signal Cards */}
      {isLoading ? (
        <div className="space-y-6">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      ) : signals.length === 0 ? (
        <EmptyState 
          title="No Active Signals" 
          description="The intelligence engine has not detected any significant workforce patterns." 
        />
      ) : (
        <div className="space-y-6">
          {signals.map((sig) => {
            const isHigh = sig.severity === 'high' || sig.severity === 'critical';
            return (
              <Panel key={sig.id} padding="lg">
                <div className="space-y-5">
                  <div
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5"
                    style={{ borderBottom: '1px solid var(--df-border)' }}
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className="w-12 h-12 flex items-center justify-center shrink-0"
                        style={{
                          borderRadius: 'var(--df-radius)',
                          background: isHigh ? 'var(--df-status-absent-subtle)' : 'var(--df-status-pending-subtle)',
                          color: isHigh ? 'var(--df-status-absent)' : 'var(--df-status-pending)',
                        }}
                      >
                        <AlertTriangle className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg" style={{ color: 'var(--df-text-primary)' }}>{sig.title}</h3>
                        <p className="df-mono text-xs mt-1" style={{ color: 'var(--df-text-muted)' }}>Signal: {sig.signal_type}</p>
                      </div>
                    </div>

                    <StatusBadge status={isHigh ? 'absent' : 'pending'}>
                      {sig.severity} Severity
                    </StatusBadge>
                  </div>

                  {/* Evidence Quadrants */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
                    <div
                      className="p-5 space-y-2"
                      style={{
                        background: 'var(--df-bg)',
                        borderRadius: 'var(--df-radius)',
                        border: '1px solid var(--df-border)',
                      }}
                    >
                      <span className="df-label font-bold block" style={{ color: 'var(--df-text-primary)' }}>1. Observation</span>
                      <p className="font-medium leading-relaxed" style={{ color: 'var(--df-text-secondary)' }}>{sig.description}</p>
                    </div>

                    <div
                      className="p-5 space-y-2"
                      style={{
                        background: 'var(--df-bg)',
                        borderRadius: 'var(--df-radius)',
                        border: '1px solid var(--df-border)',
                      }}
                    >
                      <span className="df-label font-bold block" style={{ color: 'var(--df-text-primary)' }}>2. Impact</span>
                      <p className="font-medium leading-relaxed" style={{ color: 'var(--df-text-secondary)' }}>
                        {sig.signal_type === 'LEAVE_CONCENTRATION'
                          ? 'High simultaneous leave requests reduce departmental bandwidth below safety threshold.'
                          : sig.signal_type === 'PAYROLL_CHANGE' 
                          ? 'Significant fluctuation in monthly net salary may require review.'
                          : 'Repeated late arrivals impact project standups and daily sprint cadence.'}
                      </p>
                    </div>

                    <div
                      className="p-5 space-y-2"
                      style={{
                        background: 'var(--df-bg)',
                        borderRadius: 'var(--df-radius)',
                        border: '1px solid var(--df-border)',
                      }}
                    >
                      <span className="df-label font-bold block" style={{ color: 'var(--df-text-primary)' }}>3. Evidence</span>
                      <div className="df-mono text-xs space-y-1.5 pt-1" style={{ color: 'var(--df-text-secondary)' }}>
                        <div>Metadata: {JSON.stringify(sig.metadata || {})}</div>
                        <div>Detected: {new Date(sig.created_at).toLocaleString()}</div>
                      </div>
                    </div>

                    <div
                      className="p-5 space-y-4 flex flex-col justify-between"
                      style={{
                        background: 'var(--df-accent-subtle)',
                        borderRadius: 'var(--df-radius)',
                        border: '1px solid var(--df-accent)',
                      }}
                    >
                      <div>
                        <span className="df-label font-bold block mb-2" style={{ color: 'var(--df-accent)' }}>4. Recommended Response</span>
                        <p className="font-bold text-base" style={{ color: 'var(--df-text-primary)' }}>
                          {sig.signal_type === 'LEAVE_CONCENTRATION'
                            ? 'Review pending decision queue to balance team capacity.'
                            : sig.signal_type === 'PAYROLL_CHANGE'
                            ? 'Review detailed payroll logs for anomaly verification.'
                            : 'Inspect employee profile and schedule check-in.'}
                        </p>
                      </div>

                      <Button variant="primary" size="lg" onClick={() => handleExecuteAction(sig)} className="w-full">
                        Execute HR Action
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Panel>
            );
          })}
        </div>
      )}
    </div>
  );
};
