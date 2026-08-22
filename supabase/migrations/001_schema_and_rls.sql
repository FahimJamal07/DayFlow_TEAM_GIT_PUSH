-- DAYFLOW Master Relational Schema & Row Level Security Policies
-- Database: PostgreSQL (Supabase Compatible)

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Enums
CREATE TYPE user_role AS ENUM ('employee', 'hr', 'admin');
CREATE TYPE attendance_status AS ENUM ('present', 'absent', 'on_leave', 'half_day', 'late');
CREATE TYPE leave_status AS ENUM ('pending', 'approved', 'rejected', 'cancelled');
CREATE TYPE leave_code AS ENUM ('CASUAL', 'SICK', 'EARNED', 'PARENTAL', 'UNPAID');
CREATE TYPE payroll_status AS ENUM ('draft', 'processed', 'paid');
CREATE TYPE signal_severity AS ENUM ('low', 'medium', 'high', 'critical');

-- 1. Profiles
CREATE TABLE profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    auth_id UUID UNIQUE,
    email TEXT NOT NULL UNIQUE,
    full_name TEXT NOT NULL,
    avatar_url TEXT,
    role user_role NOT NULL DEFAULT 'employee',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Departments
CREATE TABLE departments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    code TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    description TEXT,
    manager_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. Designations
CREATE TABLE designations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    department_id UUID REFERENCES departments(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    salary_grade TEXT NOT NULL
);

-- 4. Employees
CREATE TABLE employees (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    profile_id UUID UNIQUE REFERENCES profiles(id) ON DELETE CASCADE,
    employee_code TEXT NOT NULL UNIQUE,
    department_id UUID REFERENCES departments(id) ON DELETE RESTRICT,
    designation_id UUID REFERENCES designations(id) ON DELETE RESTRICT,
    manager_id UUID REFERENCES employees(id) ON DELETE SET NULL,
    join_date DATE NOT NULL DEFAULT CURRENT_DATE,
    status TEXT NOT NULL DEFAULT 'active',
    phone TEXT,
    address TEXT,
    emergency_contact TEXT
);

-- 5. Attendance
CREATE TABLE attendance (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    employee_id UUID NOT NULL REFERENCES employees(id) ON DELETE CASCADE,
    date DATE NOT NULL DEFAULT CURRENT_DATE,
    status attendance_status NOT NULL DEFAULT 'present',
    check_in TIMESTAMPTZ,
    check_out TIMESTAMPTZ,
    total_minutes INT DEFAULT 0,
    break_minutes INT DEFAULT 0,
    overtime_minutes INT DEFAULT 0,
    notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT unique_employee_date UNIQUE(employee_id, date)
);

-- 6. Attendance Events (Timeline)
CREATE TABLE attendance_events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    attendance_id UUID NOT NULL REFERENCES attendance(id) ON DELETE CASCADE,
    event_type TEXT NOT NULL, -- 'CHECK_IN', 'BREAK_START', 'BREAK_END', 'CHECK_OUT'
    timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    device_info TEXT,
    notes TEXT
);

-- 7. Leave Types
CREATE TABLE leave_types (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    code leave_code NOT NULL UNIQUE,
    max_days_per_year INT NOT NULL DEFAULT 12,
    requires_approval BOOLEAN DEFAULT true,
    is_paid BOOLEAN DEFAULT true
);

-- 8. Leave Balances
CREATE TABLE leave_balances (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    employee_id UUID NOT NULL REFERENCES employees(id) ON DELETE CASCADE,
    leave_type_id UUID NOT NULL REFERENCES leave_types(id) ON DELETE CASCADE,
    total_allocated DECIMAL(5,2) NOT NULL DEFAULT 12.0,
    used DECIMAL(5,2) NOT NULL DEFAULT 0.0,
    pending DECIMAL(5,2) NOT NULL DEFAULT 0.0,
    year INT NOT NULL DEFAULT EXTRACT(YEAR FROM CURRENT_DATE),
    CONSTRAINT unique_emp_leave_year UNIQUE(employee_id, leave_type_id, year)
);

