import Koa from 'koa';
import { authRoutes, userRoutes } from '../Routes';

export const routes = (app: Koa) => {
  app.use(userRoutes.routes());
  app.use(authRoutes.routes());
};
