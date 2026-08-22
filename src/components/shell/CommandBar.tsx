import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, User, Calendar, DollarSign, Bell, Shield, Activity, ArrowRight, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { mockEngine } from '../../mock/mockEngine';
import { Employee } from '../../types';

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

  const handleSelect = (path: string) => {
    navigate(path);
    onClose();
    setQuery('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-slate-900/60 backdrop-blur-xs p-4 animate-in fade-in duration-150">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Header */}
        <div className="flex items-center px-4 py-3 border-b border-slate-100 bg-slate-50/50">
          <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
          <input
            type="text"
            className="w-full bg-transparent text-slate-800 text-sm focus:outline-none placeholder-slate-400 font-medium"
            placeholder="Type a command or search employees, modules, decisions... (Press Esc to exit)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-slate-600 rounded">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-2 space-y-4">
          {/* Navigation Section */}
          {filteredNav.length > 0 && (
            <div>
              <div className="px-3 py-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Modules & Shortcuts
              </div>
              <div className="space-y-0.5">
                {filteredNav.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.path}
                      onClick={() => handleSelect(item.path)}
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors group text-left"
                    >
                      <div className="flex items-center space-x-3">
                        <Icon className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                        <span className="font-medium">{item.label}</span>
                      </div>
                      <span className="text-xs text-slate-400 group-hover:text-slate-600 flex items-center">
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
              <div className="px-3 py-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                People Directory
              </div>
              <div className="space-y-0.5">
                {filteredEmployees.map((emp) => (
                  <button
                    key={emp.id}
                    onClick={() => handleSelect(`/people?id=${emp.id}`)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-slate-100 transition-colors group text-left"
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={emp.profile?.avatar_url}
                        alt={emp.profile?.full_name}
                        className="w-7 h-7 rounded-full object-cover border border-slate-200"
                      />
                      <div>
                        <div className="font-medium text-slate-800">{emp.profile?.full_name}</div>
                        <div className="text-xs text-slate-500">
                          {emp.employee_code} • {emp.department?.name} • {emp.designation?.title}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-slate-400 group-hover:text-blue-600 font-medium">
                      View Profile
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {filteredNav.length === 0 && filteredEmployees.length === 0 && (
            <div className="px-4 py-8 text-center text-slate-500 text-sm">
              No matching results found for "{query}"
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
          <span>Use <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-slate-600 font-mono text-[10px]">↑</kbd> <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-slate-600 font-mono text-[10px]">↓</kbd> to navigate</span>
          <span><kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-slate-600 font-mono text-[10px]">ESC</kbd> to close</span>
        </div>
      </div>
    </div>
  );
};
