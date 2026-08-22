import React, { useState } from 'react';
import { BarChart3, Download, FileText, CheckCircle2, Table } from 'lucide-react';
import { mockEngine } from '../../mock/mockEngine';

export const Reports: React.FC = () => {
  const [exportMessage, setExportMessage] = useState<string>('');

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
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Workforce Reports & Data Export</h1>
          <p className="text-sm text-slate-500 mt-1">
            Generate and export production analytics datasets for attendance, leave management, and payroll compliance.
          </p>
        </div>
      </div>

      {exportMessage && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-semibold flex items-center space-x-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>{exportMessage}</span>
        </div>
      )}

      {/* Export Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-3">
              <Table className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Attendance Report</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Export complete daily check-in, check-out timestamps, work durations, and absence exception records.
            </p>
          </div>
          <button
            onClick={() => exportCSV('attendance')}
            className="w-full flex items-center justify-center space-x-2 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Attendance CSV</span>
          </button>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center font-bold mb-3">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Leave & Time Off Report</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Export leave balances, approval logs, rejection reasons, and departmental time off metrics.
            </p>
          </div>
          <button
            onClick={() => exportCSV('leave')}
            className="w-full flex items-center justify-center space-x-2 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Leave CSV</span>
          </button>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center font-bold mb-3">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Payroll Audit Summary</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Export monthly compensation statements, allowances, tax deductions, and net payout records.
            </p>
          </div>
          <button
            onClick={() => exportCSV('payroll')}
            className="w-full flex items-center justify-center space-x-2 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Payroll CSV</span>
          </button>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center font-bold mb-3">
              <Table className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Workforce Roster</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Export active employee directory, employee codes, department allocations, and join dates.
            </p>
          </div>
          <button
            onClick={() => exportCSV('employees')}
            className="w-full flex items-center justify-center space-x-2 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-xl transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Roster CSV</span>
          </button>
        </div>
      </div>
    </div>
  );
};
