import React, { useState, useEffect } from 'react';
import { Shield, Users, Inbox, Sparkles, Activity, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { mockEngine } from '../../mock/mockEngine';
import { Employee, LeaveRequest, WorkforceSignal, AttendanceRecord } from '../../types';

export const ControlRoom: React.FC = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [pendingRequests, setPendingRequests] = useState<LeaveRequest[]>([]);
  const [signals, setSignals] = useState<WorkforceSignal[]>([]);
  const [attendance, setAttendance] = useState<AttendanceRecord[]>([]);

  useEffect(() => {
    setEmployees(mockEngine.getEmployees());
    setPendingRequests(mockEngine.getLeaveRequests().filter((r) => r.status === 'pending'));
    setSignals(mockEngine.getSignals());
    setAttendance(mockEngine.getAllAttendance());
  }, []);

  const departments = mockEngine.getDepartments();

  // Pulse matrix data calculation
  const presentCount = attendance.filter((a) => a.status === 'present').length;
  const lateCount = attendance.filter((a) => a.status === 'late').length;
  const totalEmps = employees.length;

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
            <span>HR Command Center</span>
            <span>•</span>
            <span>Live Workforce Operations</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">HR Control Room</h1>
          <p className="text-sm text-slate-500 mt-1">
            Operational dashboard tracking workforce status, pending decision queues, and explainable intelligence signals.
          </p>
        </div>

        {pendingRequests.length > 0 && (
          <button
            onClick={() => navigate('/decisions')}
            className="flex items-center space-x-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm rounded-xl shadow-md transition-all cursor-pointer"
          >
            <Inbox className="w-4 h-4" />
            <span>Process Decisions ({pendingRequests.length})</span>
          </button>
        )}
      </div>

      {/* Signature Concept 1: Workforce Pulse Matrix */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-blue-600" />
            <h3 className="font-bold text-slate-900 text-base">Workforce Pulse Matrix</h3>
          </div>
          <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            {presentCount + lateCount}/{totalEmps} Employees Present Today
          </span>
        </div>

        {/* Pulse Grid by Department */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {departments.map((dept) => {
            const deptEmps = employees.filter((e) => e.department_id === dept.id);
            return (
              <div key={dept.id} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-xs">{dept.name}</span>
                  <span className="text-[10px] font-mono text-slate-500">{deptEmps.length} Members</span>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {deptEmps.map((emp) => {
                    const att = attendance.find((a) => a.employee_id === emp.id);
                    const status = att?.status || 'absent';
                    return (
                      <div
                        key={emp.id}
                        title={`${emp.profile?.full_name} (${status.toUpperCase()})`}
                        className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-[10px] text-white transition-all transform hover:scale-110 cursor-pointer ${
                          status === 'present'
                            ? 'bg-emerald-600'
                            : status === 'late'
                            ? 'bg-amber-500'
                            : 'bg-rose-500'
                        }`}
                      >
                        {emp.profile?.full_name.charAt(0)}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Signature Concept 2: Explainable Signals Widget */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <h3 className="font-bold text-slate-900 text-base">Explainable Operational Signals</h3>
          </div>
          <span className="text-xs text-slate-400 font-mono">{signals.length} Signals Detected</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {signals.map((sig) => (
            <div
              key={sig.id}
              className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 flex items-start space-x-3"
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 font-bold text-xs ${
                  sig.severity === 'high' ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700'
                }`}
              >
                <AlertTriangle className="w-4 h-4" />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 text-xs">{sig.title}</h4>
                  <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-slate-200 text-slate-700 font-mono">
                    {sig.severity}
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">{sig.description}</p>
                <div className="mt-2 text-[11px] font-semibold text-blue-600 hover:underline inline-flex items-center cursor-pointer">
                  Review Context <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
