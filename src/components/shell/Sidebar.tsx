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
import { StatusBadge } from '../ui/StatusBadge';

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
    <aside
      className="w-64 flex flex-col h-screen shrink-0 select-none"
      style={{
        background: 'var(--df-sidebar-bg)',
        color: 'var(--df-sidebar-text)',
        borderRight: '1px solid var(--df-sidebar-border)',
      }}
    >
      {/* Brand Header */}
      <div
        className="p-5 flex items-center space-x-3"
        style={{ borderBottom: '1px solid var(--df-sidebar-border)' }}
      >
        <div
          className="df-display text-2xl font-black"
          style={{
            color: 'var(--df-accent)',
          }}
        >
          D
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <span className="df-label tracking-tight font-bold" style={{ color: 'var(--df-sidebar-text-active)' }}>
              DAYFLOW
            </span>
            <span
              className="text-[10px] px-1.5 py-0.5 font-mono"
              style={{
                borderRadius: 'var(--df-radius)',
                background: 'var(--df-accent-subtle)',
                color: 'var(--df-accent)',
                border: '1px solid rgba(91, 91, 214, 0.2)',
              }}
            >
              OS
            </span>
          </div>
        </div>
      </div>

      {/* Role Badge Banner */}
      <div
        className="px-5 py-3 flex items-center justify-between"
        style={{
          background: 'rgba(0, 0, 0, 0.15)',
          borderBottom: '1px solid var(--df-sidebar-border)',
        }}
      >
        <span className="df-label" style={{ color: 'var(--df-sidebar-text)' }}>Role Context</span>
        <StatusBadge status={isHR ? 'pending' : 'present'}>
          {user?.role || 'Employee'}
        </StatusBadge>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        {activeLinks.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className="flex items-center justify-between px-3 py-2 df-label transition-all group"
              style={{
                borderRadius: 'var(--df-radius)',
                background: isActive ? 'var(--df-accent)' : 'transparent',
                color: isActive ? 'var(--df-accent-text)' : 'var(--df-sidebar-text)',
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = 'var(--df-sidebar-hover)';
                  e.currentTarget.style.color = 'var(--df-sidebar-text-active)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--df-sidebar-text)';
                }
              }}
            >
              <div className="flex items-center space-x-3">
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </div>
              {item.badge !== undefined && item.badge > 0 && (
                <span
                  className="px-2 py-0.5 df-mono text-[10px] font-bold"
                  style={{
                    borderRadius: 'var(--df-radius-full)',
                    background: isActive ? 'var(--df-accent-text)' : 'var(--df-status-pending)',
                    color: isActive ? 'var(--df-accent)' : 'var(--df-status-pending-text)',
                  }}
                >
                  {item.badge}
                </span>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* User Profile Mini Footer */}
      <div
        className="p-4 flex items-center space-x-3"
        style={{
          borderTop: '1px solid var(--df-sidebar-border)',
          background: 'rgba(0, 0, 0, 0.15)',
        }}
      >
        <img
          src={user?.avatar_url}
          alt={user?.full_name}
          className="w-10 h-10 rounded-full object-cover"
          style={{ border: '1px solid var(--df-sidebar-border)' }}
        />
        <div className="flex-1 min-w-0">
          <p className="df-label font-bold truncate" style={{ color: 'var(--df-sidebar-text-active)' }}>
            {user?.full_name}
          </p>
          <p className="text-[10px] truncate mt-0.5" style={{ color: 'var(--df-sidebar-text)' }}>
            {user?.email}
          </p>
        </div>
      </div>
    </aside>
  );
};
