import React, { useState, useEffect } from 'react';
import { Search, Filter, Mail, Phone, MapPin, Calendar, User, Shield, Briefcase, DollarSign, Activity, X } from 'lucide-react';
import { mockEngine } from '../../mock/mockEngine';
import { Employee } from '../../types';
import { useAuth } from '../../context/AuthContext';
import { PageHeader } from '../ui/PageHeader';
import { Panel } from '../ui/Panel';

export const People: React.FC = () => {
  const { isHR } = useAuth();
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [search, setSearch] = useState<string>('');
  const [selectedDept, setSelectedDept] = useState<string>('ALL');
  const [selectedEmp, setSelectedEmp] = useState<Employee | null>(null);

  useEffect(() => {
    setEmployees(mockEngine.getEmployees());
  }, []);

  const departments = mockEngine.getDepartments();

  const filtered = employees.filter((emp) => {
    const nameMatch = emp.profile?.full_name.toLowerCase().includes(search.toLowerCase());
    const codeMatch = emp.employee_code.toLowerCase().includes(search.toLowerCase());
    const deptMatch = selectedDept === 'ALL' || emp.department_id === selectedDept;
    return (nameMatch || codeMatch) && deptMatch;
  });

  return (
    <div className="space-y-5 animate-in fade-in duration-200">
      {/* Header */}
      <PageHeader
        title="People Directory"
        description="Search and inspect employee profiles, organizational departments, and Employee 360 insights."
      />

      {/* Search & Filter Toolbar */}
      <Panel padding="sm">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--df-text-muted)' }} />
            <input
              type="text"
              placeholder="Search by name, code, designation..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs font-medium focus:outline-none"
              style={{
                background: 'var(--df-bg)',
                border: '1px solid var(--df-border)',
                borderRadius: 'var(--df-radius)',
                color: 'var(--df-text-primary)',
              }}
            />
          </div>

          <div className="flex items-center space-x-2 w-full sm:w-auto overflow-x-auto">
            <button
              onClick={() => setSelectedDept('ALL')}
              className="px-3 py-1 text-xs font-semibold whitespace-nowrap"
              style={{
                borderRadius: 'var(--df-radius)',
                background: selectedDept === 'ALL' ? 'var(--df-accent)' : 'var(--df-bg)',
                color: selectedDept === 'ALL' ? 'var(--df-accent-text)' : 'var(--df-text-secondary)',
              }}
            >
              All
            </button>
            {departments.map((d) => (
              <button
                key={d.id}
                onClick={() => setSelectedDept(d.id)}
                className="px-3 py-1 text-xs font-semibold whitespace-nowrap"
                style={{
                  borderRadius: 'var(--df-radius)',
                  background: selectedDept === d.id ? 'var(--df-accent)' : 'var(--df-bg)',
                  color: selectedDept === d.id ? 'var(--df-accent-text)' : 'var(--df-text-secondary)',
                }}
              >
                {d.name}
              </button>
            ))}
          </div>
        </div>
      </Panel>

      {/* Directory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((emp) => (
          <div
            key={emp.id}
            onClick={() => setSelectedEmp(emp)}
            className="border transition-all cursor-pointer space-y-4 group p-5"
            style={{
              background: 'var(--df-surface)',
              borderColor: 'var(--df-border)',
              borderRadius: 'var(--df-radius)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--df-accent)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--df-border)'; }}
          >
            <div className="flex items-start space-x-4">
              <img
                src={emp.profile?.avatar_url}
                alt={emp.profile?.full_name}
                className="w-12 h-12 rounded-full object-cover"
                style={{ border: '2px solid var(--df-border)' }}
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm truncate" style={{ color: 'var(--df-text-primary)' }}>{emp.profile?.full_name}</h3>
                  <span
                    className="text-[10px] df-mono px-2 py-0.5 font-semibold"
                    style={{
                      background: 'var(--df-bg)',
                      borderRadius: 'var(--df-radius)',
                      color: 'var(--df-text-secondary)',
                    }}
                  >
                    {emp.employee_code}
                  </span>
                </div>
                <p className="text-xs font-medium truncate" style={{ color: 'var(--df-accent)' }}>{emp.designation?.title}</p>
                <p className="text-[11px] font-medium" style={{ color: 'var(--df-text-muted)' }}>{emp.department?.name}</p>
              </div>
            </div>

            <div className="pt-3 space-y-1.5 text-xs" style={{ borderTop: '1px solid var(--df-border)', color: 'var(--df-text-secondary)' }}>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5" style={{ color: 'var(--df-text-muted)' }} />
                <span className="truncate">{emp.profile?.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5" style={{ color: 'var(--df-text-muted)' }} />
                <span>{emp.phone}</span>
              </div>
            </div>

            <div className="pt-2 flex justify-between items-center text-xs font-semibold" style={{ color: 'var(--df-accent)' }}>
              <span>View Profile</span>
              <span>→</span>
            </div>
          </div>
        ))}
      </div>

      {/* Employee 360 Drawer */}
      {selectedEmp && (
        <div
          className="fixed inset-0 z-50 flex justify-end backdrop-blur-xs"
          style={{ background: 'rgba(0, 0, 0, 0.4)' }}
        >
          <div
            className="w-full max-w-xl h-full p-8 overflow-y-auto space-y-6 animate-in slide-in-from-right duration-200"
            style={{
              background: 'var(--df-surface)',
              borderLeft: '1px solid var(--df-border)',
              boxShadow: 'var(--df-shadow-overlay)',
            }}
          >
            <div className="flex items-center justify-between pb-4" style={{ borderBottom: '1px solid var(--df-border)' }}>
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" style={{ color: 'var(--df-accent)' }} />
                <h3 className="df-heading">Employee 360</h3>
              </div>
              <button onClick={() => setSelectedEmp(null)} className="p-1" style={{ color: 'var(--df-text-muted)' }}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <div
              className="flex items-center space-x-4 p-4"
              style={{
                background: 'var(--df-bg)',
                borderRadius: 'var(--df-radius)',
                border: '1px solid var(--df-border)',
              }}
            >
              <img
                src={selectedEmp.profile?.avatar_url}
                alt={selectedEmp.profile?.full_name}
                className="w-14 h-14 rounded-full object-cover"
                style={{ border: '2px solid var(--df-border)' }}
              />
              <div>
                <h4 className="text-lg font-bold" style={{ color: 'var(--df-text-primary)' }}>{selectedEmp.profile?.full_name}</h4>
                <p className="text-xs font-semibold" style={{ color: 'var(--df-accent)' }}>{selectedEmp.designation?.title}</p>
                <p className="text-xs" style={{ color: 'var(--df-text-muted)' }}>{selectedEmp.department?.name} • Code: {selectedEmp.employee_code}</p>
              </div>
            </div>

            {/* 360 Sections */}
            <div className="space-y-4 text-xs">
              <div
                className="p-4 space-y-2"
                style={{
                  background: 'var(--df-surface)',
                  borderRadius: 'var(--df-radius)',
                  border: '1px solid var(--df-border)',
                }}
              >
                <h5 className="df-label">Overview & Contact</h5>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span style={{ color: 'var(--df-text-muted)' }}>Email: </span>
                    <span className="font-semibold" style={{ color: 'var(--df-text-primary)' }}>{selectedEmp.profile?.email}</span>
                  </div>
                  <div>
                    <span style={{ color: 'var(--df-text-muted)' }}>Phone: </span>
                    <span className="font-semibold" style={{ color: 'var(--df-text-primary)' }}>{selectedEmp.phone}</span>
                  </div>
                  <div>
                    <span style={{ color: 'var(--df-text-muted)' }}>Join Date: </span>
                    <span className="font-semibold" style={{ color: 'var(--df-text-primary)' }}>{selectedEmp.join_date}</span>
                  </div>
                  <div>
                    <span style={{ color: 'var(--df-text-muted)' }}>Status: </span>
                    <span className="font-bold uppercase" style={{ color: 'var(--df-status-present)' }}>{selectedEmp.status}</span>
                  </div>
                </div>
              </div>

              {isHR && (
                <div
                  className="p-4 space-y-2"
                  style={{
                    background: 'var(--df-surface)',
                    borderRadius: 'var(--df-radius)',
                    border: '1px solid var(--df-border)',
                  }}
                >
                  <h5 className="df-label">Confidential Compensation</h5>
                  <div
                    className="flex justify-between items-center p-3"
                    style={{
                      background: 'var(--df-bg)',
                      borderRadius: 'var(--df-radius)',
                      border: '1px solid var(--df-border)',
                    }}
                  >
                    <span className="font-semibold" style={{ color: 'var(--df-text-secondary)' }}>Salary Grade:</span>
                    <span className="df-mono font-bold" style={{ color: 'var(--df-text-primary)' }}>{selectedEmp.designation?.salary_grade}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
