import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Panel } from '../ui/Panel';
import { Button } from '../ui/Button';
import { Users, Clock, Briefcase, DollarSign, Activity, ArrowRight, AlertTriangle } from 'lucide-react';

export const Login: React.FC = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email.');
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    
    const result = await login(email, password);
    
    if (result.success) {
      navigate('/');
    } else {
      setError(result.error || 'Authentication failed.');
      setIsSubmitting(false);
    }
  };

  const handleDemoClick = (demoEmail: string) => {
    setEmail(demoEmail);
    setPassword('demo-password');
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
            <h2 className="df-heading text-2xl">Sign in to your account</h2>
            <p className="df-body mt-2">Enter your work email to continue to Dayflow.</p>
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

              <div className="pt-2">
                <Button variant="primary" type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Authenticating...' : 'Sign In'}
                </Button>
              </div>
            </form>
          </Panel>

          <div className="text-center text-xs" style={{ color: 'var(--df-text-secondary)' }}>
            New to Dayflow?{' '}
            <button 
              onClick={() => navigate('/register')} 
              className="font-semibold hover:underline"
              style={{ color: 'var(--df-accent)' }}
            >
              Create an account
            </button>
          </div>
        </div>

        {/* Demo Accounts Disclosure */}
        <div className="absolute bottom-6 right-6 left-6 lg:left-auto">
          <div className="flex flex-col items-end">
            <button 
              onClick={() => setShowDemo(!showDemo)}
              className="df-mono text-[10px] hover:underline mb-2"
              style={{ color: 'var(--df-text-muted)' }}
            >
              [ {showDemo ? 'Hide' : 'Show'} Demo Accounts ]
            </button>
            
            {showDemo && (
              <div 
                className="p-3 text-[10px] df-mono text-right"
                style={{
                  background: 'var(--df-surface)',
                  border: '1px solid var(--df-border)',
                  borderRadius: 'var(--df-radius)',
                  color: 'var(--df-text-secondary)'
                }}
              >
                <div className="font-bold mb-1" style={{ color: 'var(--df-text-primary)' }}>Seeded Emails (Any Password):</div>
                <div className="cursor-pointer hover:underline" onClick={() => handleDemoClick('employee@dayflow.hr')}>employee@dayflow.hr (Employee)</div>
                <div className="cursor-pointer hover:underline" onClick={() => handleDemoClick('hr@dayflow.hr')}>hr@dayflow.hr (HR/Admin)</div>
                <div className="cursor-pointer hover:underline" onClick={() => handleDemoClick('priya.nair@dayflow.hr')}>priya.nair@dayflow.hr (Employee)</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
