
import Router from 'koa-router';
import { login } from '../Controllers';


const authRoutes = new Router({ prefix: '/auth' });

authRoutes.post('/login',
login);


export { authRoutes };
