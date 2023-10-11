import { Context } from 'koa';
import { IReturnResponse } from '../Types';

const response = async (
  ctx: Context,
  returnResponse: IReturnResponse
): Promise<void> => {
  const { statusCode, message, data, count, error } = returnResponse;
  ctx.status = statusCode;
  ctx.body = { statusCode, message, data, count, error };
};

export { response };
