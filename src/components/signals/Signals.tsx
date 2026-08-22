import React, { useState, useEffect } from 'react';
import { AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';
import { mockEngine } from '../../mock/mockEngine';
import { WorkforceSignal } from '../../types';
import { useNavigate } from 'react-router-dom';

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
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Toast */}
      {actionSuccess && (
        <div className="p-4 bg-blue-600 text-white rounded-xl shadow-lg text-xs font-semibold flex items-center space-x-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>{actionSuccess}</span>
        </div>
      )}

      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold text-amber-600 uppercase tracking-wider mb-1">
            <span>Workforce Intelligence Engine</span>
            <span>•</span>
            <span>Evidence-Based Pattern Alerts</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Explainable Signals</h1>
          <p className="text-sm text-slate-500 mt-1">
            Rule-driven operational signals providing empirical evidence, business impact assessments, and HR response recommendations.
          </p>
        </div>
      </div>

      {/* Signal Cards */}
      <div className="space-y-6">
        {signals.map((sig) => {
          const isHigh = sig.severity === 'high' || sig.severity === 'critical';
          return (
            <div
              key={sig.id}
              className={`bg-white p-6 rounded-2xl border shadow-2xs space-y-4 transition-all hover:shadow-md ${
                isHigh ? 'border-rose-200 bg-rose-50/10' : 'border-slate-200'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div className="flex items-start space-x-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                      isHigh ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{sig.title}</h3>
                    <p className="text-xs text-slate-400 font-mono">Signal Identifier: {sig.signal_type}</p>
                  </div>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-mono self-start sm:self-auto ${
                    isHigh
                      ? 'bg-rose-100 text-rose-800 border border-rose-300'
                      : 'bg-amber-100 text-amber-800 border border-amber-300'
                  }`}
                >
                  {sig.severity} Severity
                </span>
              </div>

              {/* 4 Core Evidence Questions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {/* 1. What Happened */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block text-[11px] uppercase tracking-wider text-slate-500">
                    1. Empirical Observation (What Happened)
                  </span>
                  <p className="text-slate-700 leading-relaxed font-medium">{sig.description}</p>
                </div>

                {/* 2. Why it matters */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block text-[11px] uppercase tracking-wider text-slate-500">
                    2. Operational Impact (Why it Matters)
                  </span>
                  <p className="text-slate-700 leading-relaxed font-medium">
                    {sig.signal_type === 'LEAVE_CONCENTRATION'
                      ? 'High simultaneous leave requests reduce departmental bandwidth below safety threshold (50% team absence).'
                      : 'Repeated late arrivals impact project standups and daily sprint cadence.'}
                  </p>
                </div>

                {/* 3. Evidence parameters */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block text-[11px] uppercase tracking-wider text-slate-500">
                    3. Supporting Evidence Data
                  </span>
                  <div className="font-mono text-[11px] text-slate-600 space-y-0.5 pt-0.5">
                    <div>Metadata: {JSON.stringify(sig.metadata || {})}</div>
                    <div>Detected Timestamp: {new Date(sig.created_at).toLocaleString()}</div>
                  </div>
                </div>

                {/* 4. Action Recommendation */}
                <div className="bg-blue-50/60 p-4 rounded-xl border border-blue-200 space-y-2 flex flex-col justify-between">
                  <div>
                    <span className="font-bold text-blue-900 block text-[11px] uppercase tracking-wider">
                      4. Recommended HR Response
                    </span>
                    <p className="text-blue-800 font-medium">
                      {sig.signal_type === 'LEAVE_CONCENTRATION'
                        ? 'Review pending decision queue in Decision Inbox to balance team capacity.'
                        : 'Inspect employee 360 profile and schedule check-in discussion.'}
                    </p>
                  </div>

                  <button
                    onClick={() => handleExecuteAction(sig)}
                    className="flex items-center justify-center space-x-2 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    <span>Execute HR Action</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
