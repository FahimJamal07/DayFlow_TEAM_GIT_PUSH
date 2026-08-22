import React, { useState, useEffect } from 'react';
import { Calendar, Clock, CheckCircle2, XCircle, AlertTriangle, Users, Building, Filter } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { mockEngine } from '../../mock/mockEngine';
import { AttendanceRecord, Employee } from '../../types';
import { PageHeader } from '../ui/PageHeader';
import { Panel } from '../ui/Panel';
import { StatBlock } from '../ui/StatBlock';
import { StatusBadge } from '../ui/StatusBadge';
import { DataTable } from '../ui/DataTable';
import { Button } from '../ui/Button';

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
      <PageHeader
        title={isHR ? 'Workforce Presence' : 'Your Presence & History'}
        description={
          isHR
            ? 'Real-time company-wide attendance tracking and department breakdowns'
            : 'Personal attendance records, check-in timestamps, and monthly hours'
        }
      />

      {/* HR Workforce Summary Metrics */}
      {isHR && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <StatBlock value={totalEmps} label="Total Workforce" icon={Users} />
          <StatBlock value={presentCount} label="Present Today" icon={CheckCircle2} />
          <StatBlock value={lateCount} label="Late Arrivals" icon={AlertTriangle} />
          <StatBlock value={absentCount} label="Absent / Away" icon={XCircle} />
        </div>
      )}

      {/* Filter Toolbar for HR */}
      {isHR && (
        <Panel padding="sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Filter className="w-4 h-4" style={{ color: 'var(--df-text-muted)' }} />
              <span className="df-label" style={{ color: 'var(--df-text-primary)' }}>Department:</span>
            </div>

            <div className="flex items-center space-x-2 overflow-x-auto">
              <button
                onClick={() => setSelectedDept('ALL')}
                className="px-4 py-1.5 df-label font-bold transition-colors"
                style={{
                  borderRadius: 'var(--df-radius)',
                  background: selectedDept === 'ALL' ? 'var(--df-accent)' : 'var(--df-bg)',
                  color: selectedDept === 'ALL' ? 'var(--df-accent-text)' : 'var(--df-text-secondary)',
                }}
              >
                All
              </button>
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDept(dept.id)}
                  className="px-4 py-1.5 df-label font-bold transition-colors"
                  style={{
                    borderRadius: 'var(--df-radius)',
                    background: selectedDept === dept.id ? 'var(--df-accent)' : 'var(--df-bg)',
                    color: selectedDept === dept.id ? 'var(--df-accent-text)' : 'var(--df-text-secondary)',
                  }}
                >
                  {dept.name}
                </button>
              ))}
            </div>
          </div>
        </Panel>
      )}

      {/* Attendance History Table */}
      <DataTable
        title="Attendance Records"
        count={`${filteredAttendance.length} Entries`}
        headers={[...(isHR ? ['Employee'] : []), 'Date', 'Status', 'Check In', 'Check Out', 'Duration', 'Notes']}
        isEmpty={filteredAttendance.length === 0}
        emptyMessage="No attendance records found."
        colSpan={isHR ? 7 : 6}
      >
        {filteredAttendance.map((att) => {
          const emp = mockEngine.getEmployeeById(att.employee_id);
          return (
            <tr
              key={att.id}
              className="transition-colors"
              style={{ borderBottom: '1px solid var(--df-border)' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--df-bg)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
            >
              {isHR && (
                <td className="px-5 py-4 font-medium" style={{ color: 'var(--df-text-primary)' }}>
                  <div className="flex items-center space-x-3">
                    <img
                      src={emp?.profile?.avatar_url}
                      alt={emp?.profile?.full_name}
                      className="w-8 h-8 rounded-full object-cover"
                      style={{ border: '1px solid var(--df-border)' }}
                    />
                    <div>
                      <div className="font-bold text-sm">{emp?.profile?.full_name}</div>
                      <div className="text-[11px]" style={{ color: 'var(--df-text-muted)' }}>{emp?.department?.code}</div>
                    </div>
                  </div>
                </td>
              )}
              <td className="px-5 py-4 df-mono text-sm" style={{ color: 'var(--df-text-primary)' }}>{att.date}</td>
              <td className="px-5 py-4">
                <StatusBadge
                  status={att.status === 'present' ? 'present' : att.status === 'late' ? 'late' : 'absent'}
                >
                  {att.status}
                </StatusBadge>
              </td>
              <td className="px-5 py-4 df-mono text-sm">
                {att.check_in
                  ? new Date(att.check_in).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                  : '--:--'}
              </td>
              <td className="px-5 py-4 df-mono text-sm">
                {att.check_out
                  ? new Date(att.check_out).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                  : '--:--'}
              </td>
              <td className="px-5 py-4 df-mono text-sm">
                {att.total_minutes ? `${Math.floor(att.total_minutes / 60)}h ${att.total_minutes % 60}m` : '--'}
              </td>
              <td className="px-5 py-4 text-sm italic" style={{ color: 'var(--df-text-muted)' }}>
                {att.notes || 'Normal workday entry'}
              </td>
            </tr>
          );
        })}
      </DataTable>
    </div>
  );
};
