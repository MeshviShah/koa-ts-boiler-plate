import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();


export const dbConfig = {
  host: process.env.HOST || '', 
  port: process.env.DBPORT || '', 
  userName: process.env.USER || '', 
  password: process.env.PASSWORD || '', 
  database: process.env.DATABASE || '', 
}; 

export const sequelizeConnection = new Sequelize(
  dbConfig.database,
  dbConfig.userName,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    logging: false,
    dialectOptions: {
      keepAlive: true,
    },
  }
);


