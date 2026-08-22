import React from 'react';

export const Skeleton: React.FC<{ className?: string }> = ({ className = 'h-4 bg-slate-200 rounded' }) => {
  return <div className={`animate-pulse ${className}`} />;
};

export const CardSkeleton: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4 animate-pulse">
      <div className="flex items-center justify-between">
        <Skeleton className="h-4 w-32 bg-slate-200" />
        <Skeleton className="h-4 w-12 bg-slate-200" />
      </div>
      <Skeleton className="h-8 w-24 bg-slate-200" />
      <Skeleton className="h-2 w-full bg-slate-100" />
    </div>
  );
};
