import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Calendar,
  Clock,
  Briefcase,
  DollarSign,
  Users,
  Inbox,
  Activity,
  BarChart3,
  Shield,
  Sparkles,
  LucideIcon,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { mockEngine } from '../../mock/mockEngine';

interface NavItem {
  label: string;
  path: string;
  icon: LucideIcon;
  badge?: number;
}

export const Sidebar: React.FC = () => {
  const { user, isHR } = useAuth();
  const location = useLocation();
  const [pendingCount, setPendingCount] = useState<number>(0);

  useEffect(() => {
    const updateCount = () => {
      setPendingCount(mockEngine.getPendingDecisionsCount());
    };
    updateCount();
    const interval = setInterval(updateCount, 2000);
    return () => clearInterval(interval);
  }, []);

  const employeeLinks: NavItem[] = [
    { label: 'Workday', path: '/workday', icon: Clock },
    { label: 'Your Presence', path: '/presence', icon: Calendar },
    { label: 'Time Off', path: '/timeoff', icon: Briefcase },
    { label: 'Payroll', path: '/payroll', icon: DollarSign },
    { label: 'Activity Log', path: '/activity', icon: Activity },
  ];

  const hrLinks: NavItem[] = [
    { label: 'Control Room', path: '/control-room', icon: Shield },
    { label: 'Decision Inbox', path: '/decisions', icon: Inbox, badge: pendingCount },
    { label: 'People Directory', path: '/people', icon: Users },
    { label: 'Workforce Presence', path: '/presence', icon: Calendar },
    { label: 'Time Off Management', path: '/timeoff', icon: Briefcase },
    { label: 'Payroll Engine', path: '/payroll', icon: DollarSign },
    { label: 'Signals', path: '/signals', icon: Sparkles },
    { label: 'Reports', path: '/reports', icon: BarChart3 },
    { label: 'Audit Trail', path: '/activity', icon: Activity },
  ];

  const activeLinks = isHR ? hrLinks : employeeLinks;

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col h-screen border-r border-slate-800 shrink-0 select-none">
      {/* Brand Header */}
      <div className="p-4 border-b border-slate-800/80 flex items-center space-x-3">
        <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-blue-500/20">
          D
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <span className="font-bold text-white tracking-tight text-base">DAYFLOW</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
              OS
            </span>
          </div>
          <p className="text-[11px] text-slate-400 font-medium">Workday Operating System</p>
        </div>
      </div>

      {/* Role Badge Banner */}
      <div className="px-4 py-2 bg-slate-950/60 border-b border-slate-800/60 flex items-center justify-between text-xs">
        <span className="text-slate-400 font-medium">Role Context</span>
        <span
          className={`px-2 py-0.5 rounded-full text-[11px] font-semibold tracking-wide uppercase ${
            isHR ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30' : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
          }`}
        >
          {user?.role || 'Employee'}
        </span>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {activeLinks.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition-all group ${
                isActive
                  ? 'bg-blue-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/70'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Icon
                  className={`w-4 h-4 transition-colors ${
                    isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
                  }`}
                />
                <span>{item.label}</span>
              </div>
              {item.badge !== undefined && item.badge > 0 && (
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    isActive ? 'bg-white text-blue-700' : 'bg-amber-500 text-slate-950 animate-pulse'
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* User Profile Mini Footer */}
      <div className="p-3 border-t border-slate-800/80 bg-slate-950/40 flex items-center space-x-3">
        <img
          src={user?.avatar_url}
          alt={user?.full_name}
          className="w-8 h-8 rounded-full object-cover border border-slate-700"
        />
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-slate-200 truncate">{user?.full_name}</p>
          <p className="text-[10px] text-slate-400 truncate">{user?.email}</p>
        </div>
      </div>
    </aside>
  );
};
