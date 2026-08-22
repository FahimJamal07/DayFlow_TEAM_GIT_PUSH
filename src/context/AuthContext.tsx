import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile, Employee, UserRole } from '../types';
import { mockEngine } from '../mock/mockEngine';

interface AuthContextType {
  user: UserProfile | null;
  employee: Employee | null;
  role: UserRole;
  isLoading: boolean;
  loginAs: (profileId: string) => void;
  logout: () => void;
  isHR: boolean;
  isAdmin: boolean;
  isEmployee: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Initial user load
    const current = mockEngine.getCurrentUser();
    const emp = mockEngine.getCurrentEmployee();
    setUser(current);
    setEmployee(emp || null);
    setIsLoading(false);
  }, []);

  const loginAs = (profileId: string) => {
    setIsLoading(true);
    const newProfile = mockEngine.setCurrentUser(profileId);
    const emp = mockEngine.getCurrentEmployee();
    setUser(newProfile);
    setEmployee(emp || null);
    setIsLoading(false);
  };

  const logout = () => {
    // Reset to initial employee
    loginAs('f1000000-0000-0000-0000-000000000001');
  };

  const role = user?.role || 'employee';
  const isHR = role === 'hr' || role === 'admin';
  const isAdmin = role === 'admin';
  const isEmployee = role === 'employee';

  return (
    <AuthContext.Provider
      value={{
        user,
        employee,
        role,
        isLoading,
        loginAs,
        logout,
        isHR,
        isAdmin,
        isEmployee,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