-- 9. Leave Requests
CREATE TABLE leave_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    employee_id UUID NOT NULL REFERENCES employees(id) ON DELETE CASCADE,
    leave_type_id UUID NOT NULL REFERENCES leave_types(id) ON DELETE RESTRICT,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    total_days DECIMAL(5,2) NOT NULL,
    reason TEXT NOT NULL,
    status leave_status NOT NULL DEFAULT 'pending',
    reviewed_by UUID REFERENCES profiles(id) ON DELETE SET NULL,
    reviewed_at TIMESTAMPTZ,
    rejection_reason TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 10. Salary Components
CREATE TABLE salary_components (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    type TEXT NOT NULL, -- 'earning' or 'deduction'
    is_taxable BOOLEAN DEFAULT true
);

-- 11. Payroll
CREATE TABLE payroll (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    employee_id UUID NOT NULL REFERENCES employees(id) ON DELETE CASCADE,
    pay_period_month INT NOT NULL,
    pay_period_year INT NOT NULL,
    base_salary DECIMAL(12,2) NOT NULL,
    allowances DECIMAL(12,2) NOT NULL DEFAULT 0.00,
    deductions DECIMAL(12,2) NOT NULL DEFAULT 0.00,
    net_salary DECIMAL(12,2) NOT NULL,
    payment_status payroll_status NOT NULL DEFAULT 'draft',
    paid_at TIMESTAMPTZ,
    payslip_url TEXT,
    components_breakdown JSONB NOT NULL DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT unique_emp_pay_period UNIQUE(employee_id, pay_period_month, pay_period_year)
);

-- 12. Notifications
CREATE TABLE notifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    type TEXT NOT NULL DEFAULT 'info', -- 'info', 'success', 'warning', 'action'
    read BOOLEAN NOT NULL DEFAULT false,
    link TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 13. Audit Logs (Immutable)
CREATE TABLE audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    actor_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
    action TEXT NOT NULL,
    target_type TEXT NOT NULL,
    target_id UUID,
    metadata JSONB DEFAULT '{}'::jsonb,
    timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 14. Signals (Workforce Intelligence)
