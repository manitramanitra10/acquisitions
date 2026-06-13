import 'dotenv/config';

import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';

export const sql = neon(process.env.DATABASE_URL, neonConfig());

export const db = drizzle(sql);
