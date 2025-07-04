// lib/auth.ts
import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import prisma from './prismadb';

export const auth = betterAuth({
    emailAndPassword: {
    enabled: true,
  },

  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
});