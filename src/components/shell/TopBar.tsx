import React, { useState, useEffect } from 'react';
import { Search, Bell, Clock, ChevronDown, ShieldCheck, UserCheck } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { mockEngine } from '../../mock/mockEngine';

interface TopBarProps {
  onOpenCommandBar: () => void;
  onOpenNotifications: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenCommandBar, onOpenNotifications }) => {
  const { user, role, loginAs } = useAuth();
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
    { id: 'p1', name: 'Ananya Sharma', role: 'Employee', title: 'Senior Frontend Engineer', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    { id: 'p2', name: 'Rahul Verma', role: 'HR Manager', title: 'Lead People Ops', color: 'bg-amber-50 text-amber-700 border-amber-200' },
    { id: 'p3', name: 'Vikramaditya Singh', role: 'System Admin', title: 'VP of Operations', color: 'bg-blue-50 text-blue-700 border-blue-200' },
  ];

  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between shrink-0 z-10">
      {/* Search Launcher */}
      <div className="flex items-center space-x-4 flex-1 max-w-md">
        <button
          onClick={onOpenCommandBar}
          className="w-full flex items-center justify-between px-3.5 py-2 bg-slate-100/80 hover:bg-slate-100 border border-slate-200/80 rounded-lg text-slate-500 text-xs transition-colors group"
        >
          <div className="flex items-center space-x-2">
            <Search className="w-4 h-4 text-slate-400 group-hover:text-slate-600" />
            <span className="font-medium text-slate-600">Quick Search employees, actions...</span>
          </div>
          <kbd className="px-2 py-0.5 bg-white border border-slate-200 rounded font-mono text-[10px] text-slate-500 shadow-2xs">
            ⌘K / Ctrl+K
          </kbd>
        </button>
      </div>

      {/* Right Utilities */}
      <div className="flex items-center space-x-4">
        {/* Time Indicator */}
        <div className="hidden md:flex items-center space-x-2 px-3 py-1.5 bg-slate-50 border border-slate-200/60 rounded-lg text-slate-600 text-xs font-mono">
          <Clock className="w-3.5 h-3.5 text-blue-600" />
          <span>{dateStr}</span>
          <span className="text-slate-300">|</span>
          <span className="font-semibold text-slate-900">{timeStr}</span>
        </div>

        {/* Notifications Button */}
        <button
          onClick={onOpenNotifications}
          className="relative p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
          title="Notifications"
        >
          <Bell className="w-5 h-5" />
          {unreadCount > 0 && (
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white animate-pulse" />
          )}
        </button>

        {/* Interactive Role Switcher Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowRoleDropdown(!showRoleDropdown)}
            className="flex items-center space-x-2.5 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors"
          >
            <img
              src={user?.avatar_url}
              alt={user?.full_name}
              className="w-7 h-7 rounded-full object-cover border border-slate-300"
            />
            <div className="text-left hidden sm:block">
              <p className="text-xs font-semibold text-slate-900 leading-tight">{user?.full_name}</p>
              <p className="text-[10px] text-slate-500 font-medium capitalize">{role} Role</p>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>

          {showRoleDropdown && (
            <div className="absolute right-0 mt-2 w-64 bg-white border border-slate-200 rounded-xl shadow-xl p-2 z-50 animate-in fade-in duration-150">
              <div className="px-3 py-2 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Switch Demo User / Role
              </div>
              <div className="py-1 space-y-1">
                {demoAccounts.map((acc) => (
                  <button
                    key={acc.id}
                    onClick={() => {
                      loginAs(acc.id);
                      setShowRoleDropdown(false);
                    }}
                    className={`w-full text-left p-2 rounded-lg text-xs transition-colors flex items-center justify-between ${
                      user?.id === acc.id ? 'bg-blue-50 border border-blue-200' : 'hover:bg-slate-50'
                    }`}
                  >
                    <div>
                      <div className="font-semibold text-slate-900">{acc.name}</div>
                      <div className="text-[10px] text-slate-500">{acc.title}</div>
                    </div>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${acc.color}`}>
                      {acc.role}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
