-- DAYFLOW Master Seed Dataset
-- 1. DEPARTMENTS
INSERT INTO departments (id, code, name, description) VALUES
${DEPARTMENTS.map(d => `('${d.id}', '${d.code}', '${d.name}', '${d.description}')`).join(',\n')};

-- 2. DESIGNATIONS
INSERT INTO designations (id, department_id, title, salary_grade) VALUES
${DESIGNATIONS.map(d => `('${d.id}', '${d.department_id}', '${d.title}', '${d.salary_grade}')`).join(',\n')};

-- 3. PROFILES
INSERT INTO profiles (id, email, full_name, role, avatar_url) VALUES
${INITIAL_PROFILES.map(p => `('${p.id}', '${p.email}', ${escapeStr(p.full_name)}, '${p.role}', '${p.avatar_url}')`).join(',\n')};

-- 4. EMPLOYEES
INSERT INTO employees (id, profile_id, employee_code, department_id, designation_id, join_date, status, phone) VALUES
${INITIAL_EMPLOYEES.map(e => `('${e.id}', '${e.profile_id}', '${e.employee_code}', '${e.department_id}', '${e.designation_id}', '${e.join_date}', '${e.status}', '${e.phone}')`).join(',\n')};

-- 5. LEAVE TYPES
INSERT INTO leave_types (id, name, code, max_days_per_year, requires_approval, is_paid) VALUES
${LEAVE_TYPES.map(l => `('${l.id}', '${l.name}', '${l.code}', ${l.max_days_per_year}, ${l.requires_approval}, ${l.is_paid})`).join(',\n')};

-- 6. LEAVE BALANCES
INSERT INTO leave_balances (id, employee_id, leave_type_id, total_allocated, used, pending, year) VALUES
${LEAVE_BALANCES.map(b => `('${b.id}', '${b.employee_id}', '${b.leave_type_id}', ${b.total_allocated}, ${b.used}, ${b.pending}, ${b.year})`).join(',\n')};

-- 7. LEAVE REQUESTS
INSERT INTO leave_requests (id, employee_id, leave_type_id, start_date, end_date, total_days, reason, status, created_at) VALUES
${LEAVE_REQUESTS.map(r => `('${r.id}', '${r.employee_id}', '${r.leave_type_id}', '${r.start_date}', '${r.end_date}', ${r.total_days}, ${escapeStr(r.reason)}, '${r.status}', '${r.created_at}')`).join(',\n')};

-- 8. ATTENDANCE
INSERT INTO attendance (id, employee_id, date, status, check_in, check_out, total_minutes, break_minutes, overtime_minutes) VALUES
${ATTENDANCE.map(a => `('${a.id}', '${a.employee_id}', '${a.date}', '${a.status}', '${a.check_in}', ${a.check_out ? `'${a.check_out}'` : 'NULL'}, ${a.total_minutes}, ${a.break_minutes}, ${a.overtime_minutes})`).join(',\n')};

-- 9. PAYROLL
INSERT INTO payroll (id, employee_id, pay_period_month, pay_period_year, base_salary, deductions, bonuses, net_salary, status) VALUES
${PAYROLL.map(p => `('${p.id}', '${p.employee_id}', ${p.pay_period_month}, ${p.pay_period_year}, ${p.base_salary}, ${p.deductions}, ${p.bonuses}, ${p.net_salary}, '${p.status}')`).join(',\n')};
