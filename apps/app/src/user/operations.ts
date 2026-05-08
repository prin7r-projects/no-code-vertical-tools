import { type GetUser } from 'wasp/server/operations';
import { User } from '@prisma/client';

export const getUser: GetUser<void, User | null> = async (_args, context) => {
  if (!context.user) return null;
  return context.user;
};
