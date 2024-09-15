import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jrgaxqzfwovmnfuygoqn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpyZ2F4cXpmd292bW5mdXlnb3FuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYyNTEzNDIsImV4cCI6MjA0MTgyNzM0Mn0.llCS_pU3YnRY9HG7DUXVem63kojvw0vr8lezwEIwCEo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
