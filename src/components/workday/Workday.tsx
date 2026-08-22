import React, { useState, useEffect } from 'react';
import { Clock, Play, Square, Coffee, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck, Briefcase, DollarSign, Activity } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { mockEngine } from '../../mock/mockEngine';
import { AttendanceRecord, LeaveBalance, LeaveRequest } from '../../types';

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

  // Determine current temporal status
  const lastEvent = attendance?.events?.[attendance.events.length - 1];
  const isOnBreak = lastEvent?.event_type === 'BREAK_START';
  const isCheckedIn = !!attendance?.check_in && !attendance?.check_out;
  const isCompleted = !!attendance?.check_in && !!attendance?.check_out;

  // Live timer calculation
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

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Dynamic Toast Feedback */}
      {actionSuccess && (
        <div className="p-4 bg-emerald-600 text-white rounded-xl shadow-lg flex items-center justify-between text-xs font-semibold animate-in slide-in-from-top duration-200">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>{actionSuccess}</span>
          </div>
          <button onClick={() => setActionSuccess('')} className="font-bold hover:opacity-80">
            ✕
          </button>
        </div>
      )}

      {/* Header Greeting Banner */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
            <span>Workday Operational Surface</span>
            <span>•</span>
            <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Good morning, {user?.full_name?.split(' ')[0]} 👋
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            {employee?.designation?.title} • {employee?.department?.name} Department
          </p>
        </div>

        {/* Action Controls Widget */}
        <div className="flex flex-wrap items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
          <div className="text-right">
            <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
              {isOnBreak ? 'Break Timer' : isCheckedIn ? 'Active Work Timer' : 'Total Worked'}
            </p>
            <p
              className={`text-2xl font-bold font-mono tracking-tight ${
                isOnBreak ? 'text-amber-600 animate-pulse' : isCheckedIn ? 'text-emerald-600' : 'text-slate-900'
              }`}
            >
              {isCheckedIn
                ? formatTimer(elapsedSeconds)
                : isCompleted
                ? `${Math.floor(attendance.total_minutes / 60)}h ${attendance.total_minutes % 60}m`
                : '00:00:00'}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            {!isCheckedIn && !isCompleted && (
              <button
                onClick={handleCheckIn}
                className="flex items-center space-x-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold text-xs shadow-md shadow-emerald-600/20 transition-all transform active:scale-95 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Check In</span>
              </button>
            )}

            {isCheckedIn && !isOnBreak && (
              <>
                <button
                  onClick={handleStartBreak}
                  className="flex items-center space-x-2 px-4 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl font-semibold text-xs shadow-md transition-all transform active:scale-95 cursor-pointer"
                >
                  <Coffee className="w-4 h-4" />
                  <span>Take Break</span>
                </button>

                <button
                  onClick={handleCheckOut}
                  className="flex items-center space-x-2 px-4 py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-xl font-semibold text-xs shadow-md shadow-rose-600/20 transition-all transform active:scale-95 cursor-pointer"
                >
                  <Square className="w-4 h-4 fill-current" />
                  <span>Check Out</span>
                </button>
              </>
            )}

            {isCheckedIn && isOnBreak && (
              <button
                onClick={handleEndBreak}
                className="flex items-center space-x-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-xs shadow-md shadow-blue-600/20 transition-all transform active:scale-95 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Resume Work</span>
              </button>
            )}

            {isCompleted && (
              <div className="px-4 py-2.5 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl text-xs font-semibold flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Workday Completed</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Signature Concept: Temporal Workday Timeline */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-blue-600" />
            <h3 className="font-bold text-slate-900 text-base">Workday Temporal Timeline</h3>
          </div>
          <span className="text-xs text-slate-400 font-mono">
            {attendance?.events?.length || 0} System Events Recorded
          </span>
        </div>

        {/* Timeline Progression Steps */}
        <div className="relative pt-4 pb-2 px-4">
          <div className="absolute top-1/2 left-8 right-8 h-1 bg-slate-200 -translate-y-1/2 z-0" />

          <div className="relative z-10 flex items-center justify-between">
            {/* Step 1: CHECK-IN */}
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-xs border-2 transition-all ${
                  attendance?.check_in
                    ? 'bg-emerald-600 border-emerald-600 text-white shadow-md shadow-emerald-600/20'
                    : 'bg-white border-slate-300 text-slate-400'
                }`}
              >
                1
              </div>
              <span className="text-xs font-bold text-slate-800 mt-2">Check In</span>
              <span className="text-[11px] text-slate-500 font-mono mt-0.5">
                {attendance?.check_in
                  ? new Date(attendance.check_in).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                  : 'Not Started'}
              </span>
            </div>

            {/* Step 2: BREAK SESSION */}
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-xs border-2 transition-all ${
                  isOnBreak
                    ? 'bg-amber-500 border-amber-500 text-slate-950 shadow-md shadow-amber-500/30 animate-pulse'
                    : attendance?.break_minutes && attendance.break_minutes > 0
                    ? 'bg-amber-100 border-amber-400 text-amber-800'
                    : 'bg-white border-slate-300 text-slate-400'
                }`}
              >
                2
              </div>
              <span className="text-xs font-bold text-slate-800 mt-2">Break State</span>
              <span className="text-[11px] text-slate-500 font-mono mt-0.5">
                {isOnBreak ? 'Active Break' : attendance?.break_minutes ? `${attendance.break_minutes}m Taken` : 'No Break'}
              </span>
            </div>

            {/* Step 3: ACTIVE WORK */}
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-xs border-2 transition-all ${
                  isCheckedIn && !isOnBreak
                    ? 'bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-600/20'
                    : isCompleted
                    ? 'bg-blue-100 border-blue-400 text-blue-800'
                    : 'bg-white border-slate-300 text-slate-400'
                }`}
              >
                3
              </div>
              <span className="text-xs font-bold text-slate-800 mt-2">Active Work</span>
              <span className="text-[11px] text-slate-500 font-mono mt-0.5">
                {isCheckedIn && !isOnBreak ? 'In Progress' : isCompleted ? 'Completed' : 'Pending'}
              </span>
            </div>

            {/* Step 4: CHECK-OUT */}
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-xs border-2 transition-all ${
                  isCompleted
                    ? 'bg-purple-600 border-purple-600 text-white shadow-md shadow-purple-600/20'
                    : 'bg-white border-slate-300 text-slate-400'
                }`}
              >
                4
              </div>
              <span className="text-xs font-bold text-slate-800 mt-2">Check Out</span>
              <span className="text-[11px] text-slate-500 font-mono mt-0.5">
                {attendance?.check_out
                  ? new Date(attendance.check_out).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                  : 'Pending'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Leave Balances */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-slate-700 font-semibold text-sm">
              <Briefcase className="w-4 h-4 text-amber-500" />
              <span>Leave Balances (2026)</span>
            </div>
            <a href="/timeoff" className="text-xs font-semibold text-blue-600 hover:underline">
              Request
            </a>
          </div>

          <div className="space-y-2 pt-1">
            {leaveBalances.slice(0, 3).map((b) => (
              <div key={b.id} className="flex items-center justify-between text-xs py-1 border-b border-slate-100 last:border-0">
                <span className="text-slate-600 font-medium">{b.leave_type?.name}</span>
                <span className="font-bold text-slate-900">
                  {b.total_allocated - b.used - b.pending} days left
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Card 2: Upcoming Time Off */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-slate-700 font-semibold text-sm">
              <Clock className="w-4 h-4 text-purple-500" />
              <span>Upcoming Time Off</span>
            </div>
            <span className="text-xs text-slate-400 font-mono">{upcomingLeave.length} Scheduled</span>
          </div>

          {upcomingLeave.length === 0 ? (
            <p className="text-xs text-slate-400 py-3">No upcoming leave scheduled.</p>
          ) : (
            <div className="space-y-2 pt-1">
              {upcomingLeave.slice(0, 2).map((r) => (
                <div key={r.id} className="p-2.5 bg-slate-50 rounded-lg text-xs flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-slate-800">{r.leave_type?.name}</span>
                    <p className="text-[11px] text-slate-500">{r.start_date} to {r.end_date}</p>
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold ${
                      r.status === 'approved' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {r.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Card 3: Payroll Statement Snapshot */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-slate-700 font-semibold text-sm">
              <DollarSign className="w-4 h-4 text-emerald-500" />
              <span>Payroll Snapshot</span>
            </div>
            <a href="/payroll" className="text-xs font-semibold text-blue-600 hover:underline">
              View Statement
            </a>
          </div>

          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/60">
            <div className="text-[11px] text-slate-500 font-medium">August 2026 Pay Cycle</div>
            <div className="text-lg font-bold text-slate-900 mt-0.5">₹1,40,000 Net</div>
            <div className="text-[10px] text-emerald-600 font-semibold flex items-center mt-1">
              <ShieldCheck className="w-3 h-3 mr-1" /> Processed & RLS Protected
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
