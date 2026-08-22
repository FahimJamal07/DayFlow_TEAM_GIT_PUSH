import React, { useState, useEffect } from 'react';
import { Shield, Users, Inbox, Sparkles, Activity, AlertTriangle, ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { mockEngine } from '../../mock/mockEngine';
import { Employee, LeaveRequest, WorkforceSignal, AttendanceRecord } from '../../types';
import { PageHeader } from '../ui/PageHeader';
import { Panel } from '../ui/Panel';
import { StatusBadge } from '../ui/StatusBadge';
import { Button } from '../ui/Button';
import { StatBlock } from '../ui/StatBlock';

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

  const presentCount = attendance.filter((a) => a.status === 'present').length;
  const lateCount = attendance.filter((a) => a.status === 'late').length;
  const totalEmps = employees.length;
  const awayCount = totalEmps - (presentCount + lateCount);

  const hasHighSeveritySignals = signals.some((s) => s.severity === 'high' || s.severity === 'critical');

  const PulseMatrix = () => (
    <Panel padding="lg">
      <div className="flex items-center justify-between pb-4 mb-4" style={{ borderBottom: '1px solid var(--df-border)' }}>
        <div className="flex items-center space-x-2">
          <Activity className="w-5 h-5" style={{ color: 'var(--df-accent)' }} />
          <h3 className="df-heading" style={{ fontSize: '1.125rem' }}>Workforce Pulse</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {departments.map((dept) => {
          const deptEmps = employees.filter((e) => e.department_id === dept.id);
          return (
            <div
              key={dept.id}
              className="p-4 space-y-3"
              style={{
                background: 'var(--df-bg)',
                borderRadius: 'var(--df-radius)',
                border: '1px solid var(--df-border)',
              }}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs" style={{ color: 'var(--df-text-primary)' }}>{dept.name}</span>
                <span className="df-mono text-[10px]" style={{ color: 'var(--df-text-muted)' }}>{deptEmps.length}</span>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {deptEmps.map((emp) => {
                  const att = attendance.find((a) => a.employee_id === emp.id);
                  const status = att?.status || 'absent';
                  
                  let bg = 'var(--df-status-absent)';
                  let color = '#ffffff';
                  if (status === 'present') bg = 'var(--df-status-present)';
                  if (status === 'late') bg = 'var(--df-status-pending)';

                  return (
                    <div
                      key={emp.id}
                      title={`${emp.profile?.full_name} (${status.toUpperCase()})`}
                      className="w-7 h-7 flex items-center justify-center font-bold text-[10px] transition-all transform hover:scale-110 cursor-pointer"
                      style={{
                        borderRadius: 'var(--df-radius)',
                        background: bg,
                        color: color,
                      }}
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
    </Panel>
  );

  const OperationalSignals = () => (
    <Panel padding="lg">
      <div className="flex items-center justify-between pb-4 mb-4" style={{ borderBottom: '1px solid var(--df-border)' }}>
        <div className="flex items-center space-x-2">
          <Sparkles className="w-5 h-5" style={{ color: 'var(--df-status-pending)' }} />
          <h3 className="df-heading" style={{ fontSize: '1.125rem' }}>Operational Signals</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {signals.map((sig) => (
          <div
            key={sig.id}
            className="p-4 flex flex-col justify-between"
            style={{
              background: 'var(--df-bg)',
              borderRadius: 'var(--df-radius)',
              border: '1px solid var(--df-border)',
            }}
          >
            <div>
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <div
                    className="w-8 h-8 flex items-center justify-center shrink-0"
                    style={{
                      borderRadius: 'var(--df-radius)',
                      background: sig.severity === 'high' ? 'var(--df-status-absent-subtle)' : 'var(--df-status-pending-subtle)',
                      color: sig.severity === 'high' ? 'var(--df-status-absent)' : 'var(--df-status-pending)',
                    }}
                  >
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-xs" style={{ color: 'var(--df-text-primary)' }}>{sig.title}</h4>
                </div>
                <StatusBadge status={sig.severity === 'high' ? 'high' : 'medium'}>
                  {sig.severity}
                </StatusBadge>
              </div>
              <p className="text-xs mt-2 leading-relaxed" style={{ color: 'var(--df-text-secondary)' }}>{sig.description}</p>
            </div>
            
            <div className="mt-4 text-right pt-3" style={{ borderTop: '1px solid var(--df-border)' }}>
              <Button variant="ghost" size="sm" onClick={() => navigate('/signals')}>
                Review Context <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <PageHeader
        eyebrow="Control Center • Live Operations"
        title="HR Control Room"
        description="Operational dashboard tracking workforce status, pending decision queues, and intelligence signals."
        actions={
          pendingRequests.length > 0 ? (
            <Button variant="primary" size="lg" onClick={() => navigate('/decisions')}>
              <Inbox className="w-4 h-4 mr-2" />
              Process Decisions ({pendingRequests.length})
            </Button>
          ) : undefined
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatBlock 
          label="Present & Late" 
          value={`${presentCount + lateCount} / ${totalEmps}`} 
          icon={CheckCircle2} 
        />
        <StatBlock 
          label="Away or Absent" 
          value={awayCount} 
          icon={Users} 
        />
        <StatBlock 
          label="Pending Decisions" 
          value={pendingRequests.length} 
          icon={Clock} 
        />
        <StatBlock 
          label="Signals Detected" 
          value={signals.length} 
          icon={AlertTriangle} 
        />
      </div>

      {hasHighSeveritySignals ? (
        <>
          <OperationalSignals />
          <PulseMatrix />
        </>
      ) : (
        <>
          <PulseMatrix />
          <OperationalSignals />
        </>
      )}
    </div>
  );
};
