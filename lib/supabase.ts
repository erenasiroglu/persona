import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://plpmcztnwpeqzkczoxon.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBscG1jenRud3BlcXprY3pveG9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI3MzU4MDYsImV4cCI6MjA0ODMxMTgwNn0.VM-ycJLeL7CIxWRn14UnQsVfVGcNhPoBAXmShBpLkGI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey) 