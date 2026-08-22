import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Panel } from './Panel';
import { Button } from './Button';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-[60vh] p-4">
          <Panel padding="lg" className="w-full max-w-md text-center space-y-5 animate-in fade-in duration-200">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
              style={{ background: 'var(--df-status-absent-subtle)', color: 'var(--df-status-absent)' }}
            >
              <AlertTriangle className="w-8 h-8" />
            </div>
            
            <div>
              <h2 className="df-heading text-xl">Something went wrong</h2>
              <p className="text-sm mt-2" style={{ color: 'var(--df-text-muted)' }}>
                The application encountered an unexpected error.
              </p>
            </div>

            {this.state.error && (
              <div 
                className="p-3 text-left text-xs df-mono overflow-auto rounded max-h-32"
                style={{ background: 'var(--df-bg)', color: 'var(--df-status-absent)', border: '1px solid var(--df-border)' }}
              >
                {this.state.error.message}
              </div>
            )}

            <Button 
              variant="primary" 
              className="w-full justify-center"
              onClick={() => window.location.reload()}
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Reload Page
            </Button>
          </Panel>
        </div>
      );
    }

    return this.props.children;
  }
}
