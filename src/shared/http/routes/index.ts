import { Request, NextFunction, Response, Router } from 'express';

import { authentication } from '@middlewares/authentication';

import { authRoutes } from './auth.routes';
import { employeesRoutes } from './employees.routes';
const routes = Router();

routes.get('/', (req, res) => res.send('Hello World!'));
// routes.use('/auth', authRoutes);
routes.use('/employees', employeesRoutes);

// routes.use(
//   '/companies',
//   async (request: Request, response: Response, next: NextFunction) =>
//     authentication.authorizeEmployee(request, response, next),
//   companiesRoutes,
// );

export { routes };
