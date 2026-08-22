# DAYFLOW — The Operating System for the Workday

Dayflow is a modern, enterprise-grade Human Resource Management System (HRMS) connecting People, Presence, Time Off, Payroll, Decisions, Activity, Reports, and Workforce Intelligence. Built with React and Vite.

## ✨ Key Features
- **Role-based Access Control:** Distinct views and actions for Employees, HR Managers, and Admins.
- **Workday Tracking:** Check-in, check-out, and break tracking with real-time UI updates.
- **Absence Management:** Full lifecycle leave requests and approval workflows.
- **Workforce Intelligence:** Operational signals and pulse matrices for HR insights.
- **Fully Responsive:** Seamlessly adapts to desktop, tablet, and mobile devices with interactive drawer navigation.
- **Robust UX:** Graceful error handling (Error Boundaries) and skeleton loading states for smooth data fetching.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Run automated Vitest suite
npm test

# 4. Build production bundle
npm run build
```

## 🧪 Demo Data & Mock Engine

Dayflow includes a robust, in-memory client-side mock engine (`src/mock/mockEngine.ts`) and realistic seeded data for instant demonstration without a backend.
- Over 20+ realistic employee profiles with diverse hierarchies.
- Populated historical attendance, overlapping leave requests, and payroll records.
- Toggle between demo personas (Employee, HR Manager, Admin) seamlessly using the **Demo Mode** in the Top Bar.

## 🛡️ Database & RLS Migration

While currently running with a mock engine, database migrations and Row Level Security policies for production deployment are located in:
- `supabase/migrations/001_schema_and_rls.sql`
- `supabase/seed.sql` (mirrors the `mockData.ts` seed)

## 📋 Requirements Traceability

The complete requirements mapping matrix is located in:
- `docs/requirements/traceability.md`