CREATE TABLE signals (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    signal_type TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    severity signal_severity NOT NULL DEFAULT 'medium',
    employee_id UUID REFERENCES employees(id) ON DELETE CASCADE,
    department_id UUID REFERENCES departments(id) ON DELETE CASCADE,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- INDEXES FOR HIGH PERFORMANCE
CREATE INDEX idx_attendance_emp_date ON attendance(employee_id, date);
CREATE INDEX idx_attendance_date ON attendance(date);
CREATE INDEX idx_leave_req_emp ON leave_requests(employee_id);
CREATE INDEX idx_leave_req_status ON leave_requests(status);
CREATE INDEX idx_payroll_emp ON payroll(employee_id);
CREATE INDEX idx_notifications_user_unread ON notifications(user_id, read);
CREATE INDEX idx_audit_timestamp ON audit_logs(timestamp DESC);

-- ROW LEVEL SECURITY (RLS) POLICIES

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE departments ENABLE ROW LEVEL SECURITY;
ALTER TABLE designations ENABLE ROW LEVEL SECURITY;
ALTER TABLE employees ENABLE ROW LEVEL SECURITY;
ALTER TABLE attendance ENABLE ROW LEVEL SECURITY;
ALTER TABLE attendance_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE leave_types ENABLE ROW LEVEL SECURITY;
ALTER TABLE leave_balances ENABLE ROW LEVEL SECURITY;
ALTER TABLE leave_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE salary_components ENABLE ROW LEVEL SECURITY;
ALTER TABLE payroll ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE signals ENABLE ROW LEVEL SECURITY;

-- Helper functions for RLS
CREATE OR REPLACE FUNCTION current_profile_id() RETURNS UUID AS $$
    SELECT id FROM profiles WHERE auth_id = auth.uid();
$$ LANGUAGE SQL STABLE;

CREATE OR REPLACE FUNCTION current_user_role() RETURNS user_role AS $$
    SELECT role FROM profiles WHERE auth_id = auth.uid();
$$ LANGUAGE SQL STABLE;

CREATE OR REPLACE FUNCTION current_employee_id() RETURNS UUID AS $$
    SELECT id FROM employees WHERE profile_id = (SELECT id FROM profiles WHERE auth_id = auth.uid());
$$ LANGUAGE SQL STABLE;

-- PROFILES POLICIES
CREATE POLICY "Public read for profiles" ON profiles FOR SELECT USING (true);
CREATE POLICY "Users update own profile" ON profiles FOR UPDATE USING (auth_id = auth.uid());
CREATE POLICY "HR/Admin manage profiles" ON profiles FOR ALL USING (current_user_role() IN ('hr', 'admin'));

-- EMPLOYEES POLICIES
CREATE POLICY "Read employees" ON employees FOR SELECT USING (true);
CREATE POLICY "HR/Admin manage employees" ON employees FOR ALL USING (current_user_role() IN ('hr', 'admin'));

-- ATTENDANCE POLICIES
CREATE POLICY "Employees read own attendance" ON attendance FOR SELECT USING (
    employee_id = current_employee_id() OR current_user_role() IN ('hr', 'admin')
);
CREATE POLICY "Employees insert own attendance" ON attendance FOR INSERT WITH CHECK (
    employee_id = current_employee_id() OR current_user_role() IN ('hr', 'admin')
);
CREATE POLICY "Employees update own attendance" ON attendance FOR UPDATE USING (
    employee_id = current_employee_id() OR current_user_role() IN ('hr', 'admin')
);

-- LEAVE REQUESTS POLICIES
CREATE POLICY "Employees read own leave requests" ON leave_requests FOR SELECT USING (
    employee_id = current_employee_id() OR current_user_role() IN ('hr', 'admin')
);
CREATE POLICY "Employees insert own leave requests" ON leave_requests FOR INSERT WITH CHECK (
    employee_id = current_employee_id()
);
CREATE POLICY "HR/Admin manage leave requests" ON leave_requests FOR ALL USING (
    current_user_role() IN ('hr', 'admin')
);

-- LEAVE BALANCES POLICIES
CREATE POLICY "Employees read own leave balances" ON leave_balances FOR SELECT USING (
    employee_id = current_employee_id() OR current_user_role() IN ('hr', 'admin')
);
CREATE POLICY "HR/Admin manage leave balances" ON leave_balances FOR ALL USING (
    current_user_role() IN ('hr', 'admin')
);

-- PAYROLL POLICIES (STRICT FINANCIAL PRIVACY)
CREATE POLICY "Employees read ONLY own payroll" ON payroll FOR SELECT USING (
    employee_id = current_employee_id() OR current_user_role() IN ('hr', 'admin')
);
CREATE POLICY "HR/Admin manage payroll" ON payroll FOR ALL USING (
    current_user_role() IN ('hr', 'admin')
);

-- NOTIFICATIONS POLICIES
CREATE POLICY "Users read own notifications" ON notifications FOR SELECT USING (
    user_id = current_profile_id()
);
CREATE POLICY "Users update own notifications" ON notifications FOR UPDATE USING (
    user_id = current_profile_id()
);

-- AUDIT LOGS POLICIES
CREATE POLICY "HR/Admin read audit logs" ON audit_logs FOR SELECT USING (
    current_user_role() IN ('hr', 'admin')
);
CREATE POLICY "Authenticated users insert audit logs" ON audit_logs FOR INSERT WITH CHECK (
    auth.uid() IS NOT NULL
);

-- SIGNALS POLICIES
CREATE POLICY "HR/Admin view signals" ON signals FOR SELECT USING (
    current_user_role() IN ('hr', 'admin')
);
