import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, User, Calendar, DollarSign, Bell, Shield, Activity, ArrowRight, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { mockEngine } from '../../mock/mockEngine';
import { Employee } from '../../types';

function parseCommandIntent(query: string, isHR: boolean): { type: 'navigate' | 'none', path?: string, title?: string, description?: string } {
  const q = query.toLowerCase().trim();
  if (!q) return { type: 'none' };

  if (isHR && (q.includes("pending leaves") || q.includes("pending requests") || q.includes("leave requests"))) {
    return { type: 'navigate', path: '/decisions', title: 'Decision Inbox', description: 'Pending leave decisions' };
  }
  if (isHR && (q.includes("who's late") || q.includes("late checkins") || q.includes("late arrivals") || q.includes("who is late"))) {
    return { type: 'navigate', path: '/signals', title: 'Signals', description: 'Attendance anomalies and late check-in patterns' };
  }
  if (q.includes("my payroll") || q.includes("my salary") || q.includes("payslip")) {
    return { type: 'navigate', path: '/payroll', title: 'Payroll', description: 'View your confidential payslip and salary history' };
  }
  if (q.includes("team availability") || q.includes("who's on leave") || q.includes("who's away") || q.includes("who is on leave") || q.includes("who is away")) {
    return { type: 'navigate', path: '/presence', title: 'Presence', description: 'Check team availability and current presence' };
  }
  if (q.includes("audit") || q.includes("activity log") || q.includes("history")) {
    return { type: 'navigate', path: '/activity', title: 'Activity Log', description: 'View system audit trails and history' };
  }
  if (isHR && (q.includes("reports") || q.includes("export"))) {
    return { type: 'navigate', path: '/reports', title: 'Reports', description: 'Generate and export datasets' };
  }
  
  return { type: 'none' };
}

