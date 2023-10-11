import { UUID } from 'crypto';
import { Optional } from 'sequelize';

export interface IUser {
  user_id: UUID;
  full_name?: string;
  role_name: string;
  email: string;
  password: string;
  phone: string;
  media_credit: number;
  created_at: Date;
  created_by: string;
  updated_at: Date;
  updated_by: string;
  deleted_at: Date | null;
}

export interface IUserCreation
  extends Optional<
    IUser,
    | 'user_id'
    | 'phone'
    | 'created_at'
    | 'created_by'
    | 'updated_at'
    | 'updated_by'
    | 'deleted_at'
  > {
  // confirmPassword: string;
}
