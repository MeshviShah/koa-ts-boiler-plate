import { IUser, IUserCreation } from '../Types';
import { User } from '../Models';
import { Op, Transaction, WhereOptions } from 'sequelize';
import { UUID } from 'crypto';

export const createUserService = async (
  data: IUserCreation,
  transaction: Transaction
): Promise<User> => {
  const user = await User.create(data, { transaction });
  return user;
};

export const findUserByEmailService = async (
  email: string
): Promise<User | null> => {
  const user = await User.findOne({ where: { email } });
  return user;
};

export const findUserByIdService = async (id: UUID): Promise<User | null> => {
  const user = await User.findByPk(id);
  return user;
};

export const getUserListService = async(): Promise<any> => {
  const user = await User.findAndCountAll();
  return user;
}