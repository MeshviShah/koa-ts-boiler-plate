import { findUserByEmailService } from '../Services';
import { sequelizeConnection } from '../Config';
import { Context } from 'koa';
import { response } from '../Interceptor';
import { messages } from '../Messages';
import { comparePassword } from '../utils';
import Jwt from 'jsonwebtoken';
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || '';

export const login = async (ctx: Context): Promise<void> => {
  const { email, password } = ctx.request.body as any;

    const findUser = await findUserByEmailService(email);
    if (!findUser) {
      return response(ctx, {
        statusCode: 400,
        message: messages.user.NO_USER_FOUND,
      });
    }
    const passwordChecker = await comparePassword( password,findUser.password);
    if (!passwordChecker) {
      return response(ctx, {
        statusCode: 400,
        message: messages.general.UNAUTHORIZED,
      });
    }
    const payload = { user_id: findUser.user_id };
    const access_token = Jwt.sign({ payload }, accessTokenSecret, {
      expiresIn: '24h',
    });
    return response(ctx, {
      statusCode: 200,
      message: messages.general.SUCCESS,
      data: { access_token },
    });
  }

