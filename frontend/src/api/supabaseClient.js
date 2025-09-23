import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bakrfhzqtypypwbgqkou.supabase.co"; // Supabase -> Project Settings -> API
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJha3JmaHpxdHlweXB3Ymdxa291Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg2MjgyMDEsImV4cCI6MjA3NDIwNDIwMX0._M4B0lqiHoj9A1jWD7axeEhfdZygzXh8ZwYY40jX49Y"; // mindig a public anon key, ne a service role!

export const supabase = createClient(supabaseUrl, supabaseKey);
