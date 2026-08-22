import React from 'react';
import { LucideIcon } from 'lucide-react';
import { clsx } from 'clsx';

interface StatBlockProps {
  value: string | number;
  label: string;
  icon?: LucideIcon;
  className?: string;
}

export const StatBlock: React.FC<StatBlockProps> = ({
  value,
  label,
  icon: Icon,
  className,
}) => {
  return (
    <div
      className={clsx('border flex items-center justify-between', className)}
      style={{
        background: 'var(--df-surface)',
        borderColor: 'var(--df-border)',
        borderRadius: 'var(--df-radius)',
        padding: '1.25rem',
      }}
    >
      <div>
        <p className="df-label">{label}</p>
        <p className="df-display mt-1" style={{ fontSize: '1.75rem' }}>{value}</p>
      </div>
      {Icon && (
        <div
          className="flex items-center justify-center shrink-0"
          style={{
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: 'var(--df-radius)',
            background: 'var(--df-accent-subtle)',
            color: 'var(--df-accent)',
          }}
        >
          <Icon className="w-5 h-5" />
        </div>
      )}
    </div>
  );
};
