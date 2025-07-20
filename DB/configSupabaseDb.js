import supa, { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

config()
/**
 * @type {supa.SupabaseClient | null}
 */
const supabase = createClient(process.env.DB_URL, process.env.DB_PUBLIC_SECRET)
export { supabase}