-- DAYFLOW Master Seed Dataset
-- Fictional Organization: Dayflow Technologies Inc.

-- 1. DEPARTMENTS
INSERT INTO departments (id, code, name, description) VALUES
('d1000000-0000-0000-0000-000000000001', 'ENG', 'Engineering', 'Software Development & Platform Engineering'),
('d1000000-0000-0000-0000-000000000002', 'HR', 'Human Resources', 'People Operations, Culture & Compensation'),
('d1000000-0000-0000-0000-000000000003', 'DES', 'Product Design', 'User Experience & Visual Interface Design'),
('d1000000-0000-0000-0000-000000000004', 'FIN', 'Finance & Accounting', 'Financial Planning, Payroll & Auditing');

-- 2. DESIGNATIONS
INSERT INTO designations (id, department_id, title, salary_grade) VALUES
('g1000000-0000-0000-0000-000000000001', 'd1000000-0000-0000-0000-000000000001', 'Senior Frontend Engineer', 'L5-Eng'),
('g1000000-0000-0000-0000-000000000002', 'd1000000-0000-0000-0000-000000000001', 'Lead Backend Architect', 'L6-Eng'),
('g1000000-0000-0000-0000-000000000003', 'd1000000-0000-0000-0000-000000000002', 'HR Business Partner', 'L5-HR'),
('g1000000-0000-0000-0000-000000000004', 'd1000000-0000-0000-0000-000000000003', 'Staff Product Designer', 'L6-Des'),
('g1000000-0000-0000-0000-000000000005', 'd1000000-0000-0000-0000-000000000004', 'Senior Financial Analyst', 'L5-Fin');

-- 3. PROFILES
INSERT INTO profiles (id, email, full_name, role, avatar_url) VALUES
('p1000000-0000-0000-0000-000000000001', 'employee@dayflow.hr', 'Ananya Sharma', 'employee', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'),
('p1000000-0000-0000-0000-000000000002', 'hr@dayflow.hr', 'Rahul Verma', 'hr', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'),
('p1000000-0000-0000-0000-000000000003', 'admin@dayflow.hr', 'Vikramaditya Singh', 'admin', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150'),
('p1000000-0000-0000-0000-000000000004', 'priya.nair@dayflow.hr', 'Priya Nair', 'employee', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'),
('p1000000-0000-0000-0000-000000000005', 'rohan.mehta@dayflow.hr', 'Rohan Mehta', 'employee', 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150');

-- 4. EMPLOYEES
INSERT INTO employees (id, profile_id, employee_code, department_id, designation_id, join_date, status, phone) VALUES
('e1000000-0000-0000-0000-000000000001', 'p1000000-0000-0000-0000-000000000001', 'DF-1001', 'd1000000-0000-0000-0000-000000000001', 'g1000000-0000-0000-0000-000000000001', '2023-01-15', 'active', '+91 98765 43210'),
('e1000000-0000-0000-0000-000000000002', 'p1000000-0000-0000-0000-000000000002', 'DF-1002', 'd1000000-0000-0000-0000-000000000002', 'g1000000-0000-0000-0000-000000000003', '2022-06-01', 'active', '+91 98765 43211'),
('e1000000-0000-0000-0000-000000000003', 'p1000000-0000-0000-0000-000000000003', 'DF-1000', 'd1000000-0000-0000-0000-000000000001', 'g1000000-0000-0000-0000-000000000002', '2021-03-10', 'active', '+91 98765 43212'),
('e1000000-0000-0000-0000-000000000004', 'p1000000-0000-0000-0000-000000000004', 'DF-1004', 'd1000000-0000-0000-0000-000000000003', 'g1000000-0000-0000-0000-000000000004', '2023-04-01', 'active', '+91 98765 43213'),
('e1000000-0000-0000-0000-000000000005', 'p1000000-0000-0000-0000-000000000005', 'DF-1005', 'd1000000-0000-0000-0000-000000000001', 'g1000000-0000-0000-0000-000000000002', '2023-09-15', 'active', '+91 98765 43214');

-- 5. LEAVE TYPES
INSERT INTO leave_types (id, name, code, max_days_per_year, requires_approval, is_paid) VALUES
('lt100000-0000-0000-0000-000000000001', 'Casual Leave', 'CASUAL', 12, true, true),
('lt100000-0000-0000-0000-000000000002', 'Sick Leave', 'SICK', 10, true, true),
('lt100000-0000-0000-0000-000000000003', 'Earned Privilege Leave', 'EARNED', 15, true, true),
('lt100000-0000-0000-0000-000000000004', 'Parental Leave', 'PARENTAL', 90, true, true);

-- 6. LEAVE BALANCES FOR ANANYA (EMPLOYEE)
INSERT INTO leave_balances (employee_id, leave_type_id, total_allocated, used, pending, year) VALUES
('e1000000-0000-0000-0000-000000000001', 'lt100000-0000-0000-0000-000000000001', 12.0, 3.0, 1.0, 2026),
('e1000000-0000-0000-0000-000000000001', 'lt100000-0000-0000-0000-000000000002', 10.0, 1.0, 0.0, 2026),
('e1000000-0000-0000-0000-000000000001', 'lt100000-0000-0000-0000-000000000003', 15.0, 2.0, 0.0, 2026);

-- 7. PENDING LEAVE REQUEST FOR HR DECISION INBOX DEMO
INSERT INTO leave_requests (id, employee_id, leave_type_id, start_date, end_date, total_days, reason, status, created_at) VALUES
('lr100000-0000-0000-0000-000000000001', 'e1000000-0000-0000-0000-000000000001', 'lt100000-0000-0000-0000-000000000001', '2026-08-28', '2026-08-29', 2.0, 'Family obligation and medical checkup', 'pending', NOW()),
('lr100000-0000-0000-0000-000000000002', 'e1000000-0000-0000-0000-000000000005', 'lt100000-0000-0000-0000-000000000003', '2026-09-01', '2026-09-05', 5.0, 'Annual planned vacation', 'pending', NOW());

-- 8. SIGNALS FOR HR WORKFORCE INTELLIGENCE
INSERT INTO signals (id, signal_type, title, description, severity, employee_id, department_id) VALUES
('s1000000-0000-0000-0000-000000000001', 'LATE_CHECKIN_PATTERN', 'Repeated Late Arrivals', 'Rohan Mehta has checked in after 10:15 AM on 4 out of the last 5 working days.', 'medium', 'e1000000-0000-0000-0000-000000000005', 'd1000000-0000-0000-0000-000000000001'),
('s1000000-0000-0000-0000-000000000002', 'LEAVE_CONCENTRATION', 'High Team Absence Overlap', '2 of 4 Product Design team members have requested leave for the week of Sept 1st.', 'high', NULL, 'd1000000-0000-0000-0000-000000000003');