interface CommandBarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandBar: React.FC<CommandBarProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { isHR } = useAuth();
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    setEmployees(mockEngine.getEmployees());
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled by parent
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredEmployees = employees.filter(
    (e) =>
      e.profile?.full_name.toLowerCase().includes(query.toLowerCase()) ||
      e.employee_code.toLowerCase().includes(query.toLowerCase()) ||
      e.department?.name.toLowerCase().includes(query.toLowerCase())
  );

  const navigationItems = [
    { label: 'Workday', path: '/workday', icon: Calendar, category: 'Navigation' },
    { label: 'Your Presence', path: '/presence', icon: Activity, category: 'Navigation' },
    { label: 'Time Off / Leave', path: '/timeoff', icon: Calendar, category: 'Navigation' },
    { label: 'Payroll & Salary', path: '/payroll', icon: DollarSign, category: 'Navigation' },
    ...(isHR
      ? [
          { label: 'Control Room', path: '/control-room', icon: Shield, category: 'HR Tools' },
          { label: 'Decision Inbox', path: '/decisions', icon: Bell, category: 'HR Tools' },
          { label: 'People Directory', path: '/people', icon: User, category: 'HR Tools' },
          { label: 'Workforce Signals', path: '/signals', icon: Activity, category: 'HR Tools' },
          { label: 'Reports & Export', path: '/reports', icon: ArrowRight, category: 'HR Tools' },
        ]
      : []),
  ];

  const filteredNav = navigationItems.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const intentMatch = parseCommandIntent(query, isHR);

  const handleSelect = (path: string) => {
    navigate(path);
    onClose();
    setQuery('');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      style={{ background: 'rgba(0, 0, 0, 0.6)' }}
    >
      <div
        className="w-full max-w-2xl overflow-hidden flex flex-col max-h-[80vh]"
        style={{
          background: 'var(--df-surface)',
          borderRadius: 'var(--df-radius)',
          border: '1px solid var(--df-border)',
          boxShadow: 'var(--df-shadow-overlay)',
        }}
      >
        {/* Search Header */}
        <div
          className="flex items-center px-5 py-4"
          style={{ borderBottom: '1px solid var(--df-border)', background: 'var(--df-bg)' }}
        >
          <Search className="w-5 h-5 mr-3 shrink-0" style={{ color: 'var(--df-text-muted)' }} />
          <input
            type="text"
            className="w-full bg-transparent text-sm focus:outline-none font-medium"
            style={{ color: 'var(--df-text-primary)' }}
            placeholder="Type a command or search employees, modules, decisions... (Press Esc to exit)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <button onClick={onClose} className="p-1" style={{ color: 'var(--df-text-muted)' }}>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-2 space-y-4">
          
          {/* Suggested Intent */}
          {intentMatch.type === 'navigate' && intentMatch.path && (
            <div>
              <div className="df-label px-4 py-2 font-bold" style={{ color: 'var(--df-text-secondary)' }}>
                Suggested
              </div>
              <div className="px-2">
                <button
                  onClick={() => handleSelect(intentMatch.path!)}
                  className="w-full flex items-center justify-between px-4 py-3 transition-colors text-left"
                  style={{
                    borderRadius: 'var(--df-radius)',
                    background: 'var(--df-accent-subtle)',
                    border: '1px solid var(--df-accent)',
                  }}
                >
                  <div className="flex flex-col">
                    <span className="df-label font-bold" style={{ color: 'var(--df-text-primary)' }}>{intentMatch.title}</span>
                    <span className="text-xs mt-0.5" style={{ color: 'var(--df-text-secondary)' }}>{intentMatch.description}</span>
                  </div>
                  <span className="text-xs flex items-center font-bold" style={{ color: 'var(--df-accent)' }}>
                    Go <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* Navigation Section */}
          {filteredNav.length > 0 && (
            <div>
              <div className="df-label px-4 py-2 font-bold" style={{ color: 'var(--df-text-secondary)' }}>
                Modules & Shortcuts
              </div>
              <div className="space-y-1 px-2">
                {filteredNav.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.path}
                      onClick={() => handleSelect(item.path)}
                      className="w-full flex items-center justify-between px-3 py-2.5 transition-colors group text-left"
                      style={{
                        borderRadius: 'var(--df-radius)',
                        color: 'var(--df-text-primary)',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--df-bg)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon className="w-4 h-4" style={{ color: 'var(--df-text-muted)' }} />
                        <span className="df-label font-bold">{item.label}</span>
                      </div>
                      <span className="text-xs flex items-center" style={{ color: 'var(--df-text-muted)' }}>
                        Go <ArrowRight className="w-3 h-3 ml-1" />
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Employees Section */}
          {isHR && filteredEmployees.length > 0 && (
            <div>
              <div className="df-label px-4 py-2 font-bold" style={{ color: 'var(--df-text-secondary)' }}>
                People Directory
              </div>
              <div className="space-y-1 px-2">
                {filteredEmployees.map((emp) => (
                  <button
                    key={emp.id}
                    onClick={() => handleSelect(`/people?id=${emp.id}`)}
                    className="w-full flex items-center justify-between px-3 py-2.5 transition-colors group text-left"
                    style={{
                      borderRadius: 'var(--df-radius)',
                      color: 'var(--df-text-primary)',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--df-bg)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={emp.profile?.avatar_url}
                        alt={emp.profile?.full_name}
                        className="w-8 h-8 rounded-full object-cover"
                        style={{ border: '1px solid var(--df-border)' }}
                      />
                      <div>
                        <div className="df-label font-bold" style={{ color: 'var(--df-text-primary)' }}>{emp.profile?.full_name}</div>
                        <div className="text-[11px]" style={{ color: 'var(--df-text-muted)' }}>
                          {emp.employee_code} • {emp.department?.name} • {emp.designation?.title}
                        </div>
                      </div>
                    </div>
                    <span className="df-label font-bold" style={{ color: 'var(--df-accent)' }}>
                      View Profile
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {intentMatch.type === 'none' && filteredNav.length === 0 && filteredEmployees.length === 0 && (
            <div className="px-4 py-8 text-center df-label" style={{ color: 'var(--df-text-muted)' }}>
              No matching results found for "{query}"
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          className="px-5 py-3 flex items-center justify-between text-xs"
          style={{
            background: 'var(--df-bg)',
            borderTop: '1px solid var(--df-border)',
            color: 'var(--df-text-muted)',
          }}
        >
          <span className="flex items-center">
            Use{' '}
            <div className="space-x-1 df-mono text-[10px] mx-1">
              <kbd className="px-1.5 py-0.5 font-bold inline-block" style={{ background: 'var(--df-surface)', border: '1px solid var(--df-border)', borderRadius: '4px', color: 'var(--df-text-secondary)' }}>↑</kbd>{' '}
              <kbd className="px-1.5 py-0.5 font-bold inline-block" style={{ background: 'var(--df-surface)', border: '1px solid var(--df-border)', borderRadius: '4px', color: 'var(--df-text-secondary)' }}>↓</kbd>
            </div>{' '}
            to navigate
          </span>
          <span className="flex items-center">
            <kbd className="px-1.5 py-0.5 mr-1 df-mono text-[10px] font-bold inline-block" style={{ background: 'var(--df-surface)', border: '1px solid var(--df-border)', borderRadius: '4px', color: 'var(--df-text-secondary)' }}>ESC</kbd>{' '}
            to close
          </span>
        </div>
      </div>
    </div>
  );
};
