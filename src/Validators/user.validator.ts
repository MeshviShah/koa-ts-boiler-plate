import { messages } from '../Messages';
import { Context } from 'koa';

export const fullNameValidator = async (data: any): Promise<boolean> => {
  const { full_name } = data;
  if (!full_name || typeof full_name !== 'string') {
    return false;
  }
  return true;
};

export const emailValidator = async (data: any): Promise<boolean> => {
  const { email } = data;
  if (!email || typeof email !== 'string') {
    return false;
  }
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

  if (!emailRegex.test(email)) {
    return false;
  }
  return true;
};

export const phoneNumberValidator = async (
  ctx: Context,
  next: () => Promise<any>
) => {
  const phone = ctx.request.body;
  if (!phone || typeof phone !== 'string') {
    ctx.status = 400;
    ctx.body = { error: 'Invalid phone' };
    return;
  }
  await next();
};

export const passwordValidator = async (
  ctx: Context,
  next: () => Promise<any>
) => {
  const password = ctx.request.body;
  if (!password || typeof password !== 'string') {
    ctx.status = 400;
    ctx.body = { error: 'Invalid password' };
    return;
  }
  await next();
};

export const roleNameValidator = async (
  ctx: Context,
  next: () => Promise<any>
) => {
  const role_name = ctx.request.body;
  if (!role_name || typeof role_name !== 'string') {
    ctx.status = 400;
    ctx.body = { error: 'Invalid role_name' };
    return;
  }
  await next();
};

export const MediaCreditValidator = async (
  ctx: Context,
  next: () => Promise<any>
) => {
  const media_credit = ctx.request.body;
  if (!media_credit || typeof media_credit !== 'string') {
    ctx.status = 400;
    ctx.body = { error: 'Invalid full_name' };
    return;
  }
  await next();
};

export const validation = (validationFunctions: Array<any>) => {
  return async (ctx: Context, next: () => Promise<void>) => {
    const data = ctx.request.body;

    for (const fn of validationFunctions) {
      const validationResult = await fn(data);

      if (!validationResult) {
        ctx.status = 400;
        ctx.body = { error: messages.general.VALIDATION_ERROR };
        return;
      }
    }
    await next();
  };
};
