import React, { useState, useEffect } from 'react';
import { AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';
import { mockEngine } from '../../mock/mockEngine';
import { WorkforceSignal } from '../../types';
import { useNavigate } from 'react-router-dom';
import { PageHeader } from '../ui/PageHeader';
import { Panel } from '../ui/Panel';
import { StatusBadge } from '../ui/StatusBadge';
import { Button } from '../ui/Button';

export const Signals: React.FC = () => {
  const navigate = useNavigate();
  const [signals, setSignals] = useState<WorkforceSignal[]>([]);
  const [actionSuccess, setActionSuccess] = useState<string>('');

  useEffect(() => {
    setSignals(mockEngine.getSignals());
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
    <div className="space-y-5 animate-in fade-in duration-200">
      {/* Toast */}
      {actionSuccess && (
        <div
          className="p-3.5 flex items-center space-x-2 text-xs font-semibold"
          style={{
            background: 'var(--df-accent)',
            color: '#ffffff',
            borderRadius: 'var(--df-radius)',
          }}
        >
          <CheckCircle2 className="w-4 h-4" />
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
      <div className="space-y-5">
        {signals.map((sig) => {
          const isHigh = sig.severity === 'high' || sig.severity === 'critical';
          return (
            <Panel key={sig.id} padding="lg">
              <div className="space-y-4">
                <div
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4"
                  style={{ borderBottom: '1px solid var(--df-border)' }}
                >
                  <div className="flex items-start space-x-3">
                    <div
                      className="w-10 h-10 flex items-center justify-center shrink-0"
                      style={{
                        borderRadius: 'var(--df-radius)',
                        background: isHigh ? 'var(--df-status-absent-subtle)' : 'var(--df-status-pending-subtle)',
                        color: isHigh ? 'var(--df-status-absent)' : 'var(--df-status-pending)',
                      }}
                    >
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm" style={{ color: 'var(--df-text-primary)' }}>{sig.title}</h3>
                      <p className="df-mono text-xs" style={{ color: 'var(--df-text-muted)' }}>Signal: {sig.signal_type}</p>
                    </div>
                  </div>

                  <StatusBadge status={isHigh ? 'high' : 'medium'}>
                    {sig.severity} Severity
                  </StatusBadge>
                </div>

                {/* Evidence Quadrants */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div
                    className="p-4 space-y-1"
                    style={{
                      background: 'var(--df-bg)',
                      borderRadius: 'var(--df-radius)',
                      border: '1px solid var(--df-border)',
                    }}
                  >
                    <span className="df-label block">1. Observation</span>
                    <p className="font-medium leading-relaxed" style={{ color: 'var(--df-text-secondary)' }}>{sig.description}</p>
                  </div>

                  <div
                    className="p-4 space-y-1"
                    style={{
                      background: 'var(--df-bg)',
                      borderRadius: 'var(--df-radius)',
                      border: '1px solid var(--df-border)',
                    }}
                  >
                    <span className="df-label block">2. Impact</span>
                    <p className="font-medium leading-relaxed" style={{ color: 'var(--df-text-secondary)' }}>
                      {sig.signal_type === 'LEAVE_CONCENTRATION'
                        ? 'High simultaneous leave requests reduce departmental bandwidth below safety threshold.'
                        : 'Repeated late arrivals impact project standups and daily sprint cadence.'}
                    </p>
                  </div>

                  <div
                    className="p-4 space-y-1"
                    style={{
                      background: 'var(--df-bg)',
                      borderRadius: 'var(--df-radius)',
                      border: '1px solid var(--df-border)',
                    }}
                  >
                    <span className="df-label block">3. Evidence</span>
                    <div className="df-mono text-[11px] space-y-0.5 pt-0.5" style={{ color: 'var(--df-text-secondary)' }}>
                      <div>Metadata: {JSON.stringify(sig.metadata || {})}</div>
                      <div>Detected: {new Date(sig.created_at).toLocaleString()}</div>
                    </div>
                  </div>

                  <div
                    className="p-4 space-y-2 flex flex-col justify-between"
                    style={{
                      background: 'var(--df-accent-subtle)',
                      borderRadius: 'var(--df-radius)',
                      border: '1px solid var(--df-accent)',
                    }}
                  >
                    <div>
                      <span className="df-label block" style={{ color: 'var(--df-accent)' }}>4. Recommended Response</span>
                      <p className="font-medium" style={{ color: 'var(--df-text-primary)' }}>
                        {sig.signal_type === 'LEAVE_CONCENTRATION'
                          ? 'Review pending decision queue to balance team capacity.'
                          : 'Inspect employee profile and schedule check-in.'}
                      </p>
                    </div>

                    <Button variant="primary" onClick={() => handleExecuteAction(sig)} className="w-full">
                      Execute HR Action
                      <ArrowRight className="w-3.5 h-3.5 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </Panel>
          );
        })}
      </div>
    </div>
  );
};
