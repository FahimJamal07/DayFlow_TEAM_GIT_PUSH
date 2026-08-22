import React, { useState, useEffect } from 'react';
import { DollarSign, ShieldCheck, Download, Printer, Eye, Lock, FileText, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { mockEngine } from '../../mock/mockEngine';
import { PayrollRecord } from '../../types';

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
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-1">
            <span>Financial Statements</span>
            <span>•</span>
            <span>RLS Protected</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Payroll & Salary Engine</h1>
          <p className="text-sm text-slate-500 mt-1">
            {isHR
              ? 'Company-wide salary structures, component breakdowns, and pay slip auditing'
              : 'Confidential compensation statements, tax withholdings, and downloadable pay slips'}
          </p>
        </div>
      </div>

      {/* Payroll Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-bold text-slate-900 text-base">Monthly Salary Records</h3>
          <span className="text-xs text-slate-400 font-mono">{payrollList.length} Records</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-semibold border-b border-slate-100">
              <tr>
                <th className="px-6 py-3">Employee</th>
                <th className="px-6 py-3">Pay Period</th>
                <th className="px-6 py-3">Base Salary</th>
                <th className="px-6 py-3">Allowances</th>
                <th className="px-6 py-3">Deductions</th>
                <th className="px-6 py-3">Net Salary</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {payrollList.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-6 py-8 text-center text-slate-400">
                    No payroll records available.
                  </td>
                </tr>
              ) : (
                payrollList.map((rec) => (
                  <tr key={rec.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="px-6 py-3.5 font-semibold text-slate-900">
                      <div className="flex items-center space-x-2.5">
                        <img
                          src={rec.employee?.profile?.avatar_url}
                          alt={rec.employee?.profile?.full_name}
                          className="w-7 h-7 rounded-full object-cover border border-slate-200"
                        />
                        <div>
                          <div className="font-semibold">{rec.employee?.profile?.full_name}</div>
                          <div className="text-[10px] text-slate-400">{rec.employee?.employee_code}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-3.5 font-mono text-slate-800">
                      {rec.pay_period_month}/{rec.pay_period_year}
                    </td>
                    <td className="px-6 py-3.5 font-mono">₹{rec.base_salary.toLocaleString()}</td>
                    <td className="px-6 py-3.5 font-mono text-emerald-600">+₹{rec.allowances.toLocaleString()}</td>
                    <td className="px-6 py-3.5 font-mono text-rose-600">-₹{rec.deductions.toLocaleString()}</td>
                    <td className="px-6 py-3.5 font-mono font-bold text-slate-900">
                      ₹{rec.net_salary.toLocaleString()}
                    </td>
                    <td className="px-6 py-3.5">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 uppercase">
                        {rec.payment_status}
                      </span>
                    </td>
                    <td className="px-6 py-3.5 text-right">
                      <button
                        onClick={() => setSelectedPayRecord(rec)}
                        className="inline-flex items-center space-x-1 px-3 py-1.5 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg font-semibold transition-colors cursor-pointer"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>View Payslip</span>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pay Slip Modal */}
      {selectedPayRecord && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 p-8 space-y-6 overflow-y-auto max-h-[90vh]">
            {/* Payslip Header */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-extrabold text-slate-900 tracking-tight">DAYFLOW</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-mono font-bold">
                    OFFICIAL PAY SLIP
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">Dayflow Technologies Inc. • Private & Confidential</p>
              </div>

              <div className="text-right">
                <p className="text-xs font-semibold text-slate-700">Pay Period</p>
                <p className="text-sm font-bold font-mono text-slate-900">
                  {selectedPayRecord.pay_period_month}/{selectedPayRecord.pay_period_year}
                </p>
              </div>
            </div>

            {/* Employee Info Header */}
            <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
              <div>
                <span className="text-slate-500">Employee Name: </span>
                <span className="font-bold text-slate-900">{selectedPayRecord.employee?.profile?.full_name}</span>
              </div>
              <div>
                <span className="text-slate-500">Employee Code: </span>
                <span className="font-mono font-bold text-slate-900">{selectedPayRecord.employee?.employee_code}</span>
              </div>
              <div>
                <span className="text-slate-500">Department: </span>
                <span className="font-semibold text-slate-900">{selectedPayRecord.employee?.department?.name}</span>
              </div>
              <div>
                <span className="text-slate-500">Designation: </span>
                <span className="font-semibold text-slate-900">{selectedPayRecord.employee?.designation?.title}</span>
              </div>
            </div>

            {/* Breakdown Components Table */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Salary Components Breakdown</h4>
              <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
                <div className="grid grid-cols-2 bg-slate-100 font-bold p-2.5 text-slate-700 border-b border-slate-200">
                  <span>Component Description</span>
                  <span className="text-right">Amount (INR)</span>
                </div>
                <div className="divide-y divide-slate-100">
                  {Object.entries(selectedPayRecord.components_breakdown).map(([name, amt]) => (
                    <div key={name} className="grid grid-cols-2 p-2.5 text-slate-800">
                      <span className="font-medium">{name}</span>
                      <span className="text-right font-mono font-semibold">₹{amt.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Net Total Summary */}
            <div className="bg-slate-900 text-white p-5 rounded-xl flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 uppercase font-semibold">Net Salary Payable</span>
                <div className="text-2xl font-extrabold font-mono mt-0.5">
                  ₹{selectedPayRecord.net_salary.toLocaleString()}
                </div>
              </div>
              <div className="flex items-center space-x-1.5 text-xs text-emerald-400 font-semibold bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
                <CheckCircle2 className="w-4 h-4" />
                <span>Direct Deposited</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <button
                onClick={() => setSelectedPayRecord(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
              >
                Close View
              </button>

              <button
                onClick={handlePrint}
                className="flex items-center space-x-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl shadow-md cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print / Download PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
