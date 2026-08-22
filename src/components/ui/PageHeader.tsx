import React from 'react';
import { Panel } from './Panel';

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  eyebrow,
  title,
  description,
  actions,
}) => {
  return (
    <Panel padding="lg">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          {eyebrow && (
            <div className="df-label mb-1.5" style={{ color: 'var(--df-accent)' }}>
              {eyebrow}
            </div>
          )}
          <h1 className="df-heading" style={{ fontSize: '1.375rem', letterSpacing: '-0.015em' }}>
            {title}
          </h1>
          {description && (
            <p className="df-body mt-1" style={{ fontSize: '0.8125rem' }}>
              {description}
            </p>
          )}
        </div>
        {actions && <div className="shrink-0">{actions}</div>}
      </div>
    </Panel>
  );
};
