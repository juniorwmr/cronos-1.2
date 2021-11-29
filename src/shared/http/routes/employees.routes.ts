import { Router, Request, Response, NextFunction } from 'express';
import { authenticateEmployeeController } from '@useCases/AuthenticateEmployee';
import { authentication } from '@middlewares/authentication';
import { findEmployeeController } from '@useCases/FindEmployee';
import { listContractsController } from '@useCases/ListContracts';

const employeesRoutes = Router();

employeesRoutes
  .post('/auth', (request: Request, response: Response) =>
    authenticateEmployeeController.handle(request, response),
  )
  .get(
    '/contracts',
    (request: Request, response: Response, next: NextFunction) =>
      authentication.authorizeEmployee(request, response, next),
    (request: Request, response: Response) =>
      listContractsController.handle(request, response),
  )
  .get(
    '/',
    (request: Request, response: Response, next: NextFunction) =>
      authentication.authorizeEmployee(request, response, next),
    (request: Request, response: Response) =>
      findEmployeeController.handle(request, response),
  );

export { employeesRoutes };
