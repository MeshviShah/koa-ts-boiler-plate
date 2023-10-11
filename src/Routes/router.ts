import Koa from 'koa';
import { userRoutes } from '../Routes';

export const routes = (app: Koa) => {
  app.use(userRoutes.routes());
};
