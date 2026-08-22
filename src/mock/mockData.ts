import {
  UserProfile,
  Department,
  Designation,
  Employee,
  LeaveType,
  LeaveBalance,
  LeaveRequest,
  AttendanceRecord,
  AttendanceEvent,
  PayrollRecord,
  NotificationItem,
  AuditLog,
  WorkforceSignal,
} from '../types';

export const INITIAL_DEPARTMENTS: Department[] = [
  { id: 'd1000000-0000-0000-0000-000000000001', code: 'ENG', name: 'Engineering', description: 'Software Engineering & Cloud Platform Architecture' },
  { id: 'd1000000-0000-0000-0000-000000000002', code: 'HR', name: 'Human Resources', description: 'People Operations, Culture & Compensation' },
  { id: 'd1000000-0000-0000-0000-000000000003', code: 'DES', name: 'Product Design', description: 'User Experience & Systems Design' },
  { id: 'd1000000-0000-0000-0000-000000000004', code: 'FIN', name: 'Finance & Accounting', description: 'Financial Planning, Auditing & Payroll' },
];

export const INITIAL_DESIGNATIONS: Designation[] = [
  { id: 'b1000000-0000-0000-0000-000000000001', department_id: 'd1000000-0000-0000-0000-000000000001', title: 'Senior Frontend Engineer', salary_grade: 'L5-Eng' },
  { id: 'b1000000-0000-0000-0000-000000000002', department_id: 'd1000000-0000-0000-0000-000000000001', title: 'Lead Backend Architect', salary_grade: 'L6-Eng' },
  { id: 'b1000000-0000-0000-0000-000000000003', department_id: 'd1000000-0000-0000-0000-000000000002', title: 'HR Lead Operations', salary_grade: 'L5-HR' },
  { id: 'b1000000-0000-0000-0000-000000000004', department_id: 'd1000000-0000-0000-0000-000000000003', title: 'Staff Product Designer', salary_grade: 'L6-Des' },
  { id: 'b1000000-0000-0000-0000-000000000005', department_id: 'd1000000-0000-0000-0000-000000000004', title: 'Senior Financial Analyst', salary_grade: 'L5-Fin' },
];

export const INITIAL_PROFILES: UserProfile[] = [
  {
    id: 'f1000000-0000-0000-0000-000000000001',
    email: 'employee@dayflow.hr',
    full_name: 'Ananya Sharma',
    role: 'employee',
    avatar_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    created_at: '2023-01-15T09:00:00Z',
  },
  {
    id: 'f1000000-0000-0000-0000-000000000002',
    email: 'hr@dayflow.hr',
    full_name: 'Rahul Verma',
    role: 'hr',
    avatar_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    created_at: '2022-06-01T09:00:00Z',
  },
  {
    id: 'f1000000-0000-0000-0000-000000000003',
    email: 'admin@dayflow.hr',
    full_name: 'Vikramaditya Singh',
    role: 'admin',
    avatar_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
    created_at: '2021-03-10T09:00:00Z',
  },
  {
    id: 'f1000000-0000-0000-0000-000000000004',
    email: 'priya.nair@dayflow.hr',
    full_name: 'Priya Nair',
    role: 'employee',
    avatar_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
    created_at: '2023-04-01T09:00:00Z',
  },
  {
    id: 'f1000000-0000-0000-0000-000000000005',
    email: 'rohan.mehta@dayflow.hr',
    full_name: 'Rohan Mehta',
    role: 'employee',
    avatar_url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150',
    created_at: '2023-09-15T09:00:00Z',
  },
];

