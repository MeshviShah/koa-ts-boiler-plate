
import Router from 'koa-router';
import { createUserController } from '../Controllers';

const userRoutes = new Router({ prefix: '/user' });

userRoutes.post('/create-user', createUserController);

export { userRoutes };
