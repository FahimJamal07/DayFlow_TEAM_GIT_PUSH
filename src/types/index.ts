// DAYFLOW Master TypeScript Definitions

export type UserRole = 'employee' | 'hr' | 'admin';

export interface UserProfile {
  id: string;
  auth_id?: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  role: UserRole;
  created_at: string;
  updated_at?: string;
}

export interface Department {
  id: string;
  code: string;
  name: string;
  description?: string;
  manager_id?: string;
  created_at?: string;
}

export interface Designation {
  id: string;
  department_id: string;
  title: string;
  salary_grade: string;
}

export interface Employee {
  id: string;
  profile_id: string;
  employee_code: string;
  department_id: string;
  designation_id: string;
  manager_id?: string;
  join_date: string;
  status: 'active' | 'on_leave' | 'terminated';
  phone?: string;
  address?: string;
  emergency_contact?: string;
  profile?: UserProfile;
  department?: Department;
  designation?: Designation;
}

export type AttendanceStatus = 'present' | 'absent' | 'on_leave' | 'half_day' | 'late';

export interface AttendanceRecord {
  id: string;
  employee_id: string;
  date: string; // YYYY-MM-DD
  status: AttendanceStatus;
  check_in?: string; // ISO string
  check_out?: string; // ISO string
  total_minutes: number;
  break_minutes: number;
  overtime_minutes: number;
  notes?: string;
  created_at?: string;
  events?: AttendanceEvent[];
}

export type AttendanceEventType = 'CHECK_IN' | 'BREAK_START' | 'BREAK_END' | 'CHECK_OUT';

export interface AttendanceEvent {
  id: string;
  attendance_id: string;
  event_type: AttendanceEventType;
  timestamp: string;
  device_info?: string;
  notes?: string;
}

export type LeaveCode = 'CASUAL' | 'SICK' | 'EARNED' | 'PARENTAL' | 'UNPAID';

export interface LeaveType {
  id: string;
  name: string;
  code: LeaveCode;
  max_days_per_year: number;
  requires_approval: boolean;
  is_paid: boolean;
}

export interface LeaveBalance {
  id: string;
  employee_id: string;
  leave_type_id: string;
  total_allocated: number;
  used: number;
  pending: number;
  year: number;
  leave_type?: LeaveType;
}

export type LeaveStatus = 'pending' | 'approved' | 'rejected' | 'cancelled';

export interface LeaveRequest {
  id: string;
  employee_id: string;
  leave_type_id: string;
  start_date: string;
  end_date: string;
  total_days: number;
  reason: string;
  status: LeaveStatus;
  reviewed_by?: string;
  reviewed_at?: string;
  rejection_reason?: string;
  created_at: string;
  employee?: Employee;
  leave_type?: LeaveType;
}

export type PayrollStatus = 'draft' | 'processed' | 'paid';

export interface PayrollRecord {
  id: string;
  employee_id: string;
  pay_period_month: number;
  pay_period_year: number;
  base_salary: number;
  allowances: number;
  deductions: number;
  net_salary: number;
  payment_status: PayrollStatus;
  paid_at?: string;
  payslip_url?: string;
  components_breakdown: Record<string, number>;
  created_at: string;
  employee?: Employee;
}

export interface NotificationItem {
  id: string;
  user_id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'action';
  read: boolean;
  link?: string;
  created_at: string;
}

export interface AuditLog {
  id: string;
  actor_id?: string;
  actor_name?: string;
  action: string;
  target_type: string;
  target_id?: string;
  metadata?: Record<string, any>;
  timestamp: string;
}

export type SignalSeverity = 'low' | 'medium' | 'high' | 'critical';

export interface WorkforceSignal {
  id: string;
  signal_type: string;
  title: string;
  description: string;
  severity: SignalSeverity;
  employee_id?: string;
  department_id?: string;
  metadata?: Record<string, any>;
  created_at: string;
}
