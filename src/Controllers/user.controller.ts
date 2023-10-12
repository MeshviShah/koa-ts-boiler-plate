import { Context } from 'koa';
import {
  createUserService,
  findUserByEmailService,
  findUserByIdService,
  getUserListService,
} from '../Services';
import { sequelizeConnection } from '../Config';
import { response } from '../Interceptor';
import { hashPassword } from '../utils';
import { messages } from '../Messages';

export const createUserController = async (ctx: Context): Promise<void> => {
  const { email, full_name, role_name, media_credit, password, phone } = ctx
    .request.body as any;

  return await sequelizeConnection.transaction(async (transaction) => {
    const findUser = await findUserByEmailService(email);
    if (findUser) {
      return response(ctx, {
        statusCode: 400,
        message: messages.user.USER_ALREADY_EXIST,
      });
    }
    const hash = await hashPassword(password);
    const user = await createUserService(
      {
        email,
        password: hash,
        phone,
        full_name,
        role_name,
        media_credit,
      },
      transaction
    );

    return response(ctx, {
      statusCode: 201,
      message: messages.general.SUCCESS,
      data: user,
    });
  });
};

export const getUserByIDController = async (ctx: Context): Promise<any> => {
  const id = ctx.params.id;
  const user = await findUserByIdService(id);
  return user;
};

export const getUserListController = async (ctx: Context): Promise<any> => {
  const user = await getUserListService();
  return user;
};
