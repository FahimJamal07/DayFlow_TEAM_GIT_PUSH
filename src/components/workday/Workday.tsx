import React, { useState, useEffect } from 'react';
import { Clock, Play, Square, Coffee, CheckCircle2, ShieldCheck, Briefcase, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { mockEngine } from '../../mock/mockEngine';
import { AttendanceRecord, LeaveBalance, LeaveRequest } from '../../types';
import { Panel } from '../ui/Panel';
import { PageHeader } from '../ui/PageHeader';
import { StatusBadge } from '../ui/StatusBadge';
import { Button } from '../ui/Button';
import { StatBlock } from '../ui/StatBlock';

export const Workday: React.FC = () => {
  const { user, employee } = useAuth();
  const [attendance, setAttendance] = useState<AttendanceRecord | undefined>(undefined);
  const [leaveBalances, setLeaveBalances] = useState<LeaveBalance[]>([]);
  const [upcomingLeave, setUpcomingLeave] = useState<LeaveRequest[]>([]);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [notes, setNotes] = useState<string>('');
  const [actionSuccess, setActionSuccess] = useState<string>('');

  useEffect(() => {
    if (employee) {
      refreshData();
    }
  }, [employee]);

  const refreshData = () => {
    if (!employee) return;
    const todayAtt = mockEngine.getTodayAttendance(employee.id);
    setAttendance(todayAtt);
    setLeaveBalances(mockEngine.getLeaveBalances(employee.id));
    const requests = mockEngine.getLeaveRequests(employee.id);
    setUpcomingLeave(requests.filter((r) => r.status === 'approved' || r.status === 'pending'));
  };

  const lastEvent = attendance?.events?.[attendance.events.length - 1];
  const isOnBreak = lastEvent?.event_type === 'BREAK_START';
  const isCheckedIn = !!attendance?.check_in && !attendance?.check_out;
  const isCompleted = !!attendance?.check_in && !!attendance?.check_out;

  useEffect(() => {
    if (!attendance || !attendance.check_in || attendance.check_out || isOnBreak) {
      return;
    }
    const checkInMs = new Date(attendance.check_in).getTime();
    const updateTimer = () => {
      const nowMs = new Date().getTime();
      const breakMs = (attendance.break_minutes || 0) * 60000;
      const diffSec = Math.max(0, Math.floor((nowMs - checkInMs - breakMs) / 1000));
      setElapsedSeconds(diffSec);
    };
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [attendance, isOnBreak]);

  const handleCheckIn = () => {
    if (!employee) return;
    try {
      mockEngine.checkIn(employee.id, notes);
      setNotes('');
      refreshData();
      triggerToast('Checked in successfully! Workday timer started.');
    } catch (e: any) {
      alert(e.message);
    }
  };

  const handleStartBreak = () => {
    if (!employee) return;
    try {
      mockEngine.startBreak(employee.id);
      refreshData();
      triggerToast('Break started. Enjoy your break!');
    } catch (e: any) {
      alert(e.message);
    }
  };

  const handleEndBreak = () => {
    if (!employee) return;
    try {
      mockEngine.endBreak(employee.id);
      refreshData();
      triggerToast('Break ended. Resumed active workday.');
    } catch (e: any) {
      alert(e.message);
    }
  };

  const handleCheckOut = () => {
    if (!employee) return;
    try {
      mockEngine.checkOut(employee.id);
      refreshData();
      triggerToast('Checked out. Total hours recorded to presence history.');
    } catch (e: any) {
      alert(e.message);
    }
  };

  const triggerToast = (msg: string) => {
    setActionSuccess(msg);
    setTimeout(() => setActionSuccess(''), 4000);
  };

  const formatTimer = (totalSec: number) => {
    const hrs = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const totalWorkdaySeconds = 8 * 3600;
  const progressPercent = isCompleted ? 100 : Math.min(100, (elapsedSeconds / totalWorkdaySeconds) * 100);

  const getStatusColor = () => {
    if (isCompleted) return 'var(--df-accent)';
    if (isOnBreak) return 'var(--df-status-pending)';
    if (isCheckedIn) return 'var(--df-status-present)';
    return 'var(--df-text-muted)';
  };

  const formatTimeEvent = (isoString?: string) => {
    if (!isoString) return '--:--';
    return new Date(isoString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="space-y-5 animate-in fade-in duration-200">
      {actionSuccess && (
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
            <span>{actionSuccess}</span>
          </div>
          <button onClick={() => setActionSuccess('')} className="font-bold hover:opacity-80">
            ✕
          </button>
        </div>
      )}

      <PageHeader
        eyebrow={`${new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}`}
        title={`${user?.full_name?.split(' ')[0]}'s Workday`}
        description={`${employee?.designation?.title} • ${employee?.department?.name} Department`}
      />

      <Panel padding="none" className="overflow-hidden">
        <div className="p-12 lg:p-16 flex flex-col items-center text-center">
          <div className="df-label uppercase tracking-widest mb-4" style={{ color: getStatusColor() }}>
            {isOnBreak ? 'On Break' : isCheckedIn ? 'Checked In' : isCompleted ? 'Checked Out' : 'Not Started'}
          </div>
          
          <div 
            className="df-display df-mono tracking-tighter" 
            style={{ fontSize: 'clamp(4rem, 10vw, 7rem)', lineHeight: '1', color: 'var(--df-text-primary)' }}
          >
            {isCheckedIn
              ? formatTimer(elapsedSeconds)
              : isCompleted
              ? `${Math.floor(attendance.total_minutes / 60)}h ${attendance.total_minutes % 60}m`
              : '00:00:00'}
          </div>

          <div className="mt-12 w-full max-w-3xl px-4 relative">
            <div className="h-1 w-full absolute top-1/2 left-0 -translate-y-1/2 z-0" style={{ background: 'var(--df-border)' }} />
            <motion.div 
              className="h-1 absolute top-1/2 left-0 -translate-y-1/2 z-10" 
              style={{ background: getStatusColor() }}
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ ease: "linear", duration: 0.5 }}
            />
            
            <div className="relative z-20 flex justify-between items-center text-xs">
              <div className="flex flex-col items-start -ml-2">
                <div className="w-4 h-4 rounded-full border-2 mb-2 transition-colors" 
                     style={{ 
                       background: attendance?.check_in ? getStatusColor() : 'var(--df-surface)',
                       borderColor: attendance?.check_in ? getStatusColor() : 'var(--df-border)'
                     }} 
                />
                <span className="font-semibold" style={{ color: 'var(--df-text-primary)' }}>Start</span>
                <span className="df-mono text-[10px]" style={{ color: 'var(--df-text-muted)' }}>{formatTimeEvent(attendance?.check_in)}</span>
              </div>
              
              <div className="flex flex-col items-center">
                 <div className="w-4 h-4 rounded-full border-2 mb-2 transition-colors" 
                     style={{ 
                       background: attendance?.break_minutes ? 'var(--df-status-pending)' : 'var(--df-surface)',
                       borderColor: attendance?.break_minutes ? 'var(--df-status-pending)' : (progressPercent > 50 ? getStatusColor() : 'var(--df-border)')
                     }} 
                />
                <span className="font-semibold" style={{ color: 'var(--df-text-primary)' }}>Break</span>
                <span className="df-mono text-[10px]" style={{ color: 'var(--df-text-muted)' }}>{attendance?.break_minutes ? `${attendance.break_minutes}m` : '--'}</span>
              </div>

              <div className="flex flex-col items-end -mr-2">
                 <div className="w-4 h-4 rounded-full border-2 mb-2 transition-colors" 
                     style={{ 
                       background: isCompleted ? 'var(--df-accent)' : 'var(--df-surface)',
                       borderColor: isCompleted ? 'var(--df-accent)' : (progressPercent >= 100 ? getStatusColor() : 'var(--df-border)')
                     }} 
                />
                <span className="font-semibold" style={{ color: 'var(--df-text-primary)' }}>End</span>
                <span className="df-mono text-[10px]" style={{ color: 'var(--df-text-muted)' }}>{formatTimeEvent(attendance?.check_out)}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div 
          className="p-4 flex items-center justify-center space-x-3" 
          style={{ background: 'var(--df-bg)', borderTop: '1px solid var(--df-border)' }}
        >
          {!isCheckedIn && !isCompleted && (
            <Button variant="primary" size="lg" onClick={handleCheckIn}>
              <Play className="w-4 h-4 fill-current mr-2" />
              Check In
            </Button>
          )}

          {isCheckedIn && !isOnBreak && (
            <>
              <Button variant="secondary" size="lg" onClick={handleStartBreak}>
                <Coffee className="w-4 h-4 mr-2" />
                Take Break
              </Button>
              <Button variant="destructive" size="lg" onClick={handleCheckOut}>
                <Square className="w-4 h-4 fill-current mr-2" />
                Check Out
              </Button>
            </>
          )}

          {isCheckedIn && isOnBreak && (
            <Button variant="primary" size="lg" onClick={handleEndBreak}>
              <Play className="w-4 h-4 fill-current mr-2" />
              Resume Work
            </Button>
          )}

          {isCompleted && (
            <StatusBadge status="present">Workday Completed</StatusBadge>
          )}
        </div>
      </Panel>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Panel padding="lg">
          <div className="flex items-center justify-between pb-4" style={{ borderBottom: '1px solid var(--df-border)' }}>
            <div className="flex items-center space-x-2">
              <Briefcase className="w-4 h-4" style={{ color: 'var(--df-status-pending)' }} />
              <span className="df-label" style={{ color: 'var(--df-text-primary)' }}>Leave Balances</span>
            </div>
            <Button variant="ghost" size="sm" onClick={() => window.location.href = '/timeoff'}>
              Request
            </Button>
          </div>

          <div className="space-y-1 pt-3">
            {leaveBalances.slice(0, 3).map((b) => (
              <div
                key={b.id}
                className="flex items-center justify-between text-xs py-2"
                style={{ borderBottom: '1px solid var(--df-border)' }}
              >
                <span style={{ color: 'var(--df-text-secondary)' }}>{b.leave_type?.name}</span>
                <span className="font-bold" style={{ color: 'var(--df-text-primary)' }}>
                  {b.total_allocated - b.used - b.pending}d left
                </span>
              </div>
            ))}
          </div>
        </Panel>

        <Panel padding="lg">
          <div className="flex items-center justify-between pb-4" style={{ borderBottom: '1px solid var(--df-border)' }}>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" style={{ color: 'var(--df-accent)' }} />
              <span className="df-label" style={{ color: 'var(--df-text-primary)' }}>Upcoming Time Off</span>
            </div>
            <span className="df-mono text-[10px]" style={{ color: 'var(--df-text-muted)' }}>{upcomingLeave.length} Scheduled</span>
          </div>

          {upcomingLeave.length === 0 ? (
            <p className="text-xs py-4 text-center font-medium" style={{ color: 'var(--df-text-muted)' }}>No upcoming leave scheduled.</p>
          ) : (
            <div className="space-y-2 pt-3">
              {upcomingLeave.slice(0, 2).map((r) => (
                <div
                  key={r.id}
                  className="p-3 text-xs flex items-center justify-between"
                  style={{
                    background: 'var(--df-bg)',
                    borderRadius: 'var(--df-radius)',
                    border: '1px solid var(--df-border)',
                  }}
                >
                  <div>
                    <span className="font-semibold" style={{ color: 'var(--df-text-primary)' }}>{r.leave_type?.name}</span>
                    <p className="text-[10px] df-mono mt-0.5" style={{ color: 'var(--df-text-muted)' }}>{r.start_date} to {r.end_date}</p>
                  </div>
                  <StatusBadge status={r.status === 'approved' ? 'approved' : 'pending'}>
                    {r.status}
                  </StatusBadge>
                </div>
              ))}
            </div>
          )}
        </Panel>

        <Panel padding="lg">
          <div className="flex items-center justify-between pb-4" style={{ borderBottom: '1px solid var(--df-border)' }}>
            <div className="flex items-center space-x-2">
              <DollarSign className="w-4 h-4" style={{ color: 'var(--df-status-present)' }} />
              <span className="df-label" style={{ color: 'var(--df-text-primary)' }}>Payroll Snapshot</span>
            </div>
            <Button variant="ghost" size="sm" onClick={() => window.location.href = '/payroll'}>
              Statement
            </Button>
          </div>

          <div
            className="p-4 mt-3"
            style={{
              background: 'var(--df-bg)',
              borderRadius: 'var(--df-radius)',
              border: '1px solid var(--df-border)',
            }}
          >
            <div className="text-[11px] font-medium" style={{ color: 'var(--df-text-muted)' }}>August 2026 Pay Cycle</div>
            <div className="text-xl font-bold mt-1 df-mono" style={{ color: 'var(--df-text-primary)' }}>₹1,40,000</div>
            <div className="text-[10px] font-semibold flex items-center mt-2" style={{ color: 'var(--df-status-present)' }}>
              <ShieldCheck className="w-3.5 h-3.5 mr-1" /> Processed & Secured
            </div>
          </div>
        </Panel>
      </div>
    </div>
  );
};
