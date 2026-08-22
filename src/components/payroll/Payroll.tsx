import React, { useState, useEffect } from 'react';
import { DollarSign, ShieldCheck, Download, Printer, Eye, Lock, FileText, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { mockEngine } from '../../mock/mockEngine';
import { PayrollRecord } from '../../types';
import { PageHeader } from '../ui/PageHeader';
import { StatusBadge } from '../ui/StatusBadge';
import { DataTable } from '../ui/DataTable';
import { Button } from '../ui/Button';
import { StatBlock } from '../ui/StatBlock';
import { Panel } from '../ui/Panel';

export const Payroll: React.FC = () => {
  const { isHR, user } = useAuth();
  const [payrollList, setPayrollList] = useState<PayrollRecord[]>([]);
  const [selectedPayRecord, setSelectedPayRecord] = useState<PayrollRecord | null>(null);

  useEffect(() => {
    setPayrollList(mockEngine.getPayrollRecords());
  }, [user]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Top Banner */}
      <PageHeader
        eyebrow="Financial Statements • Secured"
        title="Payroll & Salary Engine"
        description={
          isHR
            ? 'Company-wide salary structures, component breakdowns, and pay slip auditing'
            : 'Confidential compensation statements, tax withholdings, and downloadable pay slips'
        }
      />

      {/* Payroll Table */}
      <DataTable
        title="Monthly Salary Records"
        count={`${payrollList.length} Records`}
        headers={['Employee', 'Pay Period', 'Base Salary', 'Allowances', 'Deductions', 'Net Salary', 'Status', 'Actions']}
        isEmpty={payrollList.length === 0}
        emptyMessage="No payroll records available."
        colSpan={8}
      >
        {payrollList.map((rec) => (
          <tr
            key={rec.id}
            className="transition-colors"
            style={{ borderBottom: '1px solid var(--df-border)' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--df-bg)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
          >
            <td className="px-5 py-4 font-semibold" style={{ color: 'var(--df-text-primary)' }}>
              <div className="flex items-center space-x-3">
                <img
                  src={rec.employee?.profile?.avatar_url}
                  alt={rec.employee?.profile?.full_name}
                  className="w-8 h-8 rounded-full object-cover"
                  style={{ border: '1px solid var(--df-border)' }}
                />
                <div>
                  <div className="font-bold text-sm">{rec.employee?.profile?.full_name}</div>
                  <div className="text-[11px]" style={{ color: 'var(--df-text-muted)' }}>{rec.employee?.employee_code}</div>
                </div>
              </div>
            </td>
            <td className="px-5 py-4 df-mono text-sm" style={{ color: 'var(--df-text-primary)' }}>
              {rec.pay_period_month}/{rec.pay_period_year}
            </td>
            <td className="px-5 py-4 df-mono text-sm">₹{rec.base_salary.toLocaleString()}</td>
            <td className="px-5 py-4 df-mono text-sm" style={{ color: 'var(--df-status-present)' }}>+₹{rec.allowances.toLocaleString()}</td>
            <td className="px-5 py-4 df-mono text-sm" style={{ color: 'var(--df-status-absent)' }}>-₹{rec.deductions.toLocaleString()}</td>
            <td className="px-5 py-4 df-mono text-sm font-bold" style={{ color: 'var(--df-text-primary)' }}>
              ₹{rec.net_salary.toLocaleString()}
            </td>
            <td className="px-5 py-4">
              <StatusBadge status="approved">{rec.payment_status}</StatusBadge>
            </td>
            <td className="px-5 py-4 text-right">
              <Button variant="secondary" size="sm" onClick={() => setSelectedPayRecord(rec)}>
                <FileText className="w-4 h-4 mr-2" />
                Payslip
              </Button>
            </td>
          </tr>
        ))}
      </DataTable>

      {/* Pay Slip Modal */}
      {selectedPayRecord && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-4 animate-in fade-in duration-200"
          style={{ background: 'rgba(0, 0, 0, 0.6)' }}
        >
          <div
            className="w-full max-w-2xl p-8 space-y-6 overflow-y-auto max-h-[90vh]"
            style={{
              background: 'var(--df-surface)',
              borderRadius: 'var(--df-radius)',
              border: '1px solid var(--df-border)',
              boxShadow: 'var(--df-shadow-overlay)',
            }}
          >
            {/* Payslip Header */}
            <div className="flex items-center justify-between pb-5" style={{ borderBottom: '1px solid var(--df-border)' }}>
              <div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl font-black tracking-tight" style={{ color: 'var(--df-text-primary)' }}>DAYFLOW</span>
                  <StatusBadge status="info">OFFICIAL PAY SLIP</StatusBadge>
                </div>
                <p className="text-xs mt-1" style={{ color: 'var(--df-text-muted)' }}>Dayflow Technologies Inc. • Private & Confidential</p>
              </div>
              <div className="text-right">
                <p className="df-label" style={{ color: 'var(--df-text-secondary)' }}>Pay Period</p>
                <p className="text-lg font-bold df-mono mt-0.5" style={{ color: 'var(--df-text-primary)' }}>
                  {selectedPayRecord.pay_period_month}/{selectedPayRecord.pay_period_year}
                </p>
              </div>
            </div>

            {/* Employee Info */}
            <div
              className="grid grid-cols-2 gap-5 p-5 text-sm"
              style={{
                background: 'var(--df-bg)',
                borderRadius: 'var(--df-radius)',
                border: '1px solid var(--df-border)',
              }}
            >
              <div>
                <span className="block text-xs mb-1" style={{ color: 'var(--df-text-muted)' }}>Employee Name </span>
                <span className="font-bold" style={{ color: 'var(--df-text-primary)' }}>{selectedPayRecord.employee?.profile?.full_name}</span>
              </div>
              <div>
                <span className="block text-xs mb-1" style={{ color: 'var(--df-text-muted)' }}>Employee Code </span>
                <span className="df-mono font-bold" style={{ color: 'var(--df-text-primary)' }}>{selectedPayRecord.employee?.employee_code}</span>
              </div>
              <div>
                <span className="block text-xs mb-1" style={{ color: 'var(--df-text-muted)' }}>Department </span>
                <span className="font-bold" style={{ color: 'var(--df-text-primary)' }}>{selectedPayRecord.employee?.department?.name}</span>
              </div>
              <div>
                <span className="block text-xs mb-1" style={{ color: 'var(--df-text-muted)' }}>Designation </span>
                <span className="font-bold" style={{ color: 'var(--df-text-primary)' }}>{selectedPayRecord.employee?.designation?.title}</span>
              </div>
            </div>

            {/* Breakdown */}
            <div className="space-y-3">
              <h4 className="df-label font-bold" style={{ color: 'var(--df-text-primary)' }}>Salary Components Breakdown</h4>
              <div
                className="overflow-hidden text-sm"
                style={{ border: '1px solid var(--df-border)', borderRadius: 'var(--df-radius)' }}
              >
                <div
                  className="grid grid-cols-2 font-bold p-3"
                  style={{
                    background: 'var(--df-bg)',
                    color: 'var(--df-text-secondary)',
                    borderBottom: '1px solid var(--df-border)',
                  }}
                >
                  <span>Component Description</span>
                  <span className="text-right">Amount (INR)</span>
                </div>
                <div>
                  {Object.entries(selectedPayRecord.components_breakdown).map(([name, amt]) => (
                    <div
                      key={name}
                      className="grid grid-cols-2 p-3"
                      style={{ borderBottom: '1px solid var(--df-border)', color: 'var(--df-text-primary)' }}
                    >
                      <span className="font-medium">{name}</span>
                      <span className="text-right df-mono font-bold">₹{amt.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Net Total */}
            <Panel padding="lg" className="flex items-center justify-between" style={{ background: 'var(--df-sidebar-bg)', color: '#ffffff', borderColor: 'transparent' }}>
              <div>
                <span className="df-label" style={{ color: 'var(--df-sidebar-text)' }}>Net Salary Payable</span>
                <div className="df-display df-mono mt-1" style={{ fontSize: '2rem', color: '#ffffff' }}>
                  ₹{selectedPayRecord.net_salary.toLocaleString()}
                </div>
              </div>
              <div
                className="flex items-center space-x-2 text-sm font-bold px-4 py-2"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: 'var(--df-radius)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: 'var(--df-status-present)',
                }}
              >
                <CheckCircle2 className="w-5 h-5" />
                <span>Direct Deposited</span>
              </div>
            </Panel>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid var(--df-border)' }}>
              <Button variant="ghost" onClick={() => setSelectedPayRecord(null)}>
                Close
              </Button>
              <Button variant="primary" onClick={handlePrint}>
                <Printer className="w-4 h-4 mr-2" />
                Print / Download PDF
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
