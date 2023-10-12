
import Router from 'koa-router';
import { createUserController, getUserByIDController } from '../Controllers';
import { emailValidator, fullNameValidator, phoneNumberValidator, validation } from '../Validators';

const userRoutes = new Router({ prefix: '/user' });

userRoutes.post('/create-user',
validation([emailValidator]),
createUserController);
userRoutes.post('/', createUserController);
userRoutes.post('/get-by-id/:id', getUserByIDController);

export { userRoutes };
