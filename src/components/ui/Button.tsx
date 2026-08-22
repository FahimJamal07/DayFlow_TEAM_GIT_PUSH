import React from 'react';
import { clsx } from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-xs',
  lg: 'px-5 py-2.5 text-sm',
};

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    background: 'var(--df-accent)',
    color: 'var(--df-accent-text)',
    borderColor: 'var(--df-accent)',
  },
  secondary: {
    background: 'transparent',
    color: 'var(--df-text-primary)',
    borderColor: 'var(--df-border)',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--df-text-secondary)',
    borderColor: 'transparent',
  },
  destructive: {
    background: 'var(--df-status-absent)',
    color: '#ffffff',
    borderColor: 'var(--df-status-absent)',
  },
};

const hoverClasses: Record<ButtonVariant, string> = {
  primary: 'hover:opacity-90',
  secondary: 'hover:bg-[var(--df-accent-subtle)]',
  ghost: 'hover:bg-[var(--df-accent-subtle)]',
  destructive: 'hover:opacity-90',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center font-semibold border transition-all cursor-pointer active:scale-[0.97]',
        sizeClasses[size],
        hoverClasses[variant],
        className
      )}
      style={{
        ...variantStyles[variant],
        borderRadius: 'var(--df-radius)',
      }}
      {...props}
    >
      {children}
    </button>
  );
};
