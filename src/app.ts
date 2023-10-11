import Koa from 'koa';
const app = new Koa();
import bodyParser from 'koa-bodyparser';
import { sequelizeConnection } from './Config';
import { routes } from './Routes/router';
import { errorHandler } from './Helper';
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
app.use(errorHandler);
app.use(bodyParser());
routes(app);

sequelizeConnection
  .authenticate()
  .then(() => {
    console.log('✔ [SEQUELIZE] ORM connected successfully...!');
  })
  .catch((err: Error) => {
    console.error('Unable to connect to the database:', err);
  });