export const INITIAL_EMPLOYEES: Employee[] = [
  {
    id: 'e1000000-0000-0000-0000-000000000001',
    profile_id: 'f1000000-0000-0000-0000-000000000001',
    employee_code: 'DF-1001',
    department_id: 'd1000000-0000-0000-0000-000000000001',
    designation_id: 'b1000000-0000-0000-0000-000000000001',
    join_date: '2023-01-15',
    status: 'active',
    phone: '+91 98765 43210',
    address: 'Indiranagar, Bengaluru, KA',
    emergency_contact: '+91 98765 00001 (Mother)',
    profile: INITIAL_PROFILES[0],
    department: INITIAL_DEPARTMENTS[0],
    designation: INITIAL_DESIGNATIONS[0],
  },
  {
    id: 'e1000000-0000-0000-0000-000000000002',
    profile_id: 'f1000000-0000-0000-0000-000000000002',
    employee_code: 'DF-1002',
    department_id: 'd1000000-0000-0000-0000-000000000002',
    designation_id: 'b1000000-0000-0000-0000-000000000003',
    join_date: '2022-06-01',
    status: 'active',
    phone: '+91 98765 43211',
    address: 'Koramangala, Bengaluru, KA',
    emergency_contact: '+91 98765 00002 (Spouse)',
    profile: INITIAL_PROFILES[1],
    department: INITIAL_DEPARTMENTS[1],
    designation: INITIAL_DESIGNATIONS[2],
  },
  {
    id: 'e1000000-0000-0000-0000-000000000003',
    profile_id: 'f1000000-0000-0000-0000-000000000003',
    employee_code: 'DF-1000',
    department_id: 'd1000000-0000-0000-0000-000000000001',
    designation_id: 'b1000000-0000-0000-0000-000000000002',
    join_date: '2021-03-10',
    status: 'active',
    phone: '+91 98765 43212',
    address: 'HSR Layout, Bengaluru, KA',
    emergency_contact: '+91 98765 00003 (Spouse)',
    profile: INITIAL_PROFILES[2],
    department: INITIAL_DEPARTMENTS[0],
    designation: INITIAL_DESIGNATIONS[1],
  },
  {
    id: 'e1000000-0000-0000-0000-000000000004',
    profile_id: 'f1000000-0000-0000-0000-000000000004',
    employee_code: 'DF-1004',
    department_id: 'd1000000-0000-0000-0000-000000000003',
    designation_id: 'b1000000-0000-0000-0000-000000000004',
    join_date: '2023-04-01',
    status: 'active',
    phone: '+91 98765 43213',
    address: 'Whitefield, Bengaluru, KA',
    emergency_contact: '+91 98765 00004 (Father)',
    profile: INITIAL_PROFILES[3],
    department: INITIAL_DEPARTMENTS[2],
    designation: INITIAL_DESIGNATIONS[3],
  },
  {
    id: 'e1000000-0000-0000-0000-000000000005',
    profile_id: 'f1000000-0000-0000-0000-000000000005',
    employee_code: 'DF-1005',
    department_id: 'd1000000-0000-0000-0000-000000000001',
    designation_id: 'b1000000-0000-0000-0000-000000000002',
    join_date: '2023-09-15',
    status: 'active',
    phone: '+91 98765 43214',
    address: 'Jayanagar, Bengaluru, KA',
    emergency_contact: '+91 98765 00005 (Brother)',
    profile: INITIAL_PROFILES[4],
    department: INITIAL_DEPARTMENTS[0],
    designation: INITIAL_DESIGNATIONS[1],
  },
];

export const INITIAL_LEAVE_TYPES: LeaveType[] = [
  { id: 'c1000000-0000-0000-0000-000000000001', name: 'Casual Leave', code: 'CASUAL', max_days_per_year: 12, requires_approval: true, is_paid: true },
  { id: 'c1000000-0000-0000-0000-000000000002', name: 'Sick Leave', code: 'SICK', max_days_per_year: 10, requires_approval: true, is_paid: true },
  { id: 'c1000000-0000-0000-0000-000000000003', name: 'Earned Privilege Leave', code: 'EARNED', max_days_per_year: 15, requires_approval: true, is_paid: true },
  { id: 'c1000000-0000-0000-0000-000000000004', name: 'Parental Leave', code: 'PARENTAL', max_days_per_year: 90, requires_approval: true, is_paid: true },
];

export const INITIAL_LEAVE_BALANCES: LeaveBalance[] = [
  { id: 'cb100000-0000-0000-0000-000000000001', employee_id: 'e1000000-0000-0000-0000-000000000001', leave_type_id: 'c1000000-0000-0000-0000-000000000001', total_allocated: 12, used: 3, pending: 1, year: 2026, leave_type: INITIAL_LEAVE_TYPES[0] },
  { id: 'cb100000-0000-0000-0000-000000000002', employee_id: 'e1000000-0000-0000-0000-000000000001', leave_type_id: 'c1000000-0000-0000-0000-000000000002', total_allocated: 10, used: 1, pending: 0, year: 2026, leave_type: INITIAL_LEAVE_TYPES[1] },
  { id: 'cb100000-0000-0000-0000-000000000003', employee_id: 'e1000000-0000-0000-0000-000000000001', leave_type_id: 'c1000000-0000-0000-0000-000000000003', total_allocated: 15, used: 2, pending: 0, year: 2026, leave_type: INITIAL_LEAVE_TYPES[2] },
  { id: 'cb100000-0000-0000-0000-000000000004', employee_id: 'e1000000-0000-0000-0000-000000000005', leave_type_id: 'c1000000-0000-0000-0000-000000000003', total_allocated: 15, used: 0, pending: 5, year: 2026, leave_type: INITIAL_LEAVE_TYPES[2] },
];

