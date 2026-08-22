import React from 'react';
import { LucideIcon, Inbox } from 'lucide-react';

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
    <div className="bg-white p-12 rounded-2xl border border-slate-200 shadow-2xs text-center space-y-4 my-4 animate-in fade-in duration-200">
      <div className="w-12 h-12 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center mx-auto border border-slate-200/60">
        <Icon className="w-6 h-6" />
      </div>
      <div className="max-w-md mx-auto space-y-1">
        <h3 className="font-bold text-slate-900 text-base">{title}</h3>
        <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
      </div>
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
        >
          <span>{actionLabel}</span>
        </button>
      )}
    </div>
  );
};
