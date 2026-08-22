import React from 'react';
import { LucideIcon, Inbox } from 'lucide-react';
import { Button } from './Button';
import { Panel } from './Panel';

interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon: Icon = Inbox,
  title,
  description,
  actionLabel,
  onAction,
}) => {
  return (
    <Panel padding="lg" className="text-center my-4 animate-in fade-in duration-200">
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
        style={{
          background: 'var(--df-bg)',
          color: 'var(--df-text-muted)',
          border: '1px solid var(--df-border)'
        }}
      >
        <Icon className="w-6 h-6" />
      </div>
      <div className="max-w-md mx-auto space-y-2">
        <h3 className="font-bold text-base" style={{ color: 'var(--df-text-primary)' }}>{title}</h3>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--df-text-secondary)' }}>{description}</p>
      </div>
      {actionLabel && onAction && (
        <div className="mt-5">
          <Button variant="primary" onClick={onAction}>
            {actionLabel}
          </Button>
        </div>
      )}
    </Panel>
  );
};
