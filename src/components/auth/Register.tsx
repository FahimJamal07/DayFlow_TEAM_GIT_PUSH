import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Panel } from '../ui/Panel';
import { Button } from '../ui/Button';
import { Users, Clock, Briefcase, DollarSign, Activity, ArrowRight, AlertTriangle } from 'lucide-react';

export const Register: React.FC = () => {
  const { register, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'employee' | 'hr'>('employee');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        <div>
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
          <p className="df-heading text-xl mt-6 max-w-xl" style={{ color: 'var(--df-text-secondary)' }}>
            People. Presence. Decisions. One operating system.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center space-x-4 max-w-full overflow-hidden">
            {flowNodes.map((node, i) => (
              <React.Fragment key={node.label}>
                <div 
                  className="flex flex-col items-center justify-center p-4 transition-all"
                  style={{
                    background: 'var(--df-bg)',
                    border: '1px solid var(--df-border)',
                    borderRadius: 'var(--df-radius)',
                    width: '100px',
                  }}
                >
                  <node.icon className="w-5 h-5 mb-2" style={{ color: 'var(--df-text-primary)' }} />
                  <span className="df-label text-[10px]">{node.label}</span>
                </div>
                {i < flowNodes.length - 1 && (
                  <ArrowRight className="w-4 h-4 shrink-0" style={{ color: 'var(--df-text-muted)' }} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        
        <div className="df-mono text-[11px]" style={{ color: 'var(--df-text-muted)' }}>
          Dayflow Technologies Inc. © {new Date().getFullYear()}
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
            <h2 className="df-heading text-2xl">Create an account</h2>
            <p className="df-body mt-2">Get started with Dayflow OS.</p>
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
