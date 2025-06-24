import { createAuthClient } from 'better-auth/react';

import { BETTER_AUTH_URL } from '@/utils/constants';

export const authClient = createAuthClient({
  baseURL: BETTER_AUTH_URL,
});

export const { signOut, getSession, signIn, signUp, useSession } = createAuthClient({
  baseURL: BETTER_AUTH_URL,
});
