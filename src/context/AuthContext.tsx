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
  isAuthenticated: boolean;
  authError: string | null;
  login: (email: string, password?: string) => Promise<{ success: boolean; error?: string }>;
  register: (fullName: string, email: string, password?: string, role?: 'employee' | 'hr') => Promise<{ success: boolean; error?: string }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string | null>(null);

  useEffect(() => {
    // Initial user load
    const sessionStr = localStorage.getItem('dayflow_session');
    if (sessionStr) {
      try {
        const session = JSON.parse(sessionStr);
        if (session.authenticated && session.profileId) {
          setIsAuthenticated(true);
          const newProfile = mockEngine.setCurrentUser(session.profileId);
          const emp = mockEngine.getCurrentEmployee();
          setUser(newProfile);
          setEmployee(emp || null);
        } else {
          setIsAuthenticated(false);
        }
      } catch (e) {
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(false);
    }
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

  const login = async (email: string, password?: string) => {
    setIsLoading(true);
    setAuthError(null);
    try {
      const profile = mockEngine.authenticate(email, password);
      if (profile) {
        setIsAuthenticated(true);
        setUser(profile);
        setEmployee(mockEngine.getCurrentEmployee() || null);
        setIsLoading(false);
        return { success: true };
      } else {
        setIsLoading(false);
        setAuthError('Invalid email or password.');
        return { success: false, error: 'Invalid email or password.' };
      }
    } catch (err: any) {
      setIsLoading(false);
      setAuthError(err.message || 'Login failed.');
      return { success: false, error: err.message || 'Login failed.' };
    }
  };

  const register = async (fullName: string, email: string, password?: string, role: 'employee' | 'hr' = 'employee') => {
    setIsLoading(true);
    setAuthError(null);
    try {
      const profile = mockEngine.registerProfile(fullName, email, password, role);
      setIsAuthenticated(true);
      setUser(profile);
      setEmployee(mockEngine.getCurrentEmployee() || null);
      setIsLoading(false);
      return { success: true };
    } catch (err: any) {
      setIsLoading(false);
      setAuthError(err.message || 'Registration failed.');
      return { success: false, error: err.message || 'Registration failed.' };
    }
  };

  const logout = () => {
    mockEngine.logoutSession();
    setIsAuthenticated(false);
    setUser(null);
    setEmployee(null);
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
        isAuthenticated,
        authError,
        login,
        register,
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
