import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { AppLayout } from './components/shell/AppLayout';
import { Workday } from './components/workday/Workday';
import { Presence } from './components/presence/Presence';
import { TimeOff } from './components/timeoff/TimeOff';
import { Payroll } from './components/payroll/Payroll';
import { DecisionInbox } from './components/decisions/DecisionInbox';
import { ControlRoom } from './components/controlroom/ControlRoom';
import { People } from './components/people/People';
import { Signals } from './components/signals/Signals';
import { Reports } from './components/reports/Reports';
import { AuditTrail } from './components/activity/AuditTrail';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';

const RootRedirect: React.FC = () => {
  const { isHR } = useAuth();
  return <Navigate to={isHR ? '/control-room' : '/workday'} replace />;
};

export const AppContent: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
        <Route index element={<RootRedirect />} />
        <Route path="workday" element={<Workday />} />
        <Route path="presence" element={<Presence />} />
        <Route path="timeoff" element={<TimeOff />} />
        <Route path="payroll" element={<Payroll />} />
        <Route path="decisions" element={<DecisionInbox />} />
        <Route path="control-room" element={<ControlRoom />} />
        <Route path="people" element={<People />} />
        <Route path="signals" element={<Signals />} />
        <Route path="reports" element={<Reports />} />
        <Route path="activity" element={<AuditTrail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
