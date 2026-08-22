import React, { useState } from 'react';
import { BarChart3, Download, FileText, CheckCircle2, Table } from 'lucide-react';
import { mockEngine } from '../../mock/mockEngine';
import { PageHeader } from '../ui/PageHeader';
import { Panel } from '../ui/Panel';
import { Button } from '../ui/Button';
import { CardSkeleton } from '../ui/Skeleton';

export const Reports: React.FC = () => {
  const [exportMessage, setExportMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  React.useEffect(() => {
    setTimeout(() => setIsLoading(false), 300);
  }, []);

  const exportCSV = (type: string) => {
    let data: any[] = [];
    let filename = `dayflow_${type}_report_${new Date().toISOString().split('T')[0]}.csv`;

    if (type === 'attendance') {
      data = mockEngine.getAllAttendance();
    } else if (type === 'leave') {
      data = mockEngine.getLeaveRequests();
    } else if (type === 'payroll') {
      data = mockEngine.getPayrollRecords();
    } else {
      data = mockEngine.getEmployees();
    }

    if (data.length === 0) {
      setExportMessage('No data available to export.');
      return;
    }

    const headers = Object.keys(data[0]).filter((k) => typeof data[0][k] !== 'object').join(',');
    const rows = data.map((row) =>
      Object.keys(data[0])
        .filter((k) => typeof data[0][k] !== 'object')
        .map((k) => `"${row[k] !== undefined ? row[k] : ''}"`)
        .join(',')
    );

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setExportMessage(`Successfully exported ${filename}`);
    setTimeout(() => setExportMessage(''), 4000);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Top Banner */}
      <PageHeader
        title="Workforce Reports & Data Export"
        description="Generate and export production analytics datasets for attendance, leave management, and payroll compliance."
      />

      {exportMessage && (
        <div
          className="p-4 flex items-center space-x-3 text-sm font-bold"
          style={{
            background: 'var(--df-status-present)',
            color: '#ffffff',
            borderRadius: 'var(--df-radius)',
          }}
        >
          <CheckCircle2 className="w-5 h-5" />
          <span>{exportMessage}</span>
        </div>
      )}

      {/* Export Action Cards */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Panel padding="lg" className="flex flex-col justify-between space-y-5">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Table className="w-5 h-5" style={{ color: 'var(--df-text-primary)' }} />
              <span className="df-label font-bold" style={{ color: 'var(--df-text-primary)' }}>DATASET</span>
            </div>
            <h3 className="font-bold text-lg" style={{ color: 'var(--df-text-primary)' }}>Attendance Report</h3>
            <p className="text-sm mt-2 leading-relaxed" style={{ color: 'var(--df-text-secondary)' }}>
              Export complete daily check-in, check-out timestamps, work durations, and absence exception records.
            </p>
          </div>
          <Button variant="primary" className="w-full" onClick={() => exportCSV('attendance')}>
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
        </Panel>

        <Panel padding="lg" className="flex flex-col justify-between space-y-5">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="w-5 h-5" style={{ color: 'var(--df-text-primary)' }} />
              <span className="df-label font-bold" style={{ color: 'var(--df-text-primary)' }}>DATASET</span>
            </div>
            <h3 className="font-bold text-lg" style={{ color: 'var(--df-text-primary)' }}>Leave & Time Off</h3>
            <p className="text-sm mt-2 leading-relaxed" style={{ color: 'var(--df-text-secondary)' }}>
              Export leave balances, approval logs, rejection reasons, and departmental time off metrics.
            </p>
          </div>
          <Button variant="primary" className="w-full" onClick={() => exportCSV('leave')}>
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
        </Panel>

        <Panel padding="lg" className="flex flex-col justify-between space-y-5">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <BarChart3 className="w-5 h-5" style={{ color: 'var(--df-text-primary)' }} />
              <span className="df-label font-bold" style={{ color: 'var(--df-text-primary)' }}>DATASET</span>
            </div>
            <h3 className="font-bold text-lg" style={{ color: 'var(--df-text-primary)' }}>Payroll Audit</h3>
            <p className="text-sm mt-2 leading-relaxed" style={{ color: 'var(--df-text-secondary)' }}>
              Export monthly compensation statements, allowances, tax deductions, and net payout records.
            </p>
          </div>
          <Button variant="primary" className="w-full" onClick={() => exportCSV('payroll')}>
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
        </Panel>

        <Panel padding="lg" className="flex flex-col justify-between space-y-5">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Table className="w-5 h-5" style={{ color: 'var(--df-text-primary)' }} />
              <span className="df-label font-bold" style={{ color: 'var(--df-text-primary)' }}>DATASET</span>
            </div>
            <h3 className="font-bold text-lg" style={{ color: 'var(--df-text-primary)' }}>Workforce Roster</h3>
            <p className="text-sm mt-2 leading-relaxed" style={{ color: 'var(--df-text-secondary)' }}>
              Export active employee directory, employee codes, department allocations, and join dates.
            </p>
          </div>
          <Button variant="primary" className="w-full" onClick={() => exportCSV('employees')}>
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
        </Panel>
      </div>
      )}
    </div>
  );
};
