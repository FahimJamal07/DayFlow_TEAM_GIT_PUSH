import React, { useState, useEffect } from 'react';
import { Search, Filter, Mail, Phone, MapPin, Calendar, User, Shield, Briefcase, DollarSign, Activity, X } from 'lucide-react';
import { mockEngine } from '../../mock/mockEngine';
import { Employee } from '../../types';
import { useAuth } from '../../context/AuthContext';
import { PageHeader } from '../ui/PageHeader';
import { Panel } from '../ui/Panel';
import { EmptyState } from '../ui/EmptyState';
import { CardSkeleton } from '../ui/Skeleton';

export const People: React.FC = () => {
  const { isHR } = useAuth();
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [search, setSearch] = useState<string>('');
  const [selectedDept, setSelectedDept] = useState<string>('ALL');
  const [selectedEmp, setSelectedEmp] = useState<Employee | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    setEmployees(mockEngine.getEmployees());
    // Simulate tiny delay to show skeleton as requested by prompt
    setTimeout(() => setIsLoading(false), 300);
  }, []);

  const departments = mockEngine.getDepartments();

  const filtered = employees.filter((emp) => {
    const nameMatch = emp.profile?.full_name.toLowerCase().includes(search.toLowerCase());
    const codeMatch = emp.employee_code.toLowerCase().includes(search.toLowerCase());
    const deptMatch = selectedDept === 'ALL' || emp.department_id === selectedDept;
    return (nameMatch || codeMatch) && deptMatch;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <PageHeader
        title="People Directory"
        description="Search and inspect employee profiles, organizational departments, and Employee 360 insights."
      />

      {/* Search & Filter Toolbar */}
      <Panel padding="md">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--df-text-muted)' }} />
            <input
              type="text"
              placeholder="Search by name, code, designation..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm font-medium focus:outline-none transition-colors"
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
              className="px-4 py-2 df-label font-bold whitespace-nowrap transition-colors"
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
                className="px-4 py-2 df-label font-bold whitespace-nowrap transition-colors"
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
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      ) : filtered.length === 0 ? (
        <EmptyState
          title="No employees found"
          description="Try adjusting your search query or department filter."
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((emp) => (
            <Panel
              key={emp.id}
              padding="lg"
              className="cursor-pointer group hover:border-accent transition-colors"
            >
              <div onClick={() => setSelectedEmp(emp)} className="h-full flex flex-col">
                <div className="flex items-start space-x-4 mb-4">
                  <img
                    src={emp.profile?.avatar_url}
                    alt={emp.profile?.full_name}
                    className="w-14 h-14 rounded-full object-cover"
                    style={{ border: '1px solid var(--df-border)' }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-base truncate" style={{ color: 'var(--df-text-primary)' }}>{emp.profile?.full_name}</h3>
                    </div>
                    <p className="text-sm font-semibold truncate mt-0.5" style={{ color: 'var(--df-accent)' }}>{emp.designation?.title}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span
                        className="text-[10px] df-mono px-1.5 py-0.5 font-bold"
                        style={{
                          background: 'var(--df-bg)',
                          borderRadius: 'var(--df-radius)',
                          color: 'var(--df-text-secondary)',
                        }}
                      >
                        {emp.employee_code}
                      </span>
                      <p className="text-xs font-medium truncate" style={{ color: 'var(--df-text-muted)' }}>{emp.department?.name}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 space-y-2 text-sm flex-1" style={{ borderTop: '1px solid var(--df-border)', color: 'var(--df-text-secondary)' }}>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4" style={{ color: 'var(--df-text-muted)' }} />
                    <span className="truncate">{emp.profile?.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4" style={{ color: 'var(--df-text-muted)' }} />
                    <span>{emp.phone}</span>
                  </div>
                </div>

                <div className="pt-4 mt-auto flex justify-between items-center df-label font-bold" style={{ color: 'var(--df-accent)' }}>
                  <span>View Profile</span>
                  <span>→</span>
                </div>
              </div>
            </Panel>
          ))}
        </div>
      )}

      {/* Employee 360 Drawer */}
      {selectedEmp && (
        <div
          className="fixed inset-0 z-50 flex justify-end backdrop-blur-sm"
          style={{ background: 'rgba(0, 0, 0, 0.6)' }}
        >
          <div
            className="w-full max-w-xl h-full flex flex-col animate-in slide-in-from-right duration-200"
            style={{
              background: 'var(--df-surface)',
              borderLeft: '1px solid var(--df-border)',
              boxShadow: 'var(--df-shadow-overlay)',
            }}
          >
            <div className="p-5 flex items-center justify-between" style={{ borderBottom: '1px solid var(--df-border)' }}>
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" style={{ color: 'var(--df-accent)' }} />
                <h3 className="df-heading">Employee 360</h3>
              </div>
              <button onClick={() => setSelectedEmp(null)} className="p-1" style={{ color: 'var(--df-text-muted)' }}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <div
                className="flex items-center space-x-5 p-5"
                style={{
                  background: 'var(--df-bg)',
                  borderRadius: 'var(--df-radius)',
                  border: '1px solid var(--df-border)',
                }}
              >
                <img
                  src={selectedEmp.profile?.avatar_url}
                  alt={selectedEmp.profile?.full_name}
                  className="w-16 h-16 rounded-full object-cover"
                  style={{ border: '2px solid var(--df-border)' }}
                />
                <div>
                  <h4 className="text-xl font-bold" style={{ color: 'var(--df-text-primary)' }}>{selectedEmp.profile?.full_name}</h4>
                  <p className="text-sm font-bold mt-1" style={{ color: 'var(--df-accent)' }}>{selectedEmp.designation?.title}</p>
                  <p className="text-xs mt-1" style={{ color: 'var(--df-text-muted)' }}>{selectedEmp.department?.name} • Code: {selectedEmp.employee_code}</p>
                </div>
              </div>

              {/* 360 Sections */}
              <div className="space-y-5 text-sm">
                <div
                  className="p-5 space-y-4"
                  style={{
                    background: 'var(--df-surface)',
                    borderRadius: 'var(--df-radius)',
                    border: '1px solid var(--df-border)',
                  }}
                >
                  <h5 className="df-label font-bold" style={{ color: 'var(--df-text-primary)' }}>Overview & Contact</h5>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="block mb-1 text-xs" style={{ color: 'var(--df-text-muted)' }}>Email </span>
                      <span className="font-semibold" style={{ color: 'var(--df-text-primary)' }}>{selectedEmp.profile?.email}</span>
                    </div>
                    <div>
                      <span className="block mb-1 text-xs" style={{ color: 'var(--df-text-muted)' }}>Phone </span>
                      <span className="font-semibold" style={{ color: 'var(--df-text-primary)' }}>{selectedEmp.phone}</span>
                    </div>
                    <div>
                      <span className="block mb-1 text-xs" style={{ color: 'var(--df-text-muted)' }}>Join Date </span>
                      <span className="font-semibold" style={{ color: 'var(--df-text-primary)' }}>{selectedEmp.join_date}</span>
                    </div>
                    <div>
                      <span className="block mb-1 text-xs" style={{ color: 'var(--df-text-muted)' }}>Status </span>
                      <span className="font-bold uppercase tracking-wide" style={{ color: 'var(--df-status-present)' }}>{selectedEmp.status}</span>
                    </div>
                  </div>
                </div>

                {isHR && (
                  <div
                    className="p-5 space-y-4"
                    style={{
                      background: 'var(--df-surface)',
                      borderRadius: 'var(--df-radius)',
                      border: '1px solid var(--df-border)',
                    }}
                  >
                    <h5 className="df-label font-bold" style={{ color: 'var(--df-text-primary)' }}>Confidential Compensation</h5>
                    <div
                      className="flex justify-between items-center p-4"
                      style={{
                        background: 'var(--df-bg)',
                        borderRadius: 'var(--df-radius)',
                        border: '1px solid var(--df-border)',
                      }}
                    >
                      <span className="font-bold" style={{ color: 'var(--df-text-secondary)' }}>Salary Grade:</span>
                      <span className="df-mono font-bold text-lg" style={{ color: 'var(--df-text-primary)' }}>{selectedEmp.designation?.salary_grade}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
