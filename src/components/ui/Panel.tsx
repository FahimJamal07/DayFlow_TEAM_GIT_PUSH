import React from 'react';
import { clsx } from 'clsx';

interface PanelProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  as?: 'div' | 'section' | 'article';
}

const paddingMap = {
  none: '',
  sm: 'px-4 py-3',
  md: 'p-5',
  lg: 'p-6',
};

export const Panel: React.FC<PanelProps> = ({
  children,
  className,
  padding = 'md',
  as: Tag = 'div',
}) => {
  return (
    <Tag
      className={clsx(
        'border',
        paddingMap[padding],
        className
      )}
      style={{
        background: 'var(--df-surface)',
        borderColor: 'var(--df-border)',
        borderRadius: 'var(--df-radius)',
      }}
    >
      {children}
    </Tag>
  );
};
