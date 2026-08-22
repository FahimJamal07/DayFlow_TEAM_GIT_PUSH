import React from 'react';

type BadgeStatus =
  | 'present'
  | 'absent'
  | 'pending'
  | 'approved'
  | 'rejected'
  | 'late'
  | 'info'
  | 'active'
  | 'processed'
  | 'paid'
  | 'draft'
  | 'high'
  | 'critical'
  | 'medium'
  | 'low'
  | 'warning'
  | 'success';

const statusStyles: Record<BadgeStatus, { bg: string; text: string; border: string }> = {
  present:   { bg: 'var(--df-status-present-subtle)', text: 'var(--df-status-present-text)', border: 'var(--df-status-present)' },
  approved:  { bg: 'var(--df-status-present-subtle)', text: 'var(--df-status-present-text)', border: 'var(--df-status-present)' },
  success:   { bg: 'var(--df-status-present-subtle)', text: 'var(--df-status-present-text)', border: 'var(--df-status-present)' },
  active:    { bg: 'var(--df-status-present-subtle)', text: 'var(--df-status-present-text)', border: 'var(--df-status-present)' },
  processed: { bg: 'var(--df-status-present-subtle)', text: 'var(--df-status-present-text)', border: 'var(--df-status-present)' },
  paid:      { bg: 'var(--df-status-present-subtle)', text: 'var(--df-status-present-text)', border: 'var(--df-status-present)' },

  pending:   { bg: 'var(--df-status-pending-subtle)', text: 'var(--df-status-pending-text)', border: 'var(--df-status-pending)' },
  late:      { bg: 'var(--df-status-pending-subtle)', text: 'var(--df-status-pending-text)', border: 'var(--df-status-pending)' },
  warning:   { bg: 'var(--df-status-pending-subtle)', text: 'var(--df-status-pending-text)', border: 'var(--df-status-pending)' },
  medium:    { bg: 'var(--df-status-pending-subtle)', text: 'var(--df-status-pending-text)', border: 'var(--df-status-pending)' },

  absent:    { bg: 'var(--df-status-absent-subtle)', text: 'var(--df-status-absent-text)', border: 'var(--df-status-absent)' },
  rejected:  { bg: 'var(--df-status-absent-subtle)', text: 'var(--df-status-absent-text)', border: 'var(--df-status-absent)' },
  high:      { bg: 'var(--df-status-absent-subtle)', text: 'var(--df-status-absent-text)', border: 'var(--df-status-absent)' },
  critical:  { bg: 'var(--df-status-absent-subtle)', text: 'var(--df-status-absent-text)', border: 'var(--df-status-absent)' },

  info:      { bg: 'var(--df-status-info-subtle)', text: 'var(--df-status-info-text)', border: 'var(--df-status-info)' },
  low:       { bg: 'var(--df-status-info-subtle)', text: 'var(--df-status-info-text)', border: 'var(--df-status-info)' },

  draft:     { bg: 'var(--df-accent-subtle)', text: 'var(--df-text-secondary)', border: 'var(--df-border)' },
};

interface StatusBadgeProps {
  status: BadgeStatus;
  children?: React.ReactNode;
  pulse?: boolean;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, children, pulse }) => {
  const s = statusStyles[status] || statusStyles.info;

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide border ${pulse ? 'animate-pulse' : ''}`}
      style={{
        background: s.bg,
        color: s.text,
        borderColor: s.border,
        borderRadius: 'var(--df-radius)',
      }}
    >
      {children || status}
    </span>
  );
};
