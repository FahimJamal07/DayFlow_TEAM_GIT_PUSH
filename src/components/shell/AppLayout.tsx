import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { CommandBar } from './CommandBar';
import { NotificationDrawer } from './NotificationDrawer';
import { ErrorBoundary } from '../ui/ErrorBoundary';

export const AppLayout: React.FC = () => {
  const [isCommandBarOpen, setIsCommandBarOpen] = useState<boolean>(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  return (
    <div
      className="flex h-screen w-screen overflow-hidden font-sans antialiased"
      style={{ background: 'var(--df-bg)', color: 'var(--df-text-primary)' }}
    >
      {/* Role-aware Sidebar */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        {/* TopBar */}
        <TopBar
          onOpenCommandBar={() => setIsCommandBarOpen(true)}
          onOpenNotifications={() => setIsNotificationsOpen(true)}
          onOpenSidebar={() => setIsSidebarOpen(true)}
        />

        {/* Dynamic Route View */}
        <main
          className="flex-1 overflow-y-auto p-6 md:p-8"
          style={{ background: 'var(--df-bg)' }}
        >
          <div className="max-w-7xl mx-auto space-y-5">
            <ErrorBoundary>
              <Outlet />
            </ErrorBoundary>
          </div>
        </main>
      </div>

      {/* Global Command Bar (Cmd + K) */}
      <CommandBar
        isOpen={isCommandBarOpen}
        onClose={() => setIsCommandBarOpen(false)}
      />

      {/* Notification Drawer */}
      <NotificationDrawer
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
      />
    </div>
  );
};
