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
  {
    "id": "d1000000-0000-0000-0000-000000000001",
    "code": "ENG",
    "name": "Engineering",
    "description": "Software Development & Platform Engineering"
  },
  {
    "id": "d1000000-0000-0000-0000-000000000002",
    "code": "HR",
    "name": "Human Resources",
    "description": "People Operations, Culture & Compensation"
  },
  {
    "id": "d1000000-0000-0000-0000-000000000003",
    "code": "DES",
    "name": "Product Design",
    "description": "User Experience & Visual Interface Design"
  },
  {
    "id": "d1000000-0000-0000-0000-000000000004",
    "code": "FIN",
    "name": "Finance & Accounting",
    "description": "Financial Planning, Payroll & Auditing"
  }
];
export const INITIAL_DESIGNATIONS: Designation[] = [
  {
    "id": "b1000000-0000-0000-0000-000000000001",
    "department_id": "d1000000-0000-0000-0000-000000000001",
    "title": "Senior Frontend Engineer",
    "salary_grade": "L5-Eng"
  },
  {
    "id": "b1000000-0000-0000-0000-000000000002",
    "department_id": "d1000000-0000-0000-0000-000000000001",
    "title": "Lead Backend Architect",
    "salary_grade": "L6-Eng"
  },
  {
    "id": "b1000000-0000-0000-0000-000000000003",
    "department_id": "d1000000-0000-0000-0000-000000000002",
    "title": "HR Business Partner",
    "salary_grade": "L5-HR"
  },
  {
    "id": "b1000000-0000-0000-0000-000000000004",
    "department_id": "d1000000-0000-0000-0000-000000000003",
    "title": "Staff Product Designer",
    "salary_grade": "L6-Des"
  },
  {
    "id": "b1000000-0000-0000-0000-000000000005",
    "department_id": "d1000000-0000-0000-0000-000000000004",
    "title": "Senior Financial Analyst",
    "salary_grade": "L5-Fin"
  },
  {
    "id": "b1000000-0000-0000-0000-000000000006",
    "department_id": "d1000000-0000-0000-0000-000000000001",
    "title": "Software Engineer",
    "salary_grade": "L3-Eng"
  },
  {
    "id": "b1000000-0000-0000-0000-000000000007",
    "department_id": "d1000000-0000-0000-0000-000000000001",
    "title": "DevOps Engineer",
    "salary_grade": "L4-Eng"
  },
  {
    "id": "b1000000-0000-0000-0000-000000000008",
    "department_id": "d1000000-0000-0000-0000-000000000003",
    "title": "UX Researcher",
    "salary_grade": "L4-Des"
  },
  {
    "id": "b1000000-0000-0000-0000-000000000009",
    "department_id": "d1000000-0000-0000-0000-000000000003",
    "title": "UI Designer",
    "salary_grade": "L3-Des"
  },
  {
    "id": "b1000000-0000-0000-0000-000000000010",
    "department_id": "d1000000-0000-0000-0000-000000000004",
    "title": "Accountant",
    "salary_grade": "L3-Fin"
  }
];
export const INITIAL_PROFILES: UserProfile[] = [
  {
    "id": "f1000000-0000-0000-0000-000000000001",
    "email": "employee@dayflow.hr",
    "full_name": "Ananya Sharma",
    "role": "employee",
    "avatar_url": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    "created_at": "2023-01-15T09:00:00Z"
  },
  {
    "id": "f1000000-0000-0000-0000-000000000002",
    "email": "hr@dayflow.hr",
    "full_name": "Rahul Verma",
    "role": "hr",
    "avatar_url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    "created_at": "2022-06-01T09:00:00Z"
  },
  {
    "id": "f1000000-0000-0000-0000-000000000003",
    "email": "admin@dayflow.hr",
    "full_name": "Vikramaditya Singh",
    "role": "admin",
    "avatar_url": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    "created_at": "2021-03-10T09:00:00Z"
  },
  {
    "id": "f1000000-0000-0000-0000-000000000004",
    "email": "priya.nair@dayflow.hr",
    "full_name": "Priya Nair",
    "role": "employee",
    "avatar_url": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    "created_at": "2023-04-01T09:00:00Z"
  },
  {
    "id": "f1000000-0000-0000-0000-000000000005",
    "email": "rohan.mehta@dayflow.hr",
    "full_name": "Rohan Mehta",
    "role": "employee",
    "avatar_url": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150",
    "created_at": "2023-09-15T09:00:00Z"
  },
  {
    "id": "f1000000-0000-0000-0000-000000000006",
    "email": "aarav@dayflow.hr",
    "full_name": "Aarav Patel",
    "role": "employee",
    "avatar_url": "https://ui-avatars.com/api/?name=Aarav%20Patel&background=random",
    "created_at": "2024-01-22T09:00:00Z"
  },
  {
    "id": "f1000000-0000-0000-0000-000000000007",
    "email": "diya@dayflow.hr",
    "full_name": "Diya Kapoor",
    "role": "employee",
    "avatar_url": "https://ui-avatars.com/api/?name=Diya%20Kapoor&background=random",
    "created_at": "2024-01-16T09:00:00Z"
  },
  {
    "id": "f1000000-0000-0000-0000-000000000008",
    "email": "karthik@dayflow.hr",
    "full_name": "Karthik Iyer",
    "role": "employee",
    "avatar_url": "https://ui-avatars.com/api/?name=Karthik%20Iyer&background=random",
    "created_at": "2024-01-24T09:00:00Z"
  },
  {
    "id": "f1000000-0000-0000-0000-000000000009",
    "email": "neha@dayflow.hr",
    "full_name": "Neha Gupta",
    "role": "employee",
    "avatar_url": "https://ui-avatars.com/api/?name=Neha%20Gupta&background=random",
    "created_at": "2024-01-27T09:00:00Z"
  },
  {
    "id": "f1000000-0000-0000-0000-000000000010",
    "email": "ravi@dayflow.hr",
    "full_name": "Ravi Desai",
    "role": "employee",
    "avatar_url": "https://ui-avatars.com/api/?name=Ravi%20Desai&background=random",
    "created_at": "2024-01-17T09:00:00Z"
  },
  {
    "id": "f1000000-0000-0000-0000-000000000011",
    "email": "sneha@dayflow.hr",
    "full_name": "Sneha Rao",
    "role": "employee",
    "avatar_url": "https://ui-avatars.com/api/?name=Sneha%20Rao&background=random",
    "created_at": "2024-01-12T09:00:00Z"
  },
  {
    "id": "f1000000-0000-0000-0000-000000000012",
    "email": "vikram@dayflow.hr",
    "full_name": "Vikram Joshi",
    "role": "employee",
    "avatar_url": "https://ui-avatars.com/api/?name=Vikram%20Joshi&background=random",
    "created_at": "2024-01-25T09:00:00Z"
  },
  {
    "id": "f1000000-0000-0000-0000-000000000013",
    "email": "pooja@dayflow.hr",
    "full_name": "Pooja Reddy",
    "role": "employee",
    "avatar_url": "https://ui-avatars.com/api/?name=Pooja%20Reddy&background=random",
    "created_at": "2024-01-24T09:00:00Z"
  },
  {
    "id": "f1000000-0000-0000-0000-000000000014",
    "email": "siddharth@dayflow.hr",
    "full_name": "Siddharth Bose",
    "role": "employee",
    "avatar_url": "https://ui-avatars.com/api/?name=Siddharth%20Bose&background=random",
    "created_at": "2024-01-25T09:00:00Z"
  },
  {
    "id": "f1000000-0000-0000-0000-000000000015",
    "email": "arjun@dayflow.hr",
    "full_name": "Arjun Singh",
    "role": "employee",
    "avatar_url": "https://ui-avatars.com/api/?name=Arjun%20Singh&background=random",
    "created_at": "2024-01-17T09:00:00Z"
  },
  {
    "id": "f1000000-0000-0000-0000-000000000016",
    "email": "kavya@dayflow.hr",
    "full_name": "Kavya Menon",
    "role": "employee",
    "avatar_url": "https://ui-avatars.com/api/?name=Kavya%20Menon&background=random",
    "created_at": "2024-01-27T09:00:00Z"
  },
  {
    "id": "f1000000-0000-0000-0000-000000000017",
    "email": "aditya@dayflow.hr",
    "full_name": "Aditya Nair",
    "role": "employee",
    "avatar_url": "https://ui-avatars.com/api/?name=Aditya%20Nair&background=random",
    "created_at": "2024-01-23T09:00:00Z"
  },
  {
    "id": "f1000000-0000-0000-0000-000000000018",
    "email": "sanya@dayflow.hr",
    "full_name": "Sanya Agarwal",
    "role": "employee",
    "avatar_url": "https://ui-avatars.com/api/?name=Sanya%20Agarwal&background=random",
    "created_at": "2024-01-22T09:00:00Z"
  },
  {
    "id": "f1000000-0000-0000-0000-000000000019",
    "email": "amitabh@dayflow.hr",
    "full_name": "Amitabh Kumar",
    "role": "employee",
    "avatar_url": "https://ui-avatars.com/api/?name=Amitabh%20Kumar&background=random",
    "created_at": "2024-01-12T09:00:00Z"
  },
  {
    "id": "f1000000-0000-0000-0000-000000000020",
    "email": "meera@dayflow.hr",
    "full_name": "Meera Trivedi",
    "role": "employee",
    "avatar_url": "https://ui-avatars.com/api/?name=Meera%20Trivedi&background=random",
    "created_at": "2024-01-14T09:00:00Z"
  },
  {
    "id": "f1000000-0000-0000-0000-000000000021",
    "email": "devendra@dayflow.hr",
    "full_name": "Devendra Choudhury",
    "role": "employee",
    "avatar_url": "https://ui-avatars.com/api/?name=Devendra%20Choudhury&background=random",
    "created_at": "2024-01-26T09:00:00Z"
  },
  {
    "id": "f1000000-0000-0000-0000-000000000022",
    "email": "isha@dayflow.hr",
    "full_name": "Isha Varma",
    "role": "employee",
    "avatar_url": "https://ui-avatars.com/api/?name=Isha%20Varma&background=random",
    "created_at": "2024-01-12T09:00:00Z"
  }
];
export const INITIAL_EMPLOYEES: Employee[] = ([
  {
    "id": "e1000000-0000-0000-0000-000000000001",
    "profile_id": "f1000000-0000-0000-0000-000000000001",
    "employee_code": "DF-1001",
    "department_id": "d1000000-0000-0000-0000-000000000001",
    "designation_id": "b1000000-0000-0000-0000-000000000001",
    "join_date": "2023-01-15",
    "status": "active",
    "phone": "+91 98765 43210"
  },
  {
    "id": "e1000000-0000-0000-0000-000000000002",
    "profile_id": "f1000000-0000-0000-0000-000000000002",
    "employee_code": "DF-1002",
    "department_id": "d1000000-0000-0000-0000-000000000002",
    "designation_id": "b1000000-0000-0000-0000-000000000003",
    "join_date": "2022-06-01",
    "status": "active",
    "phone": "+91 98765 43211"
  },
  {
    "id": "e1000000-0000-0000-0000-000000000003",
    "profile_id": "f1000000-0000-0000-0000-000000000003",
    "employee_code": "DF-1000",
    "department_id": "d1000000-0000-0000-0000-000000000001",
    "designation_id": "b1000000-0000-0000-0000-000000000002",
    "join_date": "2021-03-10",
    "status": "active",
    "phone": "+91 98765 43212"
  },
  {
    "id": "e1000000-0000-0000-0000-000000000004",
    "profile_id": "f1000000-0000-0000-0000-000000000004",
    "employee_code": "DF-1004",
    "department_id": "d1000000-0000-0000-0000-000000000003",
    "designation_id": "b1000000-0000-0000-0000-000000000004",
    "join_date": "2023-04-01",
    "status": "active",
    "phone": "+91 98765 43213"
  },
  {
    "id": "e1000000-0000-0000-0000-000000000005",
    "profile_id": "f1000000-0000-0000-0000-000000000005",
    "employee_code": "DF-1005",
    "department_id": "d1000000-0000-0000-0000-000000000001",
    "designation_id": "b1000000-0000-0000-0000-000000000002",
    "join_date": "2023-09-15",
    "status": "active",
    "phone": "+91 98765 43214"
  },
  {
    "id": "e1000000-0000-0000-0000-000000000006",
    "profile_id": "f1000000-0000-0000-0000-000000000006",
    "employee_code": "DF-1006",
    "department_id": "d1000000-0000-0000-0000-000000000001",
    "designation_id": "b1000000-0000-0000-0000-000000000007",
    "join_date": "2024-01-27",
    "status": "active",
    "phone": "+91 98765 54306"
  },
  {
    "id": "e1000000-0000-0000-0000-000000000007",
    "profile_id": "f1000000-0000-0000-0000-000000000007",
    "employee_code": "DF-1007",
    "department_id": "d1000000-0000-0000-0000-000000000003",
    "designation_id": "b1000000-0000-0000-0000-000000000008",
    "join_date": "2024-01-13",
    "status": "active",
    "phone": "+91 98765 54307"
  },
  {
    "id": "e1000000-0000-0000-0000-000000000008",
    "profile_id": "f1000000-0000-0000-0000-000000000008",
    "employee_code": "DF-1008",
    "department_id": "d1000000-0000-0000-0000-000000000004",
    "designation_id": "b1000000-0000-0000-0000-000000000010",
    "join_date": "2024-01-19",
    "status": "active",
    "phone": "+91 98765 54308"
  },
  {
    "id": "e1000000-0000-0000-0000-000000000009",
    "profile_id": "f1000000-0000-0000-0000-000000000009",
    "employee_code": "DF-1009",
    "department_id": "d1000000-0000-0000-0000-000000000001",
    "designation_id": "b1000000-0000-0000-0000-000000000007",
    "join_date": "2024-01-17",
    "status": "active",
    "phone": "+91 98765 54309"
  },
  {
    "id": "e1000000-0000-0000-0000-000000000010",
    "profile_id": "f1000000-0000-0000-0000-000000000010",
    "employee_code": "DF-1010",
    "department_id": "d1000000-0000-0000-0000-000000000004",
    "designation_id": "b1000000-0000-0000-0000-000000000010",
    "join_date": "2024-01-18",
    "status": "active",
    "phone": "+91 98765 54310"
  },
  {
    "id": "e1000000-0000-0000-0000-000000000011",
    "profile_id": "f1000000-0000-0000-0000-000000000011",
    "employee_code": "DF-1011",
    "department_id": "d1000000-0000-0000-0000-000000000003",
    "designation_id": "b1000000-0000-0000-0000-000000000009",
    "join_date": "2024-01-28",
    "status": "active",
    "phone": "+91 98765 54311"
  },
  {
    "id": "e1000000-0000-0000-0000-000000000012",
    "profile_id": "f1000000-0000-0000-0000-000000000012",
    "employee_code": "DF-1012",
    "department_id": "d1000000-0000-0000-0000-000000000001",
    "designation_id": "b1000000-0000-0000-0000-000000000002",
    "join_date": "2024-01-15",
    "status": "active",
    "phone": "+91 98765 54312"
  },
  {
    "id": "e1000000-0000-0000-0000-000000000013",
    "profile_id": "f1000000-0000-0000-0000-000000000013",
    "employee_code": "DF-1013",
    "department_id": "d1000000-0000-0000-0000-000000000001",
    "designation_id": "b1000000-0000-0000-0000-000000000007",
    "join_date": "2024-01-25",
    "status": "active",
    "phone": "+91 98765 54313"
  },
  {
    "id": "e1000000-0000-0000-0000-000000000014",
    "profile_id": "f1000000-0000-0000-0000-000000000014",
    "employee_code": "DF-1014",
    "department_id": "d1000000-0000-0000-0000-000000000001",
    "designation_id": "b1000000-0000-0000-0000-000000000007",
    "join_date": "2024-01-21",
    "status": "active",
    "phone": "+91 98765 54314"
  },
  {
    "id": "e1000000-0000-0000-0000-000000000015",
    "profile_id": "f1000000-0000-0000-0000-000000000015",
    "employee_code": "DF-1015",
    "department_id": "d1000000-0000-0000-0000-000000000003",
    "designation_id": "b1000000-0000-0000-0000-000000000009",
    "join_date": "2024-01-18",
    "status": "active",
    "phone": "+91 98765 54315"
  },
  {
    "id": "e1000000-0000-0000-0000-000000000016",
    "profile_id": "f1000000-0000-0000-0000-000000000016",
    "employee_code": "DF-1016",
    "department_id": "d1000000-0000-0000-0000-000000000004",
    "designation_id": "b1000000-0000-0000-0000-000000000005",
    "join_date": "2024-01-11",
    "status": "active",
    "phone": "+91 98765 54316"
  },
  {
    "id": "e1000000-0000-0000-0000-000000000017",
    "profile_id": "f1000000-0000-0000-0000-000000000017",
    "employee_code": "DF-1017",
    "department_id": "d1000000-0000-0000-0000-000000000001",
    "designation_id": "b1000000-0000-0000-0000-000000000002",
    "join_date": "2024-01-14",
    "status": "active",
    "phone": "+91 98765 54317"
  },
  {
    "id": "e1000000-0000-0000-0000-000000000018",
    "profile_id": "f1000000-0000-0000-0000-000000000018",
    "employee_code": "DF-1018",
    "department_id": "d1000000-0000-0000-0000-000000000004",
    "designation_id": "b1000000-0000-0000-0000-000000000010",
    "join_date": "2024-01-21",
    "status": "active",
    "phone": "+91 98765 54318"
  },
  {
    "id": "e1000000-0000-0000-0000-000000000019",
    "profile_id": "f1000000-0000-0000-0000-000000000019",
    "employee_code": "DF-1019",
    "department_id": "d1000000-0000-0000-0000-000000000001",
    "designation_id": "b1000000-0000-0000-0000-000000000007",
    "join_date": "2024-01-24",
    "status": "active",
    "phone": "+91 98765 54319"
  },
  {
    "id": "e1000000-0000-0000-0000-000000000020",
    "profile_id": "f1000000-0000-0000-0000-000000000020",
    "employee_code": "DF-1020",
    "department_id": "d1000000-0000-0000-0000-000000000004",
    "designation_id": "b1000000-0000-0000-0000-000000000005",
    "join_date": "2024-01-19",
    "status": "active",
    "phone": "+91 98765 54320"
  },
  {
    "id": "e1000000-0000-0000-0000-000000000021",
    "profile_id": "f1000000-0000-0000-0000-000000000021",
    "employee_code": "DF-1021",
    "department_id": "d1000000-0000-0000-0000-000000000001",
    "designation_id": "b1000000-0000-0000-0000-000000000002",
    "join_date": "2024-01-13",
    "status": "active",
    "phone": "+91 98765 54321"
  },
  {
    "id": "e1000000-0000-0000-0000-000000000022",
    "profile_id": "f1000000-0000-0000-0000-000000000022",
    "employee_code": "DF-1022",
    "department_id": "d1000000-0000-0000-0000-000000000003",
    "designation_id": "b1000000-0000-0000-0000-000000000009",
    "join_date": "2024-01-23",
    "status": "active",
    "phone": "+91 98765 54322"
  }
] as any).map((e: any) => ({
  ...e,
  profile: INITIAL_PROFILES.find(p => p.id === e.profile_id),
  department: INITIAL_DEPARTMENTS.find(d => d.id === e.department_id),
  designation: INITIAL_DESIGNATIONS.find(d => d.id === e.designation_id)
}));
export const INITIAL_LEAVE_TYPES: LeaveType[] = [
  {
    "id": "c1000000-0000-0000-0000-000000000001",
    "name": "Casual Leave",
    "code": "CASUAL",
    "max_days_per_year": 12,
    "requires_approval": true,
    "is_paid": true
  },
  {
    "id": "c1000000-0000-0000-0000-000000000002",
    "name": "Sick Leave",
    "code": "SICK",
    "max_days_per_year": 10,
    "requires_approval": true,
    "is_paid": true
  },
  {
    "id": "c1000000-0000-0000-0000-000000000003",
    "name": "Earned Privilege Leave",
    "code": "EARNED",
    "max_days_per_year": 15,
    "requires_approval": true,
    "is_paid": true
  },
  {
    "id": "c1000000-0000-0000-0000-000000000004",
    "name": "Parental Leave",
    "code": "PARENTAL",
    "max_days_per_year": 90,
    "requires_approval": true,
    "is_paid": true
  }
];
export const INITIAL_LEAVE_BALANCES: LeaveBalance[] = [
  {
    "id": "cb1000000-0000-0000-0000-000000000001",
    "employee_id": "e1000000-0000-0000-0000-000000000001",
    "leave_type_id": "c1000000-0000-0000-0000-000000000001",
    "total_allocated": 12,
    "used": 3,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000002",
    "employee_id": "e1000000-0000-0000-0000-000000000001",
    "leave_type_id": "c1000000-0000-0000-0000-000000000002",
    "total_allocated": 10,
    "used": 3,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000003",
    "employee_id": "e1000000-0000-0000-0000-000000000001",
    "leave_type_id": "c1000000-0000-0000-0000-000000000003",
    "total_allocated": 15,
    "used": 1,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000004",
    "employee_id": "e1000000-0000-0000-0000-000000000002",
    "leave_type_id": "c1000000-0000-0000-0000-000000000001",
    "total_allocated": 12,
    "used": 3,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000005",
    "employee_id": "e1000000-0000-0000-0000-000000000002",
    "leave_type_id": "c1000000-0000-0000-0000-000000000002",
    "total_allocated": 10,
    "used": 3,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000006",
    "employee_id": "e1000000-0000-0000-0000-000000000002",
    "leave_type_id": "c1000000-0000-0000-0000-000000000003",
    "total_allocated": 15,
    "used": 1,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000007",
    "employee_id": "e1000000-0000-0000-0000-000000000003",
    "leave_type_id": "c1000000-0000-0000-0000-000000000001",
    "total_allocated": 12,
    "used": 0,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000008",
    "employee_id": "e1000000-0000-0000-0000-000000000003",
    "leave_type_id": "c1000000-0000-0000-0000-000000000002",
    "total_allocated": 10,
    "used": 3,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000009",
    "employee_id": "e1000000-0000-0000-0000-000000000003",
    "leave_type_id": "c1000000-0000-0000-0000-000000000003",
    "total_allocated": 15,
    "used": 0,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000010",
    "employee_id": "e1000000-0000-0000-0000-000000000004",
    "leave_type_id": "c1000000-0000-0000-0000-000000000001",
    "total_allocated": 12,
    "used": 1,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000011",
    "employee_id": "e1000000-0000-0000-0000-000000000004",
    "leave_type_id": "c1000000-0000-0000-0000-000000000002",
    "total_allocated": 10,
    "used": 3,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000012",
    "employee_id": "e1000000-0000-0000-0000-000000000004",
    "leave_type_id": "c1000000-0000-0000-0000-000000000003",
    "total_allocated": 15,
    "used": 2,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000013",
    "employee_id": "e1000000-0000-0000-0000-000000000005",
    "leave_type_id": "c1000000-0000-0000-0000-000000000001",
    "total_allocated": 12,
    "used": 0,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000014",
    "employee_id": "e1000000-0000-0000-0000-000000000005",
    "leave_type_id": "c1000000-0000-0000-0000-000000000002",
    "total_allocated": 10,
    "used": 3,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000015",
    "employee_id": "e1000000-0000-0000-0000-000000000005",
    "leave_type_id": "c1000000-0000-0000-0000-000000000003",
    "total_allocated": 15,
    "used": 1,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000016",
    "employee_id": "e1000000-0000-0000-0000-000000000006",
    "leave_type_id": "c1000000-0000-0000-0000-000000000001",
    "total_allocated": 12,
    "used": 0,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000017",
    "employee_id": "e1000000-0000-0000-0000-000000000006",
    "leave_type_id": "c1000000-0000-0000-0000-000000000002",
    "total_allocated": 10,
    "used": 2,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000018",
    "employee_id": "e1000000-0000-0000-0000-000000000006",
    "leave_type_id": "c1000000-0000-0000-0000-000000000003",
    "total_allocated": 15,
    "used": 0,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000019",
    "employee_id": "e1000000-0000-0000-0000-000000000007",
    "leave_type_id": "c1000000-0000-0000-0000-000000000001",
    "total_allocated": 12,
    "used": 3,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000020",
    "employee_id": "e1000000-0000-0000-0000-000000000007",
    "leave_type_id": "c1000000-0000-0000-0000-000000000002",
    "total_allocated": 10,
    "used": 3,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000021",
    "employee_id": "e1000000-0000-0000-0000-000000000007",
    "leave_type_id": "c1000000-0000-0000-0000-000000000003",
    "total_allocated": 15,
    "used": 0,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000022",
    "employee_id": "e1000000-0000-0000-0000-000000000008",
    "leave_type_id": "c1000000-0000-0000-0000-000000000001",
    "total_allocated": 12,
    "used": 0,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000023",
    "employee_id": "e1000000-0000-0000-0000-000000000008",
    "leave_type_id": "c1000000-0000-0000-0000-000000000002",
    "total_allocated": 10,
    "used": 3,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000024",
    "employee_id": "e1000000-0000-0000-0000-000000000008",
    "leave_type_id": "c1000000-0000-0000-0000-000000000003",
    "total_allocated": 15,
    "used": 3,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000025",
    "employee_id": "e1000000-0000-0000-0000-000000000009",
    "leave_type_id": "c1000000-0000-0000-0000-000000000001",
    "total_allocated": 12,
    "used": 1,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000026",
    "employee_id": "e1000000-0000-0000-0000-000000000009",
    "leave_type_id": "c1000000-0000-0000-0000-000000000002",
    "total_allocated": 10,
    "used": 3,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000027",
    "employee_id": "e1000000-0000-0000-0000-000000000009",
    "leave_type_id": "c1000000-0000-0000-0000-000000000003",
    "total_allocated": 15,
    "used": 1,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000028",
    "employee_id": "e1000000-0000-0000-0000-000000000010",
    "leave_type_id": "c1000000-0000-0000-0000-000000000001",
    "total_allocated": 12,
    "used": 3,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000029",
    "employee_id": "e1000000-0000-0000-0000-000000000010",
    "leave_type_id": "c1000000-0000-0000-0000-000000000002",
    "total_allocated": 10,
    "used": 0,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000030",
    "employee_id": "e1000000-0000-0000-0000-000000000010",
    "leave_type_id": "c1000000-0000-0000-0000-000000000003",
    "total_allocated": 15,
    "used": 0,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000031",
    "employee_id": "e1000000-0000-0000-0000-000000000011",
    "leave_type_id": "c1000000-0000-0000-0000-000000000001",
    "total_allocated": 12,
    "used": 2,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000032",
    "employee_id": "e1000000-0000-0000-0000-000000000011",
    "leave_type_id": "c1000000-0000-0000-0000-000000000002",
    "total_allocated": 10,
    "used": 1,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000033",
    "employee_id": "e1000000-0000-0000-0000-000000000011",
    "leave_type_id": "c1000000-0000-0000-0000-000000000003",
    "total_allocated": 15,
    "used": 3,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000034",
    "employee_id": "e1000000-0000-0000-0000-000000000012",
    "leave_type_id": "c1000000-0000-0000-0000-000000000001",
    "total_allocated": 12,
    "used": 3,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000035",
    "employee_id": "e1000000-0000-0000-0000-000000000012",
    "leave_type_id": "c1000000-0000-0000-0000-000000000002",
    "total_allocated": 10,
    "used": 0,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000036",
    "employee_id": "e1000000-0000-0000-0000-000000000012",
    "leave_type_id": "c1000000-0000-0000-0000-000000000003",
    "total_allocated": 15,
    "used": 2,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000037",
    "employee_id": "e1000000-0000-0000-0000-000000000013",
    "leave_type_id": "c1000000-0000-0000-0000-000000000001",
    "total_allocated": 12,
    "used": 2,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000038",
    "employee_id": "e1000000-0000-0000-0000-000000000013",
    "leave_type_id": "c1000000-0000-0000-0000-000000000002",
    "total_allocated": 10,
    "used": 1,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000039",
    "employee_id": "e1000000-0000-0000-0000-000000000013",
    "leave_type_id": "c1000000-0000-0000-0000-000000000003",
    "total_allocated": 15,
    "used": 1,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000040",
    "employee_id": "e1000000-0000-0000-0000-000000000014",
    "leave_type_id": "c1000000-0000-0000-0000-000000000001",
    "total_allocated": 12,
    "used": 0,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000041",
    "employee_id": "e1000000-0000-0000-0000-000000000014",
    "leave_type_id": "c1000000-0000-0000-0000-000000000002",
    "total_allocated": 10,
    "used": 0,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000042",
    "employee_id": "e1000000-0000-0000-0000-000000000014",
    "leave_type_id": "c1000000-0000-0000-0000-000000000003",
    "total_allocated": 15,
    "used": 2,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000043",
    "employee_id": "e1000000-0000-0000-0000-000000000015",
    "leave_type_id": "c1000000-0000-0000-0000-000000000001",
    "total_allocated": 12,
    "used": 3,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000044",
    "employee_id": "e1000000-0000-0000-0000-000000000015",
    "leave_type_id": "c1000000-0000-0000-0000-000000000002",
    "total_allocated": 10,
    "used": 0,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000045",
    "employee_id": "e1000000-0000-0000-0000-000000000015",
    "leave_type_id": "c1000000-0000-0000-0000-000000000003",
    "total_allocated": 15,
    "used": 3,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000046",
    "employee_id": "e1000000-0000-0000-0000-000000000016",
    "leave_type_id": "c1000000-0000-0000-0000-000000000001",
    "total_allocated": 12,
    "used": 0,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000047",
    "employee_id": "e1000000-0000-0000-0000-000000000016",
    "leave_type_id": "c1000000-0000-0000-0000-000000000002",
    "total_allocated": 10,
    "used": 3,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000048",
    "employee_id": "e1000000-0000-0000-0000-000000000016",
    "leave_type_id": "c1000000-0000-0000-0000-000000000003",
    "total_allocated": 15,
    "used": 2,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000049",
    "employee_id": "e1000000-0000-0000-0000-000000000017",
    "leave_type_id": "c1000000-0000-0000-0000-000000000001",
    "total_allocated": 12,
    "used": 0,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000050",
    "employee_id": "e1000000-0000-0000-0000-000000000017",
    "leave_type_id": "c1000000-0000-0000-0000-000000000002",
    "total_allocated": 10,
    "used": 3,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000051",
    "employee_id": "e1000000-0000-0000-0000-000000000017",
    "leave_type_id": "c1000000-0000-0000-0000-000000000003",
    "total_allocated": 15,
    "used": 1,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000052",
    "employee_id": "e1000000-0000-0000-0000-000000000018",
    "leave_type_id": "c1000000-0000-0000-0000-000000000001",
    "total_allocated": 12,
    "used": 0,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000053",
    "employee_id": "e1000000-0000-0000-0000-000000000018",
    "leave_type_id": "c1000000-0000-0000-0000-000000000002",
    "total_allocated": 10,
    "used": 1,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000054",
    "employee_id": "e1000000-0000-0000-0000-000000000018",
    "leave_type_id": "c1000000-0000-0000-0000-000000000003",
    "total_allocated": 15,
    "used": 2,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000055",
    "employee_id": "e1000000-0000-0000-0000-000000000019",
    "leave_type_id": "c1000000-0000-0000-0000-000000000001",
    "total_allocated": 12,
    "used": 0,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000056",
    "employee_id": "e1000000-0000-0000-0000-000000000019",
    "leave_type_id": "c1000000-0000-0000-0000-000000000002",
    "total_allocated": 10,
    "used": 1,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000057",
    "employee_id": "e1000000-0000-0000-0000-000000000019",
    "leave_type_id": "c1000000-0000-0000-0000-000000000003",
    "total_allocated": 15,
    "used": 1,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000058",
    "employee_id": "e1000000-0000-0000-0000-000000000020",
    "leave_type_id": "c1000000-0000-0000-0000-000000000001",
    "total_allocated": 12,
    "used": 3,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000059",
    "employee_id": "e1000000-0000-0000-0000-000000000020",
    "leave_type_id": "c1000000-0000-0000-0000-000000000002",
    "total_allocated": 10,
    "used": 2,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000060",
    "employee_id": "e1000000-0000-0000-0000-000000000020",
    "leave_type_id": "c1000000-0000-0000-0000-000000000003",
    "total_allocated": 15,
    "used": 2,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000061",
    "employee_id": "e1000000-0000-0000-0000-000000000021",
    "leave_type_id": "c1000000-0000-0000-0000-000000000001",
    "total_allocated": 12,
    "used": 3,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000062",
    "employee_id": "e1000000-0000-0000-0000-000000000021",
    "leave_type_id": "c1000000-0000-0000-0000-000000000002",
    "total_allocated": 10,
    "used": 1,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000063",
    "employee_id": "e1000000-0000-0000-0000-000000000021",
    "leave_type_id": "c1000000-0000-0000-0000-000000000003",
    "total_allocated": 15,
    "used": 2,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000064",
    "employee_id": "e1000000-0000-0000-0000-000000000022",
    "leave_type_id": "c1000000-0000-0000-0000-000000000001",
    "total_allocated": 12,
    "used": 1,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000065",
    "employee_id": "e1000000-0000-0000-0000-000000000022",
    "leave_type_id": "c1000000-0000-0000-0000-000000000002",
    "total_allocated": 10,
    "used": 2,
    "pending": 0,
    "year": 2026
  },
  {
    "id": "cb1000000-0000-0000-0000-000000000066",
    "employee_id": "e1000000-0000-0000-0000-000000000022",
    "leave_type_id": "c1000000-0000-0000-0000-000000000003",
    "total_allocated": 15,
    "used": 0,
    "pending": 0,
    "year": 2026
  }
].map(b => ({
  ...b,
  leave_type: INITIAL_LEAVE_TYPES.find(t => t.id === b.leave_type_id)
}));
export const INITIAL_LEAVE_REQUESTS: LeaveRequest[] = ([
  {
    "id": "a1000000-0000-0000-0000-000000000001",
    "employee_id": "e1000000-0000-0000-0000-000000000001",
    "leave_type_id": "c1000000-0000-0000-0000-000000000001",
    "start_date": "2026-08-28",
    "end_date": "2026-08-29",
    "total_days": 2,
    "reason": "Family obligation",
    "status": "pending",
    "created_at": "2026-08-21T10:30:00Z"
  },
  {
    "id": "a1000000-0000-0000-0000-000000000002",
    "employee_id": "e1000000-0000-0000-0000-000000000001",
    "leave_type_id": "c1000000-0000-0000-0000-000000000001",
    "start_date": "2026-09-10",
    "end_date": "2026-09-12",
    "total_days": 3,
    "reason": "Planned vacation overlap",
    "status": "approved",
    "created_at": "2026-08-15T10:30:00Z",
    "reviewed_by": "f1000000-0000-0000-0000-000000000002",
    "reviewed_at": "2026-08-16T10:30:00Z"
  },
  {
    "id": "a1000000-0000-0000-0000-000000000003",
    "employee_id": "e1000000-0000-0000-0000-000000000003",
    "leave_type_id": "c1000000-0000-0000-0000-000000000001",
    "start_date": "2026-09-10",
    "end_date": "2026-09-12",
    "total_days": 3,
    "reason": "Planned vacation overlap",
    "status": "approved",
    "created_at": "2026-08-15T10:30:00Z",
    "reviewed_by": "f1000000-0000-0000-0000-000000000002",
    "reviewed_at": "2026-08-16T10:30:00Z"
  },
  {
    "id": "a1000000-0000-0000-0000-000000000004",
    "employee_id": "e1000000-0000-0000-0000-000000000005",
    "leave_type_id": "c1000000-0000-0000-0000-000000000001",
    "start_date": "2026-09-10",
    "end_date": "2026-09-12",
    "total_days": 3,
    "reason": "Planned vacation overlap",
    "status": "approved",
    "created_at": "2026-08-15T10:30:00Z",
    "reviewed_by": "f1000000-0000-0000-0000-000000000002",
    "reviewed_at": "2026-08-16T10:30:00Z"
  },
  {
    "id": "a1000000-0000-0000-0000-000000000005",
    "employee_id": "e1000000-0000-0000-0000-000000000006",
    "leave_type_id": "c1000000-0000-0000-0000-000000000001",
    "start_date": "2026-09-10",
    "end_date": "2026-09-12",
    "total_days": 3,
    "reason": "Planned vacation overlap",
    "status": "approved",
    "created_at": "2026-08-15T10:30:00Z",
    "reviewed_by": "f1000000-0000-0000-0000-000000000002",
    "reviewed_at": "2026-08-16T10:30:00Z"
  },
  {
    "id": "a1000000-0000-0000-0000-000000000006",
    "employee_id": "e1000000-0000-0000-0000-000000000018",
    "leave_type_id": "c1000000-0000-0000-0000-000000000002",
    "start_date": "2026-08-01",
    "end_date": "2026-08-02",
    "total_days": 2,
    "reason": "Sick leave",
    "status": "approved",
    "created_at": "2026-07-28T10:30:00Z"
  },
  {
    "id": "a1000000-0000-0000-0000-000000000007",
    "employee_id": "e1000000-0000-0000-0000-000000000011",
    "leave_type_id": "c1000000-0000-0000-0000-000000000002",
    "start_date": "2026-08-01",
    "end_date": "2026-08-02",
    "total_days": 2,
    "reason": "Sick leave",
    "status": "approved",
    "created_at": "2026-07-28T10:30:00Z"
  },
  {
    "id": "a1000000-0000-0000-0000-000000000008",
    "employee_id": "e1000000-0000-0000-0000-000000000008",
    "leave_type_id": "c1000000-0000-0000-0000-000000000002",
    "start_date": "2026-08-01",
    "end_date": "2026-08-02",
    "total_days": 2,
    "reason": "Sick leave",
    "status": "approved",
    "created_at": "2026-07-28T10:30:00Z"
  },
  {
    "id": "a1000000-0000-0000-0000-000000000009",
    "employee_id": "e1000000-0000-0000-0000-000000000008",
    "leave_type_id": "c1000000-0000-0000-0000-000000000002",
    "start_date": "2026-08-01",
    "end_date": "2026-08-02",
    "total_days": 2,
    "reason": "Sick leave",
    "status": "approved",
    "created_at": "2026-07-28T10:30:00Z"
  },
  {
    "id": "a1000000-0000-0000-0000-000000000010",
    "employee_id": "e1000000-0000-0000-0000-000000000016",
    "leave_type_id": "c1000000-0000-0000-0000-000000000002",
    "start_date": "2026-08-01",
    "end_date": "2026-08-02",
    "total_days": 2,
    "reason": "Sick leave",
    "status": "approved",
    "created_at": "2026-07-28T10:30:00Z"
  }
] as any).map((r: any) => {
  const emp = INITIAL_EMPLOYEES.find(e => e.id === r.employee_id);
  return {
    ...r,
    employee: emp ? { ...emp, profile: INITIAL_PROFILES.find(p => p.id === emp.profile_id) } : undefined,
    leave_type: INITIAL_LEAVE_TYPES.find(t => t.id === r.leave_type_id)
  }
});
export const INITIAL_ATTENDANCE: AttendanceRecord[] = [
  {
    "id": "att1000000-0000-0000-0000-000000000001",
    "employee_id": "e1000000-0000-0000-0000-000000000001",
    "date": "2026-08-03",
    "status": "late",
    "check_in": "2026-08-03T10:32:00Z",
    "check_out": "2026-08-03T18:32:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000002",
        "attendance_id": "att1000000-0000-0000-0000-000000000001",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-03T10:32:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000003",
        "attendance_id": "att1000000-0000-0000-0000-000000000001",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-03T18:32:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000002",
    "employee_id": "e1000000-0000-0000-0000-000000000001",
    "date": "2026-08-04",
    "status": "present",
    "check_in": "2026-08-04T09:00:00Z",
    "check_out": "2026-08-04T17:00:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000004",
        "attendance_id": "att1000000-0000-0000-0000-000000000002",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-04T09:00:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000005",
        "attendance_id": "att1000000-0000-0000-0000-000000000002",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-04T17:00:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000003",
    "employee_id": "e1000000-0000-0000-0000-000000000001",
    "date": "2026-08-05",
    "status": "late",
    "check_in": "2026-08-05T11:41:00Z",
    "check_out": "2026-08-05T19:41:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000006",
        "attendance_id": "att1000000-0000-0000-0000-000000000003",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-05T11:41:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000007",
        "attendance_id": "att1000000-0000-0000-0000-000000000003",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-05T19:41:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000004",
    "employee_id": "e1000000-0000-0000-0000-000000000001",
    "date": "2026-08-06",
    "status": "late",
    "check_in": "2026-08-06T11:13:00Z",
    "check_out": "2026-08-06T19:13:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000008",
        "attendance_id": "att1000000-0000-0000-0000-000000000004",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-06T11:13:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000009",
        "attendance_id": "att1000000-0000-0000-0000-000000000004",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-06T19:13:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000005",
    "employee_id": "e1000000-0000-0000-0000-000000000001",
    "date": "2026-08-07",
    "status": "late",
    "check_in": "2026-08-07T10:19:00Z",
    "check_out": "2026-08-07T18:19:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000010",
        "attendance_id": "att1000000-0000-0000-0000-000000000005",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-07T10:19:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000011",
        "attendance_id": "att1000000-0000-0000-0000-000000000005",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-07T18:19:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000006",
    "employee_id": "e1000000-0000-0000-0000-000000000001",
    "date": "2026-08-10",
    "status": "present",
    "check_in": "2026-08-10T09:14:00Z",
    "check_out": "2026-08-10T17:14:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000012",
        "attendance_id": "att1000000-0000-0000-0000-000000000006",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-10T09:14:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000013",
        "attendance_id": "att1000000-0000-0000-0000-000000000006",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-10T17:14:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000007",
    "employee_id": "e1000000-0000-0000-0000-000000000001",
    "date": "2026-08-11",
    "status": "present",
    "check_in": "2026-08-11T09:07:00Z",
    "check_out": "2026-08-11T17:07:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000014",
        "attendance_id": "att1000000-0000-0000-0000-000000000007",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-11T09:07:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000015",
        "attendance_id": "att1000000-0000-0000-0000-000000000007",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-11T17:07:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000008",
    "employee_id": "e1000000-0000-0000-0000-000000000001",
    "date": "2026-08-12",
    "status": "present",
    "check_in": "2026-08-12T09:26:00Z",
    "check_out": "2026-08-12T17:26:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000016",
        "attendance_id": "att1000000-0000-0000-0000-000000000008",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-12T09:26:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000017",
        "attendance_id": "att1000000-0000-0000-0000-000000000008",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-12T17:26:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000009",
    "employee_id": "e1000000-0000-0000-0000-000000000001",
    "date": "2026-08-13",
    "status": "late",
    "check_in": "2026-08-13T10:30:00Z",
    "check_out": "2026-08-13T18:30:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000018",
        "attendance_id": "att1000000-0000-0000-0000-000000000009",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-13T10:30:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000019",
        "attendance_id": "att1000000-0000-0000-0000-000000000009",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-13T18:30:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000010",
    "employee_id": "e1000000-0000-0000-0000-000000000001",
    "date": "2026-08-14",
    "status": "late",
    "check_in": "2026-08-14T11:00:00Z",
    "check_out": "2026-08-14T19:00:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000020",
        "attendance_id": "att1000000-0000-0000-0000-000000000010",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-14T11:00:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000021",
        "attendance_id": "att1000000-0000-0000-0000-000000000010",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-14T19:00:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000011",
    "employee_id": "e1000000-0000-0000-0000-000000000001",
    "date": "2026-08-17",
    "status": "late",
    "check_in": "2026-08-17T10:17:00Z",
    "check_out": "2026-08-17T18:17:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000022",
        "attendance_id": "att1000000-0000-0000-0000-000000000011",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-17T10:17:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000023",
        "attendance_id": "att1000000-0000-0000-0000-000000000011",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-17T18:17:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000012",
    "employee_id": "e1000000-0000-0000-0000-000000000001",
    "date": "2026-08-18",
    "status": "late",
    "check_in": "2026-08-18T10:41:00Z",
    "check_out": "2026-08-18T18:41:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000024",
        "attendance_id": "att1000000-0000-0000-0000-000000000012",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-18T10:41:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000025",
        "attendance_id": "att1000000-0000-0000-0000-000000000012",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-18T18:41:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000013",
    "employee_id": "e1000000-0000-0000-0000-000000000001",
    "date": "2026-08-19",
    "status": "late",
    "check_in": "2026-08-19T10:02:00Z",
    "check_out": "2026-08-19T18:02:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000026",
        "attendance_id": "att1000000-0000-0000-0000-000000000013",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-19T10:02:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000027",
        "attendance_id": "att1000000-0000-0000-0000-000000000013",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-19T18:02:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000014",
    "employee_id": "e1000000-0000-0000-0000-000000000001",
    "date": "2026-08-20",
    "status": "late",
    "check_in": "2026-08-20T11:44:00Z",
    "check_out": "2026-08-20T19:44:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000028",
        "attendance_id": "att1000000-0000-0000-0000-000000000014",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-20T11:44:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000029",
        "attendance_id": "att1000000-0000-0000-0000-000000000014",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-20T19:44:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000015",
    "employee_id": "e1000000-0000-0000-0000-000000000001",
    "date": "2026-08-21",
    "status": "late",
    "check_in": "2026-08-21T10:31:00Z",
    "check_out": "2026-08-21T18:31:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000030",
        "attendance_id": "att1000000-0000-0000-0000-000000000015",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-21T10:31:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000031",
        "attendance_id": "att1000000-0000-0000-0000-000000000015",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-21T18:31:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000016",
    "employee_id": "e1000000-0000-0000-0000-000000000001",
    "date": "2026-08-24",
    "status": "late",
    "check_in": "2026-08-24T10:20:00Z",
    "check_out": "2026-08-24T18:20:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000032",
        "attendance_id": "att1000000-0000-0000-0000-000000000016",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-24T10:20:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000033",
        "attendance_id": "att1000000-0000-0000-0000-000000000016",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-24T18:20:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000017",
    "employee_id": "e1000000-0000-0000-0000-000000000001",
    "date": "2026-08-25",
    "status": "late",
    "check_in": "2026-08-25T10:38:00Z",
    "check_out": "2026-08-25T18:38:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000034",
        "attendance_id": "att1000000-0000-0000-0000-000000000017",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-25T10:38:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000035",
        "attendance_id": "att1000000-0000-0000-0000-000000000017",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-25T18:38:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000018",
    "employee_id": "e1000000-0000-0000-0000-000000000001",
    "date": "2026-08-26",
    "status": "late",
    "check_in": "2026-08-26T10:04:00Z",
    "check_out": "2026-08-26T18:04:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000036",
        "attendance_id": "att1000000-0000-0000-0000-000000000018",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-26T10:04:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000037",
        "attendance_id": "att1000000-0000-0000-0000-000000000018",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-26T18:04:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000019",
    "employee_id": "e1000000-0000-0000-0000-000000000001",
    "date": "2026-08-27",
    "status": "late",
    "check_in": "2026-08-27T10:38:00Z",
    "check_out": "2026-08-27T18:38:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000038",
        "attendance_id": "att1000000-0000-0000-0000-000000000019",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-27T10:38:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000039",
        "attendance_id": "att1000000-0000-0000-0000-000000000019",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-27T18:38:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000020",
    "employee_id": "e1000000-0000-0000-0000-000000000001",
    "date": "2026-08-28",
    "status": "late",
    "check_in": "2026-08-28T10:01:00Z",
    "check_out": "2026-08-28T18:01:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000040",
        "attendance_id": "att1000000-0000-0000-0000-000000000020",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-28T10:01:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000041",
        "attendance_id": "att1000000-0000-0000-0000-000000000020",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-28T18:01:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000021",
    "employee_id": "e1000000-0000-0000-0000-000000000002",
    "date": "2026-08-03",
    "status": "present",
    "check_in": "2026-08-03T09:23:00Z",
    "check_out": "2026-08-03T17:23:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000042",
        "attendance_id": "att1000000-0000-0000-0000-000000000021",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-03T09:23:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000043",
        "attendance_id": "att1000000-0000-0000-0000-000000000021",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-03T17:23:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000022",
    "employee_id": "e1000000-0000-0000-0000-000000000002",
    "date": "2026-08-04",
    "status": "present",
    "check_in": "2026-08-04T09:38:00Z",
    "check_out": "2026-08-04T17:38:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000044",
        "attendance_id": "att1000000-0000-0000-0000-000000000022",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-04T09:38:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000045",
        "attendance_id": "att1000000-0000-0000-0000-000000000022",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-04T17:38:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000023",
    "employee_id": "e1000000-0000-0000-0000-000000000002",
    "date": "2026-08-05",
    "status": "present",
    "check_in": "2026-08-05T09:42:00Z",
    "check_out": "2026-08-05T17:42:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000046",
        "attendance_id": "att1000000-0000-0000-0000-000000000023",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-05T09:42:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000047",
        "attendance_id": "att1000000-0000-0000-0000-000000000023",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-05T17:42:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000024",
    "employee_id": "e1000000-0000-0000-0000-000000000002",
    "date": "2026-08-06",
    "status": "present",
    "check_in": "2026-08-06T09:20:00Z",
    "check_out": "2026-08-06T17:20:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000048",
        "attendance_id": "att1000000-0000-0000-0000-000000000024",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-06T09:20:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000049",
        "attendance_id": "att1000000-0000-0000-0000-000000000024",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-06T17:20:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000025",
    "employee_id": "e1000000-0000-0000-0000-000000000002",
    "date": "2026-08-07",
    "status": "present",
    "check_in": "2026-08-07T09:36:00Z",
    "check_out": "2026-08-07T17:36:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000050",
        "attendance_id": "att1000000-0000-0000-0000-000000000025",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-07T09:36:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000051",
        "attendance_id": "att1000000-0000-0000-0000-000000000025",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-07T17:36:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000026",
    "employee_id": "e1000000-0000-0000-0000-000000000002",
    "date": "2026-08-10",
    "status": "present",
    "check_in": "2026-08-10T09:44:00Z",
    "check_out": "2026-08-10T17:44:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000052",
        "attendance_id": "att1000000-0000-0000-0000-000000000026",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-10T09:44:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000053",
        "attendance_id": "att1000000-0000-0000-0000-000000000026",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-10T17:44:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000027",
    "employee_id": "e1000000-0000-0000-0000-000000000002",
    "date": "2026-08-11",
    "status": "late",
    "check_in": "2026-08-11T10:27:00Z",
    "check_out": "2026-08-11T18:27:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000054",
        "attendance_id": "att1000000-0000-0000-0000-000000000027",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-11T10:27:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000055",
        "attendance_id": "att1000000-0000-0000-0000-000000000027",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-11T18:27:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000028",
    "employee_id": "e1000000-0000-0000-0000-000000000002",
    "date": "2026-08-12",
    "status": "present",
    "check_in": "2026-08-12T09:33:00Z",
    "check_out": "2026-08-12T17:33:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000056",
        "attendance_id": "att1000000-0000-0000-0000-000000000028",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-12T09:33:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000057",
        "attendance_id": "att1000000-0000-0000-0000-000000000028",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-12T17:33:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000029",
    "employee_id": "e1000000-0000-0000-0000-000000000002",
    "date": "2026-08-13",
    "status": "present",
    "check_in": "2026-08-13T09:37:00Z",
    "check_out": "2026-08-13T17:37:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000058",
        "attendance_id": "att1000000-0000-0000-0000-000000000029",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-13T09:37:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000059",
        "attendance_id": "att1000000-0000-0000-0000-000000000029",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-13T17:37:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000030",
    "employee_id": "e1000000-0000-0000-0000-000000000002",
    "date": "2026-08-14",
    "status": "present",
    "check_in": "2026-08-14T09:41:00Z",
    "check_out": "2026-08-14T17:41:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000060",
        "attendance_id": "att1000000-0000-0000-0000-000000000030",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-14T09:41:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000061",
        "attendance_id": "att1000000-0000-0000-0000-000000000030",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-14T17:41:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000031",
    "employee_id": "e1000000-0000-0000-0000-000000000002",
    "date": "2026-08-17",
    "status": "present",
    "check_in": "2026-08-17T09:20:00Z",
    "check_out": "2026-08-17T17:20:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000062",
        "attendance_id": "att1000000-0000-0000-0000-000000000031",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-17T09:20:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000063",
        "attendance_id": "att1000000-0000-0000-0000-000000000031",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-17T17:20:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000032",
    "employee_id": "e1000000-0000-0000-0000-000000000002",
    "date": "2026-08-18",
    "status": "present",
    "check_in": "2026-08-18T09:06:00Z",
    "check_out": "2026-08-18T17:06:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000064",
        "attendance_id": "att1000000-0000-0000-0000-000000000032",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-18T09:06:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000065",
        "attendance_id": "att1000000-0000-0000-0000-000000000032",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-18T17:06:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000033",
    "employee_id": "e1000000-0000-0000-0000-000000000002",
    "date": "2026-08-19",
    "status": "present",
    "check_in": "2026-08-19T09:25:00Z",
    "check_out": "2026-08-19T17:25:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000066",
        "attendance_id": "att1000000-0000-0000-0000-000000000033",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-19T09:25:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000067",
        "attendance_id": "att1000000-0000-0000-0000-000000000033",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-19T17:25:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000034",
    "employee_id": "e1000000-0000-0000-0000-000000000002",
    "date": "2026-08-20",
    "status": "present",
    "check_in": "2026-08-20T09:03:00Z",
    "check_out": "2026-08-20T17:03:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000068",
        "attendance_id": "att1000000-0000-0000-0000-000000000034",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-20T09:03:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000069",
        "attendance_id": "att1000000-0000-0000-0000-000000000034",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-20T17:03:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000035",
    "employee_id": "e1000000-0000-0000-0000-000000000002",
    "date": "2026-08-21",
    "status": "present",
    "check_in": "2026-08-21T09:35:00Z",
    "check_out": "2026-08-21T17:35:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000070",
        "attendance_id": "att1000000-0000-0000-0000-000000000035",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-21T09:35:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000071",
        "attendance_id": "att1000000-0000-0000-0000-000000000035",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-21T17:35:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000036",
    "employee_id": "e1000000-0000-0000-0000-000000000002",
    "date": "2026-08-24",
    "status": "present",
    "check_in": "2026-08-24T09:36:00Z",
    "check_out": "2026-08-24T17:36:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000072",
        "attendance_id": "att1000000-0000-0000-0000-000000000036",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-24T09:36:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000073",
        "attendance_id": "att1000000-0000-0000-0000-000000000036",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-24T17:36:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000037",
    "employee_id": "e1000000-0000-0000-0000-000000000002",
    "date": "2026-08-25",
    "status": "late",
    "check_in": "2026-08-25T10:14:00Z",
    "check_out": "2026-08-25T18:14:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000074",
        "attendance_id": "att1000000-0000-0000-0000-000000000037",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-25T10:14:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000075",
        "attendance_id": "att1000000-0000-0000-0000-000000000037",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-25T18:14:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000038",
    "employee_id": "e1000000-0000-0000-0000-000000000002",
    "date": "2026-08-26",
    "status": "present",
    "check_in": "2026-08-26T09:21:00Z",
    "check_out": "2026-08-26T17:21:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000076",
        "attendance_id": "att1000000-0000-0000-0000-000000000038",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-26T09:21:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000077",
        "attendance_id": "att1000000-0000-0000-0000-000000000038",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-26T17:21:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000039",
    "employee_id": "e1000000-0000-0000-0000-000000000002",
    "date": "2026-08-27",
    "status": "present",
    "check_in": "2026-08-27T09:01:00Z",
    "check_out": "2026-08-27T17:01:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000078",
        "attendance_id": "att1000000-0000-0000-0000-000000000039",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-27T09:01:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000079",
        "attendance_id": "att1000000-0000-0000-0000-000000000039",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-27T17:01:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000040",
    "employee_id": "e1000000-0000-0000-0000-000000000002",
    "date": "2026-08-28",
    "status": "present",
    "check_in": "2026-08-28T09:34:00Z",
    "check_out": "2026-08-28T17:34:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000080",
        "attendance_id": "att1000000-0000-0000-0000-000000000040",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-28T09:34:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000081",
        "attendance_id": "att1000000-0000-0000-0000-000000000040",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-28T17:34:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000041",
    "employee_id": "e1000000-0000-0000-0000-000000000003",
    "date": "2026-08-03",
    "status": "late",
    "check_in": "2026-08-03T10:27:00Z",
    "check_out": "2026-08-03T18:27:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000082",
        "attendance_id": "att1000000-0000-0000-0000-000000000041",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-03T10:27:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000083",
        "attendance_id": "att1000000-0000-0000-0000-000000000041",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-03T18:27:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000042",
    "employee_id": "e1000000-0000-0000-0000-000000000003",
    "date": "2026-08-04",
    "status": "present",
    "check_in": "2026-08-04T09:20:00Z",
    "check_out": "2026-08-04T17:20:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000084",
        "attendance_id": "att1000000-0000-0000-0000-000000000042",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-04T09:20:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000085",
        "attendance_id": "att1000000-0000-0000-0000-000000000042",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-04T17:20:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000043",
    "employee_id": "e1000000-0000-0000-0000-000000000003",
    "date": "2026-08-05",
    "status": "present",
    "check_in": "2026-08-05T09:04:00Z",
    "check_out": "2026-08-05T17:04:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000086",
        "attendance_id": "att1000000-0000-0000-0000-000000000043",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-05T09:04:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000087",
        "attendance_id": "att1000000-0000-0000-0000-000000000043",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-05T17:04:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000044",
    "employee_id": "e1000000-0000-0000-0000-000000000003",
    "date": "2026-08-06",
    "status": "present",
    "check_in": "2026-08-06T09:11:00Z",
    "check_out": "2026-08-06T17:11:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000088",
        "attendance_id": "att1000000-0000-0000-0000-000000000044",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-06T09:11:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000089",
        "attendance_id": "att1000000-0000-0000-0000-000000000044",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-06T17:11:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000045",
    "employee_id": "e1000000-0000-0000-0000-000000000003",
    "date": "2026-08-07",
    "status": "present",
    "check_in": "2026-08-07T09:38:00Z",
    "check_out": "2026-08-07T17:38:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000090",
        "attendance_id": "att1000000-0000-0000-0000-000000000045",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-07T09:38:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000091",
        "attendance_id": "att1000000-0000-0000-0000-000000000045",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-07T17:38:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000046",
    "employee_id": "e1000000-0000-0000-0000-000000000003",
    "date": "2026-08-10",
    "status": "present",
    "check_in": "2026-08-10T09:35:00Z",
    "check_out": "2026-08-10T17:35:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000092",
        "attendance_id": "att1000000-0000-0000-0000-000000000046",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-10T09:35:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000093",
        "attendance_id": "att1000000-0000-0000-0000-000000000046",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-10T17:35:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000047",
    "employee_id": "e1000000-0000-0000-0000-000000000003",
    "date": "2026-08-11",
    "status": "present",
    "check_in": "2026-08-11T09:02:00Z",
    "check_out": "2026-08-11T17:02:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000094",
        "attendance_id": "att1000000-0000-0000-0000-000000000047",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-11T09:02:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000095",
        "attendance_id": "att1000000-0000-0000-0000-000000000047",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-11T17:02:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000048",
    "employee_id": "e1000000-0000-0000-0000-000000000003",
    "date": "2026-08-12",
    "status": "present",
    "check_in": "2026-08-12T09:16:00Z",
    "check_out": "2026-08-12T17:16:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000096",
        "attendance_id": "att1000000-0000-0000-0000-000000000048",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-12T09:16:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000097",
        "attendance_id": "att1000000-0000-0000-0000-000000000048",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-12T17:16:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000049",
    "employee_id": "e1000000-0000-0000-0000-000000000003",
    "date": "2026-08-13",
    "status": "present",
    "check_in": "2026-08-13T09:29:00Z",
    "check_out": "2026-08-13T17:29:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000098",
        "attendance_id": "att1000000-0000-0000-0000-000000000049",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-13T09:29:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000099",
        "attendance_id": "att1000000-0000-0000-0000-000000000049",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-13T17:29:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000050",
    "employee_id": "e1000000-0000-0000-0000-000000000003",
    "date": "2026-08-17",
    "status": "present",
    "check_in": "2026-08-17T09:06:00Z",
    "check_out": "2026-08-17T17:06:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000100",
        "attendance_id": "att1000000-0000-0000-0000-000000000050",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-17T09:06:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000101",
        "attendance_id": "att1000000-0000-0000-0000-000000000050",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-17T17:06:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000051",
    "employee_id": "e1000000-0000-0000-0000-000000000003",
    "date": "2026-08-18",
    "status": "present",
    "check_in": "2026-08-18T09:17:00Z",
    "check_out": "2026-08-18T17:17:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000102",
        "attendance_id": "att1000000-0000-0000-0000-000000000051",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-18T09:17:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000103",
        "attendance_id": "att1000000-0000-0000-0000-000000000051",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-18T17:17:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000052",
    "employee_id": "e1000000-0000-0000-0000-000000000003",
    "date": "2026-08-19",
    "status": "present",
    "check_in": "2026-08-19T09:44:00Z",
    "check_out": "2026-08-19T17:44:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000104",
        "attendance_id": "att1000000-0000-0000-0000-000000000052",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-19T09:44:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000105",
        "attendance_id": "att1000000-0000-0000-0000-000000000052",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-19T17:44:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000053",
    "employee_id": "e1000000-0000-0000-0000-000000000003",
    "date": "2026-08-20",
    "status": "present",
    "check_in": "2026-08-20T09:18:00Z",
    "check_out": "2026-08-20T17:18:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000106",
        "attendance_id": "att1000000-0000-0000-0000-000000000053",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-20T09:18:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000107",
        "attendance_id": "att1000000-0000-0000-0000-000000000053",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-20T17:18:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000054",
    "employee_id": "e1000000-0000-0000-0000-000000000003",
    "date": "2026-08-21",
    "status": "present",
    "check_in": "2026-08-21T09:30:00Z",
    "check_out": "2026-08-21T17:30:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000108",
        "attendance_id": "att1000000-0000-0000-0000-000000000054",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-21T09:30:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000109",
        "attendance_id": "att1000000-0000-0000-0000-000000000054",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-21T17:30:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000055",
    "employee_id": "e1000000-0000-0000-0000-000000000003",
    "date": "2026-08-24",
    "status": "late",
    "check_in": "2026-08-24T10:14:00Z",
    "check_out": "2026-08-24T18:14:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000110",
        "attendance_id": "att1000000-0000-0000-0000-000000000055",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-24T10:14:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000111",
        "attendance_id": "att1000000-0000-0000-0000-000000000055",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-24T18:14:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000056",
    "employee_id": "e1000000-0000-0000-0000-000000000003",
    "date": "2026-08-25",
    "status": "present",
    "check_in": "2026-08-25T09:09:00Z",
    "check_out": "2026-08-25T17:09:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000112",
        "attendance_id": "att1000000-0000-0000-0000-000000000056",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-25T09:09:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000113",
        "attendance_id": "att1000000-0000-0000-0000-000000000056",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-25T17:09:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000057",
    "employee_id": "e1000000-0000-0000-0000-000000000003",
    "date": "2026-08-26",
    "status": "present",
    "check_in": "2026-08-26T09:26:00Z",
    "check_out": "2026-08-26T17:26:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000114",
        "attendance_id": "att1000000-0000-0000-0000-000000000057",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-26T09:26:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000115",
        "attendance_id": "att1000000-0000-0000-0000-000000000057",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-26T17:26:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000058",
    "employee_id": "e1000000-0000-0000-0000-000000000003",
    "date": "2026-08-27",
    "status": "present",
    "check_in": "2026-08-27T09:01:00Z",
    "check_out": "2026-08-27T17:01:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000116",
        "attendance_id": "att1000000-0000-0000-0000-000000000058",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-27T09:01:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000117",
        "attendance_id": "att1000000-0000-0000-0000-000000000058",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-27T17:01:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000059",
    "employee_id": "e1000000-0000-0000-0000-000000000003",
    "date": "2026-08-28",
    "status": "present",
    "check_in": "2026-08-28T09:11:00Z",
    "check_out": "2026-08-28T17:11:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000118",
        "attendance_id": "att1000000-0000-0000-0000-000000000059",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-28T09:11:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000119",
        "attendance_id": "att1000000-0000-0000-0000-000000000059",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-28T17:11:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000060",
    "employee_id": "e1000000-0000-0000-0000-000000000004",
    "date": "2026-08-03",
    "status": "present",
    "check_in": "2026-08-03T09:19:00Z",
    "check_out": "2026-08-03T17:19:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000120",
        "attendance_id": "att1000000-0000-0000-0000-000000000060",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-03T09:19:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000121",
        "attendance_id": "att1000000-0000-0000-0000-000000000060",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-03T17:19:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000061",
    "employee_id": "e1000000-0000-0000-0000-000000000004",
    "date": "2026-08-04",
    "status": "present",
    "check_in": "2026-08-04T09:19:00Z",
    "check_out": "2026-08-04T17:19:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000122",
        "attendance_id": "att1000000-0000-0000-0000-000000000061",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-04T09:19:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000123",
        "attendance_id": "att1000000-0000-0000-0000-000000000061",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-04T17:19:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000062",
    "employee_id": "e1000000-0000-0000-0000-000000000004",
    "date": "2026-08-05",
    "status": "present",
    "check_in": "2026-08-05T09:23:00Z",
    "check_out": "2026-08-05T17:23:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000124",
        "attendance_id": "att1000000-0000-0000-0000-000000000062",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-05T09:23:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000125",
        "attendance_id": "att1000000-0000-0000-0000-000000000062",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-05T17:23:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000063",
    "employee_id": "e1000000-0000-0000-0000-000000000004",
    "date": "2026-08-06",
    "status": "present",
    "check_in": "2026-08-06T09:21:00Z",
    "check_out": "2026-08-06T17:21:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000126",
        "attendance_id": "att1000000-0000-0000-0000-000000000063",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-06T09:21:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000127",
        "attendance_id": "att1000000-0000-0000-0000-000000000063",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-06T17:21:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000064",
    "employee_id": "e1000000-0000-0000-0000-000000000004",
    "date": "2026-08-07",
    "status": "present",
    "check_in": "2026-08-07T09:22:00Z",
    "check_out": "2026-08-07T17:22:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000128",
        "attendance_id": "att1000000-0000-0000-0000-000000000064",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-07T09:22:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000129",
        "attendance_id": "att1000000-0000-0000-0000-000000000064",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-07T17:22:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000065",
    "employee_id": "e1000000-0000-0000-0000-000000000004",
    "date": "2026-08-10",
    "status": "present",
    "check_in": "2026-08-10T09:45:00Z",
    "check_out": "2026-08-10T17:45:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000130",
        "attendance_id": "att1000000-0000-0000-0000-000000000065",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-10T09:45:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000131",
        "attendance_id": "att1000000-0000-0000-0000-000000000065",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-10T17:45:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000066",
    "employee_id": "e1000000-0000-0000-0000-000000000004",
    "date": "2026-08-11",
    "status": "present",
    "check_in": "2026-08-11T09:29:00Z",
    "check_out": "2026-08-11T17:29:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000132",
        "attendance_id": "att1000000-0000-0000-0000-000000000066",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-11T09:29:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000133",
        "attendance_id": "att1000000-0000-0000-0000-000000000066",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-11T17:29:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000067",
    "employee_id": "e1000000-0000-0000-0000-000000000004",
    "date": "2026-08-12",
    "status": "late",
    "check_in": "2026-08-12T10:12:00Z",
    "check_out": "2026-08-12T18:12:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000134",
        "attendance_id": "att1000000-0000-0000-0000-000000000067",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-12T10:12:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000135",
        "attendance_id": "att1000000-0000-0000-0000-000000000067",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-12T18:12:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000068",
    "employee_id": "e1000000-0000-0000-0000-000000000004",
    "date": "2026-08-13",
    "status": "present",
    "check_in": "2026-08-13T09:29:00Z",
    "check_out": "2026-08-13T17:29:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000136",
        "attendance_id": "att1000000-0000-0000-0000-000000000068",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-13T09:29:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000137",
        "attendance_id": "att1000000-0000-0000-0000-000000000068",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-13T17:29:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000069",
    "employee_id": "e1000000-0000-0000-0000-000000000004",
    "date": "2026-08-14",
    "status": "present",
    "check_in": "2026-08-14T09:40:00Z",
    "check_out": "2026-08-14T17:40:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000138",
        "attendance_id": "att1000000-0000-0000-0000-000000000069",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-14T09:40:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000139",
        "attendance_id": "att1000000-0000-0000-0000-000000000069",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-14T17:40:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000070",
    "employee_id": "e1000000-0000-0000-0000-000000000004",
    "date": "2026-08-17",
    "status": "present",
    "check_in": "2026-08-17T09:10:00Z",
    "check_out": "2026-08-17T17:10:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000140",
        "attendance_id": "att1000000-0000-0000-0000-000000000070",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-17T09:10:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000141",
        "attendance_id": "att1000000-0000-0000-0000-000000000070",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-17T17:10:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000071",
    "employee_id": "e1000000-0000-0000-0000-000000000004",
    "date": "2026-08-18",
    "status": "present",
    "check_in": "2026-08-18T09:36:00Z",
    "check_out": "2026-08-18T17:36:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000142",
        "attendance_id": "att1000000-0000-0000-0000-000000000071",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-18T09:36:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000143",
        "attendance_id": "att1000000-0000-0000-0000-000000000071",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-18T17:36:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000072",
    "employee_id": "e1000000-0000-0000-0000-000000000004",
    "date": "2026-08-19",
    "status": "present",
    "check_in": "2026-08-19T09:06:00Z",
    "check_out": "2026-08-19T17:06:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000144",
        "attendance_id": "att1000000-0000-0000-0000-000000000072",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-19T09:06:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000145",
        "attendance_id": "att1000000-0000-0000-0000-000000000072",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-19T17:06:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000073",
    "employee_id": "e1000000-0000-0000-0000-000000000004",
    "date": "2026-08-21",
    "status": "late",
    "check_in": "2026-08-21T10:34:00Z",
    "check_out": "2026-08-21T18:34:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000146",
        "attendance_id": "att1000000-0000-0000-0000-000000000073",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-21T10:34:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000147",
        "attendance_id": "att1000000-0000-0000-0000-000000000073",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-21T18:34:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000074",
    "employee_id": "e1000000-0000-0000-0000-000000000004",
    "date": "2026-08-24",
    "status": "present",
    "check_in": "2026-08-24T09:09:00Z",
    "check_out": "2026-08-24T17:09:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000148",
        "attendance_id": "att1000000-0000-0000-0000-000000000074",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-24T09:09:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000149",
        "attendance_id": "att1000000-0000-0000-0000-000000000074",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-24T17:09:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000075",
    "employee_id": "e1000000-0000-0000-0000-000000000004",
    "date": "2026-08-25",
    "status": "present",
    "check_in": "2026-08-25T09:06:00Z",
    "check_out": "2026-08-25T17:06:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000150",
        "attendance_id": "att1000000-0000-0000-0000-000000000075",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-25T09:06:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000151",
        "attendance_id": "att1000000-0000-0000-0000-000000000075",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-25T17:06:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000076",
    "employee_id": "e1000000-0000-0000-0000-000000000004",
    "date": "2026-08-26",
    "status": "present",
    "check_in": "2026-08-26T09:16:00Z",
    "check_out": "2026-08-26T17:16:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000152",
        "attendance_id": "att1000000-0000-0000-0000-000000000076",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-26T09:16:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000153",
        "attendance_id": "att1000000-0000-0000-0000-000000000076",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-26T17:16:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000077",
    "employee_id": "e1000000-0000-0000-0000-000000000004",
    "date": "2026-08-27",
    "status": "late",
    "check_in": "2026-08-27T10:10:00Z",
    "check_out": "2026-08-27T18:10:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000154",
        "attendance_id": "att1000000-0000-0000-0000-000000000077",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-27T10:10:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000155",
        "attendance_id": "att1000000-0000-0000-0000-000000000077",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-27T18:10:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000078",
    "employee_id": "e1000000-0000-0000-0000-000000000004",
    "date": "2026-08-28",
    "status": "present",
    "check_in": "2026-08-28T09:13:00Z",
    "check_out": "2026-08-28T17:13:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000156",
        "attendance_id": "att1000000-0000-0000-0000-000000000078",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-28T09:13:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000157",
        "attendance_id": "att1000000-0000-0000-0000-000000000078",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-28T17:13:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000079",
    "employee_id": "e1000000-0000-0000-0000-000000000005",
    "date": "2026-08-03",
    "status": "present",
    "check_in": "2026-08-03T09:27:00Z",
    "check_out": "2026-08-03T17:27:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000158",
        "attendance_id": "att1000000-0000-0000-0000-000000000079",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-03T09:27:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000159",
        "attendance_id": "att1000000-0000-0000-0000-000000000079",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-03T17:27:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000080",
    "employee_id": "e1000000-0000-0000-0000-000000000005",
    "date": "2026-08-04",
    "status": "present",
    "check_in": "2026-08-04T09:25:00Z",
    "check_out": "2026-08-04T17:25:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000160",
        "attendance_id": "att1000000-0000-0000-0000-000000000080",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-04T09:25:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000161",
        "attendance_id": "att1000000-0000-0000-0000-000000000080",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-04T17:25:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000081",
    "employee_id": "e1000000-0000-0000-0000-000000000005",
    "date": "2026-08-05",
    "status": "present",
    "check_in": "2026-08-05T09:30:00Z",
    "check_out": "2026-08-05T17:30:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000162",
        "attendance_id": "att1000000-0000-0000-0000-000000000081",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-05T09:30:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000163",
        "attendance_id": "att1000000-0000-0000-0000-000000000081",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-05T17:30:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000082",
    "employee_id": "e1000000-0000-0000-0000-000000000005",
    "date": "2026-08-06",
    "status": "present",
    "check_in": "2026-08-06T09:36:00Z",
    "check_out": "2026-08-06T17:36:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000164",
        "attendance_id": "att1000000-0000-0000-0000-000000000082",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-06T09:36:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000165",
        "attendance_id": "att1000000-0000-0000-0000-000000000082",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-06T17:36:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000083",
    "employee_id": "e1000000-0000-0000-0000-000000000005",
    "date": "2026-08-07",
    "status": "present",
    "check_in": "2026-08-07T09:31:00Z",
    "check_out": "2026-08-07T17:31:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000166",
        "attendance_id": "att1000000-0000-0000-0000-000000000083",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-07T09:31:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000167",
        "attendance_id": "att1000000-0000-0000-0000-000000000083",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-07T17:31:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000084",
    "employee_id": "e1000000-0000-0000-0000-000000000005",
    "date": "2026-08-10",
    "status": "present",
    "check_in": "2026-08-10T09:45:00Z",
    "check_out": "2026-08-10T17:45:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000168",
        "attendance_id": "att1000000-0000-0000-0000-000000000084",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-10T09:45:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000169",
        "attendance_id": "att1000000-0000-0000-0000-000000000084",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-10T17:45:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000085",
    "employee_id": "e1000000-0000-0000-0000-000000000005",
    "date": "2026-08-11",
    "status": "present",
    "check_in": "2026-08-11T09:14:00Z",
    "check_out": "2026-08-11T17:14:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000170",
        "attendance_id": "att1000000-0000-0000-0000-000000000085",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-11T09:14:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000171",
        "attendance_id": "att1000000-0000-0000-0000-000000000085",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-11T17:14:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000086",
    "employee_id": "e1000000-0000-0000-0000-000000000005",
    "date": "2026-08-12",
    "status": "present",
    "check_in": "2026-08-12T09:31:00Z",
    "check_out": "2026-08-12T17:31:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000172",
        "attendance_id": "att1000000-0000-0000-0000-000000000086",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-12T09:31:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000173",
        "attendance_id": "att1000000-0000-0000-0000-000000000086",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-12T17:31:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000087",
    "employee_id": "e1000000-0000-0000-0000-000000000005",
    "date": "2026-08-13",
    "status": "present",
    "check_in": "2026-08-13T09:40:00Z",
    "check_out": "2026-08-13T17:40:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000174",
        "attendance_id": "att1000000-0000-0000-0000-000000000087",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-13T09:40:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000175",
        "attendance_id": "att1000000-0000-0000-0000-000000000087",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-13T17:40:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000088",
    "employee_id": "e1000000-0000-0000-0000-000000000005",
    "date": "2026-08-14",
    "status": "late",
    "check_in": "2026-08-14T10:01:00Z",
    "check_out": "2026-08-14T18:01:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000176",
        "attendance_id": "att1000000-0000-0000-0000-000000000088",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-14T10:01:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000177",
        "attendance_id": "att1000000-0000-0000-0000-000000000088",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-14T18:01:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000089",
    "employee_id": "e1000000-0000-0000-0000-000000000005",
    "date": "2026-08-17",
    "status": "present",
    "check_in": "2026-08-17T09:35:00Z",
    "check_out": "2026-08-17T17:35:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000178",
        "attendance_id": "att1000000-0000-0000-0000-000000000089",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-17T09:35:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000179",
        "attendance_id": "att1000000-0000-0000-0000-000000000089",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-17T17:35:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000090",
    "employee_id": "e1000000-0000-0000-0000-000000000005",
    "date": "2026-08-18",
    "status": "present",
    "check_in": "2026-08-18T09:36:00Z",
    "check_out": "2026-08-18T17:36:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000180",
        "attendance_id": "att1000000-0000-0000-0000-000000000090",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-18T09:36:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000181",
        "attendance_id": "att1000000-0000-0000-0000-000000000090",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-18T17:36:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000091",
    "employee_id": "e1000000-0000-0000-0000-000000000005",
    "date": "2026-08-19",
    "status": "present",
    "check_in": "2026-08-19T09:15:00Z",
    "check_out": "2026-08-19T17:15:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000182",
        "attendance_id": "att1000000-0000-0000-0000-000000000091",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-19T09:15:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000183",
        "attendance_id": "att1000000-0000-0000-0000-000000000091",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-19T17:15:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000092",
    "employee_id": "e1000000-0000-0000-0000-000000000005",
    "date": "2026-08-20",
    "status": "present",
    "check_in": "2026-08-20T09:40:00Z",
    "check_out": "2026-08-20T17:40:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000184",
        "attendance_id": "att1000000-0000-0000-0000-000000000092",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-20T09:40:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000185",
        "attendance_id": "att1000000-0000-0000-0000-000000000092",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-20T17:40:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000093",
    "employee_id": "e1000000-0000-0000-0000-000000000005",
    "date": "2026-08-21",
    "status": "present",
    "check_in": "2026-08-21T09:22:00Z",
    "check_out": "2026-08-21T17:22:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000186",
        "attendance_id": "att1000000-0000-0000-0000-000000000093",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-21T09:22:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000187",
        "attendance_id": "att1000000-0000-0000-0000-000000000093",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-21T17:22:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000094",
    "employee_id": "e1000000-0000-0000-0000-000000000005",
    "date": "2026-08-24",
    "status": "present",
    "check_in": "2026-08-24T09:40:00Z",
    "check_out": "2026-08-24T17:40:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000188",
        "attendance_id": "att1000000-0000-0000-0000-000000000094",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-24T09:40:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000189",
        "attendance_id": "att1000000-0000-0000-0000-000000000094",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-24T17:40:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000095",
    "employee_id": "e1000000-0000-0000-0000-000000000005",
    "date": "2026-08-25",
    "status": "present",
    "check_in": "2026-08-25T09:38:00Z",
    "check_out": "2026-08-25T17:38:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000190",
        "attendance_id": "att1000000-0000-0000-0000-000000000095",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-25T09:38:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000191",
        "attendance_id": "att1000000-0000-0000-0000-000000000095",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-25T17:38:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000096",
    "employee_id": "e1000000-0000-0000-0000-000000000005",
    "date": "2026-08-27",
    "status": "present",
    "check_in": "2026-08-27T09:24:00Z",
    "check_out": "2026-08-27T17:24:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000192",
        "attendance_id": "att1000000-0000-0000-0000-000000000096",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-27T09:24:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000193",
        "attendance_id": "att1000000-0000-0000-0000-000000000096",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-27T17:24:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000097",
    "employee_id": "e1000000-0000-0000-0000-000000000005",
    "date": "2026-08-28",
    "status": "present",
    "check_in": "2026-08-28T09:24:00Z",
    "check_out": "2026-08-28T17:24:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000194",
        "attendance_id": "att1000000-0000-0000-0000-000000000097",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-28T09:24:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000195",
        "attendance_id": "att1000000-0000-0000-0000-000000000097",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-28T17:24:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000098",
    "employee_id": "e1000000-0000-0000-0000-000000000006",
    "date": "2026-08-03",
    "status": "present",
    "check_in": "2026-08-03T09:40:00Z",
    "check_out": "2026-08-03T17:40:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000196",
        "attendance_id": "att1000000-0000-0000-0000-000000000098",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-03T09:40:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000197",
        "attendance_id": "att1000000-0000-0000-0000-000000000098",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-03T17:40:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000099",
    "employee_id": "e1000000-0000-0000-0000-000000000006",
    "date": "2026-08-04",
    "status": "present",
    "check_in": "2026-08-04T09:07:00Z",
    "check_out": "2026-08-04T17:07:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000198",
        "attendance_id": "att1000000-0000-0000-0000-000000000099",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-04T09:07:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000199",
        "attendance_id": "att1000000-0000-0000-0000-000000000099",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-04T17:07:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000100",
    "employee_id": "e1000000-0000-0000-0000-000000000006",
    "date": "2026-08-05",
    "status": "present",
    "check_in": "2026-08-05T09:39:00Z",
    "check_out": "2026-08-05T17:39:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000200",
        "attendance_id": "att1000000-0000-0000-0000-000000000100",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-05T09:39:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000201",
        "attendance_id": "att1000000-0000-0000-0000-000000000100",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-05T17:39:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000101",
    "employee_id": "e1000000-0000-0000-0000-000000000006",
    "date": "2026-08-06",
    "status": "present",
    "check_in": "2026-08-06T09:32:00Z",
    "check_out": "2026-08-06T17:32:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000202",
        "attendance_id": "att1000000-0000-0000-0000-000000000101",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-06T09:32:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000203",
        "attendance_id": "att1000000-0000-0000-0000-000000000101",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-06T17:32:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000102",
    "employee_id": "e1000000-0000-0000-0000-000000000006",
    "date": "2026-08-07",
    "status": "present",
    "check_in": "2026-08-07T09:12:00Z",
    "check_out": "2026-08-07T17:12:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000204",
        "attendance_id": "att1000000-0000-0000-0000-000000000102",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-07T09:12:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000205",
        "attendance_id": "att1000000-0000-0000-0000-000000000102",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-07T17:12:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000103",
    "employee_id": "e1000000-0000-0000-0000-000000000006",
    "date": "2026-08-10",
    "status": "present",
    "check_in": "2026-08-10T09:24:00Z",
    "check_out": "2026-08-10T17:24:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000206",
        "attendance_id": "att1000000-0000-0000-0000-000000000103",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-10T09:24:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000207",
        "attendance_id": "att1000000-0000-0000-0000-000000000103",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-10T17:24:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000104",
    "employee_id": "e1000000-0000-0000-0000-000000000006",
    "date": "2026-08-11",
    "status": "present",
    "check_in": "2026-08-11T09:17:00Z",
    "check_out": "2026-08-11T17:17:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000208",
        "attendance_id": "att1000000-0000-0000-0000-000000000104",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-11T09:17:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000209",
        "attendance_id": "att1000000-0000-0000-0000-000000000104",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-11T17:17:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000105",
    "employee_id": "e1000000-0000-0000-0000-000000000006",
    "date": "2026-08-12",
    "status": "present",
    "check_in": "2026-08-12T09:07:00Z",
    "check_out": "2026-08-12T17:07:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000210",
        "attendance_id": "att1000000-0000-0000-0000-000000000105",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-12T09:07:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000211",
        "attendance_id": "att1000000-0000-0000-0000-000000000105",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-12T17:07:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000106",
    "employee_id": "e1000000-0000-0000-0000-000000000006",
    "date": "2026-08-13",
    "status": "present",
    "check_in": "2026-08-13T09:27:00Z",
    "check_out": "2026-08-13T17:27:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000212",
        "attendance_id": "att1000000-0000-0000-0000-000000000106",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-13T09:27:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000213",
        "attendance_id": "att1000000-0000-0000-0000-000000000106",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-13T17:27:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000107",
    "employee_id": "e1000000-0000-0000-0000-000000000006",
    "date": "2026-08-14",
    "status": "present",
    "check_in": "2026-08-14T09:18:00Z",
    "check_out": "2026-08-14T17:18:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000214",
        "attendance_id": "att1000000-0000-0000-0000-000000000107",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-14T09:18:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000215",
        "attendance_id": "att1000000-0000-0000-0000-000000000107",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-14T17:18:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000108",
    "employee_id": "e1000000-0000-0000-0000-000000000006",
    "date": "2026-08-17",
    "status": "present",
    "check_in": "2026-08-17T09:41:00Z",
    "check_out": "2026-08-17T17:41:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000216",
        "attendance_id": "att1000000-0000-0000-0000-000000000108",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-17T09:41:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000217",
        "attendance_id": "att1000000-0000-0000-0000-000000000108",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-17T17:41:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000109",
    "employee_id": "e1000000-0000-0000-0000-000000000006",
    "date": "2026-08-18",
    "status": "present",
    "check_in": "2026-08-18T09:21:00Z",
    "check_out": "2026-08-18T17:21:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000218",
        "attendance_id": "att1000000-0000-0000-0000-000000000109",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-18T09:21:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000219",
        "attendance_id": "att1000000-0000-0000-0000-000000000109",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-18T17:21:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000110",
    "employee_id": "e1000000-0000-0000-0000-000000000006",
    "date": "2026-08-19",
    "status": "present",
    "check_in": "2026-08-19T09:37:00Z",
    "check_out": "2026-08-19T17:37:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000220",
        "attendance_id": "att1000000-0000-0000-0000-000000000110",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-19T09:37:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000221",
        "attendance_id": "att1000000-0000-0000-0000-000000000110",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-19T17:37:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000111",
    "employee_id": "e1000000-0000-0000-0000-000000000006",
    "date": "2026-08-20",
    "status": "present",
    "check_in": "2026-08-20T09:32:00Z",
    "check_out": "2026-08-20T17:32:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000222",
        "attendance_id": "att1000000-0000-0000-0000-000000000111",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-20T09:32:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000223",
        "attendance_id": "att1000000-0000-0000-0000-000000000111",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-20T17:32:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000112",
    "employee_id": "e1000000-0000-0000-0000-000000000006",
    "date": "2026-08-21",
    "status": "present",
    "check_in": "2026-08-21T09:10:00Z",
    "check_out": "2026-08-21T17:10:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000224",
        "attendance_id": "att1000000-0000-0000-0000-000000000112",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-21T09:10:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000225",
        "attendance_id": "att1000000-0000-0000-0000-000000000112",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-21T17:10:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000113",
    "employee_id": "e1000000-0000-0000-0000-000000000006",
    "date": "2026-08-24",
    "status": "present",
    "check_in": "2026-08-24T09:18:00Z",
    "check_out": "2026-08-24T17:18:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000226",
        "attendance_id": "att1000000-0000-0000-0000-000000000113",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-24T09:18:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000227",
        "attendance_id": "att1000000-0000-0000-0000-000000000113",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-24T17:18:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000114",
    "employee_id": "e1000000-0000-0000-0000-000000000006",
    "date": "2026-08-25",
    "status": "present",
    "check_in": "2026-08-25T09:13:00Z",
    "check_out": "2026-08-25T17:13:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000228",
        "attendance_id": "att1000000-0000-0000-0000-000000000114",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-25T09:13:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000229",
        "attendance_id": "att1000000-0000-0000-0000-000000000114",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-25T17:13:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000115",
    "employee_id": "e1000000-0000-0000-0000-000000000006",
    "date": "2026-08-26",
    "status": "present",
    "check_in": "2026-08-26T09:36:00Z",
    "check_out": "2026-08-26T17:36:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000230",
        "attendance_id": "att1000000-0000-0000-0000-000000000115",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-26T09:36:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000231",
        "attendance_id": "att1000000-0000-0000-0000-000000000115",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-26T17:36:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000116",
    "employee_id": "e1000000-0000-0000-0000-000000000006",
    "date": "2026-08-27",
    "status": "present",
    "check_in": "2026-08-27T09:39:00Z",
    "check_out": "2026-08-27T17:39:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000232",
        "attendance_id": "att1000000-0000-0000-0000-000000000116",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-27T09:39:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000233",
        "attendance_id": "att1000000-0000-0000-0000-000000000116",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-27T17:39:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000117",
    "employee_id": "e1000000-0000-0000-0000-000000000006",
    "date": "2026-08-28",
    "status": "present",
    "check_in": "2026-08-28T09:38:00Z",
    "check_out": "2026-08-28T17:38:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000234",
        "attendance_id": "att1000000-0000-0000-0000-000000000117",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-28T09:38:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000235",
        "attendance_id": "att1000000-0000-0000-0000-000000000117",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-28T17:38:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000118",
    "employee_id": "e1000000-0000-0000-0000-000000000007",
    "date": "2026-08-03",
    "status": "present",
    "check_in": "2026-08-03T09:21:00Z",
    "check_out": "2026-08-03T17:21:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000236",
        "attendance_id": "att1000000-0000-0000-0000-000000000118",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-03T09:21:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000237",
        "attendance_id": "att1000000-0000-0000-0000-000000000118",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-03T17:21:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000119",
    "employee_id": "e1000000-0000-0000-0000-000000000007",
    "date": "2026-08-04",
    "status": "present",
    "check_in": "2026-08-04T09:09:00Z",
    "check_out": "2026-08-04T17:09:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000238",
        "attendance_id": "att1000000-0000-0000-0000-000000000119",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-04T09:09:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000239",
        "attendance_id": "att1000000-0000-0000-0000-000000000119",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-04T17:09:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000120",
    "employee_id": "e1000000-0000-0000-0000-000000000007",
    "date": "2026-08-05",
    "status": "present",
    "check_in": "2026-08-05T09:30:00Z",
    "check_out": "2026-08-05T17:30:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000240",
        "attendance_id": "att1000000-0000-0000-0000-000000000120",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-05T09:30:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000241",
        "attendance_id": "att1000000-0000-0000-0000-000000000120",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-05T17:30:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000121",
    "employee_id": "e1000000-0000-0000-0000-000000000007",
    "date": "2026-08-06",
    "status": "present",
    "check_in": "2026-08-06T09:39:00Z",
    "check_out": "2026-08-06T17:39:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000242",
        "attendance_id": "att1000000-0000-0000-0000-000000000121",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-06T09:39:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000243",
        "attendance_id": "att1000000-0000-0000-0000-000000000121",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-06T17:39:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000122",
    "employee_id": "e1000000-0000-0000-0000-000000000007",
    "date": "2026-08-07",
    "status": "present",
    "check_in": "2026-08-07T09:00:00Z",
    "check_out": "2026-08-07T17:00:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000244",
        "attendance_id": "att1000000-0000-0000-0000-000000000122",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-07T09:00:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000245",
        "attendance_id": "att1000000-0000-0000-0000-000000000122",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-07T17:00:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000123",
    "employee_id": "e1000000-0000-0000-0000-000000000007",
    "date": "2026-08-10",
    "status": "present",
    "check_in": "2026-08-10T09:15:00Z",
    "check_out": "2026-08-10T17:15:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000246",
        "attendance_id": "att1000000-0000-0000-0000-000000000123",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-10T09:15:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000247",
        "attendance_id": "att1000000-0000-0000-0000-000000000123",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-10T17:15:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000124",
    "employee_id": "e1000000-0000-0000-0000-000000000007",
    "date": "2026-08-11",
    "status": "present",
    "check_in": "2026-08-11T09:27:00Z",
    "check_out": "2026-08-11T17:27:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000248",
        "attendance_id": "att1000000-0000-0000-0000-000000000124",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-11T09:27:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000249",
        "attendance_id": "att1000000-0000-0000-0000-000000000124",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-11T17:27:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000125",
    "employee_id": "e1000000-0000-0000-0000-000000000007",
    "date": "2026-08-12",
    "status": "present",
    "check_in": "2026-08-12T09:19:00Z",
    "check_out": "2026-08-12T17:19:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000250",
        "attendance_id": "att1000000-0000-0000-0000-000000000125",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-12T09:19:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000251",
        "attendance_id": "att1000000-0000-0000-0000-000000000125",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-12T17:19:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000126",
    "employee_id": "e1000000-0000-0000-0000-000000000007",
    "date": "2026-08-13",
    "status": "present",
    "check_in": "2026-08-13T09:00:00Z",
    "check_out": "2026-08-13T17:00:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000252",
        "attendance_id": "att1000000-0000-0000-0000-000000000126",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-13T09:00:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000253",
        "attendance_id": "att1000000-0000-0000-0000-000000000126",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-13T17:00:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000127",
    "employee_id": "e1000000-0000-0000-0000-000000000007",
    "date": "2026-08-14",
    "status": "present",
    "check_in": "2026-08-14T09:07:00Z",
    "check_out": "2026-08-14T17:07:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000254",
        "attendance_id": "att1000000-0000-0000-0000-000000000127",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-14T09:07:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000255",
        "attendance_id": "att1000000-0000-0000-0000-000000000127",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-14T17:07:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000128",
    "employee_id": "e1000000-0000-0000-0000-000000000007",
    "date": "2026-08-17",
    "status": "present",
    "check_in": "2026-08-17T09:43:00Z",
    "check_out": "2026-08-17T17:43:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000256",
        "attendance_id": "att1000000-0000-0000-0000-000000000128",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-17T09:43:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000257",
        "attendance_id": "att1000000-0000-0000-0000-000000000128",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-17T17:43:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000129",
    "employee_id": "e1000000-0000-0000-0000-000000000007",
    "date": "2026-08-19",
    "status": "present",
    "check_in": "2026-08-19T09:45:00Z",
    "check_out": "2026-08-19T17:45:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000258",
        "attendance_id": "att1000000-0000-0000-0000-000000000129",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-19T09:45:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000259",
        "attendance_id": "att1000000-0000-0000-0000-000000000129",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-19T17:45:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000130",
    "employee_id": "e1000000-0000-0000-0000-000000000007",
    "date": "2026-08-20",
    "status": "present",
    "check_in": "2026-08-20T09:02:00Z",
    "check_out": "2026-08-20T17:02:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000260",
        "attendance_id": "att1000000-0000-0000-0000-000000000130",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-20T09:02:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000261",
        "attendance_id": "att1000000-0000-0000-0000-000000000130",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-20T17:02:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000131",
    "employee_id": "e1000000-0000-0000-0000-000000000007",
    "date": "2026-08-24",
    "status": "present",
    "check_in": "2026-08-24T09:28:00Z",
    "check_out": "2026-08-24T17:28:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000262",
        "attendance_id": "att1000000-0000-0000-0000-000000000131",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-24T09:28:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000263",
        "attendance_id": "att1000000-0000-0000-0000-000000000131",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-24T17:28:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000132",
    "employee_id": "e1000000-0000-0000-0000-000000000007",
    "date": "2026-08-25",
    "status": "present",
    "check_in": "2026-08-25T09:32:00Z",
    "check_out": "2026-08-25T17:32:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000264",
        "attendance_id": "att1000000-0000-0000-0000-000000000132",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-25T09:32:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000265",
        "attendance_id": "att1000000-0000-0000-0000-000000000132",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-25T17:32:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000133",
    "employee_id": "e1000000-0000-0000-0000-000000000007",
    "date": "2026-08-26",
    "status": "present",
    "check_in": "2026-08-26T09:32:00Z",
    "check_out": "2026-08-26T17:32:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000266",
        "attendance_id": "att1000000-0000-0000-0000-000000000133",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-26T09:32:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000267",
        "attendance_id": "att1000000-0000-0000-0000-000000000133",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-26T17:32:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000134",
    "employee_id": "e1000000-0000-0000-0000-000000000007",
    "date": "2026-08-27",
    "status": "present",
    "check_in": "2026-08-27T09:16:00Z",
    "check_out": "2026-08-27T17:16:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000268",
        "attendance_id": "att1000000-0000-0000-0000-000000000134",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-27T09:16:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000269",
        "attendance_id": "att1000000-0000-0000-0000-000000000134",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-27T17:16:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000135",
    "employee_id": "e1000000-0000-0000-0000-000000000007",
    "date": "2026-08-28",
    "status": "present",
    "check_in": "2026-08-28T09:11:00Z",
    "check_out": "2026-08-28T17:11:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000270",
        "attendance_id": "att1000000-0000-0000-0000-000000000135",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-28T09:11:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000271",
        "attendance_id": "att1000000-0000-0000-0000-000000000135",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-28T17:11:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000136",
    "employee_id": "e1000000-0000-0000-0000-000000000008",
    "date": "2026-08-03",
    "status": "present",
    "check_in": "2026-08-03T09:37:00Z",
    "check_out": "2026-08-03T17:37:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000272",
        "attendance_id": "att1000000-0000-0000-0000-000000000136",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-03T09:37:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000273",
        "attendance_id": "att1000000-0000-0000-0000-000000000136",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-03T17:37:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000137",
    "employee_id": "e1000000-0000-0000-0000-000000000008",
    "date": "2026-08-04",
    "status": "late",
    "check_in": "2026-08-04T11:04:00Z",
    "check_out": "2026-08-04T19:04:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000274",
        "attendance_id": "att1000000-0000-0000-0000-000000000137",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-04T11:04:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000275",
        "attendance_id": "att1000000-0000-0000-0000-000000000137",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-04T19:04:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000138",
    "employee_id": "e1000000-0000-0000-0000-000000000008",
    "date": "2026-08-05",
    "status": "late",
    "check_in": "2026-08-05T11:18:00Z",
    "check_out": "2026-08-05T19:18:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000276",
        "attendance_id": "att1000000-0000-0000-0000-000000000138",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-05T11:18:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000277",
        "attendance_id": "att1000000-0000-0000-0000-000000000138",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-05T19:18:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000139",
    "employee_id": "e1000000-0000-0000-0000-000000000008",
    "date": "2026-08-06",
    "status": "late",
    "check_in": "2026-08-06T11:13:00Z",
    "check_out": "2026-08-06T19:13:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000278",
        "attendance_id": "att1000000-0000-0000-0000-000000000139",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-06T11:13:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000279",
        "attendance_id": "att1000000-0000-0000-0000-000000000139",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-06T19:13:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000140",
    "employee_id": "e1000000-0000-0000-0000-000000000008",
    "date": "2026-08-07",
    "status": "present",
    "check_in": "2026-08-07T09:30:00Z",
    "check_out": "2026-08-07T17:30:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000280",
        "attendance_id": "att1000000-0000-0000-0000-000000000140",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-07T09:30:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000281",
        "attendance_id": "att1000000-0000-0000-0000-000000000140",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-07T17:30:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000141",
    "employee_id": "e1000000-0000-0000-0000-000000000008",
    "date": "2026-08-10",
    "status": "late",
    "check_in": "2026-08-10T11:11:00Z",
    "check_out": "2026-08-10T19:11:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000282",
        "attendance_id": "att1000000-0000-0000-0000-000000000141",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-10T11:11:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000283",
        "attendance_id": "att1000000-0000-0000-0000-000000000141",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-10T19:11:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000142",
    "employee_id": "e1000000-0000-0000-0000-000000000008",
    "date": "2026-08-11",
    "status": "late",
    "check_in": "2026-08-11T11:19:00Z",
    "check_out": "2026-08-11T19:19:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000284",
        "attendance_id": "att1000000-0000-0000-0000-000000000142",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-11T11:19:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000285",
        "attendance_id": "att1000000-0000-0000-0000-000000000142",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-11T19:19:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000143",
    "employee_id": "e1000000-0000-0000-0000-000000000008",
    "date": "2026-08-12",
    "status": "late",
    "check_in": "2026-08-12T10:31:00Z",
    "check_out": "2026-08-12T18:31:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000286",
        "attendance_id": "att1000000-0000-0000-0000-000000000143",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-12T10:31:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000287",
        "attendance_id": "att1000000-0000-0000-0000-000000000143",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-12T18:31:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000144",
    "employee_id": "e1000000-0000-0000-0000-000000000008",
    "date": "2026-08-13",
    "status": "present",
    "check_in": "2026-08-13T09:28:00Z",
    "check_out": "2026-08-13T17:28:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000288",
        "attendance_id": "att1000000-0000-0000-0000-000000000144",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-13T09:28:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000289",
        "attendance_id": "att1000000-0000-0000-0000-000000000144",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-13T17:28:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000145",
    "employee_id": "e1000000-0000-0000-0000-000000000008",
    "date": "2026-08-14",
    "status": "present",
    "check_in": "2026-08-14T09:28:00Z",
    "check_out": "2026-08-14T17:28:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000290",
        "attendance_id": "att1000000-0000-0000-0000-000000000145",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-14T09:28:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000291",
        "attendance_id": "att1000000-0000-0000-0000-000000000145",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-14T17:28:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000146",
    "employee_id": "e1000000-0000-0000-0000-000000000008",
    "date": "2026-08-17",
    "status": "present",
    "check_in": "2026-08-17T09:19:00Z",
    "check_out": "2026-08-17T17:19:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000292",
        "attendance_id": "att1000000-0000-0000-0000-000000000146",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-17T09:19:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000293",
        "attendance_id": "att1000000-0000-0000-0000-000000000146",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-17T17:19:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000147",
    "employee_id": "e1000000-0000-0000-0000-000000000008",
    "date": "2026-08-18",
    "status": "late",
    "check_in": "2026-08-18T11:31:00Z",
    "check_out": "2026-08-18T19:31:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000294",
        "attendance_id": "att1000000-0000-0000-0000-000000000147",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-18T11:31:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000295",
        "attendance_id": "att1000000-0000-0000-0000-000000000147",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-18T19:31:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000148",
    "employee_id": "e1000000-0000-0000-0000-000000000008",
    "date": "2026-08-19",
    "status": "late",
    "check_in": "2026-08-19T11:27:00Z",
    "check_out": "2026-08-19T19:27:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000296",
        "attendance_id": "att1000000-0000-0000-0000-000000000148",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-19T11:27:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000297",
        "attendance_id": "att1000000-0000-0000-0000-000000000148",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-19T19:27:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000149",
    "employee_id": "e1000000-0000-0000-0000-000000000008",
    "date": "2026-08-20",
    "status": "late",
    "check_in": "2026-08-20T10:08:00Z",
    "check_out": "2026-08-20T18:08:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000298",
        "attendance_id": "att1000000-0000-0000-0000-000000000149",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-20T10:08:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000299",
        "attendance_id": "att1000000-0000-0000-0000-000000000149",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-20T18:08:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000150",
    "employee_id": "e1000000-0000-0000-0000-000000000008",
    "date": "2026-08-21",
    "status": "late",
    "check_in": "2026-08-21T11:37:00Z",
    "check_out": "2026-08-21T19:37:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000300",
        "attendance_id": "att1000000-0000-0000-0000-000000000150",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-21T11:37:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000301",
        "attendance_id": "att1000000-0000-0000-0000-000000000150",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-21T19:37:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000151",
    "employee_id": "e1000000-0000-0000-0000-000000000008",
    "date": "2026-08-24",
    "status": "late",
    "check_in": "2026-08-24T11:07:00Z",
    "check_out": "2026-08-24T19:07:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000302",
        "attendance_id": "att1000000-0000-0000-0000-000000000151",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-24T11:07:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000303",
        "attendance_id": "att1000000-0000-0000-0000-000000000151",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-24T19:07:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000152",
    "employee_id": "e1000000-0000-0000-0000-000000000008",
    "date": "2026-08-25",
    "status": "present",
    "check_in": "2026-08-25T09:43:00Z",
    "check_out": "2026-08-25T17:43:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000304",
        "attendance_id": "att1000000-0000-0000-0000-000000000152",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-25T09:43:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000305",
        "attendance_id": "att1000000-0000-0000-0000-000000000152",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-25T17:43:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000153",
    "employee_id": "e1000000-0000-0000-0000-000000000008",
    "date": "2026-08-26",
    "status": "present",
    "check_in": "2026-08-26T09:00:00Z",
    "check_out": "2026-08-26T17:00:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000306",
        "attendance_id": "att1000000-0000-0000-0000-000000000153",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-26T09:00:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000307",
        "attendance_id": "att1000000-0000-0000-0000-000000000153",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-26T17:00:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000154",
    "employee_id": "e1000000-0000-0000-0000-000000000008",
    "date": "2026-08-27",
    "status": "late",
    "check_in": "2026-08-27T11:23:00Z",
    "check_out": "2026-08-27T19:23:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000308",
        "attendance_id": "att1000000-0000-0000-0000-000000000154",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-27T11:23:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000309",
        "attendance_id": "att1000000-0000-0000-0000-000000000154",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-27T19:23:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000155",
    "employee_id": "e1000000-0000-0000-0000-000000000008",
    "date": "2026-08-28",
    "status": "late",
    "check_in": "2026-08-28T11:43:00Z",
    "check_out": "2026-08-28T19:43:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000310",
        "attendance_id": "att1000000-0000-0000-0000-000000000155",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-28T11:43:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000311",
        "attendance_id": "att1000000-0000-0000-0000-000000000155",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-28T19:43:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000156",
    "employee_id": "e1000000-0000-0000-0000-000000000009",
    "date": "2026-08-03",
    "status": "present",
    "check_in": "2026-08-03T09:37:00Z",
    "check_out": "2026-08-03T17:37:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000312",
        "attendance_id": "att1000000-0000-0000-0000-000000000156",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-03T09:37:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000313",
        "attendance_id": "att1000000-0000-0000-0000-000000000156",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-03T17:37:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000157",
    "employee_id": "e1000000-0000-0000-0000-000000000009",
    "date": "2026-08-04",
    "status": "present",
    "check_in": "2026-08-04T09:05:00Z",
    "check_out": "2026-08-04T17:05:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000314",
        "attendance_id": "att1000000-0000-0000-0000-000000000157",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-04T09:05:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000315",
        "attendance_id": "att1000000-0000-0000-0000-000000000157",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-04T17:05:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000158",
    "employee_id": "e1000000-0000-0000-0000-000000000009",
    "date": "2026-08-05",
    "status": "present",
    "check_in": "2026-08-05T09:33:00Z",
    "check_out": "2026-08-05T17:33:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000316",
        "attendance_id": "att1000000-0000-0000-0000-000000000158",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-05T09:33:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000317",
        "attendance_id": "att1000000-0000-0000-0000-000000000158",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-05T17:33:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000159",
    "employee_id": "e1000000-0000-0000-0000-000000000009",
    "date": "2026-08-06",
    "status": "present",
    "check_in": "2026-08-06T09:35:00Z",
    "check_out": "2026-08-06T17:35:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000318",
        "attendance_id": "att1000000-0000-0000-0000-000000000159",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-06T09:35:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000319",
        "attendance_id": "att1000000-0000-0000-0000-000000000159",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-06T17:35:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000160",
    "employee_id": "e1000000-0000-0000-0000-000000000009",
    "date": "2026-08-07",
    "status": "present",
    "check_in": "2026-08-07T09:25:00Z",
    "check_out": "2026-08-07T17:25:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000320",
        "attendance_id": "att1000000-0000-0000-0000-000000000160",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-07T09:25:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000321",
        "attendance_id": "att1000000-0000-0000-0000-000000000160",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-07T17:25:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000161",
    "employee_id": "e1000000-0000-0000-0000-000000000009",
    "date": "2026-08-10",
    "status": "present",
    "check_in": "2026-08-10T09:44:00Z",
    "check_out": "2026-08-10T17:44:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000322",
        "attendance_id": "att1000000-0000-0000-0000-000000000161",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-10T09:44:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000323",
        "attendance_id": "att1000000-0000-0000-0000-000000000161",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-10T17:44:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000162",
    "employee_id": "e1000000-0000-0000-0000-000000000009",
    "date": "2026-08-11",
    "status": "present",
    "check_in": "2026-08-11T09:15:00Z",
    "check_out": "2026-08-11T17:15:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000324",
        "attendance_id": "att1000000-0000-0000-0000-000000000162",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-11T09:15:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000325",
        "attendance_id": "att1000000-0000-0000-0000-000000000162",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-11T17:15:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000163",
    "employee_id": "e1000000-0000-0000-0000-000000000009",
    "date": "2026-08-12",
    "status": "present",
    "check_in": "2026-08-12T09:05:00Z",
    "check_out": "2026-08-12T17:05:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000326",
        "attendance_id": "att1000000-0000-0000-0000-000000000163",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-12T09:05:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000327",
        "attendance_id": "att1000000-0000-0000-0000-000000000163",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-12T17:05:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000164",
    "employee_id": "e1000000-0000-0000-0000-000000000009",
    "date": "2026-08-13",
    "status": "present",
    "check_in": "2026-08-13T09:40:00Z",
    "check_out": "2026-08-13T17:40:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000328",
        "attendance_id": "att1000000-0000-0000-0000-000000000164",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-13T09:40:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000329",
        "attendance_id": "att1000000-0000-0000-0000-000000000164",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-13T17:40:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000165",
    "employee_id": "e1000000-0000-0000-0000-000000000009",
    "date": "2026-08-14",
    "status": "present",
    "check_in": "2026-08-14T09:01:00Z",
    "check_out": "2026-08-14T17:01:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000330",
        "attendance_id": "att1000000-0000-0000-0000-000000000165",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-14T09:01:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000331",
        "attendance_id": "att1000000-0000-0000-0000-000000000165",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-14T17:01:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000166",
    "employee_id": "e1000000-0000-0000-0000-000000000009",
    "date": "2026-08-17",
    "status": "present",
    "check_in": "2026-08-17T09:42:00Z",
    "check_out": "2026-08-17T17:42:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000332",
        "attendance_id": "att1000000-0000-0000-0000-000000000166",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-17T09:42:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000333",
        "attendance_id": "att1000000-0000-0000-0000-000000000166",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-17T17:42:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000167",
    "employee_id": "e1000000-0000-0000-0000-000000000009",
    "date": "2026-08-18",
    "status": "present",
    "check_in": "2026-08-18T09:09:00Z",
    "check_out": "2026-08-18T17:09:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000334",
        "attendance_id": "att1000000-0000-0000-0000-000000000167",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-18T09:09:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000335",
        "attendance_id": "att1000000-0000-0000-0000-000000000167",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-18T17:09:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000168",
    "employee_id": "e1000000-0000-0000-0000-000000000009",
    "date": "2026-08-19",
    "status": "present",
    "check_in": "2026-08-19T09:14:00Z",
    "check_out": "2026-08-19T17:14:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000336",
        "attendance_id": "att1000000-0000-0000-0000-000000000168",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-19T09:14:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000337",
        "attendance_id": "att1000000-0000-0000-0000-000000000168",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-19T17:14:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000169",
    "employee_id": "e1000000-0000-0000-0000-000000000009",
    "date": "2026-08-20",
    "status": "present",
    "check_in": "2026-08-20T09:26:00Z",
    "check_out": "2026-08-20T17:26:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000338",
        "attendance_id": "att1000000-0000-0000-0000-000000000169",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-20T09:26:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000339",
        "attendance_id": "att1000000-0000-0000-0000-000000000169",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-20T17:26:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000170",
    "employee_id": "e1000000-0000-0000-0000-000000000009",
    "date": "2026-08-21",
    "status": "late",
    "check_in": "2026-08-21T10:30:00Z",
    "check_out": "2026-08-21T18:30:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000340",
        "attendance_id": "att1000000-0000-0000-0000-000000000170",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-21T10:30:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000341",
        "attendance_id": "att1000000-0000-0000-0000-000000000170",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-21T18:30:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000171",
    "employee_id": "e1000000-0000-0000-0000-000000000009",
    "date": "2026-08-24",
    "status": "present",
    "check_in": "2026-08-24T09:10:00Z",
    "check_out": "2026-08-24T17:10:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000342",
        "attendance_id": "att1000000-0000-0000-0000-000000000171",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-24T09:10:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000343",
        "attendance_id": "att1000000-0000-0000-0000-000000000171",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-24T17:10:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000172",
    "employee_id": "e1000000-0000-0000-0000-000000000009",
    "date": "2026-08-25",
    "status": "present",
    "check_in": "2026-08-25T09:22:00Z",
    "check_out": "2026-08-25T17:22:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000344",
        "attendance_id": "att1000000-0000-0000-0000-000000000172",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-25T09:22:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000345",
        "attendance_id": "att1000000-0000-0000-0000-000000000172",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-25T17:22:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000173",
    "employee_id": "e1000000-0000-0000-0000-000000000009",
    "date": "2026-08-26",
    "status": "present",
    "check_in": "2026-08-26T09:31:00Z",
    "check_out": "2026-08-26T17:31:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000346",
        "attendance_id": "att1000000-0000-0000-0000-000000000173",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-26T09:31:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000347",
        "attendance_id": "att1000000-0000-0000-0000-000000000173",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-26T17:31:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000174",
    "employee_id": "e1000000-0000-0000-0000-000000000009",
    "date": "2026-08-27",
    "status": "present",
    "check_in": "2026-08-27T09:14:00Z",
    "check_out": "2026-08-27T17:14:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000348",
        "attendance_id": "att1000000-0000-0000-0000-000000000174",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-27T09:14:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000349",
        "attendance_id": "att1000000-0000-0000-0000-000000000174",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-27T17:14:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000175",
    "employee_id": "e1000000-0000-0000-0000-000000000009",
    "date": "2026-08-28",
    "status": "present",
    "check_in": "2026-08-28T09:08:00Z",
    "check_out": "2026-08-28T17:08:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000350",
        "attendance_id": "att1000000-0000-0000-0000-000000000175",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-28T09:08:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000351",
        "attendance_id": "att1000000-0000-0000-0000-000000000175",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-28T17:08:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000176",
    "employee_id": "e1000000-0000-0000-0000-000000000010",
    "date": "2026-08-03",
    "status": "present",
    "check_in": "2026-08-03T09:07:00Z",
    "check_out": "2026-08-03T17:07:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000352",
        "attendance_id": "att1000000-0000-0000-0000-000000000176",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-03T09:07:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000353",
        "attendance_id": "att1000000-0000-0000-0000-000000000176",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-03T17:07:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000177",
    "employee_id": "e1000000-0000-0000-0000-000000000010",
    "date": "2026-08-04",
    "status": "present",
    "check_in": "2026-08-04T09:37:00Z",
    "check_out": "2026-08-04T17:37:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000354",
        "attendance_id": "att1000000-0000-0000-0000-000000000177",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-04T09:37:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000355",
        "attendance_id": "att1000000-0000-0000-0000-000000000177",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-04T17:37:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000178",
    "employee_id": "e1000000-0000-0000-0000-000000000010",
    "date": "2026-08-05",
    "status": "present",
    "check_in": "2026-08-05T09:22:00Z",
    "check_out": "2026-08-05T17:22:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000356",
        "attendance_id": "att1000000-0000-0000-0000-000000000178",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-05T09:22:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000357",
        "attendance_id": "att1000000-0000-0000-0000-000000000178",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-05T17:22:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000179",
    "employee_id": "e1000000-0000-0000-0000-000000000010",
    "date": "2026-08-06",
    "status": "present",
    "check_in": "2026-08-06T09:27:00Z",
    "check_out": "2026-08-06T17:27:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000358",
        "attendance_id": "att1000000-0000-0000-0000-000000000179",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-06T09:27:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000359",
        "attendance_id": "att1000000-0000-0000-0000-000000000179",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-06T17:27:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000180",
    "employee_id": "e1000000-0000-0000-0000-000000000010",
    "date": "2026-08-07",
    "status": "present",
    "check_in": "2026-08-07T09:01:00Z",
    "check_out": "2026-08-07T17:01:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000360",
        "attendance_id": "att1000000-0000-0000-0000-000000000180",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-07T09:01:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000361",
        "attendance_id": "att1000000-0000-0000-0000-000000000180",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-07T17:01:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000181",
    "employee_id": "e1000000-0000-0000-0000-000000000010",
    "date": "2026-08-11",
    "status": "present",
    "check_in": "2026-08-11T09:36:00Z",
    "check_out": "2026-08-11T17:36:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000362",
        "attendance_id": "att1000000-0000-0000-0000-000000000181",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-11T09:36:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000363",
        "attendance_id": "att1000000-0000-0000-0000-000000000181",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-11T17:36:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000182",
    "employee_id": "e1000000-0000-0000-0000-000000000010",
    "date": "2026-08-12",
    "status": "present",
    "check_in": "2026-08-12T09:43:00Z",
    "check_out": "2026-08-12T17:43:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000364",
        "attendance_id": "att1000000-0000-0000-0000-000000000182",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-12T09:43:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000365",
        "attendance_id": "att1000000-0000-0000-0000-000000000182",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-12T17:43:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000183",
    "employee_id": "e1000000-0000-0000-0000-000000000010",
    "date": "2026-08-13",
    "status": "present",
    "check_in": "2026-08-13T09:07:00Z",
    "check_out": "2026-08-13T17:07:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000366",
        "attendance_id": "att1000000-0000-0000-0000-000000000183",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-13T09:07:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000367",
        "attendance_id": "att1000000-0000-0000-0000-000000000183",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-13T17:07:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000184",
    "employee_id": "e1000000-0000-0000-0000-000000000010",
    "date": "2026-08-14",
    "status": "present",
    "check_in": "2026-08-14T09:21:00Z",
    "check_out": "2026-08-14T17:21:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000368",
        "attendance_id": "att1000000-0000-0000-0000-000000000184",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-14T09:21:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000369",
        "attendance_id": "att1000000-0000-0000-0000-000000000184",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-14T17:21:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000185",
    "employee_id": "e1000000-0000-0000-0000-000000000010",
    "date": "2026-08-17",
    "status": "present",
    "check_in": "2026-08-17T09:32:00Z",
    "check_out": "2026-08-17T17:32:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000370",
        "attendance_id": "att1000000-0000-0000-0000-000000000185",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-17T09:32:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000371",
        "attendance_id": "att1000000-0000-0000-0000-000000000185",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-17T17:32:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000186",
    "employee_id": "e1000000-0000-0000-0000-000000000010",
    "date": "2026-08-18",
    "status": "late",
    "check_in": "2026-08-18T10:34:00Z",
    "check_out": "2026-08-18T18:34:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000372",
        "attendance_id": "att1000000-0000-0000-0000-000000000186",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-18T10:34:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000373",
        "attendance_id": "att1000000-0000-0000-0000-000000000186",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-18T18:34:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000187",
    "employee_id": "e1000000-0000-0000-0000-000000000010",
    "date": "2026-08-19",
    "status": "present",
    "check_in": "2026-08-19T09:35:00Z",
    "check_out": "2026-08-19T17:35:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000374",
        "attendance_id": "att1000000-0000-0000-0000-000000000187",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-19T09:35:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000375",
        "attendance_id": "att1000000-0000-0000-0000-000000000187",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-19T17:35:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000188",
    "employee_id": "e1000000-0000-0000-0000-000000000010",
    "date": "2026-08-20",
    "status": "present",
    "check_in": "2026-08-20T09:08:00Z",
    "check_out": "2026-08-20T17:08:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000376",
        "attendance_id": "att1000000-0000-0000-0000-000000000188",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-20T09:08:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000377",
        "attendance_id": "att1000000-0000-0000-0000-000000000188",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-20T17:08:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000189",
    "employee_id": "e1000000-0000-0000-0000-000000000010",
    "date": "2026-08-21",
    "status": "present",
    "check_in": "2026-08-21T09:05:00Z",
    "check_out": "2026-08-21T17:05:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000378",
        "attendance_id": "att1000000-0000-0000-0000-000000000189",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-21T09:05:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000379",
        "attendance_id": "att1000000-0000-0000-0000-000000000189",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-21T17:05:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000190",
    "employee_id": "e1000000-0000-0000-0000-000000000010",
    "date": "2026-08-24",
    "status": "present",
    "check_in": "2026-08-24T09:34:00Z",
    "check_out": "2026-08-24T17:34:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000380",
        "attendance_id": "att1000000-0000-0000-0000-000000000190",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-24T09:34:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000381",
        "attendance_id": "att1000000-0000-0000-0000-000000000190",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-24T17:34:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000191",
    "employee_id": "e1000000-0000-0000-0000-000000000010",
    "date": "2026-08-25",
    "status": "present",
    "check_in": "2026-08-25T09:23:00Z",
    "check_out": "2026-08-25T17:23:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000382",
        "attendance_id": "att1000000-0000-0000-0000-000000000191",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-25T09:23:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000383",
        "attendance_id": "att1000000-0000-0000-0000-000000000191",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-25T17:23:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000192",
    "employee_id": "e1000000-0000-0000-0000-000000000010",
    "date": "2026-08-26",
    "status": "present",
    "check_in": "2026-08-26T09:24:00Z",
    "check_out": "2026-08-26T17:24:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000384",
        "attendance_id": "att1000000-0000-0000-0000-000000000192",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-26T09:24:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000385",
        "attendance_id": "att1000000-0000-0000-0000-000000000192",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-26T17:24:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000193",
    "employee_id": "e1000000-0000-0000-0000-000000000010",
    "date": "2026-08-27",
    "status": "late",
    "check_in": "2026-08-27T10:09:00Z",
    "check_out": "2026-08-27T18:09:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000386",
        "attendance_id": "att1000000-0000-0000-0000-000000000193",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-27T10:09:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000387",
        "attendance_id": "att1000000-0000-0000-0000-000000000193",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-27T18:09:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000194",
    "employee_id": "e1000000-0000-0000-0000-000000000010",
    "date": "2026-08-28",
    "status": "present",
    "check_in": "2026-08-28T09:11:00Z",
    "check_out": "2026-08-28T17:11:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000388",
        "attendance_id": "att1000000-0000-0000-0000-000000000194",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-28T09:11:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000389",
        "attendance_id": "att1000000-0000-0000-0000-000000000194",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-28T17:11:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000195",
    "employee_id": "e1000000-0000-0000-0000-000000000011",
    "date": "2026-08-03",
    "status": "late",
    "check_in": "2026-08-03T10:08:00Z",
    "check_out": "2026-08-03T18:08:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000390",
        "attendance_id": "att1000000-0000-0000-0000-000000000195",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-03T10:08:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000391",
        "attendance_id": "att1000000-0000-0000-0000-000000000195",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-03T18:08:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000196",
    "employee_id": "e1000000-0000-0000-0000-000000000011",
    "date": "2026-08-04",
    "status": "present",
    "check_in": "2026-08-04T09:13:00Z",
    "check_out": "2026-08-04T17:13:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000392",
        "attendance_id": "att1000000-0000-0000-0000-000000000196",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-04T09:13:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000393",
        "attendance_id": "att1000000-0000-0000-0000-000000000196",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-04T17:13:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000197",
    "employee_id": "e1000000-0000-0000-0000-000000000011",
    "date": "2026-08-05",
    "status": "present",
    "check_in": "2026-08-05T09:06:00Z",
    "check_out": "2026-08-05T17:06:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000394",
        "attendance_id": "att1000000-0000-0000-0000-000000000197",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-05T09:06:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000395",
        "attendance_id": "att1000000-0000-0000-0000-000000000197",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-05T17:06:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000198",
    "employee_id": "e1000000-0000-0000-0000-000000000011",
    "date": "2026-08-06",
    "status": "present",
    "check_in": "2026-08-06T09:33:00Z",
    "check_out": "2026-08-06T17:33:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000396",
        "attendance_id": "att1000000-0000-0000-0000-000000000198",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-06T09:33:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000397",
        "attendance_id": "att1000000-0000-0000-0000-000000000198",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-06T17:33:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000199",
    "employee_id": "e1000000-0000-0000-0000-000000000011",
    "date": "2026-08-07",
    "status": "present",
    "check_in": "2026-08-07T09:09:00Z",
    "check_out": "2026-08-07T17:09:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000398",
        "attendance_id": "att1000000-0000-0000-0000-000000000199",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-07T09:09:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000399",
        "attendance_id": "att1000000-0000-0000-0000-000000000199",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-07T17:09:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000200",
    "employee_id": "e1000000-0000-0000-0000-000000000011",
    "date": "2026-08-10",
    "status": "present",
    "check_in": "2026-08-10T09:32:00Z",
    "check_out": "2026-08-10T17:32:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000400",
        "attendance_id": "att1000000-0000-0000-0000-000000000200",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-10T09:32:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000401",
        "attendance_id": "att1000000-0000-0000-0000-000000000200",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-10T17:32:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000201",
    "employee_id": "e1000000-0000-0000-0000-000000000011",
    "date": "2026-08-11",
    "status": "present",
    "check_in": "2026-08-11T09:28:00Z",
    "check_out": "2026-08-11T17:28:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000402",
        "attendance_id": "att1000000-0000-0000-0000-000000000201",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-11T09:28:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000403",
        "attendance_id": "att1000000-0000-0000-0000-000000000201",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-11T17:28:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000202",
    "employee_id": "e1000000-0000-0000-0000-000000000011",
    "date": "2026-08-12",
    "status": "late",
    "check_in": "2026-08-12T10:01:00Z",
    "check_out": "2026-08-12T18:01:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000404",
        "attendance_id": "att1000000-0000-0000-0000-000000000202",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-12T10:01:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000405",
        "attendance_id": "att1000000-0000-0000-0000-000000000202",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-12T18:01:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000203",
    "employee_id": "e1000000-0000-0000-0000-000000000011",
    "date": "2026-08-13",
    "status": "present",
    "check_in": "2026-08-13T09:07:00Z",
    "check_out": "2026-08-13T17:07:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000406",
        "attendance_id": "att1000000-0000-0000-0000-000000000203",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-13T09:07:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000407",
        "attendance_id": "att1000000-0000-0000-0000-000000000203",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-13T17:07:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000204",
    "employee_id": "e1000000-0000-0000-0000-000000000011",
    "date": "2026-08-14",
    "status": "present",
    "check_in": "2026-08-14T09:27:00Z",
    "check_out": "2026-08-14T17:27:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000408",
        "attendance_id": "att1000000-0000-0000-0000-000000000204",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-14T09:27:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000409",
        "attendance_id": "att1000000-0000-0000-0000-000000000204",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-14T17:27:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000205",
    "employee_id": "e1000000-0000-0000-0000-000000000011",
    "date": "2026-08-17",
    "status": "present",
    "check_in": "2026-08-17T09:19:00Z",
    "check_out": "2026-08-17T17:19:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000410",
        "attendance_id": "att1000000-0000-0000-0000-000000000205",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-17T09:19:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000411",
        "attendance_id": "att1000000-0000-0000-0000-000000000205",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-17T17:19:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000206",
    "employee_id": "e1000000-0000-0000-0000-000000000011",
    "date": "2026-08-18",
    "status": "present",
    "check_in": "2026-08-18T09:27:00Z",
    "check_out": "2026-08-18T17:27:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000412",
        "attendance_id": "att1000000-0000-0000-0000-000000000206",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-18T09:27:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000413",
        "attendance_id": "att1000000-0000-0000-0000-000000000206",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-18T17:27:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000207",
    "employee_id": "e1000000-0000-0000-0000-000000000011",
    "date": "2026-08-19",
    "status": "present",
    "check_in": "2026-08-19T09:41:00Z",
    "check_out": "2026-08-19T17:41:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000414",
        "attendance_id": "att1000000-0000-0000-0000-000000000207",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-19T09:41:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000415",
        "attendance_id": "att1000000-0000-0000-0000-000000000207",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-19T17:41:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000208",
    "employee_id": "e1000000-0000-0000-0000-000000000011",
    "date": "2026-08-20",
    "status": "present",
    "check_in": "2026-08-20T09:45:00Z",
    "check_out": "2026-08-20T17:45:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000416",
        "attendance_id": "att1000000-0000-0000-0000-000000000208",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-20T09:45:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000417",
        "attendance_id": "att1000000-0000-0000-0000-000000000208",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-20T17:45:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000209",
    "employee_id": "e1000000-0000-0000-0000-000000000011",
    "date": "2026-08-21",
    "status": "present",
    "check_in": "2026-08-21T09:11:00Z",
    "check_out": "2026-08-21T17:11:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000418",
        "attendance_id": "att1000000-0000-0000-0000-000000000209",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-21T09:11:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000419",
        "attendance_id": "att1000000-0000-0000-0000-000000000209",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-21T17:11:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000210",
    "employee_id": "e1000000-0000-0000-0000-000000000011",
    "date": "2026-08-24",
    "status": "late",
    "check_in": "2026-08-24T10:08:00Z",
    "check_out": "2026-08-24T18:08:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000420",
        "attendance_id": "att1000000-0000-0000-0000-000000000210",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-24T10:08:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000421",
        "attendance_id": "att1000000-0000-0000-0000-000000000210",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-24T18:08:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000211",
    "employee_id": "e1000000-0000-0000-0000-000000000011",
    "date": "2026-08-25",
    "status": "present",
    "check_in": "2026-08-25T09:31:00Z",
    "check_out": "2026-08-25T17:31:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000422",
        "attendance_id": "att1000000-0000-0000-0000-000000000211",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-25T09:31:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000423",
        "attendance_id": "att1000000-0000-0000-0000-000000000211",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-25T17:31:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000212",
    "employee_id": "e1000000-0000-0000-0000-000000000011",
    "date": "2026-08-26",
    "status": "present",
    "check_in": "2026-08-26T09:06:00Z",
    "check_out": "2026-08-26T17:06:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000424",
        "attendance_id": "att1000000-0000-0000-0000-000000000212",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-26T09:06:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000425",
        "attendance_id": "att1000000-0000-0000-0000-000000000212",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-26T17:06:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000213",
    "employee_id": "e1000000-0000-0000-0000-000000000011",
    "date": "2026-08-27",
    "status": "late",
    "check_in": "2026-08-27T10:03:00Z",
    "check_out": "2026-08-27T18:03:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000426",
        "attendance_id": "att1000000-0000-0000-0000-000000000213",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-27T10:03:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000427",
        "attendance_id": "att1000000-0000-0000-0000-000000000213",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-27T18:03:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000214",
    "employee_id": "e1000000-0000-0000-0000-000000000011",
    "date": "2026-08-28",
    "status": "late",
    "check_in": "2026-08-28T10:09:00Z",
    "check_out": "2026-08-28T18:09:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000428",
        "attendance_id": "att1000000-0000-0000-0000-000000000214",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-28T10:09:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000429",
        "attendance_id": "att1000000-0000-0000-0000-000000000214",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-28T18:09:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000215",
    "employee_id": "e1000000-0000-0000-0000-000000000012",
    "date": "2026-08-03",
    "status": "present",
    "check_in": "2026-08-03T09:35:00Z",
    "check_out": "2026-08-03T17:35:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000430",
        "attendance_id": "att1000000-0000-0000-0000-000000000215",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-03T09:35:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000431",
        "attendance_id": "att1000000-0000-0000-0000-000000000215",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-03T17:35:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000216",
    "employee_id": "e1000000-0000-0000-0000-000000000012",
    "date": "2026-08-04",
    "status": "present",
    "check_in": "2026-08-04T09:35:00Z",
    "check_out": "2026-08-04T17:35:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000432",
        "attendance_id": "att1000000-0000-0000-0000-000000000216",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-04T09:35:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000433",
        "attendance_id": "att1000000-0000-0000-0000-000000000216",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-04T17:35:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000217",
    "employee_id": "e1000000-0000-0000-0000-000000000012",
    "date": "2026-08-05",
    "status": "present",
    "check_in": "2026-08-05T09:31:00Z",
    "check_out": "2026-08-05T17:31:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000434",
        "attendance_id": "att1000000-0000-0000-0000-000000000217",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-05T09:31:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000435",
        "attendance_id": "att1000000-0000-0000-0000-000000000217",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-05T17:31:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000218",
    "employee_id": "e1000000-0000-0000-0000-000000000012",
    "date": "2026-08-06",
    "status": "present",
    "check_in": "2026-08-06T09:31:00Z",
    "check_out": "2026-08-06T17:31:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000436",
        "attendance_id": "att1000000-0000-0000-0000-000000000218",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-06T09:31:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000437",
        "attendance_id": "att1000000-0000-0000-0000-000000000218",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-06T17:31:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000219",
    "employee_id": "e1000000-0000-0000-0000-000000000012",
    "date": "2026-08-07",
    "status": "present",
    "check_in": "2026-08-07T09:25:00Z",
    "check_out": "2026-08-07T17:25:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000438",
        "attendance_id": "att1000000-0000-0000-0000-000000000219",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-07T09:25:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000439",
        "attendance_id": "att1000000-0000-0000-0000-000000000219",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-07T17:25:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000220",
    "employee_id": "e1000000-0000-0000-0000-000000000012",
    "date": "2026-08-10",
    "status": "late",
    "check_in": "2026-08-10T10:17:00Z",
    "check_out": "2026-08-10T18:17:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000440",
        "attendance_id": "att1000000-0000-0000-0000-000000000220",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-10T10:17:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000441",
        "attendance_id": "att1000000-0000-0000-0000-000000000220",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-10T18:17:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000221",
    "employee_id": "e1000000-0000-0000-0000-000000000012",
    "date": "2026-08-12",
    "status": "present",
    "check_in": "2026-08-12T09:45:00Z",
    "check_out": "2026-08-12T17:45:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000442",
        "attendance_id": "att1000000-0000-0000-0000-000000000221",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-12T09:45:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000443",
        "attendance_id": "att1000000-0000-0000-0000-000000000221",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-12T17:45:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000222",
    "employee_id": "e1000000-0000-0000-0000-000000000012",
    "date": "2026-08-13",
    "status": "present",
    "check_in": "2026-08-13T09:37:00Z",
    "check_out": "2026-08-13T17:37:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000444",
        "attendance_id": "att1000000-0000-0000-0000-000000000222",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-13T09:37:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000445",
        "attendance_id": "att1000000-0000-0000-0000-000000000222",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-13T17:37:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000223",
    "employee_id": "e1000000-0000-0000-0000-000000000012",
    "date": "2026-08-14",
    "status": "present",
    "check_in": "2026-08-14T09:36:00Z",
    "check_out": "2026-08-14T17:36:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000446",
        "attendance_id": "att1000000-0000-0000-0000-000000000223",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-14T09:36:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000447",
        "attendance_id": "att1000000-0000-0000-0000-000000000223",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-14T17:36:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000224",
    "employee_id": "e1000000-0000-0000-0000-000000000012",
    "date": "2026-08-17",
    "status": "present",
    "check_in": "2026-08-17T09:31:00Z",
    "check_out": "2026-08-17T17:31:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000448",
        "attendance_id": "att1000000-0000-0000-0000-000000000224",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-17T09:31:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000449",
        "attendance_id": "att1000000-0000-0000-0000-000000000224",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-17T17:31:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000225",
    "employee_id": "e1000000-0000-0000-0000-000000000012",
    "date": "2026-08-18",
    "status": "present",
    "check_in": "2026-08-18T09:29:00Z",
    "check_out": "2026-08-18T17:29:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000450",
        "attendance_id": "att1000000-0000-0000-0000-000000000225",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-18T09:29:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000451",
        "attendance_id": "att1000000-0000-0000-0000-000000000225",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-18T17:29:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000226",
    "employee_id": "e1000000-0000-0000-0000-000000000012",
    "date": "2026-08-19",
    "status": "present",
    "check_in": "2026-08-19T09:38:00Z",
    "check_out": "2026-08-19T17:38:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000452",
        "attendance_id": "att1000000-0000-0000-0000-000000000226",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-19T09:38:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000453",
        "attendance_id": "att1000000-0000-0000-0000-000000000226",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-19T17:38:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000227",
    "employee_id": "e1000000-0000-0000-0000-000000000012",
    "date": "2026-08-20",
    "status": "present",
    "check_in": "2026-08-20T09:44:00Z",
    "check_out": "2026-08-20T17:44:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000454",
        "attendance_id": "att1000000-0000-0000-0000-000000000227",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-20T09:44:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000455",
        "attendance_id": "att1000000-0000-0000-0000-000000000227",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-20T17:44:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000228",
    "employee_id": "e1000000-0000-0000-0000-000000000012",
    "date": "2026-08-21",
    "status": "present",
    "check_in": "2026-08-21T09:44:00Z",
    "check_out": "2026-08-21T17:44:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000456",
        "attendance_id": "att1000000-0000-0000-0000-000000000228",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-21T09:44:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000457",
        "attendance_id": "att1000000-0000-0000-0000-000000000228",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-21T17:44:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000229",
    "employee_id": "e1000000-0000-0000-0000-000000000012",
    "date": "2026-08-24",
    "status": "present",
    "check_in": "2026-08-24T09:15:00Z",
    "check_out": "2026-08-24T17:15:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000458",
        "attendance_id": "att1000000-0000-0000-0000-000000000229",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-24T09:15:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000459",
        "attendance_id": "att1000000-0000-0000-0000-000000000229",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-24T17:15:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000230",
    "employee_id": "e1000000-0000-0000-0000-000000000012",
    "date": "2026-08-25",
    "status": "present",
    "check_in": "2026-08-25T09:14:00Z",
    "check_out": "2026-08-25T17:14:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000460",
        "attendance_id": "att1000000-0000-0000-0000-000000000230",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-25T09:14:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000461",
        "attendance_id": "att1000000-0000-0000-0000-000000000230",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-25T17:14:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000231",
    "employee_id": "e1000000-0000-0000-0000-000000000012",
    "date": "2026-08-26",
    "status": "present",
    "check_in": "2026-08-26T09:45:00Z",
    "check_out": "2026-08-26T17:45:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000462",
        "attendance_id": "att1000000-0000-0000-0000-000000000231",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-26T09:45:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000463",
        "attendance_id": "att1000000-0000-0000-0000-000000000231",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-26T17:45:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000232",
    "employee_id": "e1000000-0000-0000-0000-000000000012",
    "date": "2026-08-27",
    "status": "present",
    "check_in": "2026-08-27T09:39:00Z",
    "check_out": "2026-08-27T17:39:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000464",
        "attendance_id": "att1000000-0000-0000-0000-000000000232",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-27T09:39:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000465",
        "attendance_id": "att1000000-0000-0000-0000-000000000232",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-27T17:39:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000233",
    "employee_id": "e1000000-0000-0000-0000-000000000012",
    "date": "2026-08-28",
    "status": "late",
    "check_in": "2026-08-28T10:00:00Z",
    "check_out": "2026-08-28T18:00:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000466",
        "attendance_id": "att1000000-0000-0000-0000-000000000233",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-28T10:00:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000467",
        "attendance_id": "att1000000-0000-0000-0000-000000000233",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-28T18:00:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000234",
    "employee_id": "e1000000-0000-0000-0000-000000000013",
    "date": "2026-08-03",
    "status": "present",
    "check_in": "2026-08-03T09:41:00Z",
    "check_out": "2026-08-03T17:41:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000468",
        "attendance_id": "att1000000-0000-0000-0000-000000000234",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-03T09:41:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000469",
        "attendance_id": "att1000000-0000-0000-0000-000000000234",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-03T17:41:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000235",
    "employee_id": "e1000000-0000-0000-0000-000000000013",
    "date": "2026-08-04",
    "status": "present",
    "check_in": "2026-08-04T09:30:00Z",
    "check_out": "2026-08-04T17:30:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000470",
        "attendance_id": "att1000000-0000-0000-0000-000000000235",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-04T09:30:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000471",
        "attendance_id": "att1000000-0000-0000-0000-000000000235",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-04T17:30:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000236",
    "employee_id": "e1000000-0000-0000-0000-000000000013",
    "date": "2026-08-05",
    "status": "present",
    "check_in": "2026-08-05T09:34:00Z",
    "check_out": "2026-08-05T17:34:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000472",
        "attendance_id": "att1000000-0000-0000-0000-000000000236",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-05T09:34:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000473",
        "attendance_id": "att1000000-0000-0000-0000-000000000236",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-05T17:34:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000237",
    "employee_id": "e1000000-0000-0000-0000-000000000013",
    "date": "2026-08-06",
    "status": "present",
    "check_in": "2026-08-06T09:06:00Z",
    "check_out": "2026-08-06T17:06:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000474",
        "attendance_id": "att1000000-0000-0000-0000-000000000237",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-06T09:06:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000475",
        "attendance_id": "att1000000-0000-0000-0000-000000000237",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-06T17:06:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000238",
    "employee_id": "e1000000-0000-0000-0000-000000000013",
    "date": "2026-08-07",
    "status": "present",
    "check_in": "2026-08-07T09:05:00Z",
    "check_out": "2026-08-07T17:05:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000476",
        "attendance_id": "att1000000-0000-0000-0000-000000000238",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-07T09:05:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000477",
        "attendance_id": "att1000000-0000-0000-0000-000000000238",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-07T17:05:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000239",
    "employee_id": "e1000000-0000-0000-0000-000000000013",
    "date": "2026-08-10",
    "status": "present",
    "check_in": "2026-08-10T09:04:00Z",
    "check_out": "2026-08-10T17:04:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000478",
        "attendance_id": "att1000000-0000-0000-0000-000000000239",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-10T09:04:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000479",
        "attendance_id": "att1000000-0000-0000-0000-000000000239",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-10T17:04:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000240",
    "employee_id": "e1000000-0000-0000-0000-000000000013",
    "date": "2026-08-11",
    "status": "present",
    "check_in": "2026-08-11T09:05:00Z",
    "check_out": "2026-08-11T17:05:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000480",
        "attendance_id": "att1000000-0000-0000-0000-000000000240",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-11T09:05:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000481",
        "attendance_id": "att1000000-0000-0000-0000-000000000240",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-11T17:05:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000241",
    "employee_id": "e1000000-0000-0000-0000-000000000013",
    "date": "2026-08-12",
    "status": "present",
    "check_in": "2026-08-12T09:04:00Z",
    "check_out": "2026-08-12T17:04:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000482",
        "attendance_id": "att1000000-0000-0000-0000-000000000241",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-12T09:04:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000483",
        "attendance_id": "att1000000-0000-0000-0000-000000000241",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-12T17:04:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000242",
    "employee_id": "e1000000-0000-0000-0000-000000000013",
    "date": "2026-08-13",
    "status": "present",
    "check_in": "2026-08-13T09:15:00Z",
    "check_out": "2026-08-13T17:15:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000484",
        "attendance_id": "att1000000-0000-0000-0000-000000000242",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-13T09:15:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000485",
        "attendance_id": "att1000000-0000-0000-0000-000000000242",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-13T17:15:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000243",
    "employee_id": "e1000000-0000-0000-0000-000000000013",
    "date": "2026-08-14",
    "status": "present",
    "check_in": "2026-08-14T09:32:00Z",
    "check_out": "2026-08-14T17:32:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000486",
        "attendance_id": "att1000000-0000-0000-0000-000000000243",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-14T09:32:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000487",
        "attendance_id": "att1000000-0000-0000-0000-000000000243",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-14T17:32:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000244",
    "employee_id": "e1000000-0000-0000-0000-000000000013",
    "date": "2026-08-17",
    "status": "present",
    "check_in": "2026-08-17T09:43:00Z",
    "check_out": "2026-08-17T17:43:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000488",
        "attendance_id": "att1000000-0000-0000-0000-000000000244",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-17T09:43:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000489",
        "attendance_id": "att1000000-0000-0000-0000-000000000244",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-17T17:43:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000245",
    "employee_id": "e1000000-0000-0000-0000-000000000013",
    "date": "2026-08-18",
    "status": "present",
    "check_in": "2026-08-18T09:01:00Z",
    "check_out": "2026-08-18T17:01:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000490",
        "attendance_id": "att1000000-0000-0000-0000-000000000245",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-18T09:01:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000491",
        "attendance_id": "att1000000-0000-0000-0000-000000000245",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-18T17:01:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000246",
    "employee_id": "e1000000-0000-0000-0000-000000000013",
    "date": "2026-08-19",
    "status": "present",
    "check_in": "2026-08-19T09:30:00Z",
    "check_out": "2026-08-19T17:30:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000492",
        "attendance_id": "att1000000-0000-0000-0000-000000000246",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-19T09:30:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000493",
        "attendance_id": "att1000000-0000-0000-0000-000000000246",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-19T17:30:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000247",
    "employee_id": "e1000000-0000-0000-0000-000000000013",
    "date": "2026-08-21",
    "status": "present",
    "check_in": "2026-08-21T09:24:00Z",
    "check_out": "2026-08-21T17:24:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000494",
        "attendance_id": "att1000000-0000-0000-0000-000000000247",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-21T09:24:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000495",
        "attendance_id": "att1000000-0000-0000-0000-000000000247",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-21T17:24:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000248",
    "employee_id": "e1000000-0000-0000-0000-000000000013",
    "date": "2026-08-24",
    "status": "present",
    "check_in": "2026-08-24T09:06:00Z",
    "check_out": "2026-08-24T17:06:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000496",
        "attendance_id": "att1000000-0000-0000-0000-000000000248",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-24T09:06:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000497",
        "attendance_id": "att1000000-0000-0000-0000-000000000248",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-24T17:06:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000249",
    "employee_id": "e1000000-0000-0000-0000-000000000013",
    "date": "2026-08-25",
    "status": "present",
    "check_in": "2026-08-25T09:20:00Z",
    "check_out": "2026-08-25T17:20:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000498",
        "attendance_id": "att1000000-0000-0000-0000-000000000249",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-25T09:20:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000499",
        "attendance_id": "att1000000-0000-0000-0000-000000000249",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-25T17:20:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000250",
    "employee_id": "e1000000-0000-0000-0000-000000000013",
    "date": "2026-08-26",
    "status": "present",
    "check_in": "2026-08-26T09:42:00Z",
    "check_out": "2026-08-26T17:42:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000500",
        "attendance_id": "att1000000-0000-0000-0000-000000000250",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-26T09:42:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000501",
        "attendance_id": "att1000000-0000-0000-0000-000000000250",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-26T17:42:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000251",
    "employee_id": "e1000000-0000-0000-0000-000000000013",
    "date": "2026-08-27",
    "status": "present",
    "check_in": "2026-08-27T09:38:00Z",
    "check_out": "2026-08-27T17:38:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000502",
        "attendance_id": "att1000000-0000-0000-0000-000000000251",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-27T09:38:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000503",
        "attendance_id": "att1000000-0000-0000-0000-000000000251",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-27T17:38:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000252",
    "employee_id": "e1000000-0000-0000-0000-000000000013",
    "date": "2026-08-28",
    "status": "present",
    "check_in": "2026-08-28T09:11:00Z",
    "check_out": "2026-08-28T17:11:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000504",
        "attendance_id": "att1000000-0000-0000-0000-000000000252",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-28T09:11:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000505",
        "attendance_id": "att1000000-0000-0000-0000-000000000252",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-28T17:11:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000253",
    "employee_id": "e1000000-0000-0000-0000-000000000014",
    "date": "2026-08-03",
    "status": "present",
    "check_in": "2026-08-03T09:25:00Z",
    "check_out": "2026-08-03T17:25:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000506",
        "attendance_id": "att1000000-0000-0000-0000-000000000253",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-03T09:25:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000507",
        "attendance_id": "att1000000-0000-0000-0000-000000000253",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-03T17:25:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000254",
    "employee_id": "e1000000-0000-0000-0000-000000000014",
    "date": "2026-08-05",
    "status": "late",
    "check_in": "2026-08-05T10:26:00Z",
    "check_out": "2026-08-05T18:26:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000508",
        "attendance_id": "att1000000-0000-0000-0000-000000000254",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-05T10:26:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000509",
        "attendance_id": "att1000000-0000-0000-0000-000000000254",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-05T18:26:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000255",
    "employee_id": "e1000000-0000-0000-0000-000000000014",
    "date": "2026-08-06",
    "status": "present",
    "check_in": "2026-08-06T09:15:00Z",
    "check_out": "2026-08-06T17:15:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000510",
        "attendance_id": "att1000000-0000-0000-0000-000000000255",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-06T09:15:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000511",
        "attendance_id": "att1000000-0000-0000-0000-000000000255",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-06T17:15:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000256",
    "employee_id": "e1000000-0000-0000-0000-000000000014",
    "date": "2026-08-07",
    "status": "present",
    "check_in": "2026-08-07T09:06:00Z",
    "check_out": "2026-08-07T17:06:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000512",
        "attendance_id": "att1000000-0000-0000-0000-000000000256",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-07T09:06:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000513",
        "attendance_id": "att1000000-0000-0000-0000-000000000256",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-07T17:06:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000257",
    "employee_id": "e1000000-0000-0000-0000-000000000014",
    "date": "2026-08-10",
    "status": "present",
    "check_in": "2026-08-10T09:04:00Z",
    "check_out": "2026-08-10T17:04:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000514",
        "attendance_id": "att1000000-0000-0000-0000-000000000257",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-10T09:04:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000515",
        "attendance_id": "att1000000-0000-0000-0000-000000000257",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-10T17:04:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000258",
    "employee_id": "e1000000-0000-0000-0000-000000000014",
    "date": "2026-08-11",
    "status": "present",
    "check_in": "2026-08-11T09:39:00Z",
    "check_out": "2026-08-11T17:39:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000516",
        "attendance_id": "att1000000-0000-0000-0000-000000000258",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-11T09:39:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000517",
        "attendance_id": "att1000000-0000-0000-0000-000000000258",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-11T17:39:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000259",
    "employee_id": "e1000000-0000-0000-0000-000000000014",
    "date": "2026-08-12",
    "status": "present",
    "check_in": "2026-08-12T09:08:00Z",
    "check_out": "2026-08-12T17:08:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000518",
        "attendance_id": "att1000000-0000-0000-0000-000000000259",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-12T09:08:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000519",
        "attendance_id": "att1000000-0000-0000-0000-000000000259",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-12T17:08:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000260",
    "employee_id": "e1000000-0000-0000-0000-000000000014",
    "date": "2026-08-13",
    "status": "present",
    "check_in": "2026-08-13T09:31:00Z",
    "check_out": "2026-08-13T17:31:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000520",
        "attendance_id": "att1000000-0000-0000-0000-000000000260",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-13T09:31:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000521",
        "attendance_id": "att1000000-0000-0000-0000-000000000260",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-13T17:31:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000261",
    "employee_id": "e1000000-0000-0000-0000-000000000014",
    "date": "2026-08-14",
    "status": "present",
    "check_in": "2026-08-14T09:03:00Z",
    "check_out": "2026-08-14T17:03:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000522",
        "attendance_id": "att1000000-0000-0000-0000-000000000261",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-14T09:03:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000523",
        "attendance_id": "att1000000-0000-0000-0000-000000000261",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-14T17:03:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000262",
    "employee_id": "e1000000-0000-0000-0000-000000000014",
    "date": "2026-08-17",
    "status": "present",
    "check_in": "2026-08-17T09:32:00Z",
    "check_out": "2026-08-17T17:32:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000524",
        "attendance_id": "att1000000-0000-0000-0000-000000000262",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-17T09:32:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000525",
        "attendance_id": "att1000000-0000-0000-0000-000000000262",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-17T17:32:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000263",
    "employee_id": "e1000000-0000-0000-0000-000000000014",
    "date": "2026-08-18",
    "status": "present",
    "check_in": "2026-08-18T09:36:00Z",
    "check_out": "2026-08-18T17:36:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000526",
        "attendance_id": "att1000000-0000-0000-0000-000000000263",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-18T09:36:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000527",
        "attendance_id": "att1000000-0000-0000-0000-000000000263",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-18T17:36:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000264",
    "employee_id": "e1000000-0000-0000-0000-000000000014",
    "date": "2026-08-19",
    "status": "present",
    "check_in": "2026-08-19T09:11:00Z",
    "check_out": "2026-08-19T17:11:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000528",
        "attendance_id": "att1000000-0000-0000-0000-000000000264",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-19T09:11:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000529",
        "attendance_id": "att1000000-0000-0000-0000-000000000264",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-19T17:11:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000265",
    "employee_id": "e1000000-0000-0000-0000-000000000014",
    "date": "2026-08-21",
    "status": "present",
    "check_in": "2026-08-21T09:21:00Z",
    "check_out": "2026-08-21T17:21:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000530",
        "attendance_id": "att1000000-0000-0000-0000-000000000265",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-21T09:21:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000531",
        "attendance_id": "att1000000-0000-0000-0000-000000000265",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-21T17:21:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000266",
    "employee_id": "e1000000-0000-0000-0000-000000000014",
    "date": "2026-08-24",
    "status": "present",
    "check_in": "2026-08-24T09:20:00Z",
    "check_out": "2026-08-24T17:20:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000532",
        "attendance_id": "att1000000-0000-0000-0000-000000000266",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-24T09:20:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000533",
        "attendance_id": "att1000000-0000-0000-0000-000000000266",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-24T17:20:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000267",
    "employee_id": "e1000000-0000-0000-0000-000000000014",
    "date": "2026-08-25",
    "status": "present",
    "check_in": "2026-08-25T09:19:00Z",
    "check_out": "2026-08-25T17:19:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000534",
        "attendance_id": "att1000000-0000-0000-0000-000000000267",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-25T09:19:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000535",
        "attendance_id": "att1000000-0000-0000-0000-000000000267",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-25T17:19:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000268",
    "employee_id": "e1000000-0000-0000-0000-000000000014",
    "date": "2026-08-26",
    "status": "present",
    "check_in": "2026-08-26T09:31:00Z",
    "check_out": "2026-08-26T17:31:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000536",
        "attendance_id": "att1000000-0000-0000-0000-000000000268",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-26T09:31:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000537",
        "attendance_id": "att1000000-0000-0000-0000-000000000268",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-26T17:31:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000269",
    "employee_id": "e1000000-0000-0000-0000-000000000014",
    "date": "2026-08-27",
    "status": "present",
    "check_in": "2026-08-27T09:33:00Z",
    "check_out": "2026-08-27T17:33:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000538",
        "attendance_id": "att1000000-0000-0000-0000-000000000269",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-27T09:33:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000539",
        "attendance_id": "att1000000-0000-0000-0000-000000000269",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-27T17:33:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000270",
    "employee_id": "e1000000-0000-0000-0000-000000000014",
    "date": "2026-08-28",
    "status": "late",
    "check_in": "2026-08-28T10:14:00Z",
    "check_out": "2026-08-28T18:14:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000540",
        "attendance_id": "att1000000-0000-0000-0000-000000000270",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-28T10:14:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000541",
        "attendance_id": "att1000000-0000-0000-0000-000000000270",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-28T18:14:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000271",
    "employee_id": "e1000000-0000-0000-0000-000000000015",
    "date": "2026-08-03",
    "status": "present",
    "check_in": "2026-08-03T09:10:00Z",
    "check_out": "2026-08-03T17:10:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000542",
        "attendance_id": "att1000000-0000-0000-0000-000000000271",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-03T09:10:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000543",
        "attendance_id": "att1000000-0000-0000-0000-000000000271",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-03T17:10:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000272",
    "employee_id": "e1000000-0000-0000-0000-000000000015",
    "date": "2026-08-04",
    "status": "present",
    "check_in": "2026-08-04T09:23:00Z",
    "check_out": "2026-08-04T17:23:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000544",
        "attendance_id": "att1000000-0000-0000-0000-000000000272",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-04T09:23:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000545",
        "attendance_id": "att1000000-0000-0000-0000-000000000272",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-04T17:23:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000273",
    "employee_id": "e1000000-0000-0000-0000-000000000015",
    "date": "2026-08-05",
    "status": "present",
    "check_in": "2026-08-05T09:13:00Z",
    "check_out": "2026-08-05T17:13:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000546",
        "attendance_id": "att1000000-0000-0000-0000-000000000273",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-05T09:13:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000547",
        "attendance_id": "att1000000-0000-0000-0000-000000000273",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-05T17:13:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000274",
    "employee_id": "e1000000-0000-0000-0000-000000000015",
    "date": "2026-08-06",
    "status": "present",
    "check_in": "2026-08-06T09:18:00Z",
    "check_out": "2026-08-06T17:18:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000548",
        "attendance_id": "att1000000-0000-0000-0000-000000000274",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-06T09:18:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000549",
        "attendance_id": "att1000000-0000-0000-0000-000000000274",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-06T17:18:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000275",
    "employee_id": "e1000000-0000-0000-0000-000000000015",
    "date": "2026-08-10",
    "status": "present",
    "check_in": "2026-08-10T09:35:00Z",
    "check_out": "2026-08-10T17:35:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000550",
        "attendance_id": "att1000000-0000-0000-0000-000000000275",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-10T09:35:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000551",
        "attendance_id": "att1000000-0000-0000-0000-000000000275",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-10T17:35:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000276",
    "employee_id": "e1000000-0000-0000-0000-000000000015",
    "date": "2026-08-11",
    "status": "present",
    "check_in": "2026-08-11T09:21:00Z",
    "check_out": "2026-08-11T17:21:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000552",
        "attendance_id": "att1000000-0000-0000-0000-000000000276",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-11T09:21:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000553",
        "attendance_id": "att1000000-0000-0000-0000-000000000276",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-11T17:21:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000277",
    "employee_id": "e1000000-0000-0000-0000-000000000015",
    "date": "2026-08-12",
    "status": "present",
    "check_in": "2026-08-12T09:34:00Z",
    "check_out": "2026-08-12T17:34:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000554",
        "attendance_id": "att1000000-0000-0000-0000-000000000277",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-12T09:34:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000555",
        "attendance_id": "att1000000-0000-0000-0000-000000000277",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-12T17:34:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000278",
    "employee_id": "e1000000-0000-0000-0000-000000000015",
    "date": "2026-08-14",
    "status": "present",
    "check_in": "2026-08-14T09:16:00Z",
    "check_out": "2026-08-14T17:16:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000556",
        "attendance_id": "att1000000-0000-0000-0000-000000000278",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-14T09:16:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000557",
        "attendance_id": "att1000000-0000-0000-0000-000000000278",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-14T17:16:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000279",
    "employee_id": "e1000000-0000-0000-0000-000000000015",
    "date": "2026-08-17",
    "status": "present",
    "check_in": "2026-08-17T09:08:00Z",
    "check_out": "2026-08-17T17:08:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000558",
        "attendance_id": "att1000000-0000-0000-0000-000000000279",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-17T09:08:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000559",
        "attendance_id": "att1000000-0000-0000-0000-000000000279",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-17T17:08:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000280",
    "employee_id": "e1000000-0000-0000-0000-000000000015",
    "date": "2026-08-18",
    "status": "present",
    "check_in": "2026-08-18T09:10:00Z",
    "check_out": "2026-08-18T17:10:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000560",
        "attendance_id": "att1000000-0000-0000-0000-000000000280",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-18T09:10:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000561",
        "attendance_id": "att1000000-0000-0000-0000-000000000280",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-18T17:10:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000281",
    "employee_id": "e1000000-0000-0000-0000-000000000015",
    "date": "2026-08-19",
    "status": "present",
    "check_in": "2026-08-19T09:17:00Z",
    "check_out": "2026-08-19T17:17:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000562",
        "attendance_id": "att1000000-0000-0000-0000-000000000281",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-19T09:17:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000563",
        "attendance_id": "att1000000-0000-0000-0000-000000000281",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-19T17:17:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000282",
    "employee_id": "e1000000-0000-0000-0000-000000000015",
    "date": "2026-08-20",
    "status": "present",
    "check_in": "2026-08-20T09:16:00Z",
    "check_out": "2026-08-20T17:16:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000564",
        "attendance_id": "att1000000-0000-0000-0000-000000000282",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-20T09:16:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000565",
        "attendance_id": "att1000000-0000-0000-0000-000000000282",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-20T17:16:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000283",
    "employee_id": "e1000000-0000-0000-0000-000000000015",
    "date": "2026-08-21",
    "status": "present",
    "check_in": "2026-08-21T09:29:00Z",
    "check_out": "2026-08-21T17:29:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000566",
        "attendance_id": "att1000000-0000-0000-0000-000000000283",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-21T09:29:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000567",
        "attendance_id": "att1000000-0000-0000-0000-000000000283",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-21T17:29:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000284",
    "employee_id": "e1000000-0000-0000-0000-000000000015",
    "date": "2026-08-24",
    "status": "present",
    "check_in": "2026-08-24T09:15:00Z",
    "check_out": "2026-08-24T17:15:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000568",
        "attendance_id": "att1000000-0000-0000-0000-000000000284",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-24T09:15:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000569",
        "attendance_id": "att1000000-0000-0000-0000-000000000284",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-24T17:15:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000285",
    "employee_id": "e1000000-0000-0000-0000-000000000015",
    "date": "2026-08-25",
    "status": "present",
    "check_in": "2026-08-25T09:17:00Z",
    "check_out": "2026-08-25T17:17:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000570",
        "attendance_id": "att1000000-0000-0000-0000-000000000285",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-25T09:17:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000571",
        "attendance_id": "att1000000-0000-0000-0000-000000000285",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-25T17:17:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000286",
    "employee_id": "e1000000-0000-0000-0000-000000000015",
    "date": "2026-08-27",
    "status": "present",
    "check_in": "2026-08-27T09:00:00Z",
    "check_out": "2026-08-27T17:00:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000572",
        "attendance_id": "att1000000-0000-0000-0000-000000000286",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-27T09:00:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000573",
        "attendance_id": "att1000000-0000-0000-0000-000000000286",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-27T17:00:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000287",
    "employee_id": "e1000000-0000-0000-0000-000000000015",
    "date": "2026-08-28",
    "status": "present",
    "check_in": "2026-08-28T09:07:00Z",
    "check_out": "2026-08-28T17:07:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000574",
        "attendance_id": "att1000000-0000-0000-0000-000000000287",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-28T09:07:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000575",
        "attendance_id": "att1000000-0000-0000-0000-000000000287",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-28T17:07:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000288",
    "employee_id": "e1000000-0000-0000-0000-000000000016",
    "date": "2026-08-03",
    "status": "present",
    "check_in": "2026-08-03T09:17:00Z",
    "check_out": "2026-08-03T17:17:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000576",
        "attendance_id": "att1000000-0000-0000-0000-000000000288",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-03T09:17:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000577",
        "attendance_id": "att1000000-0000-0000-0000-000000000288",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-03T17:17:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000289",
    "employee_id": "e1000000-0000-0000-0000-000000000016",
    "date": "2026-08-04",
    "status": "present",
    "check_in": "2026-08-04T09:17:00Z",
    "check_out": "2026-08-04T17:17:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000578",
        "attendance_id": "att1000000-0000-0000-0000-000000000289",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-04T09:17:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000579",
        "attendance_id": "att1000000-0000-0000-0000-000000000289",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-04T17:17:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000290",
    "employee_id": "e1000000-0000-0000-0000-000000000016",
    "date": "2026-08-05",
    "status": "present",
    "check_in": "2026-08-05T09:22:00Z",
    "check_out": "2026-08-05T17:22:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000580",
        "attendance_id": "att1000000-0000-0000-0000-000000000290",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-05T09:22:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000581",
        "attendance_id": "att1000000-0000-0000-0000-000000000290",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-05T17:22:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000291",
    "employee_id": "e1000000-0000-0000-0000-000000000016",
    "date": "2026-08-06",
    "status": "present",
    "check_in": "2026-08-06T09:37:00Z",
    "check_out": "2026-08-06T17:37:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000582",
        "attendance_id": "att1000000-0000-0000-0000-000000000291",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-06T09:37:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000583",
        "attendance_id": "att1000000-0000-0000-0000-000000000291",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-06T17:37:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000292",
    "employee_id": "e1000000-0000-0000-0000-000000000016",
    "date": "2026-08-07",
    "status": "late",
    "check_in": "2026-08-07T10:41:00Z",
    "check_out": "2026-08-07T18:41:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000584",
        "attendance_id": "att1000000-0000-0000-0000-000000000292",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-07T10:41:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000585",
        "attendance_id": "att1000000-0000-0000-0000-000000000292",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-07T18:41:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000293",
    "employee_id": "e1000000-0000-0000-0000-000000000016",
    "date": "2026-08-10",
    "status": "present",
    "check_in": "2026-08-10T09:08:00Z",
    "check_out": "2026-08-10T17:08:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000586",
        "attendance_id": "att1000000-0000-0000-0000-000000000293",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-10T09:08:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000587",
        "attendance_id": "att1000000-0000-0000-0000-000000000293",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-10T17:08:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000294",
    "employee_id": "e1000000-0000-0000-0000-000000000016",
    "date": "2026-08-11",
    "status": "present",
    "check_in": "2026-08-11T09:36:00Z",
    "check_out": "2026-08-11T17:36:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000588",
        "attendance_id": "att1000000-0000-0000-0000-000000000294",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-11T09:36:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000589",
        "attendance_id": "att1000000-0000-0000-0000-000000000294",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-11T17:36:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000295",
    "employee_id": "e1000000-0000-0000-0000-000000000016",
    "date": "2026-08-12",
    "status": "present",
    "check_in": "2026-08-12T09:42:00Z",
    "check_out": "2026-08-12T17:42:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000590",
        "attendance_id": "att1000000-0000-0000-0000-000000000295",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-12T09:42:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000591",
        "attendance_id": "att1000000-0000-0000-0000-000000000295",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-12T17:42:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000296",
    "employee_id": "e1000000-0000-0000-0000-000000000016",
    "date": "2026-08-13",
    "status": "present",
    "check_in": "2026-08-13T09:28:00Z",
    "check_out": "2026-08-13T17:28:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000592",
        "attendance_id": "att1000000-0000-0000-0000-000000000296",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-13T09:28:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000593",
        "attendance_id": "att1000000-0000-0000-0000-000000000296",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-13T17:28:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000297",
    "employee_id": "e1000000-0000-0000-0000-000000000016",
    "date": "2026-08-14",
    "status": "present",
    "check_in": "2026-08-14T09:34:00Z",
    "check_out": "2026-08-14T17:34:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000594",
        "attendance_id": "att1000000-0000-0000-0000-000000000297",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-14T09:34:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000595",
        "attendance_id": "att1000000-0000-0000-0000-000000000297",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-14T17:34:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000298",
    "employee_id": "e1000000-0000-0000-0000-000000000016",
    "date": "2026-08-17",
    "status": "present",
    "check_in": "2026-08-17T09:21:00Z",
    "check_out": "2026-08-17T17:21:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000596",
        "attendance_id": "att1000000-0000-0000-0000-000000000298",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-17T09:21:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000597",
        "attendance_id": "att1000000-0000-0000-0000-000000000298",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-17T17:21:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000299",
    "employee_id": "e1000000-0000-0000-0000-000000000016",
    "date": "2026-08-18",
    "status": "present",
    "check_in": "2026-08-18T09:37:00Z",
    "check_out": "2026-08-18T17:37:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000598",
        "attendance_id": "att1000000-0000-0000-0000-000000000299",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-18T09:37:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000599",
        "attendance_id": "att1000000-0000-0000-0000-000000000299",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-18T17:37:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000300",
    "employee_id": "e1000000-0000-0000-0000-000000000016",
    "date": "2026-08-19",
    "status": "present",
    "check_in": "2026-08-19T09:25:00Z",
    "check_out": "2026-08-19T17:25:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000600",
        "attendance_id": "att1000000-0000-0000-0000-000000000300",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-19T09:25:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000601",
        "attendance_id": "att1000000-0000-0000-0000-000000000300",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-19T17:25:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000301",
    "employee_id": "e1000000-0000-0000-0000-000000000016",
    "date": "2026-08-20",
    "status": "present",
    "check_in": "2026-08-20T09:02:00Z",
    "check_out": "2026-08-20T17:02:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000602",
        "attendance_id": "att1000000-0000-0000-0000-000000000301",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-20T09:02:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000603",
        "attendance_id": "att1000000-0000-0000-0000-000000000301",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-20T17:02:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000302",
    "employee_id": "e1000000-0000-0000-0000-000000000016",
    "date": "2026-08-21",
    "status": "late",
    "check_in": "2026-08-21T10:29:00Z",
    "check_out": "2026-08-21T18:29:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000604",
        "attendance_id": "att1000000-0000-0000-0000-000000000302",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-21T10:29:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000605",
        "attendance_id": "att1000000-0000-0000-0000-000000000302",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-21T18:29:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000303",
    "employee_id": "e1000000-0000-0000-0000-000000000016",
    "date": "2026-08-24",
    "status": "present",
    "check_in": "2026-08-24T09:13:00Z",
    "check_out": "2026-08-24T17:13:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000606",
        "attendance_id": "att1000000-0000-0000-0000-000000000303",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-24T09:13:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000607",
        "attendance_id": "att1000000-0000-0000-0000-000000000303",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-24T17:13:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000304",
    "employee_id": "e1000000-0000-0000-0000-000000000016",
    "date": "2026-08-25",
    "status": "present",
    "check_in": "2026-08-25T09:02:00Z",
    "check_out": "2026-08-25T17:02:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000608",
        "attendance_id": "att1000000-0000-0000-0000-000000000304",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-25T09:02:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000609",
        "attendance_id": "att1000000-0000-0000-0000-000000000304",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-25T17:02:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000305",
    "employee_id": "e1000000-0000-0000-0000-000000000016",
    "date": "2026-08-26",
    "status": "present",
    "check_in": "2026-08-26T09:12:00Z",
    "check_out": "2026-08-26T17:12:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000610",
        "attendance_id": "att1000000-0000-0000-0000-000000000305",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-26T09:12:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000611",
        "attendance_id": "att1000000-0000-0000-0000-000000000305",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-26T17:12:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000306",
    "employee_id": "e1000000-0000-0000-0000-000000000016",
    "date": "2026-08-27",
    "status": "present",
    "check_in": "2026-08-27T09:02:00Z",
    "check_out": "2026-08-27T17:02:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000612",
        "attendance_id": "att1000000-0000-0000-0000-000000000306",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-27T09:02:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000613",
        "attendance_id": "att1000000-0000-0000-0000-000000000306",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-27T17:02:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000307",
    "employee_id": "e1000000-0000-0000-0000-000000000016",
    "date": "2026-08-28",
    "status": "present",
    "check_in": "2026-08-28T09:09:00Z",
    "check_out": "2026-08-28T17:09:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000614",
        "attendance_id": "att1000000-0000-0000-0000-000000000307",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-28T09:09:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000615",
        "attendance_id": "att1000000-0000-0000-0000-000000000307",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-28T17:09:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000308",
    "employee_id": "e1000000-0000-0000-0000-000000000017",
    "date": "2026-08-03",
    "status": "present",
    "check_in": "2026-08-03T09:09:00Z",
    "check_out": "2026-08-03T17:09:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000616",
        "attendance_id": "att1000000-0000-0000-0000-000000000308",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-03T09:09:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000617",
        "attendance_id": "att1000000-0000-0000-0000-000000000308",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-03T17:09:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000309",
    "employee_id": "e1000000-0000-0000-0000-000000000017",
    "date": "2026-08-04",
    "status": "present",
    "check_in": "2026-08-04T09:19:00Z",
    "check_out": "2026-08-04T17:19:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000618",
        "attendance_id": "att1000000-0000-0000-0000-000000000309",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-04T09:19:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000619",
        "attendance_id": "att1000000-0000-0000-0000-000000000309",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-04T17:19:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000310",
    "employee_id": "e1000000-0000-0000-0000-000000000017",
    "date": "2026-08-05",
    "status": "present",
    "check_in": "2026-08-05T09:09:00Z",
    "check_out": "2026-08-05T17:09:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000620",
        "attendance_id": "att1000000-0000-0000-0000-000000000310",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-05T09:09:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000621",
        "attendance_id": "att1000000-0000-0000-0000-000000000310",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-05T17:09:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000311",
    "employee_id": "e1000000-0000-0000-0000-000000000017",
    "date": "2026-08-06",
    "status": "present",
    "check_in": "2026-08-06T09:16:00Z",
    "check_out": "2026-08-06T17:16:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000622",
        "attendance_id": "att1000000-0000-0000-0000-000000000311",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-06T09:16:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000623",
        "attendance_id": "att1000000-0000-0000-0000-000000000311",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-06T17:16:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000312",
    "employee_id": "e1000000-0000-0000-0000-000000000017",
    "date": "2026-08-07",
    "status": "present",
    "check_in": "2026-08-07T09:25:00Z",
    "check_out": "2026-08-07T17:25:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000624",
        "attendance_id": "att1000000-0000-0000-0000-000000000312",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-07T09:25:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000625",
        "attendance_id": "att1000000-0000-0000-0000-000000000312",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-07T17:25:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000313",
    "employee_id": "e1000000-0000-0000-0000-000000000017",
    "date": "2026-08-10",
    "status": "present",
    "check_in": "2026-08-10T09:40:00Z",
    "check_out": "2026-08-10T17:40:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000626",
        "attendance_id": "att1000000-0000-0000-0000-000000000313",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-10T09:40:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000627",
        "attendance_id": "att1000000-0000-0000-0000-000000000313",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-10T17:40:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000314",
    "employee_id": "e1000000-0000-0000-0000-000000000017",
    "date": "2026-08-11",
    "status": "present",
    "check_in": "2026-08-11T09:26:00Z",
    "check_out": "2026-08-11T17:26:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000628",
        "attendance_id": "att1000000-0000-0000-0000-000000000314",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-11T09:26:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000629",
        "attendance_id": "att1000000-0000-0000-0000-000000000314",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-11T17:26:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000315",
    "employee_id": "e1000000-0000-0000-0000-000000000017",
    "date": "2026-08-12",
    "status": "present",
    "check_in": "2026-08-12T09:04:00Z",
    "check_out": "2026-08-12T17:04:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000630",
        "attendance_id": "att1000000-0000-0000-0000-000000000315",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-12T09:04:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000631",
        "attendance_id": "att1000000-0000-0000-0000-000000000315",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-12T17:04:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000316",
    "employee_id": "e1000000-0000-0000-0000-000000000017",
    "date": "2026-08-13",
    "status": "present",
    "check_in": "2026-08-13T09:09:00Z",
    "check_out": "2026-08-13T17:09:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000632",
        "attendance_id": "att1000000-0000-0000-0000-000000000316",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-13T09:09:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000633",
        "attendance_id": "att1000000-0000-0000-0000-000000000316",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-13T17:09:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000317",
    "employee_id": "e1000000-0000-0000-0000-000000000017",
    "date": "2026-08-14",
    "status": "present",
    "check_in": "2026-08-14T09:23:00Z",
    "check_out": "2026-08-14T17:23:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000634",
        "attendance_id": "att1000000-0000-0000-0000-000000000317",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-14T09:23:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000635",
        "attendance_id": "att1000000-0000-0000-0000-000000000317",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-14T17:23:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000318",
    "employee_id": "e1000000-0000-0000-0000-000000000017",
    "date": "2026-08-17",
    "status": "present",
    "check_in": "2026-08-17T09:44:00Z",
    "check_out": "2026-08-17T17:44:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000636",
        "attendance_id": "att1000000-0000-0000-0000-000000000318",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-17T09:44:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000637",
        "attendance_id": "att1000000-0000-0000-0000-000000000318",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-17T17:44:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000319",
    "employee_id": "e1000000-0000-0000-0000-000000000017",
    "date": "2026-08-18",
    "status": "present",
    "check_in": "2026-08-18T09:19:00Z",
    "check_out": "2026-08-18T17:19:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000638",
        "attendance_id": "att1000000-0000-0000-0000-000000000319",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-18T09:19:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000639",
        "attendance_id": "att1000000-0000-0000-0000-000000000319",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-18T17:19:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000320",
    "employee_id": "e1000000-0000-0000-0000-000000000017",
    "date": "2026-08-19",
    "status": "present",
    "check_in": "2026-08-19T09:43:00Z",
    "check_out": "2026-08-19T17:43:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000640",
        "attendance_id": "att1000000-0000-0000-0000-000000000320",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-19T09:43:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000641",
        "attendance_id": "att1000000-0000-0000-0000-000000000320",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-19T17:43:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000321",
    "employee_id": "e1000000-0000-0000-0000-000000000017",
    "date": "2026-08-20",
    "status": "present",
    "check_in": "2026-08-20T09:09:00Z",
    "check_out": "2026-08-20T17:09:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000642",
        "attendance_id": "att1000000-0000-0000-0000-000000000321",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-20T09:09:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000643",
        "attendance_id": "att1000000-0000-0000-0000-000000000321",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-20T17:09:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000322",
    "employee_id": "e1000000-0000-0000-0000-000000000017",
    "date": "2026-08-21",
    "status": "present",
    "check_in": "2026-08-21T09:28:00Z",
    "check_out": "2026-08-21T17:28:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000644",
        "attendance_id": "att1000000-0000-0000-0000-000000000322",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-21T09:28:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000645",
        "attendance_id": "att1000000-0000-0000-0000-000000000322",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-21T17:28:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000323",
    "employee_id": "e1000000-0000-0000-0000-000000000017",
    "date": "2026-08-24",
    "status": "present",
    "check_in": "2026-08-24T09:16:00Z",
    "check_out": "2026-08-24T17:16:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000646",
        "attendance_id": "att1000000-0000-0000-0000-000000000323",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-24T09:16:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000647",
        "attendance_id": "att1000000-0000-0000-0000-000000000323",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-24T17:16:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000324",
    "employee_id": "e1000000-0000-0000-0000-000000000017",
    "date": "2026-08-25",
    "status": "present",
    "check_in": "2026-08-25T09:15:00Z",
    "check_out": "2026-08-25T17:15:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000648",
        "attendance_id": "att1000000-0000-0000-0000-000000000324",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-25T09:15:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000649",
        "attendance_id": "att1000000-0000-0000-0000-000000000324",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-25T17:15:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000325",
    "employee_id": "e1000000-0000-0000-0000-000000000017",
    "date": "2026-08-26",
    "status": "present",
    "check_in": "2026-08-26T09:13:00Z",
    "check_out": "2026-08-26T17:13:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000650",
        "attendance_id": "att1000000-0000-0000-0000-000000000325",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-26T09:13:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000651",
        "attendance_id": "att1000000-0000-0000-0000-000000000325",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-26T17:13:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000326",
    "employee_id": "e1000000-0000-0000-0000-000000000017",
    "date": "2026-08-27",
    "status": "present",
    "check_in": "2026-08-27T09:14:00Z",
    "check_out": "2026-08-27T17:14:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000652",
        "attendance_id": "att1000000-0000-0000-0000-000000000326",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-27T09:14:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000653",
        "attendance_id": "att1000000-0000-0000-0000-000000000326",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-27T17:14:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000327",
    "employee_id": "e1000000-0000-0000-0000-000000000017",
    "date": "2026-08-28",
    "status": "present",
    "check_in": "2026-08-28T09:33:00Z",
    "check_out": "2026-08-28T17:33:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000654",
        "attendance_id": "att1000000-0000-0000-0000-000000000327",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-28T09:33:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000655",
        "attendance_id": "att1000000-0000-0000-0000-000000000327",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-28T17:33:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000328",
    "employee_id": "e1000000-0000-0000-0000-000000000018",
    "date": "2026-08-03",
    "status": "present",
    "check_in": "2026-08-03T09:13:00Z",
    "check_out": "2026-08-03T17:13:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000656",
        "attendance_id": "att1000000-0000-0000-0000-000000000328",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-03T09:13:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000657",
        "attendance_id": "att1000000-0000-0000-0000-000000000328",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-03T17:13:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000329",
    "employee_id": "e1000000-0000-0000-0000-000000000018",
    "date": "2026-08-04",
    "status": "present",
    "check_in": "2026-08-04T09:27:00Z",
    "check_out": "2026-08-04T17:27:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000658",
        "attendance_id": "att1000000-0000-0000-0000-000000000329",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-04T09:27:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000659",
        "attendance_id": "att1000000-0000-0000-0000-000000000329",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-04T17:27:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000330",
    "employee_id": "e1000000-0000-0000-0000-000000000018",
    "date": "2026-08-06",
    "status": "present",
    "check_in": "2026-08-06T09:30:00Z",
    "check_out": "2026-08-06T17:30:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000660",
        "attendance_id": "att1000000-0000-0000-0000-000000000330",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-06T09:30:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000661",
        "attendance_id": "att1000000-0000-0000-0000-000000000330",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-06T17:30:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000331",
    "employee_id": "e1000000-0000-0000-0000-000000000018",
    "date": "2026-08-10",
    "status": "present",
    "check_in": "2026-08-10T09:07:00Z",
    "check_out": "2026-08-10T17:07:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000662",
        "attendance_id": "att1000000-0000-0000-0000-000000000331",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-10T09:07:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000663",
        "attendance_id": "att1000000-0000-0000-0000-000000000331",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-10T17:07:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000332",
    "employee_id": "e1000000-0000-0000-0000-000000000018",
    "date": "2026-08-11",
    "status": "present",
    "check_in": "2026-08-11T09:13:00Z",
    "check_out": "2026-08-11T17:13:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000664",
        "attendance_id": "att1000000-0000-0000-0000-000000000332",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-11T09:13:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000665",
        "attendance_id": "att1000000-0000-0000-0000-000000000332",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-11T17:13:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000333",
    "employee_id": "e1000000-0000-0000-0000-000000000018",
    "date": "2026-08-12",
    "status": "late",
    "check_in": "2026-08-12T10:39:00Z",
    "check_out": "2026-08-12T18:39:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000666",
        "attendance_id": "att1000000-0000-0000-0000-000000000333",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-12T10:39:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000667",
        "attendance_id": "att1000000-0000-0000-0000-000000000333",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-12T18:39:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000334",
    "employee_id": "e1000000-0000-0000-0000-000000000018",
    "date": "2026-08-13",
    "status": "present",
    "check_in": "2026-08-13T09:01:00Z",
    "check_out": "2026-08-13T17:01:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000668",
        "attendance_id": "att1000000-0000-0000-0000-000000000334",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-13T09:01:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000669",
        "attendance_id": "att1000000-0000-0000-0000-000000000334",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-13T17:01:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000335",
    "employee_id": "e1000000-0000-0000-0000-000000000018",
    "date": "2026-08-14",
    "status": "present",
    "check_in": "2026-08-14T09:34:00Z",
    "check_out": "2026-08-14T17:34:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000670",
        "attendance_id": "att1000000-0000-0000-0000-000000000335",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-14T09:34:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000671",
        "attendance_id": "att1000000-0000-0000-0000-000000000335",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-14T17:34:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000336",
    "employee_id": "e1000000-0000-0000-0000-000000000018",
    "date": "2026-08-18",
    "status": "present",
    "check_in": "2026-08-18T09:17:00Z",
    "check_out": "2026-08-18T17:17:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000672",
        "attendance_id": "att1000000-0000-0000-0000-000000000336",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-18T09:17:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000673",
        "attendance_id": "att1000000-0000-0000-0000-000000000336",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-18T17:17:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000337",
    "employee_id": "e1000000-0000-0000-0000-000000000018",
    "date": "2026-08-19",
    "status": "present",
    "check_in": "2026-08-19T09:24:00Z",
    "check_out": "2026-08-19T17:24:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000674",
        "attendance_id": "att1000000-0000-0000-0000-000000000337",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-19T09:24:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000675",
        "attendance_id": "att1000000-0000-0000-0000-000000000337",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-19T17:24:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000338",
    "employee_id": "e1000000-0000-0000-0000-000000000018",
    "date": "2026-08-20",
    "status": "present",
    "check_in": "2026-08-20T09:18:00Z",
    "check_out": "2026-08-20T17:18:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000676",
        "attendance_id": "att1000000-0000-0000-0000-000000000338",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-20T09:18:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000677",
        "attendance_id": "att1000000-0000-0000-0000-000000000338",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-20T17:18:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000339",
    "employee_id": "e1000000-0000-0000-0000-000000000018",
    "date": "2026-08-21",
    "status": "present",
    "check_in": "2026-08-21T09:16:00Z",
    "check_out": "2026-08-21T17:16:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000678",
        "attendance_id": "att1000000-0000-0000-0000-000000000339",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-21T09:16:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000679",
        "attendance_id": "att1000000-0000-0000-0000-000000000339",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-21T17:16:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000340",
    "employee_id": "e1000000-0000-0000-0000-000000000018",
    "date": "2026-08-24",
    "status": "present",
    "check_in": "2026-08-24T09:04:00Z",
    "check_out": "2026-08-24T17:04:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000680",
        "attendance_id": "att1000000-0000-0000-0000-000000000340",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-24T09:04:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000681",
        "attendance_id": "att1000000-0000-0000-0000-000000000340",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-24T17:04:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000341",
    "employee_id": "e1000000-0000-0000-0000-000000000018",
    "date": "2026-08-25",
    "status": "present",
    "check_in": "2026-08-25T09:06:00Z",
    "check_out": "2026-08-25T17:06:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000682",
        "attendance_id": "att1000000-0000-0000-0000-000000000341",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-25T09:06:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000683",
        "attendance_id": "att1000000-0000-0000-0000-000000000341",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-25T17:06:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000342",
    "employee_id": "e1000000-0000-0000-0000-000000000018",
    "date": "2026-08-26",
    "status": "present",
    "check_in": "2026-08-26T09:11:00Z",
    "check_out": "2026-08-26T17:11:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000684",
        "attendance_id": "att1000000-0000-0000-0000-000000000342",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-26T09:11:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000685",
        "attendance_id": "att1000000-0000-0000-0000-000000000342",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-26T17:11:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000343",
    "employee_id": "e1000000-0000-0000-0000-000000000018",
    "date": "2026-08-27",
    "status": "present",
    "check_in": "2026-08-27T09:01:00Z",
    "check_out": "2026-08-27T17:01:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000686",
        "attendance_id": "att1000000-0000-0000-0000-000000000343",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-27T09:01:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000687",
        "attendance_id": "att1000000-0000-0000-0000-000000000343",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-27T17:01:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000344",
    "employee_id": "e1000000-0000-0000-0000-000000000018",
    "date": "2026-08-28",
    "status": "present",
    "check_in": "2026-08-28T09:10:00Z",
    "check_out": "2026-08-28T17:10:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000688",
        "attendance_id": "att1000000-0000-0000-0000-000000000344",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-28T09:10:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000689",
        "attendance_id": "att1000000-0000-0000-0000-000000000344",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-28T17:10:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000345",
    "employee_id": "e1000000-0000-0000-0000-000000000019",
    "date": "2026-08-03",
    "status": "present",
    "check_in": "2026-08-03T09:23:00Z",
    "check_out": "2026-08-03T17:23:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000690",
        "attendance_id": "att1000000-0000-0000-0000-000000000345",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-03T09:23:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000691",
        "attendance_id": "att1000000-0000-0000-0000-000000000345",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-03T17:23:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000346",
    "employee_id": "e1000000-0000-0000-0000-000000000019",
    "date": "2026-08-04",
    "status": "late",
    "check_in": "2026-08-04T10:14:00Z",
    "check_out": "2026-08-04T18:14:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000692",
        "attendance_id": "att1000000-0000-0000-0000-000000000346",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-04T10:14:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000693",
        "attendance_id": "att1000000-0000-0000-0000-000000000346",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-04T18:14:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000347",
    "employee_id": "e1000000-0000-0000-0000-000000000019",
    "date": "2026-08-05",
    "status": "present",
    "check_in": "2026-08-05T09:02:00Z",
    "check_out": "2026-08-05T17:02:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000694",
        "attendance_id": "att1000000-0000-0000-0000-000000000347",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-05T09:02:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000695",
        "attendance_id": "att1000000-0000-0000-0000-000000000347",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-05T17:02:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000348",
    "employee_id": "e1000000-0000-0000-0000-000000000019",
    "date": "2026-08-06",
    "status": "present",
    "check_in": "2026-08-06T09:09:00Z",
    "check_out": "2026-08-06T17:09:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000696",
        "attendance_id": "att1000000-0000-0000-0000-000000000348",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-06T09:09:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000697",
        "attendance_id": "att1000000-0000-0000-0000-000000000348",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-06T17:09:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000349",
    "employee_id": "e1000000-0000-0000-0000-000000000019",
    "date": "2026-08-10",
    "status": "present",
    "check_in": "2026-08-10T09:05:00Z",
    "check_out": "2026-08-10T17:05:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000698",
        "attendance_id": "att1000000-0000-0000-0000-000000000349",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-10T09:05:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000699",
        "attendance_id": "att1000000-0000-0000-0000-000000000349",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-10T17:05:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000350",
    "employee_id": "e1000000-0000-0000-0000-000000000019",
    "date": "2026-08-11",
    "status": "present",
    "check_in": "2026-08-11T09:01:00Z",
    "check_out": "2026-08-11T17:01:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000700",
        "attendance_id": "att1000000-0000-0000-0000-000000000350",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-11T09:01:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000701",
        "attendance_id": "att1000000-0000-0000-0000-000000000350",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-11T17:01:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000351",
    "employee_id": "e1000000-0000-0000-0000-000000000019",
    "date": "2026-08-12",
    "status": "present",
    "check_in": "2026-08-12T09:29:00Z",
    "check_out": "2026-08-12T17:29:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000702",
        "attendance_id": "att1000000-0000-0000-0000-000000000351",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-12T09:29:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000703",
        "attendance_id": "att1000000-0000-0000-0000-000000000351",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-12T17:29:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000352",
    "employee_id": "e1000000-0000-0000-0000-000000000019",
    "date": "2026-08-13",
    "status": "late",
    "check_in": "2026-08-13T10:07:00Z",
    "check_out": "2026-08-13T18:07:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000704",
        "attendance_id": "att1000000-0000-0000-0000-000000000352",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-13T10:07:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000705",
        "attendance_id": "att1000000-0000-0000-0000-000000000352",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-13T18:07:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000353",
    "employee_id": "e1000000-0000-0000-0000-000000000019",
    "date": "2026-08-14",
    "status": "present",
    "check_in": "2026-08-14T09:02:00Z",
    "check_out": "2026-08-14T17:02:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000706",
        "attendance_id": "att1000000-0000-0000-0000-000000000353",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-14T09:02:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000707",
        "attendance_id": "att1000000-0000-0000-0000-000000000353",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-14T17:02:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000354",
    "employee_id": "e1000000-0000-0000-0000-000000000019",
    "date": "2026-08-17",
    "status": "present",
    "check_in": "2026-08-17T09:21:00Z",
    "check_out": "2026-08-17T17:21:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000708",
        "attendance_id": "att1000000-0000-0000-0000-000000000354",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-17T09:21:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000709",
        "attendance_id": "att1000000-0000-0000-0000-000000000354",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-17T17:21:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000355",
    "employee_id": "e1000000-0000-0000-0000-000000000019",
    "date": "2026-08-18",
    "status": "present",
    "check_in": "2026-08-18T09:22:00Z",
    "check_out": "2026-08-18T17:22:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000710",
        "attendance_id": "att1000000-0000-0000-0000-000000000355",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-18T09:22:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000711",
        "attendance_id": "att1000000-0000-0000-0000-000000000355",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-18T17:22:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000356",
    "employee_id": "e1000000-0000-0000-0000-000000000019",
    "date": "2026-08-19",
    "status": "present",
    "check_in": "2026-08-19T09:17:00Z",
    "check_out": "2026-08-19T17:17:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000712",
        "attendance_id": "att1000000-0000-0000-0000-000000000356",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-19T09:17:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000713",
        "attendance_id": "att1000000-0000-0000-0000-000000000356",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-19T17:17:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000357",
    "employee_id": "e1000000-0000-0000-0000-000000000019",
    "date": "2026-08-20",
    "status": "present",
    "check_in": "2026-08-20T09:28:00Z",
    "check_out": "2026-08-20T17:28:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000714",
        "attendance_id": "att1000000-0000-0000-0000-000000000357",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-20T09:28:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000715",
        "attendance_id": "att1000000-0000-0000-0000-000000000357",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-20T17:28:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000358",
    "employee_id": "e1000000-0000-0000-0000-000000000019",
    "date": "2026-08-21",
    "status": "present",
    "check_in": "2026-08-21T09:07:00Z",
    "check_out": "2026-08-21T17:07:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000716",
        "attendance_id": "att1000000-0000-0000-0000-000000000358",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-21T09:07:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000717",
        "attendance_id": "att1000000-0000-0000-0000-000000000358",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-21T17:07:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000359",
    "employee_id": "e1000000-0000-0000-0000-000000000019",
    "date": "2026-08-24",
    "status": "present",
    "check_in": "2026-08-24T09:20:00Z",
    "check_out": "2026-08-24T17:20:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000718",
        "attendance_id": "att1000000-0000-0000-0000-000000000359",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-24T09:20:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000719",
        "attendance_id": "att1000000-0000-0000-0000-000000000359",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-24T17:20:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000360",
    "employee_id": "e1000000-0000-0000-0000-000000000019",
    "date": "2026-08-25",
    "status": "present",
    "check_in": "2026-08-25T09:25:00Z",
    "check_out": "2026-08-25T17:25:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000720",
        "attendance_id": "att1000000-0000-0000-0000-000000000360",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-25T09:25:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000721",
        "attendance_id": "att1000000-0000-0000-0000-000000000360",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-25T17:25:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000361",
    "employee_id": "e1000000-0000-0000-0000-000000000019",
    "date": "2026-08-26",
    "status": "present",
    "check_in": "2026-08-26T09:38:00Z",
    "check_out": "2026-08-26T17:38:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000722",
        "attendance_id": "att1000000-0000-0000-0000-000000000361",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-26T09:38:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000723",
        "attendance_id": "att1000000-0000-0000-0000-000000000361",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-26T17:38:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000362",
    "employee_id": "e1000000-0000-0000-0000-000000000019",
    "date": "2026-08-27",
    "status": "present",
    "check_in": "2026-08-27T09:10:00Z",
    "check_out": "2026-08-27T17:10:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000724",
        "attendance_id": "att1000000-0000-0000-0000-000000000362",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-27T09:10:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000725",
        "attendance_id": "att1000000-0000-0000-0000-000000000362",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-27T17:10:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000363",
    "employee_id": "e1000000-0000-0000-0000-000000000019",
    "date": "2026-08-28",
    "status": "present",
    "check_in": "2026-08-28T09:33:00Z",
    "check_out": "2026-08-28T17:33:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000726",
        "attendance_id": "att1000000-0000-0000-0000-000000000363",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-28T09:33:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000727",
        "attendance_id": "att1000000-0000-0000-0000-000000000363",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-28T17:33:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000364",
    "employee_id": "e1000000-0000-0000-0000-000000000020",
    "date": "2026-08-03",
    "status": "present",
    "check_in": "2026-08-03T09:16:00Z",
    "check_out": "2026-08-03T17:16:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000728",
        "attendance_id": "att1000000-0000-0000-0000-000000000364",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-03T09:16:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000729",
        "attendance_id": "att1000000-0000-0000-0000-000000000364",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-03T17:16:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000365",
    "employee_id": "e1000000-0000-0000-0000-000000000020",
    "date": "2026-08-04",
    "status": "present",
    "check_in": "2026-08-04T09:23:00Z",
    "check_out": "2026-08-04T17:23:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000730",
        "attendance_id": "att1000000-0000-0000-0000-000000000365",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-04T09:23:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000731",
        "attendance_id": "att1000000-0000-0000-0000-000000000365",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-04T17:23:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000366",
    "employee_id": "e1000000-0000-0000-0000-000000000020",
    "date": "2026-08-05",
    "status": "present",
    "check_in": "2026-08-05T09:41:00Z",
    "check_out": "2026-08-05T17:41:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000732",
        "attendance_id": "att1000000-0000-0000-0000-000000000366",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-05T09:41:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000733",
        "attendance_id": "att1000000-0000-0000-0000-000000000366",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-05T17:41:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000367",
    "employee_id": "e1000000-0000-0000-0000-000000000020",
    "date": "2026-08-06",
    "status": "present",
    "check_in": "2026-08-06T09:26:00Z",
    "check_out": "2026-08-06T17:26:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000734",
        "attendance_id": "att1000000-0000-0000-0000-000000000367",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-06T09:26:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000735",
        "attendance_id": "att1000000-0000-0000-0000-000000000367",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-06T17:26:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000368",
    "employee_id": "e1000000-0000-0000-0000-000000000020",
    "date": "2026-08-07",
    "status": "present",
    "check_in": "2026-08-07T09:37:00Z",
    "check_out": "2026-08-07T17:37:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000736",
        "attendance_id": "att1000000-0000-0000-0000-000000000368",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-07T09:37:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000737",
        "attendance_id": "att1000000-0000-0000-0000-000000000368",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-07T17:37:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000369",
    "employee_id": "e1000000-0000-0000-0000-000000000020",
    "date": "2026-08-10",
    "status": "present",
    "check_in": "2026-08-10T09:10:00Z",
    "check_out": "2026-08-10T17:10:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000738",
        "attendance_id": "att1000000-0000-0000-0000-000000000369",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-10T09:10:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000739",
        "attendance_id": "att1000000-0000-0000-0000-000000000369",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-10T17:10:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000370",
    "employee_id": "e1000000-0000-0000-0000-000000000020",
    "date": "2026-08-11",
    "status": "present",
    "check_in": "2026-08-11T09:16:00Z",
    "check_out": "2026-08-11T17:16:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000740",
        "attendance_id": "att1000000-0000-0000-0000-000000000370",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-11T09:16:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000741",
        "attendance_id": "att1000000-0000-0000-0000-000000000370",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-11T17:16:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000371",
    "employee_id": "e1000000-0000-0000-0000-000000000020",
    "date": "2026-08-12",
    "status": "present",
    "check_in": "2026-08-12T09:33:00Z",
    "check_out": "2026-08-12T17:33:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000742",
        "attendance_id": "att1000000-0000-0000-0000-000000000371",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-12T09:33:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000743",
        "attendance_id": "att1000000-0000-0000-0000-000000000371",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-12T17:33:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000372",
    "employee_id": "e1000000-0000-0000-0000-000000000020",
    "date": "2026-08-13",
    "status": "present",
    "check_in": "2026-08-13T09:19:00Z",
    "check_out": "2026-08-13T17:19:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000744",
        "attendance_id": "att1000000-0000-0000-0000-000000000372",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-13T09:19:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000745",
        "attendance_id": "att1000000-0000-0000-0000-000000000372",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-13T17:19:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000373",
    "employee_id": "e1000000-0000-0000-0000-000000000020",
    "date": "2026-08-14",
    "status": "present",
    "check_in": "2026-08-14T09:33:00Z",
    "check_out": "2026-08-14T17:33:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000746",
        "attendance_id": "att1000000-0000-0000-0000-000000000373",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-14T09:33:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000747",
        "attendance_id": "att1000000-0000-0000-0000-000000000373",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-14T17:33:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000374",
    "employee_id": "e1000000-0000-0000-0000-000000000020",
    "date": "2026-08-17",
    "status": "present",
    "check_in": "2026-08-17T09:25:00Z",
    "check_out": "2026-08-17T17:25:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000748",
        "attendance_id": "att1000000-0000-0000-0000-000000000374",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-17T09:25:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000749",
        "attendance_id": "att1000000-0000-0000-0000-000000000374",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-17T17:25:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000375",
    "employee_id": "e1000000-0000-0000-0000-000000000020",
    "date": "2026-08-18",
    "status": "present",
    "check_in": "2026-08-18T09:25:00Z",
    "check_out": "2026-08-18T17:25:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000750",
        "attendance_id": "att1000000-0000-0000-0000-000000000375",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-18T09:25:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000751",
        "attendance_id": "att1000000-0000-0000-0000-000000000375",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-18T17:25:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000376",
    "employee_id": "e1000000-0000-0000-0000-000000000020",
    "date": "2026-08-19",
    "status": "present",
    "check_in": "2026-08-19T09:13:00Z",
    "check_out": "2026-08-19T17:13:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000752",
        "attendance_id": "att1000000-0000-0000-0000-000000000376",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-19T09:13:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000753",
        "attendance_id": "att1000000-0000-0000-0000-000000000376",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-19T17:13:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000377",
    "employee_id": "e1000000-0000-0000-0000-000000000020",
    "date": "2026-08-20",
    "status": "present",
    "check_in": "2026-08-20T09:26:00Z",
    "check_out": "2026-08-20T17:26:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000754",
        "attendance_id": "att1000000-0000-0000-0000-000000000377",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-20T09:26:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000755",
        "attendance_id": "att1000000-0000-0000-0000-000000000377",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-20T17:26:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000378",
    "employee_id": "e1000000-0000-0000-0000-000000000020",
    "date": "2026-08-21",
    "status": "present",
    "check_in": "2026-08-21T09:30:00Z",
    "check_out": "2026-08-21T17:30:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000756",
        "attendance_id": "att1000000-0000-0000-0000-000000000378",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-21T09:30:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000757",
        "attendance_id": "att1000000-0000-0000-0000-000000000378",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-21T17:30:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000379",
    "employee_id": "e1000000-0000-0000-0000-000000000020",
    "date": "2026-08-24",
    "status": "present",
    "check_in": "2026-08-24T09:24:00Z",
    "check_out": "2026-08-24T17:24:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000758",
        "attendance_id": "att1000000-0000-0000-0000-000000000379",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-24T09:24:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000759",
        "attendance_id": "att1000000-0000-0000-0000-000000000379",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-24T17:24:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000380",
    "employee_id": "e1000000-0000-0000-0000-000000000020",
    "date": "2026-08-25",
    "status": "present",
    "check_in": "2026-08-25T09:39:00Z",
    "check_out": "2026-08-25T17:39:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000760",
        "attendance_id": "att1000000-0000-0000-0000-000000000380",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-25T09:39:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000761",
        "attendance_id": "att1000000-0000-0000-0000-000000000380",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-25T17:39:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000381",
    "employee_id": "e1000000-0000-0000-0000-000000000020",
    "date": "2026-08-26",
    "status": "present",
    "check_in": "2026-08-26T09:09:00Z",
    "check_out": "2026-08-26T17:09:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000762",
        "attendance_id": "att1000000-0000-0000-0000-000000000381",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-26T09:09:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000763",
        "attendance_id": "att1000000-0000-0000-0000-000000000381",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-26T17:09:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000382",
    "employee_id": "e1000000-0000-0000-0000-000000000020",
    "date": "2026-08-28",
    "status": "present",
    "check_in": "2026-08-28T09:09:00Z",
    "check_out": "2026-08-28T17:09:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000764",
        "attendance_id": "att1000000-0000-0000-0000-000000000382",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-28T09:09:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000765",
        "attendance_id": "att1000000-0000-0000-0000-000000000382",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-28T17:09:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000383",
    "employee_id": "e1000000-0000-0000-0000-000000000021",
    "date": "2026-08-03",
    "status": "present",
    "check_in": "2026-08-03T09:08:00Z",
    "check_out": "2026-08-03T17:08:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000766",
        "attendance_id": "att1000000-0000-0000-0000-000000000383",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-03T09:08:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000767",
        "attendance_id": "att1000000-0000-0000-0000-000000000383",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-03T17:08:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000384",
    "employee_id": "e1000000-0000-0000-0000-000000000021",
    "date": "2026-08-04",
    "status": "present",
    "check_in": "2026-08-04T09:18:00Z",
    "check_out": "2026-08-04T17:18:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000768",
        "attendance_id": "att1000000-0000-0000-0000-000000000384",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-04T09:18:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000769",
        "attendance_id": "att1000000-0000-0000-0000-000000000384",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-04T17:18:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000385",
    "employee_id": "e1000000-0000-0000-0000-000000000021",
    "date": "2026-08-05",
    "status": "present",
    "check_in": "2026-08-05T09:09:00Z",
    "check_out": "2026-08-05T17:09:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000770",
        "attendance_id": "att1000000-0000-0000-0000-000000000385",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-05T09:09:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000771",
        "attendance_id": "att1000000-0000-0000-0000-000000000385",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-05T17:09:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000386",
    "employee_id": "e1000000-0000-0000-0000-000000000021",
    "date": "2026-08-06",
    "status": "present",
    "check_in": "2026-08-06T09:00:00Z",
    "check_out": "2026-08-06T17:00:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000772",
        "attendance_id": "att1000000-0000-0000-0000-000000000386",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-06T09:00:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000773",
        "attendance_id": "att1000000-0000-0000-0000-000000000386",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-06T17:00:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000387",
    "employee_id": "e1000000-0000-0000-0000-000000000021",
    "date": "2026-08-07",
    "status": "present",
    "check_in": "2026-08-07T09:11:00Z",
    "check_out": "2026-08-07T17:11:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000774",
        "attendance_id": "att1000000-0000-0000-0000-000000000387",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-07T09:11:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000775",
        "attendance_id": "att1000000-0000-0000-0000-000000000387",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-07T17:11:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000388",
    "employee_id": "e1000000-0000-0000-0000-000000000021",
    "date": "2026-08-10",
    "status": "present",
    "check_in": "2026-08-10T09:37:00Z",
    "check_out": "2026-08-10T17:37:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000776",
        "attendance_id": "att1000000-0000-0000-0000-000000000388",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-10T09:37:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000777",
        "attendance_id": "att1000000-0000-0000-0000-000000000388",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-10T17:37:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000389",
    "employee_id": "e1000000-0000-0000-0000-000000000021",
    "date": "2026-08-11",
    "status": "present",
    "check_in": "2026-08-11T09:29:00Z",
    "check_out": "2026-08-11T17:29:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000778",
        "attendance_id": "att1000000-0000-0000-0000-000000000389",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-11T09:29:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000779",
        "attendance_id": "att1000000-0000-0000-0000-000000000389",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-11T17:29:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000390",
    "employee_id": "e1000000-0000-0000-0000-000000000021",
    "date": "2026-08-12",
    "status": "present",
    "check_in": "2026-08-12T09:22:00Z",
    "check_out": "2026-08-12T17:22:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000780",
        "attendance_id": "att1000000-0000-0000-0000-000000000390",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-12T09:22:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000781",
        "attendance_id": "att1000000-0000-0000-0000-000000000390",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-12T17:22:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000391",
    "employee_id": "e1000000-0000-0000-0000-000000000021",
    "date": "2026-08-13",
    "status": "present",
    "check_in": "2026-08-13T09:26:00Z",
    "check_out": "2026-08-13T17:26:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000782",
        "attendance_id": "att1000000-0000-0000-0000-000000000391",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-13T09:26:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000783",
        "attendance_id": "att1000000-0000-0000-0000-000000000391",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-13T17:26:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000392",
    "employee_id": "e1000000-0000-0000-0000-000000000021",
    "date": "2026-08-14",
    "status": "present",
    "check_in": "2026-08-14T09:35:00Z",
    "check_out": "2026-08-14T17:35:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000784",
        "attendance_id": "att1000000-0000-0000-0000-000000000392",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-14T09:35:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000785",
        "attendance_id": "att1000000-0000-0000-0000-000000000392",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-14T17:35:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000393",
    "employee_id": "e1000000-0000-0000-0000-000000000021",
    "date": "2026-08-18",
    "status": "present",
    "check_in": "2026-08-18T09:15:00Z",
    "check_out": "2026-08-18T17:15:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000786",
        "attendance_id": "att1000000-0000-0000-0000-000000000393",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-18T09:15:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000787",
        "attendance_id": "att1000000-0000-0000-0000-000000000393",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-18T17:15:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000394",
    "employee_id": "e1000000-0000-0000-0000-000000000021",
    "date": "2026-08-19",
    "status": "present",
    "check_in": "2026-08-19T09:39:00Z",
    "check_out": "2026-08-19T17:39:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000788",
        "attendance_id": "att1000000-0000-0000-0000-000000000394",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-19T09:39:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000789",
        "attendance_id": "att1000000-0000-0000-0000-000000000394",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-19T17:39:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000395",
    "employee_id": "e1000000-0000-0000-0000-000000000021",
    "date": "2026-08-20",
    "status": "present",
    "check_in": "2026-08-20T09:35:00Z",
    "check_out": "2026-08-20T17:35:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000790",
        "attendance_id": "att1000000-0000-0000-0000-000000000395",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-20T09:35:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000791",
        "attendance_id": "att1000000-0000-0000-0000-000000000395",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-20T17:35:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000396",
    "employee_id": "e1000000-0000-0000-0000-000000000021",
    "date": "2026-08-21",
    "status": "present",
    "check_in": "2026-08-21T09:04:00Z",
    "check_out": "2026-08-21T17:04:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000792",
        "attendance_id": "att1000000-0000-0000-0000-000000000396",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-21T09:04:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000793",
        "attendance_id": "att1000000-0000-0000-0000-000000000396",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-21T17:04:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000397",
    "employee_id": "e1000000-0000-0000-0000-000000000021",
    "date": "2026-08-24",
    "status": "present",
    "check_in": "2026-08-24T09:03:00Z",
    "check_out": "2026-08-24T17:03:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000794",
        "attendance_id": "att1000000-0000-0000-0000-000000000397",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-24T09:03:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000795",
        "attendance_id": "att1000000-0000-0000-0000-000000000397",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-24T17:03:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000398",
    "employee_id": "e1000000-0000-0000-0000-000000000021",
    "date": "2026-08-25",
    "status": "present",
    "check_in": "2026-08-25T09:07:00Z",
    "check_out": "2026-08-25T17:07:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000796",
        "attendance_id": "att1000000-0000-0000-0000-000000000398",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-25T09:07:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000797",
        "attendance_id": "att1000000-0000-0000-0000-000000000398",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-25T17:07:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000399",
    "employee_id": "e1000000-0000-0000-0000-000000000021",
    "date": "2026-08-26",
    "status": "present",
    "check_in": "2026-08-26T09:21:00Z",
    "check_out": "2026-08-26T17:21:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000798",
        "attendance_id": "att1000000-0000-0000-0000-000000000399",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-26T09:21:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000799",
        "attendance_id": "att1000000-0000-0000-0000-000000000399",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-26T17:21:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000400",
    "employee_id": "e1000000-0000-0000-0000-000000000021",
    "date": "2026-08-27",
    "status": "present",
    "check_in": "2026-08-27T09:33:00Z",
    "check_out": "2026-08-27T17:33:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000800",
        "attendance_id": "att1000000-0000-0000-0000-000000000400",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-27T09:33:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000801",
        "attendance_id": "att1000000-0000-0000-0000-000000000400",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-27T17:33:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000401",
    "employee_id": "e1000000-0000-0000-0000-000000000021",
    "date": "2026-08-28",
    "status": "present",
    "check_in": "2026-08-28T09:38:00Z",
    "check_out": "2026-08-28T17:38:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000802",
        "attendance_id": "att1000000-0000-0000-0000-000000000401",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-28T09:38:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000803",
        "attendance_id": "att1000000-0000-0000-0000-000000000401",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-28T17:38:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000402",
    "employee_id": "e1000000-0000-0000-0000-000000000022",
    "date": "2026-08-03",
    "status": "present",
    "check_in": "2026-08-03T09:08:00Z",
    "check_out": "2026-08-03T17:08:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000804",
        "attendance_id": "att1000000-0000-0000-0000-000000000402",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-03T09:08:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000805",
        "attendance_id": "att1000000-0000-0000-0000-000000000402",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-03T17:08:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000403",
    "employee_id": "e1000000-0000-0000-0000-000000000022",
    "date": "2026-08-04",
    "status": "present",
    "check_in": "2026-08-04T09:10:00Z",
    "check_out": "2026-08-04T17:10:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000806",
        "attendance_id": "att1000000-0000-0000-0000-000000000403",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-04T09:10:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000807",
        "attendance_id": "att1000000-0000-0000-0000-000000000403",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-04T17:10:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000404",
    "employee_id": "e1000000-0000-0000-0000-000000000022",
    "date": "2026-08-06",
    "status": "present",
    "check_in": "2026-08-06T09:01:00Z",
    "check_out": "2026-08-06T17:01:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000808",
        "attendance_id": "att1000000-0000-0000-0000-000000000404",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-06T09:01:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000809",
        "attendance_id": "att1000000-0000-0000-0000-000000000404",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-06T17:01:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000405",
    "employee_id": "e1000000-0000-0000-0000-000000000022",
    "date": "2026-08-07",
    "status": "present",
    "check_in": "2026-08-07T09:35:00Z",
    "check_out": "2026-08-07T17:35:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000810",
        "attendance_id": "att1000000-0000-0000-0000-000000000405",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-07T09:35:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000811",
        "attendance_id": "att1000000-0000-0000-0000-000000000405",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-07T17:35:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000406",
    "employee_id": "e1000000-0000-0000-0000-000000000022",
    "date": "2026-08-10",
    "status": "present",
    "check_in": "2026-08-10T09:42:00Z",
    "check_out": "2026-08-10T17:42:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000812",
        "attendance_id": "att1000000-0000-0000-0000-000000000406",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-10T09:42:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000813",
        "attendance_id": "att1000000-0000-0000-0000-000000000406",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-10T17:42:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000407",
    "employee_id": "e1000000-0000-0000-0000-000000000022",
    "date": "2026-08-11",
    "status": "present",
    "check_in": "2026-08-11T09:00:00Z",
    "check_out": "2026-08-11T17:00:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000814",
        "attendance_id": "att1000000-0000-0000-0000-000000000407",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-11T09:00:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000815",
        "attendance_id": "att1000000-0000-0000-0000-000000000407",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-11T17:00:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000408",
    "employee_id": "e1000000-0000-0000-0000-000000000022",
    "date": "2026-08-12",
    "status": "present",
    "check_in": "2026-08-12T09:35:00Z",
    "check_out": "2026-08-12T17:35:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000816",
        "attendance_id": "att1000000-0000-0000-0000-000000000408",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-12T09:35:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000817",
        "attendance_id": "att1000000-0000-0000-0000-000000000408",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-12T17:35:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000409",
    "employee_id": "e1000000-0000-0000-0000-000000000022",
    "date": "2026-08-13",
    "status": "present",
    "check_in": "2026-08-13T09:28:00Z",
    "check_out": "2026-08-13T17:28:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000818",
        "attendance_id": "att1000000-0000-0000-0000-000000000409",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-13T09:28:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000819",
        "attendance_id": "att1000000-0000-0000-0000-000000000409",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-13T17:28:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000410",
    "employee_id": "e1000000-0000-0000-0000-000000000022",
    "date": "2026-08-14",
    "status": "present",
    "check_in": "2026-08-14T09:02:00Z",
    "check_out": "2026-08-14T17:02:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000820",
        "attendance_id": "att1000000-0000-0000-0000-000000000410",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-14T09:02:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000821",
        "attendance_id": "att1000000-0000-0000-0000-000000000410",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-14T17:02:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000411",
    "employee_id": "e1000000-0000-0000-0000-000000000022",
    "date": "2026-08-17",
    "status": "present",
    "check_in": "2026-08-17T09:40:00Z",
    "check_out": "2026-08-17T17:40:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000822",
        "attendance_id": "att1000000-0000-0000-0000-000000000411",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-17T09:40:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000823",
        "attendance_id": "att1000000-0000-0000-0000-000000000411",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-17T17:40:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000412",
    "employee_id": "e1000000-0000-0000-0000-000000000022",
    "date": "2026-08-18",
    "status": "present",
    "check_in": "2026-08-18T09:19:00Z",
    "check_out": "2026-08-18T17:19:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000824",
        "attendance_id": "att1000000-0000-0000-0000-000000000412",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-18T09:19:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000825",
        "attendance_id": "att1000000-0000-0000-0000-000000000412",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-18T17:19:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000413",
    "employee_id": "e1000000-0000-0000-0000-000000000022",
    "date": "2026-08-19",
    "status": "present",
    "check_in": "2026-08-19T09:14:00Z",
    "check_out": "2026-08-19T17:14:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000826",
        "attendance_id": "att1000000-0000-0000-0000-000000000413",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-19T09:14:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000827",
        "attendance_id": "att1000000-0000-0000-0000-000000000413",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-19T17:14:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000414",
    "employee_id": "e1000000-0000-0000-0000-000000000022",
    "date": "2026-08-20",
    "status": "present",
    "check_in": "2026-08-20T09:30:00Z",
    "check_out": "2026-08-20T17:30:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000828",
        "attendance_id": "att1000000-0000-0000-0000-000000000414",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-20T09:30:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000829",
        "attendance_id": "att1000000-0000-0000-0000-000000000414",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-20T17:30:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000415",
    "employee_id": "e1000000-0000-0000-0000-000000000022",
    "date": "2026-08-21",
    "status": "present",
    "check_in": "2026-08-21T09:22:00Z",
    "check_out": "2026-08-21T17:22:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000830",
        "attendance_id": "att1000000-0000-0000-0000-000000000415",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-21T09:22:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000831",
        "attendance_id": "att1000000-0000-0000-0000-000000000415",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-21T17:22:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000416",
    "employee_id": "e1000000-0000-0000-0000-000000000022",
    "date": "2026-08-24",
    "status": "present",
    "check_in": "2026-08-24T09:35:00Z",
    "check_out": "2026-08-24T17:35:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000832",
        "attendance_id": "att1000000-0000-0000-0000-000000000416",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-24T09:35:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000833",
        "attendance_id": "att1000000-0000-0000-0000-000000000416",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-24T17:35:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000417",
    "employee_id": "e1000000-0000-0000-0000-000000000022",
    "date": "2026-08-25",
    "status": "present",
    "check_in": "2026-08-25T09:42:00Z",
    "check_out": "2026-08-25T17:42:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000834",
        "attendance_id": "att1000000-0000-0000-0000-000000000417",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-25T09:42:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000835",
        "attendance_id": "att1000000-0000-0000-0000-000000000417",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-25T17:42:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000418",
    "employee_id": "e1000000-0000-0000-0000-000000000022",
    "date": "2026-08-26",
    "status": "present",
    "check_in": "2026-08-26T09:09:00Z",
    "check_out": "2026-08-26T17:09:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000836",
        "attendance_id": "att1000000-0000-0000-0000-000000000418",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-26T09:09:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000837",
        "attendance_id": "att1000000-0000-0000-0000-000000000418",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-26T17:09:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000419",
    "employee_id": "e1000000-0000-0000-0000-000000000022",
    "date": "2026-08-27",
    "status": "present",
    "check_in": "2026-08-27T09:33:00Z",
    "check_out": "2026-08-27T17:33:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000838",
        "attendance_id": "att1000000-0000-0000-0000-000000000419",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-27T09:33:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000839",
        "attendance_id": "att1000000-0000-0000-0000-000000000419",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-27T17:33:00Z"
      }
    ]
  },
  {
    "id": "att1000000-0000-0000-0000-000000000420",
    "employee_id": "e1000000-0000-0000-0000-000000000022",
    "date": "2026-08-28",
    "status": "present",
    "check_in": "2026-08-28T09:34:00Z",
    "check_out": "2026-08-28T17:34:00Z",
    "total_minutes": 480,
    "break_minutes": 60,
    "overtime_minutes": 0,
    "events": [
      {
        "id": "ev1000000-0000-0000-0000-000000000840",
        "attendance_id": "att1000000-0000-0000-0000-000000000420",
        "event_type": "CHECK_IN",
        "timestamp": "2026-08-28T09:34:00Z"
      },
      {
        "id": "ev1000000-0000-0000-0000-000000000841",
        "attendance_id": "att1000000-0000-0000-0000-000000000420",
        "event_type": "CHECK_OUT",
        "timestamp": "2026-08-28T17:34:00Z"
      }
    ]
  }
];
export const INITIAL_PAYROLL: PayrollRecord[] = ([
  {
    "id": "pay1000000-0000-0000-0000-000000000001",
    "employee_id": "e1000000-0000-0000-0000-000000000001",
    "pay_period_month": 7,
    "pay_period_year": 2026,
    "base_salary": 12000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 11500,
    "status": "paid",
    "payment_date": "2026-07-31"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000002",
    "employee_id": "e1000000-0000-0000-0000-000000000001",
    "pay_period_month": 8,
    "pay_period_year": 2026,
    "base_salary": 12000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 11500,
    "status": "processing"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000003",
    "employee_id": "e1000000-0000-0000-0000-000000000002",
    "pay_period_month": 7,
    "pay_period_year": 2026,
    "base_salary": 12000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 11500,
    "status": "paid",
    "payment_date": "2026-07-31"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000004",
    "employee_id": "e1000000-0000-0000-0000-000000000002",
    "pay_period_month": 8,
    "pay_period_year": 2026,
    "base_salary": 12000,
    "deductions": 500,
    "bonuses": 1800,
    "net_salary": 13300,
    "status": "processing"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000005",
    "employee_id": "e1000000-0000-0000-0000-000000000003",
    "pay_period_month": 7,
    "pay_period_year": 2026,
    "base_salary": 15000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 14500,
    "status": "paid",
    "payment_date": "2026-07-31"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000006",
    "employee_id": "e1000000-0000-0000-0000-000000000003",
    "pay_period_month": 8,
    "pay_period_year": 2026,
    "base_salary": 15000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 14500,
    "status": "processing"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000007",
    "employee_id": "e1000000-0000-0000-0000-000000000004",
    "pay_period_month": 7,
    "pay_period_year": 2026,
    "base_salary": 15000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 14500,
    "status": "paid",
    "payment_date": "2026-07-31"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000008",
    "employee_id": "e1000000-0000-0000-0000-000000000004",
    "pay_period_month": 8,
    "pay_period_year": 2026,
    "base_salary": 15000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 14500,
    "status": "processing"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000009",
    "employee_id": "e1000000-0000-0000-0000-000000000005",
    "pay_period_month": 7,
    "pay_period_year": 2026,
    "base_salary": 15000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 14500,
    "status": "paid",
    "payment_date": "2026-07-31"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000010",
    "employee_id": "e1000000-0000-0000-0000-000000000005",
    "pay_period_month": 8,
    "pay_period_year": 2026,
    "base_salary": 15000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 14500,
    "status": "processing"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000011",
    "employee_id": "e1000000-0000-0000-0000-000000000006",
    "pay_period_month": 7,
    "pay_period_year": 2026,
    "base_salary": 8000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 7500,
    "status": "paid",
    "payment_date": "2026-07-31"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000012",
    "employee_id": "e1000000-0000-0000-0000-000000000006",
    "pay_period_month": 8,
    "pay_period_year": 2026,
    "base_salary": 8000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 7500,
    "status": "processing"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000013",
    "employee_id": "e1000000-0000-0000-0000-000000000007",
    "pay_period_month": 7,
    "pay_period_year": 2026,
    "base_salary": 8000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 7500,
    "status": "paid",
    "payment_date": "2026-07-31"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000014",
    "employee_id": "e1000000-0000-0000-0000-000000000007",
    "pay_period_month": 8,
    "pay_period_year": 2026,
    "base_salary": 8000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 7500,
    "status": "processing"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000015",
    "employee_id": "e1000000-0000-0000-0000-000000000008",
    "pay_period_month": 7,
    "pay_period_year": 2026,
    "base_salary": 8000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 7500,
    "status": "paid",
    "payment_date": "2026-07-31"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000016",
    "employee_id": "e1000000-0000-0000-0000-000000000008",
    "pay_period_month": 8,
    "pay_period_year": 2026,
    "base_salary": 8000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 7500,
    "status": "processing"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000017",
    "employee_id": "e1000000-0000-0000-0000-000000000009",
    "pay_period_month": 7,
    "pay_period_year": 2026,
    "base_salary": 8000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 7500,
    "status": "paid",
    "payment_date": "2026-07-31"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000018",
    "employee_id": "e1000000-0000-0000-0000-000000000009",
    "pay_period_month": 8,
    "pay_period_year": 2026,
    "base_salary": 8000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 7500,
    "status": "processing"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000019",
    "employee_id": "e1000000-0000-0000-0000-000000000010",
    "pay_period_month": 7,
    "pay_period_year": 2026,
    "base_salary": 8000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 7500,
    "status": "paid",
    "payment_date": "2026-07-31"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000020",
    "employee_id": "e1000000-0000-0000-0000-000000000010",
    "pay_period_month": 8,
    "pay_period_year": 2026,
    "base_salary": 8000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 7500,
    "status": "processing"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000021",
    "employee_id": "e1000000-0000-0000-0000-000000000011",
    "pay_period_month": 7,
    "pay_period_year": 2026,
    "base_salary": 8000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 7500,
    "status": "paid",
    "payment_date": "2026-07-31"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000022",
    "employee_id": "e1000000-0000-0000-0000-000000000011",
    "pay_period_month": 8,
    "pay_period_year": 2026,
    "base_salary": 8000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 7500,
    "status": "processing"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000023",
    "employee_id": "e1000000-0000-0000-0000-000000000012",
    "pay_period_month": 7,
    "pay_period_year": 2026,
    "base_salary": 15000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 14500,
    "status": "paid",
    "payment_date": "2026-07-31"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000024",
    "employee_id": "e1000000-0000-0000-0000-000000000012",
    "pay_period_month": 8,
    "pay_period_year": 2026,
    "base_salary": 15000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 14500,
    "status": "processing"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000025",
    "employee_id": "e1000000-0000-0000-0000-000000000013",
    "pay_period_month": 7,
    "pay_period_year": 2026,
    "base_salary": 8000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 7500,
    "status": "paid",
    "payment_date": "2026-07-31"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000026",
    "employee_id": "e1000000-0000-0000-0000-000000000013",
    "pay_period_month": 8,
    "pay_period_year": 2026,
    "base_salary": 8000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 7500,
    "status": "processing"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000027",
    "employee_id": "e1000000-0000-0000-0000-000000000014",
    "pay_period_month": 7,
    "pay_period_year": 2026,
    "base_salary": 8000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 7500,
    "status": "paid",
    "payment_date": "2026-07-31"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000028",
    "employee_id": "e1000000-0000-0000-0000-000000000014",
    "pay_period_month": 8,
    "pay_period_year": 2026,
    "base_salary": 8000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 7500,
    "status": "processing"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000029",
    "employee_id": "e1000000-0000-0000-0000-000000000015",
    "pay_period_month": 7,
    "pay_period_year": 2026,
    "base_salary": 8000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 7500,
    "status": "paid",
    "payment_date": "2026-07-31"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000030",
    "employee_id": "e1000000-0000-0000-0000-000000000015",
    "pay_period_month": 8,
    "pay_period_year": 2026,
    "base_salary": 8000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 7500,
    "status": "processing"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000031",
    "employee_id": "e1000000-0000-0000-0000-000000000016",
    "pay_period_month": 7,
    "pay_period_year": 2026,
    "base_salary": 12000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 11500,
    "status": "paid",
    "payment_date": "2026-07-31"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000032",
    "employee_id": "e1000000-0000-0000-0000-000000000016",
    "pay_period_month": 8,
    "pay_period_year": 2026,
    "base_salary": 12000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 11500,
    "status": "processing"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000033",
    "employee_id": "e1000000-0000-0000-0000-000000000017",
    "pay_period_month": 7,
    "pay_period_year": 2026,
    "base_salary": 15000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 14500,
    "status": "paid",
    "payment_date": "2026-07-31"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000034",
    "employee_id": "e1000000-0000-0000-0000-000000000017",
    "pay_period_month": 8,
    "pay_period_year": 2026,
    "base_salary": 15000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 14500,
    "status": "processing"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000035",
    "employee_id": "e1000000-0000-0000-0000-000000000018",
    "pay_period_month": 7,
    "pay_period_year": 2026,
    "base_salary": 8000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 7500,
    "status": "paid",
    "payment_date": "2026-07-31"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000036",
    "employee_id": "e1000000-0000-0000-0000-000000000018",
    "pay_period_month": 8,
    "pay_period_year": 2026,
    "base_salary": 8000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 7500,
    "status": "processing"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000037",
    "employee_id": "e1000000-0000-0000-0000-000000000019",
    "pay_period_month": 7,
    "pay_period_year": 2026,
    "base_salary": 8000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 7500,
    "status": "paid",
    "payment_date": "2026-07-31"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000038",
    "employee_id": "e1000000-0000-0000-0000-000000000019",
    "pay_period_month": 8,
    "pay_period_year": 2026,
    "base_salary": 8000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 7500,
    "status": "processing"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000039",
    "employee_id": "e1000000-0000-0000-0000-000000000020",
    "pay_period_month": 7,
    "pay_period_year": 2026,
    "base_salary": 12000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 11500,
    "status": "paid",
    "payment_date": "2026-07-31"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000040",
    "employee_id": "e1000000-0000-0000-0000-000000000020",
    "pay_period_month": 8,
    "pay_period_year": 2026,
    "base_salary": 12000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 11500,
    "status": "processing"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000041",
    "employee_id": "e1000000-0000-0000-0000-000000000021",
    "pay_period_month": 7,
    "pay_period_year": 2026,
    "base_salary": 15000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 14500,
    "status": "paid",
    "payment_date": "2026-07-31"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000042",
    "employee_id": "e1000000-0000-0000-0000-000000000021",
    "pay_period_month": 8,
    "pay_period_year": 2026,
    "base_salary": 15000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 14500,
    "status": "processing"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000043",
    "employee_id": "e1000000-0000-0000-0000-000000000022",
    "pay_period_month": 7,
    "pay_period_year": 2026,
    "base_salary": 8000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 7500,
    "status": "paid",
    "payment_date": "2026-07-31"
  },
  {
    "id": "pay1000000-0000-0000-0000-000000000044",
    "employee_id": "e1000000-0000-0000-0000-000000000022",
    "pay_period_month": 8,
    "pay_period_year": 2026,
    "base_salary": 8000,
    "deductions": 500,
    "bonuses": 0,
    "net_salary": 7500,
    "status": "processing"
  }
] as any).map((p: any) => {
  const emp = INITIAL_EMPLOYEES.find(e => e.id === p.employee_id);
  return {
    ...p,
    employee: emp ? { ...emp, profile: INITIAL_PROFILES.find(pr => pr.id === emp.profile_id) } : undefined
  }
});

export const INITIAL_NOTIFICATIONS: NotificationItem[] = [];
export const INITIAL_AUDIT_LOGS: AuditLog[] = [];
export const INITIAL_SIGNALS: WorkforceSignal[] = [];
