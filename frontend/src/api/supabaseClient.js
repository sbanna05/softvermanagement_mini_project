import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; // Supabase -> Project Settings -> API
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY; // mindig a public anon key, ne a service role!

export const supabase = createClient(supabaseUrl, supabaseKey);