export const INITIAL_LEAVE_REQUESTS: LeaveRequest[] = [
  {
    id: 'a1000000-0000-0000-0000-000000000001',
    employee_id: 'e1000000-0000-0000-0000-000000000001',
    leave_type_id: 'c1000000-0000-0000-0000-000000000001',
    start_date: '2026-08-28',
    end_date: '2026-08-29',
    total_days: 2,
    reason: 'Family obligation and medical appointment',
    status: 'pending',
    created_at: '2026-08-21T10:30:00Z',
    employee: INITIAL_EMPLOYEES[0],
    leave_type: INITIAL_LEAVE_TYPES[0],
  },
  {
    id: 'a1000000-0000-0000-0000-000000000002',
    employee_id: 'e1000000-0000-0000-0000-000000000005',
    leave_type_id: 'c1000000-0000-0000-0000-000000000003',
    start_date: '2026-09-01',
    end_date: '2026-09-05',
    total_days: 5,
    reason: 'Annual planned vacation',
    status: 'pending',
    created_at: '2026-08-20T14:15:00Z',
    employee: INITIAL_EMPLOYEES[4],
    leave_type: INITIAL_LEAVE_TYPES[2],
  },
  {
    id: 'a1000000-0000-0000-0000-000000000003',
    employee_id: 'e1000000-0000-0000-0000-000000000004',
    leave_type_id: 'c1000000-0000-0000-0000-000000000002',
    start_date: '2026-08-10',
    end_date: '2026-08-11',
    total_days: 2,
    reason: 'Fever and rest',
    status: 'approved',
    reviewed_by: 'f1000000-0000-0000-0000-000000000002',
    reviewed_at: '2026-08-10T09:15:00Z',
    created_at: '2026-08-09T18:00:00Z',
    employee: INITIAL_EMPLOYEES[3],
    leave_type: INITIAL_LEAVE_TYPES[1],
  },
];

export const INITIAL_ATTENDANCE: AttendanceRecord[] = [
  {
    id: 'att1',
    employee_id: 'e1000000-0000-0000-0000-000000000001',
    date: '2026-08-22',
    status: 'present',
    check_in: '2026-08-22T09:02:00Z',
    total_minutes: 180,
    break_minutes: 0,
    overtime_minutes: 0,
    events: [
      { id: 'ev1', attendance_id: 'att1', event_type: 'CHECK_IN', timestamp: '2026-08-22T09:02:00Z', device_info: 'Chrome / Windows (Office IP)' }
    ]
  },
  {
    id: 'att2',
    employee_id: 'e1000000-0000-0000-0000-000000000002',
    date: '2026-08-22',
    status: 'present',
    check_in: '2026-08-22T08:55:00Z',
    total_minutes: 195,
    break_minutes: 15,
    overtime_minutes: 0,
    events: [
      { id: 'ev2', attendance_id: 'att2', event_type: 'CHECK_IN', timestamp: '2026-08-22T08:55:00Z', device_info: 'Safari / macOS' }
    ]
  },
  {
    id: 'att3',
    employee_id: 'e1000000-0000-0000-0000-000000000003',
    date: '2026-08-22',
    status: 'present',
    check_in: '2026-08-22T09:15:00Z',
    total_minutes: 165,
    break_minutes: 0,
    overtime_minutes: 0,
    events: [
      { id: 'ev3', attendance_id: 'att3', event_type: 'CHECK_IN', timestamp: '2026-08-22T09:15:00Z' }
    ]
  },
  {
    id: 'att4',
    employee_id: 'e1000000-0000-0000-0000-000000000004',
    date: '2026-08-22',
    status: 'present',
    check_in: '2026-08-22T09:30:00Z',
    total_minutes: 150,
    break_minutes: 0,
    overtime_minutes: 0,
    events: [
      { id: 'ev4', attendance_id: 'att4', event_type: 'CHECK_IN', timestamp: '2026-08-22T09:30:00Z' }
    ]
  },
  {
    id: 'att5',
    employee_id: 'e1000000-0000-0000-0000-000000000005',
    date: '2026-08-22',
    status: 'late',
    check_in: '2026-08-22T10:45:00Z',
    total_minutes: 80,
    break_minutes: 0,
    overtime_minutes: 0,
    notes: 'Traffic delay on ORR',
    events: [
      { id: 'ev5', attendance_id: 'att5', event_type: 'CHECK_IN', timestamp: '2026-08-22T10:45:00Z' }
    ]
  }
];

