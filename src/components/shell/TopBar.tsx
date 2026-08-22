import React, { useState, useEffect } from 'react';
import { Search, Bell, Clock, ChevronDown, ShieldCheck, UserCheck } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { mockEngine } from '../../mock/mockEngine';
import { StatusBadge } from '../ui/StatusBadge';
import { Panel } from '../ui/Panel';

interface TopBarProps {
  onOpenCommandBar: () => void;
  onOpenNotifications: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenCommandBar, onOpenNotifications }) => {
  const { user, role, loginAs, logout } = useAuth();
  const [timeStr, setTimeStr] = useState<string>('');
  const [dateStr, setDateStr] = useState<string>('');
  const [unreadCount, setUnreadCount] = useState<number>(0);
  const [showRoleDropdown, setShowRoleDropdown] = useState<boolean>(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
      setDateStr(now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateNotifs = () => {
      const notifs = mockEngine.getNotifications();
      setUnreadCount(notifs.filter((n) => !n.read).length);
    };
    updateNotifs();
    const interval = setInterval(updateNotifs, 2000);
    return () => clearInterval(interval);
  }, [user]);

  const demoAccounts = [
    { id: 'f1000000-0000-0000-0000-000000000001', name: 'Ananya Sharma', role: 'Employee', title: 'Senior Frontend Engineer', status: 'present' as const },
    { id: 'f1000000-0000-0000-0000-000000000002', name: 'Rahul Verma', role: 'HR Manager', title: 'Lead People Ops', status: 'pending' as const },
    { id: 'f1000000-0000-0000-0000-000000000003', name: 'Vikramaditya Singh', role: 'System Admin', title: 'VP of Operations', status: 'info' as const },
  ];

  return (
    <header
      className="h-16 px-5 flex items-center justify-between shrink-0 z-10"
      style={{
        background: 'var(--df-surface)',
        borderBottom: '1px solid var(--df-border)',
      }}
    >
      {/* Search Launcher */}
      <div className="flex items-center space-x-4 flex-1 max-w-md">
        <button
          onClick={onOpenCommandBar}
          className="w-full flex items-center justify-between px-4 py-2 text-xs transition-colors group"
          style={{
            background: 'var(--df-bg)',
            border: '1px solid var(--df-border)',
            borderRadius: 'var(--df-radius)',
            color: 'var(--df-text-muted)',
          }}
        >
          <div className="flex items-center space-x-2">
            <Search className="w-4 h-4" style={{ color: 'var(--df-text-muted)' }} />
            <span className="df-label font-medium" style={{ color: 'var(--df-text-secondary)' }}>Search employees, actions...</span>
          </div>
          <div className="space-x-1 df-mono text-[10px]">
            <kbd className="px-1.5 py-0.5 font-bold" style={{ background: 'var(--df-surface)', border: '1px solid var(--df-border)', borderRadius: '4px', color: 'var(--df-text-secondary)' }}>⌘K</kbd>
          </div>
        </button>
      </div>

      {/* Right Utilities */}
      <div className="flex items-center space-x-4">
        {/* Time Indicator */}
        <div
          className="hidden md:flex items-center space-x-2 px-3 py-1.5 df-mono text-xs"
          style={{
            background: 'var(--df-bg)',
            border: '1px solid var(--df-border)',
            borderRadius: 'var(--df-radius)',
            color: 'var(--df-text-secondary)',
          }}
        >
          <Clock className="w-3.5 h-3.5" style={{ color: 'var(--df-accent)' }} />
          <span>{dateStr}</span>
          <span style={{ color: 'var(--df-border-strong)' }}>|</span>
          <span className="font-bold" style={{ color: 'var(--df-text-primary)' }}>{timeStr}</span>
        </div>

        {/* Notifications Button */}
        <button
          onClick={onOpenNotifications}
          className="relative p-2.5 transition-colors"
          style={{
            background: 'var(--df-bg)',
            border: '1px solid var(--df-border)',
            color: 'var(--df-text-secondary)',
            borderRadius: 'var(--df-radius)',
          }}
          title="Notifications"
        >
          <Bell className="w-4 h-4" />
          {unreadCount > 0 && (
            <span
              className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full animate-pulse border-2 border-white"
              style={{ background: 'var(--df-status-absent)', borderColor: 'var(--df-surface)' }}
            />
          )}
        </button>

        {/* Interactive Role Switcher Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowRoleDropdown(!showRoleDropdown)}
            className="flex items-center space-x-2 px-3 py-2 transition-colors"
            style={{
              background: 'var(--df-bg)',
              border: '1px solid var(--df-border)',
              borderRadius: 'var(--df-radius)',
            }}
          >
            <img
              src={user?.avatar_url}
              alt={user?.full_name}
              className="w-7 h-7 rounded-full object-cover"
              style={{ border: '1px solid var(--df-border)' }}
            />
            <div className="text-left hidden sm:block">
              <p className="df-label font-bold leading-tight" style={{ color: 'var(--df-text-primary)' }}>
                {user?.full_name}
              </p>
              <p className="text-[10px] font-medium capitalize" style={{ color: 'var(--df-text-muted)' }}>
                {role} Role
              </p>
            </div>
            <ChevronDown className="w-4 h-4" style={{ color: 'var(--df-text-muted)' }} />
          </button>

          {showRoleDropdown && (
            <div
              className="absolute right-0 mt-2 w-64 p-2 z-50 animate-in fade-in duration-150"
              style={{
                background: 'var(--df-surface)',
                border: '1px solid var(--df-border)',
                borderRadius: 'var(--df-radius)',
                boxShadow: 'var(--df-shadow-dropdown)',
              }}
            >
              <div
                className="px-3 py-2 df-label font-bold uppercase tracking-wider"
                style={{ color: 'var(--df-text-muted)', borderBottom: '1px solid var(--df-border)' }}
              >
                Switch Demo User / Role
              </div>
              <div className="py-1 space-y-0.5">
                {demoAccounts.map((acc) => (
                  <button
                    key={acc.id}
                    onClick={() => {
                      loginAs(acc.id);
                      setShowRoleDropdown(false);
                    }}
                    className="w-full text-left p-2 text-xs transition-colors flex items-center justify-between"
                    style={{
                      borderRadius: 'var(--df-radius)',
                      background: user?.id === acc.id ? 'var(--df-accent-subtle)' : 'transparent',
                      border: user?.id === acc.id ? '1px solid var(--df-accent)' : '1px solid transparent',
                    }}
                  >
                    <div>
                      <div className="font-semibold" style={{ color: 'var(--df-text-primary)' }}>{acc.name}</div>
                      <div className="text-[10px]" style={{ color: 'var(--df-text-muted)' }}>{acc.title}</div>
                    </div>
                    <StatusBadge status={acc.status}>{acc.role}</StatusBadge>
                  </button>
                ))}
              </div>
              <div
                className="mt-1 pt-1"
                style={{ borderTop: '1px solid var(--df-border)' }}
              >
                <button
                  onClick={() => {
                    logout();
                  }}
                  className="w-full text-left p-2 df-label font-semibold transition-colors hover:opacity-80 flex items-center space-x-2"
                  style={{ color: 'var(--df-status-absent)', borderRadius: 'var(--df-radius)' }}
                >
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
