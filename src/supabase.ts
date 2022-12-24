import { createClient } from '@supabase/supabase-js';
import { SUPABASE_SCHEMA } from './constants';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_PUBLIC_KEY!,
  {
    db: { schema: SUPABASE_SCHEMA },
  },
);

export { supabase };