export const INITIAL_PAYROLL: PayrollRecord[] = [
  {
    id: 'pay1',
    employee_id: 'e1000000-0000-0000-0000-000000000001',
    pay_period_month: 8,
    pay_period_year: 2026,
    base_salary: 120000,
    allowances: 35000,
    deductions: 15000,
    net_salary: 140000,
    payment_status: 'processed',
    paid_at: '2026-08-01T10:00:00Z',
    components_breakdown: {
      'Basic Salary': 80000,
      'House Rent Allowance (HRA)': 40000,
      'Special Allowance': 35000,
      'Provident Fund (PF)': 9600,
      'Professional Tax': 400,
      'Income Tax (TDS)': 5000,
    },
    created_at: '2026-08-01T00:00:00Z',
    employee: INITIAL_EMPLOYEES[0],
  },
  {
    id: 'pay2',
    employee_id: 'e1000000-0000-0000-0000-000000000005',
    pay_period_month: 8,
    pay_period_year: 2026,
    base_salary: 135000,
    allowances: 40000,
    deductions: 18000,
    net_salary: 157000,
    payment_status: 'processed',
    paid_at: '2026-08-01T10:00:00Z',
    components_breakdown: {
      'Basic Salary': 90000,
      'House Rent Allowance (HRA)': 45000,
      'Special Allowance': 40000,
      'Provident Fund (PF)': 10800,
      'Professional Tax': 400,
      'Income Tax (TDS)': 6800,
    },
    created_at: '2026-08-01T00:00:00Z',
    employee: INITIAL_EMPLOYEES[4],
  }
];

export const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'n1',
    user_id: 'f1000000-0000-0000-0000-000000000001',
    title: 'Workday Check-in Confirmed',
    message: 'You successfully checked in today at 09:02 AM.',
    type: 'success',
    read: true,
    created_at: '2026-08-22T09:02:00Z',
  },
  {
    id: 'n2',
    user_id: 'f1000000-0000-0000-0000-000000000002',
    title: 'Pending Leave Request',
    message: 'Ananya Sharma submitted a leave request for Aug 28 - Aug 29.',
    type: 'action',
    read: false,
    link: '/decisions',
    created_at: '2026-08-21T10:30:00Z',
  },
  {
    id: 'n3',
    user_id: 'f1000000-0000-0000-0000-000000000002',
    title: 'Workforce Signal Alert',
    message: 'Late check-in pattern detected for Rohan Mehta in Engineering.',
    type: 'warning',
    read: false,
    link: '/control-room',
    created_at: '2026-08-22T10:46:00Z',
  }
];

export const INITIAL_AUDIT_LOGS: AuditLog[] = [
  {
    id: 'a1',
    actor_id: 'f1000000-0000-0000-0000-000000000001',
    actor_name: 'Ananya Sharma',
    action: 'CHECK_IN',
    target_type: 'attendance',
    target_id: 'att1',
    metadata: { date: '2026-08-22', check_in: '09:02:00' },
    timestamp: '2026-08-22T09:02:00Z',
  },
  {
    id: 'a2',
    actor_id: 'f1000000-0000-0000-0000-000000000001',
    actor_name: 'Ananya Sharma',
    action: 'LEAVE_SUBMITTED',
    target_type: 'leave_request',
    target_id: 'a1000000-0000-0000-0000-000000000001',
    metadata: { start_date: '2026-08-28', end_date: '2026-08-29', total_days: 2 },
    timestamp: '2026-08-21T10:30:00Z',
  },
  {
    id: 'a3',
    actor_id: 'f1000000-0000-0000-0000-000000000002',
    actor_name: 'Rahul Verma',
    action: 'PAYROLL_PROCESSED',
    target_type: 'payroll',
    target_id: 'pay1',
    metadata: { period: '08/2026', total_employees: 5 },
    timestamp: '2026-08-01T10:00:00Z',
  }
];

export const INITIAL_SIGNALS: WorkforceSignal[] = [
  {
    id: 'a2000000-0000-0000-0000-000000000001',
    signal_type: 'LATE_CHECKIN_PATTERN',
    title: 'Repeated Late Check-Ins',
    description: 'Rohan Mehta has checked in after 10:15 AM on 4 of the last 5 working days.',
    severity: 'medium',
    employee_id: 'e1000000-0000-0000-0000-000000000005',
    department_id: 'd1000000-0000-0000-0000-000000000001',
    metadata: { late_count: 4, window_days: 5 },
    created_at: '2026-08-22T10:45:00Z',
  },
  {
    id: 'a2000000-0000-0000-0000-000000000002',
    signal_type: 'LEAVE_CONCENTRATION',
    title: 'Product Design Overlapping Leave Risk',
    description: '50% of Product Design team has requested leave in the first week of September.',
    severity: 'high',
    department_id: 'd1000000-0000-0000-0000-000000000003',
    metadata: { overlap_percentage: 50 },
    created_at: '2026-08-20T15:00:00Z',
  }
];
