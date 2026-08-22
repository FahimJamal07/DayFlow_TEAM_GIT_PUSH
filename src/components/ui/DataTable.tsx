import React from 'react';

interface DataTableProps {
  headers: string[];
  children: React.ReactNode;
  title?: string;
  count?: number | string;
  emptyMessage?: string;
  isEmpty?: boolean;
  colSpan?: number;
}

export const DataTable: React.FC<DataTableProps> = ({
  headers,
  children,
  title,
  count,
  emptyMessage = 'No records found.',
  isEmpty = false,
  colSpan,
}) => {
  return (
    <div
      className="border overflow-hidden"
      style={{
        background: 'var(--df-surface)',
        borderColor: 'var(--df-border)',
        borderRadius: 'var(--df-radius)',
      }}
    >
      {title && (
        <div
          className="px-5 py-3.5 flex items-center justify-between"
          style={{ borderBottom: '1px solid var(--df-border)' }}
        >
          <h3 className="df-heading" style={{ fontSize: '0.9375rem' }}>{title}</h3>
          {count !== undefined && (
            <span className="df-mono" style={{ color: 'var(--df-text-muted)', fontSize: '0.75rem' }}>
              {count}
            </span>
          )}
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr
              style={{
                background: 'var(--df-bg)',
                borderBottom: '1px solid var(--df-border)',
              }}
            >
              {headers.map((h) => (
                <th
                  key={h}
                  className="df-label px-5 py-2.5"
                  style={{ fontSize: '0.6875rem' }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody
            className="divide-y"
            style={{ '--tw-divide-opacity': '1', 'borderColor': 'var(--df-border)' } as React.CSSProperties}
          >
            {isEmpty ? (
              <tr>
                <td
                  colSpan={colSpan || headers.length}
                  className="px-5 py-8 text-center"
                  style={{ color: 'var(--df-text-muted)' }}
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              children
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
