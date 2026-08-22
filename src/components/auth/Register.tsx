import React, { useState, useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Panel } from '../ui/Panel';
import { Button } from '../ui/Button';
import { Users, Clock, Briefcase, DollarSign, Activity, ArrowRight, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Register: React.FC = () => {
  const { register, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'employee' | 'hr'>('employee');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tickerIndex, setTickerIndex] = useState(0);

  const tickerMessages = [
    "AUG 22 · 09:02 · ANANYA SHARMA CHECKED IN",
    "AUG 22 · 09:15 · LEAVE REQUEST APPROVED",
    "AUG 22 · 10:00 · SYSTEM SYNC COMPLETED",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % tickerMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [tickerMessages.length]);

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    
    const result = await register(fullName, email, password, role);
    
    if (result.success) {
      navigate('/');
    } else {
      setError(result.error || 'Registration failed.');
      setIsSubmitting(false);
    }
  };

  const flowNodes = [
    { icon: Users, label: 'People' },
    { icon: Clock, label: 'Attendance' },
    { icon: Briefcase, label: 'Leave' },
    { icon: DollarSign, label: 'Payroll' },
    { icon: Activity, label: 'Insights' },
  ];

  return (
    <div className="flex min-h-screen w-full" style={{ background: 'var(--df-bg)' }}>
      {/* Left Panel - Brand & Visualization */}
      <div 
        className="hidden lg:flex flex-col justify-between w-[55%] p-12 lg:p-20 border-r"
        style={{ 
          background: 'var(--df-surface)',
          borderColor: 'var(--df-border)'
        }}
      >
        <div className="flex-1 flex flex-col justify-center">
          <div className="w-12 h-12 flex items-center justify-center font-bold text-2xl mb-12"
               style={{
                 borderRadius: 'var(--df-radius)',
                 background: 'var(--df-accent)',
                 color: 'var(--df-accent-text)',
               }}
          >
            D
          </div>
          <h1 className="df-display text-5xl lg:text-6xl max-w-2xl leading-tight">
            Every workday, perfectly aligned.
          </h1>
          <p className="df-heading text-xl mt-6 max-w-xl mb-10" style={{ color: 'var(--df-text-secondary)' }}>
            People. Presence. Decisions. One operating system.
          </p>
          
          {/* Activity Ticker */}
          <div 
            className="h-8 flex items-center px-4 max-w-md"
            style={{ 
              background: 'var(--df-bg)', 
              borderRadius: 'var(--df-radius)',
              border: '1px solid var(--df-border)'
            }}
          >
            <div className="w-2 h-2 rounded-full mr-3" style={{ background: 'var(--df-accent)' }} />
            <div className="relative flex-1 h-full flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={tickerIndex}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="df-mono text-[10px] absolute font-bold"
                  style={{ color: 'var(--df-text-primary)' }}
                >
                  {tickerMessages[tickerIndex]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="relative flex items-center justify-between w-full max-w-xl mt-8">
            {/* Hairline track */}
            <div className="absolute top-4 left-0 right-0 h-px" style={{ background: 'var(--df-border)' }} />
            
            {/* Traveling dot */}
            <motion.div 
              className="absolute top-4 h-1 w-1 rounded-full -translate-y-1/2 z-0" 
              style={{ background: 'var(--df-accent)', boxShadow: '0 0 8px var(--df-accent)' }}
              animate={{ left: ['0%', '100%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />
            
            {/* Nodes */}
            {flowNodes.map(node => (
              <div key={node.label} className="relative z-10 flex flex-col items-center bg-[var(--df-surface)] px-2">
                <div 
                  className="w-8 h-8 rounded-full border flex items-center justify-center mb-3 transition-colors hover:border-[var(--df-accent)]" 
                  style={{ borderColor: 'var(--df-border)', background: 'var(--df-bg)' }}
                >
                  <node.icon className="w-4 h-4" style={{ color: 'var(--df-text-primary)' }} />
                </div>
                <span className="df-label text-[10px]" style={{ color: 'var(--df-text-secondary)' }}>{node.label}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between w-full df-mono text-[11px]" style={{ color: 'var(--df-text-muted)' }}>
          <span>Dayflow Technologies Inc. © {new Date().getFullYear()}</span>
          <div className="flex items-center space-x-2">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--df-status-present)' }} />
            <span>All systems operational</span>
          </div>
        </div>
      </div>

      {/* Right Panel - Auth Form */}
      <div className="w-full lg:w-[45%] flex flex-col justify-center p-8 sm:p-12 lg:p-20 relative">
        <div className="w-full max-w-sm mx-auto">
          
          <div className="mb-8 lg:hidden flex items-center space-x-3">
             <div className="w-8 h-8 flex items-center justify-center font-bold text-lg"
                 style={{
                   borderRadius: 'var(--df-radius)',
                   background: 'var(--df-accent)',
                   color: 'var(--df-accent-text)',
                 }}
            >
              D
            </div>
            <span className="font-bold tracking-tight text-lg" style={{ color: 'var(--df-text-primary)' }}>DAYFLOW</span>
          </div>

          <div className="mb-8">
            <h2 className="df-heading text-2xl">Initialize Profile</h2>
            <p className="text-sm mt-2" style={{ color: 'var(--df-text-secondary)' }}>Provision a new user account on the Dayflow network.</p>
          </div>

          <Panel padding="lg" className="mb-6">
            {error && (
              <div
                className="p-3 mb-4 text-xs font-semibold flex items-center space-x-2"
                style={{
                  background: 'var(--df-status-absent-subtle)',
                  border: '1px solid var(--df-status-absent)',
                  borderRadius: 'var(--df-radius)',
                  color: 'var(--df-status-absent-text)',
                }}
              >
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--df-text-primary)' }}>Full Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full p-2.5 text-xs font-medium focus:outline-none"
                  style={{
                    background: 'var(--df-bg)',
                    border: '1px solid var(--df-border)',
                    borderRadius: 'var(--df-radius)',
                    color: 'var(--df-text-primary)',
                  }}
                  placeholder="Jane Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--df-text-primary)' }}>Work Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2.5 text-xs font-medium focus:outline-none"
                  style={{
                    background: 'var(--df-bg)',
                    border: '1px solid var(--df-border)',
                    borderRadius: 'var(--df-radius)',
                    color: 'var(--df-text-primary)',
                  }}
                  placeholder="name@company.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--df-text-primary)' }}>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2.5 text-xs font-medium focus:outline-none"
                  style={{
                    background: 'var(--df-bg)',
                    border: '1px solid var(--df-border)',
                    borderRadius: 'var(--df-radius)',
                    color: 'var(--df-text-primary)',
                  }}
                  placeholder="••••••••"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--df-text-primary)' }}>Account Role</label>
                <div className="flex w-full" style={{ borderRadius: 'var(--df-radius)', overflow: 'hidden', border: '1px solid var(--df-border)' }}>
                  <button
                    type="button"
                    onClick={() => setRole('employee')}
                    className="flex-1 py-2 text-xs font-semibold transition-colors"
                    style={{
                      background: role === 'employee' ? 'var(--df-accent)' : 'var(--df-bg)',
                      color: role === 'employee' ? 'var(--df-accent-text)' : 'var(--df-text-secondary)',
                    }}
                  >
                    Employee
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole('hr')}
                    className="flex-1 py-2 text-xs font-semibold transition-colors"
                    style={{
                      background: role === 'hr' ? 'var(--df-accent)' : 'var(--df-bg)',
                      color: role === 'hr' ? 'var(--df-accent-text)' : 'var(--df-text-secondary)',
                      borderLeft: '1px solid var(--df-border)'
                    }}
                  >
                    HR Manager
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <Button variant="primary" type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Creating account...' : 'Create Account'}
                </Button>
              </div>
            </form>
          </Panel>

          <div className="text-center text-xs" style={{ color: 'var(--df-text-secondary)' }}>
            Already have an account?{' '}
            <button 
              onClick={() => navigate('/login')} 
              className="font-semibold hover:underline"
              style={{ color: 'var(--df-accent)' }}
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
