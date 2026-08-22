import React, { useState, useEffect } from 'react';
import { Activity, ShieldCheck, User, Clock, Terminal } from 'lucide-react';
import { mockEngine } from '../../mock/mockEngine';
import { AuditLog } from '../../types';
import { PageHeader } from '../ui/PageHeader';
import { DataTable } from '../ui/DataTable';
import { CardSkeleton } from '../ui/Skeleton';

export const AuditTrail: React.FC = () => {
  const [logs, setLogs] = useState<AuditLog[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    setLogs(mockEngine.getAuditLogs());
    setTimeout(() => setIsLoading(false), 300);
  }, []);

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <PageHeader
        eyebrow="Immutable System Ledger • Security Compliance"
        title="Audit Trail & System Activity"
        description="Complete system mutation history tracking actors, actions, target entities, and exact event timestamps."
      />

      {/* Audit Log Table */}
      {isLoading ? (
        <div className="space-y-4">
          <CardSkeleton />
          <CardSkeleton />
        </div>
      ) : (
      <DataTable
        title="Activity Logs"
        count={`${logs.length} Recorded Events`}
        headers={['Timestamp', 'Actor', 'Action', 'Target Entity', 'Metadata']}
        isEmpty={logs.length === 0}
        emptyMessage="No activity logs recorded."
        colSpan={5}
      >
        {logs.map((log) => (
          <tr
            key={log.id}
            className="transition-colors"
            style={{ borderBottom: '1px solid var(--df-border)' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--df-bg)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
          >
            <td className="px-5 py-4 df-mono text-sm" style={{ color: 'var(--df-text-muted)' }}>
              {new Date(log.timestamp).toLocaleString()}
            </td>
            <td className="px-5 py-4 font-bold" style={{ color: 'var(--df-text-primary)' }}>
              {log.actor_name || 'System'}
            </td>
            <td className="px-5 py-4">
              <span
                className="px-2.5 py-1 text-[11px] font-bold df-mono"
                style={{
                  background: 'var(--df-bg)',
                  border: '1px solid var(--df-border)',
                  borderRadius: 'var(--df-radius-full)',
                  color: 'var(--df-text-primary)'
                }}
              >
                {log.action}
              </span>
            </td>
            <td className="px-5 py-4 df-mono font-bold text-xs" style={{ color: 'var(--df-text-secondary)' }}>
              {log.target_type}
            </td>
            <td className="px-5 py-4 df-mono text-xs max-w-md truncate" style={{ color: 'var(--df-text-muted)' }}>
              {JSON.stringify(log.metadata || {})}
            </td>
          </tr>
        ))}
      </DataTable>
      )}
    </div>
  );
};
