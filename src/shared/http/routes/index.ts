import { Router } from 'express';

import { employeesRoutes } from './employees.routes';
import { adminsRoutes } from './admin.routes';
const routes = Router();

routes.get('/', (request, response) => response.send('Hello World!'));
routes.use('/admin', adminsRoutes);
routes.use('/employee', employeesRoutes);

export { routes };
