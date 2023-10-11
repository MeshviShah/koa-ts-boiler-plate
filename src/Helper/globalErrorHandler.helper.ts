import { Context } from 'koa';

export const errorHandler = async (ctx: Context, next: () => Promise<any>) => {
  try {
    await next();
  } catch (error: any) {
    ctx.status = error.status || 500;
    ctx.body = { error: error.message };
  }
};


 