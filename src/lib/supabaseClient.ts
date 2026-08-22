import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://dayflow-demo.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.demo';

export const isMockMode = import.meta.env.VITE_USE_MOCK_FALLBACK === 'true' || supabaseUrl.includes('demo');

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
