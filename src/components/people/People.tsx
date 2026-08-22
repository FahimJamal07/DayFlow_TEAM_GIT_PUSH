import React, { useState, useEffect } from 'react';
import { Search, Filter, Mail, Phone, MapPin, Calendar, User, Shield, Briefcase, DollarSign, Activity, X } from 'lucide-react';
import { mockEngine } from '../../mock/mockEngine';
import { Employee } from '../../types';
import { useAuth } from '../../context/AuthContext';

export const People: React.FC = () => {
  const { isHR } = useAuth();
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [search, setSearch] = useState<string>('');
  const [selectedDept, setSelectedDept] = useState<string>('ALL');
  const [selectedEmp, setSelectedEmp] = useState<Employee | null>(null);

  useEffect(() => {
    setEmployees(mockEngine.getEmployees());
  }, []);

  const departments = mockEngine.getDepartments();

  const filtered = employees.filter((emp) => {
    const nameMatch = emp.profile?.full_name.toLowerCase().includes(search.toLowerCase());
    const codeMatch = emp.employee_code.toLowerCase().includes(search.toLowerCase());
    const deptMatch = selectedDept === 'ALL' || emp.department_id === selectedDept;
    return (nameMatch || codeMatch) && deptMatch;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">People Directory</h1>
          <p className="text-sm text-slate-500 mt-1">
            Search and inspect employee profiles, organizational departments, and Employee 360 insights.
          </p>
        </div>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by employee name, code, designation..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center space-x-2 w-full sm:w-auto overflow-x-auto">
          <button
            onClick={() => setSelectedDept('ALL')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap ${
              selectedDept === 'ALL' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Departments
          </button>
          {departments.map((d) => (
            <button
              key={d.id}
              onClick={() => setSelectedDept(d.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap ${
                selectedDept === d.id ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {d.name}
            </button>
          ))}
        </div>
      </div>

      {/* Directory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((emp) => (
          <div
            key={emp.id}
            onClick={() => setSelectedEmp(emp)}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs hover:border-blue-300 hover:shadow-md transition-all cursor-pointer space-y-4 group"
          >
            <div className="flex items-start space-x-4">
              <img
                src={emp.profile?.avatar_url}
                alt={emp.profile?.full_name}
                className="w-14 h-14 rounded-full object-cover border-2 border-slate-200 group-hover:border-blue-500 transition-colors"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 text-base truncate">{emp.profile?.full_name}</h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-semibold">
                    {emp.employee_code}
                  </span>
                </div>
                <p className="text-xs text-blue-600 font-medium truncate">{emp.designation?.title}</p>
                <p className="text-[11px] text-slate-400 font-medium">{emp.department?.name}</p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span className="truncate">{emp.profile?.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>{emp.phone}</span>
              </div>
            </div>

            <div className="pt-2 flex justify-between items-center text-xs font-semibold text-blue-600 group-hover:underline">
              <span>View Employee 360 Profile</span>
              <span>→</span>
            </div>
          </div>
        ))}
      </div>

      {/* Employee 360 Drawer Modal */}
      {selectedEmp && (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/50 backdrop-blur-xs">
          <div className="w-full max-w-xl bg-white h-full shadow-2xl border-l border-slate-200 p-8 overflow-y-auto space-y-6 animate-in slide-in-from-right duration-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-slate-900 text-lg">Employee 360 Profile</h3>
              </div>
              <button onClick={() => setSelectedEmp(null)} className="p-1 text-slate-400 hover:text-slate-600 rounded">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center space-x-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
              <img
                src={selectedEmp.profile?.avatar_url}
                alt={selectedEmp.profile?.full_name}
                className="w-16 h-16 rounded-full object-cover border-2 border-slate-300"
              />
              <div>
                <h4 className="text-xl font-bold text-slate-900">{selectedEmp.profile?.full_name}</h4>
                <p className="text-xs text-blue-600 font-semibold">{selectedEmp.designation?.title}</p>
                <p className="text-xs text-slate-500">{selectedEmp.department?.name} • Code: {selectedEmp.employee_code}</p>
              </div>
            </div>

            {/* 360 Sections */}
            <div className="space-y-4 text-xs">
              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                <h5 className="font-bold text-slate-900 uppercase text-[10px] tracking-wider text-slate-400">Overview & Contact</h5>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-slate-500">Email: </span>
                    <span className="font-semibold text-slate-800">{selectedEmp.profile?.email}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Phone: </span>
                    <span className="font-semibold text-slate-800">{selectedEmp.phone}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Join Date: </span>
                    <span className="font-semibold text-slate-800">{selectedEmp.join_date}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Status: </span>
                    <span className="font-bold text-emerald-600 uppercase">{selectedEmp.status}</span>
                  </div>
                </div>
              </div>

              {isHR && (
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                  <h5 className="font-bold text-slate-900 uppercase text-[10px] tracking-wider text-slate-400">Confidential Compensation</h5>
                  <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <span className="font-semibold text-slate-700">Salary Grade:</span>
                    <span className="font-mono font-bold text-slate-900">{selectedEmp.designation?.salary_grade}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
