import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div
        className="flex h-screen w-screen items-center justify-center"
        style={{ background: 'var(--df-bg)' }}
      >
        <div className="df-mono text-[11px]" style={{ color: 'var(--df-text-muted)' }}>
          Booting Dayflow OS...
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};
