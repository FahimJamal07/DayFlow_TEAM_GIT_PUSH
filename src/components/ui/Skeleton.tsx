import React from 'react';
import { Panel } from './Panel';

export const Skeleton: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className = '', style }) => {
  return (
    <div
      className={`animate-pulse ${className}`}
      style={{
        background: 'var(--df-border)',
        borderRadius: 'var(--df-radius)',
        ...style
      }}
    />
  );
};

export const CardSkeleton: React.FC = () => {
  return (
    <Panel padding="lg" className="animate-pulse space-y-4">
      <div className="flex items-center justify-between">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-4 w-12" />
      </div>
      <Skeleton className="h-8 w-24" />
      <Skeleton className="h-2 w-full" style={{ background: 'var(--df-bg)' }} />
    </Panel>
  );
};
