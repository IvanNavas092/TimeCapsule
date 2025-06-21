import { betterAuth } from 'better-auth';
import { account, session, user, verification } from '@/db/schema';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '@/db';

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema: {
      user,
      account,
      session,
      verification,
    },
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      clientId: 'process.env.GITHUB_CLIENT_ID' as string,
      clientSecret: 'process.env.GITHUB_CLIENT_SECRET' as string,
    },
  },
});
