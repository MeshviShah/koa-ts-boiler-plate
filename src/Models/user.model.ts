import { Sequelize, DataTypes, Model } from 'sequelize';
import { sequelizeConnection } from '../Config';
import { IUser, IUserCreation } from '../Types';
import { UUID } from 'crypto';

class User extends Model<IUser, IUserCreation> implements IUser {
  public user_id!: UUID;
  public role_name!: string;
  public full_name!: string;
  public email!: string;
  public password!: string;
  public phone!: string;
  public media_credit!: number;
  public created_at!: Date;
  public created_by!: string;
  public updated_at!: Date;
  public updated_by!: string;
  public deleted_at!: Date | null;

}

User.init(
  {
    user_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    role_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    media_credit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      // defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updated_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize: sequelizeConnection,
    tableName: 'users',
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
  }
);
 //User.sync();
export { User };
