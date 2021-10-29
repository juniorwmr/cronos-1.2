import { Request, NextFunction, Response, Router } from 'express';

import { authentication } from '@middlewares/authentication';

import { authRoutes } from './auth.routes';
import { employeesRoutes } from './employees.routes';
import { contractsRoutes } from './contracts.routes';
const routes = Router();

routes.get('/', (req, res) => res.send('Hello World!'));
routes.use('/auth', authRoutes);
routes.use('/employees', employeesRoutes);
routes.use('/contracts', contractsRoutes);

export { routes };
