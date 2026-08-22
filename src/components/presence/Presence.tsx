import React, { useState, useEffect } from 'react';
import { Calendar, Clock, CheckCircle2, XCircle, AlertTriangle, Users, Building, Filter } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { mockEngine } from '../../mock/mockEngine';
import { AttendanceRecord, Employee } from '../../types';

export const Presence: React.FC = () => {
  const { isHR, employee } = useAuth();
  const [attendanceList, setAttendanceList] = useState<AttendanceRecord[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedDept, setSelectedDept] = useState<string>('ALL');

  useEffect(() => {
    if (isHR) {
      setAttendanceList(mockEngine.getAllAttendance());
      setEmployees(mockEngine.getEmployees());
    } else if (employee) {
      setAttendanceList(mockEngine.getEmployeeAttendanceHistory(employee.id));
    }
  }, [isHR, employee]);

  const departments = mockEngine.getDepartments();

  // Metrics for HR
  const totalEmps = employees.length;
  const presentCount = attendanceList.filter((a) => a.status === 'present').length;
  const lateCount = attendanceList.filter((a) => a.status === 'late').length;
  const absentCount = totalEmps - presentCount - lateCount;

  const filteredAttendance = attendanceList.filter((att) => {
    if (selectedDept === 'ALL') return true;
    const emp = mockEngine.getEmployeeById(att.employee_id);
    return emp?.department_id === selectedDept;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            {isHR ? 'Workforce Presence & Attendance' : 'Your Presence & History'}
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            {isHR
              ? 'Real-time company-wide attendance tracking and department breakdowns'
              : 'Personal attendance records, check-in timestamps, and monthly hours'}
          </p>
        </div>
      </div>

      {/* HR Workforce Summary Metrics */}
      {isHR && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase">Total Workforce</p>
              <p className="text-2xl font-bold text-slate-900 mt-1">{totalEmps}</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase">Present Today</p>
              <p className="text-2xl font-bold text-emerald-600 mt-1">{presentCount}</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase">Late Arrivals</p>
              <p className="text-2xl font-bold text-amber-600 mt-1">{lateCount}</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <AlertTriangle className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase">Absent / Away</p>
              <p className="text-2xl font-bold text-rose-600 mt-1">{absentCount}</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
              <XCircle className="w-5 h-5" />
            </div>
          </div>
        </div>
      )}

      {/* Filter Toolbar for HR */}
      {isHR && (
        <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-slate-400" />
            <span className="text-xs font-semibold text-slate-700">Filter Department:</span>
          </div>

          <div className="flex items-center space-x-2 overflow-x-auto">
            <button
              onClick={() => setSelectedDept('ALL')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                selectedDept === 'ALL' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Departments
            </button>
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDept(dept.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  selectedDept === dept.id ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {dept.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Attendance History Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-bold text-slate-900 text-base">Attendance Records</h3>
          <span className="text-xs text-slate-400 font-mono">{filteredAttendance.length} Entries</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-semibold border-b border-slate-100">
              <tr>
                {isHR && <th className="px-6 py-3">Employee</th>}
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Check In</th>
                <th className="px-6 py-3">Check Out</th>
                <th className="px-6 py-3">Duration</th>
                <th className="px-6 py-3">Notes / Location</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredAttendance.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-8 text-center text-slate-400">
                    No attendance records found.
                  </td>
                </tr>
              ) : (
                filteredAttendance.map((att) => {
                  const emp = mockEngine.getEmployeeById(att.employee_id);
                  return (
                    <tr key={att.id} className="hover:bg-slate-50/80 transition-colors">
                      {isHR && (
                        <td className="px-6 py-3.5 font-medium text-slate-900">
                          <div className="flex items-center space-x-2.5">
                            <img
                              src={emp?.profile?.avatar_url}
                              alt={emp?.profile?.full_name}
                              className="w-7 h-7 rounded-full object-cover border border-slate-200"
                            />
                            <div>
                              <div className="font-semibold">{emp?.profile?.full_name}</div>
                              <div className="text-[10px] text-slate-400">{emp?.department?.code}</div>
                            </div>
                          </div>
                        </td>
                      )}
                      <td className="px-6 py-3.5 font-mono text-slate-800">{att.date}</td>
                      <td className="px-6 py-3.5">
                        <span
                          className={`px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide border ${
                            att.status === 'present'
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                              : att.status === 'late'
                              ? 'bg-amber-50 text-amber-700 border-amber-200'
                              : 'bg-rose-50 text-rose-700 border-rose-200'
                          }`}
                        >
                          {att.status}
                        </span>
                      </td>
                      <td className="px-6 py-3.5 font-mono">
                        {att.check_in
                          ? new Date(att.check_in).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                          : '--:--'}
                      </td>
                      <td className="px-6 py-3.5 font-mono">
                        {att.check_out
                          ? new Date(att.check_out).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                          : '--:--'}
                      </td>
                      <td className="px-6 py-3.5 font-mono">
                        {att.total_minutes ? `${Math.floor(att.total_minutes / 60)}h ${att.total_minutes % 60}m` : '--'}
                      </td>
                      <td className="px-6 py-3.5 text-slate-500 italic">
                        {att.notes || 'Normal workday entry'}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
