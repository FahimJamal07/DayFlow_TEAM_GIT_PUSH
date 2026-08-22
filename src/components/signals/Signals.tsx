import React, { useState, useEffect } from 'react';
import { Sparkles, AlertTriangle, CheckCircle2, Shield, Info, ArrowRight } from 'lucide-react';
import { mockEngine } from '../../mock/mockEngine';
import { WorkforceSignal } from '../../types';

export const Signals: React.FC = () => {
  const [signals, setSignals] = useState<WorkforceSignal[]>([]);

  useEffect(() => {
    setSignals(mockEngine.getSignals());
  }, []);

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold text-amber-600 uppercase tracking-wider mb-1">
            <span>Workforce Intelligence</span>
            <span>•</span>
            <span>Explainable Pattern Detection</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Workforce Operational Signals</h1>
          <p className="text-sm text-slate-500 mt-1">
            Automated, explainable signals identifying attendance trends, leave concentration risks, and operational anomalies.
          </p>
        </div>
      </div>

      {/* Signal Cards */}
      <div className="space-y-4">
        {signals.map((sig) => (
          <div key={sig.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs ${
                    sig.severity === 'high' ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700'
                  }`}
                >
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">{sig.title}</h3>
                  <span className="text-[11px] font-mono text-slate-400">Signal Type: {sig.signal_type}</span>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 font-mono">
                {sig.severity} Severity
              </span>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-2">
              <span className="font-bold text-slate-900 block">Why this signal was generated:</span>
              <p className="leading-relaxed font-medium">{sig.description}</p>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 font-mono pt-1">
              <span>Detected: {new Date(sig.created_at).toLocaleString()}</span>
              <span className="font-semibold text-blue-600 hover:underline cursor-pointer flex items-center">
                Take Operational Action <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
