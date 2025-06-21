import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { DATABASE_URL } from '@/utils/constants';

const sql = neon(DATABASE_URL);
export const db = drizzle({ client: sql });
