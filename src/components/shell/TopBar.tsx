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
  const [showDemoDropdown, setShowDemoDropdown] = useState<boolean>(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState<boolean>(false);

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

        {/* Demo Mode Control */}
        <div className="relative">
          <button
            onClick={() => {
              setShowDemoDropdown(!showDemoDropdown);
              setShowProfileDropdown(false);
            }}
            className="hidden md:flex items-center space-x-2 px-3 py-1.5 text-xs transition-colors"
            style={{
              background: 'transparent',
              border: '1px dashed var(--df-border-strong)',
              borderRadius: 'var(--df-radius)',
              color: 'var(--df-text-muted)',
            }}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span className="font-bold uppercase tracking-wider">Demo Mode</span>
          </button>
          
          {showDemoDropdown && (
            <div
              className="absolute right-0 mt-2 w-72 p-0 z-50 animate-in fade-in duration-150"
              style={{
                background: 'var(--df-surface)',
                border: '1px solid var(--df-border)',
                borderRadius: 'var(--df-radius)',
                boxShadow: 'var(--df-shadow-dropdown)',
              }}
            >
              <Panel padding="none" className="overflow-hidden">
                <div className="p-3" style={{ borderBottom: '1px solid var(--df-border)', background: 'var(--df-bg)' }}>
                  <div className="df-label font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--df-text-primary)' }}>
                    Demo Mode — Switch Persona
                  </div>
                  <div className="text-[10px]" style={{ color: 'var(--df-text-muted)' }}>
                    For demonstration purposes only. Switches the active persona without ending the real session.
                  </div>
                </div>
                <div className="p-1 space-y-0.5 max-h-64 overflow-y-auto">
                  {demoAccounts.map((acc) => (
                    <button
                      key={acc.id}
                      onClick={() => {
                        loginAs(acc.id);
                        setShowDemoDropdown(false);
                      }}
                      className="w-full text-left p-2 text-xs transition-colors flex items-center justify-between group"
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
              </Panel>
            </div>
          )}
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

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setShowProfileDropdown(!showProfileDropdown);
              setShowDemoDropdown(false);
            }}
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

          {showProfileDropdown && (
            <div
              className="absolute right-0 mt-2 w-56 p-2 z-50 animate-in fade-in duration-150"
              style={{
                background: 'var(--df-surface)',
                border: '1px solid var(--df-border)',
                borderRadius: 'var(--df-radius)',
                boxShadow: 'var(--df-shadow-dropdown)',
              }}
            >
              <div className="px-3 py-3" style={{ borderBottom: '1px solid var(--df-border)' }}>
                <p className="df-label font-bold" style={{ color: 'var(--df-text-primary)' }}>{user?.full_name}</p>
                <p className="text-xs mt-0.5" style={{ color: 'var(--df-text-muted)' }}>{user?.email}</p>
                <div className="mt-2">
                   <StatusBadge status="info">{role}</StatusBadge>
                </div>
              </div>
              
              <div className="py-1">
                <button
                  onClick={() => {
                    logout();
                  }}
                  className="w-full text-left px-3 py-2 text-sm font-semibold transition-colors hover:bg-opacity-80 flex items-center space-x-2 mt-1"
                  style={{ color: 'var(--df-status-absent)', borderRadius: 'var(--df-radius)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--df-status-absent-subtle)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
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
