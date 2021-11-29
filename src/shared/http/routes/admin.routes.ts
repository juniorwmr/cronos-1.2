import { Router, Request, Response, NextFunction } from 'express';

import { authentication } from '@middlewares/authentication';

import { createEmployeeController } from '@useCases/CreateEmployee';
import { listEmployeesController } from '@useCases/ListEmployees';
import { findAdminController } from '@useCases/FindAdmin';
import { listContractsController } from '@useCases/ListContracts';
import { authenticateAdminController } from '@useCases/AuthenticateAdmin';
import EmployeeValidation from '@helpers/validation/EmployeeValidation';
import { createContractController } from '@useCases/CreateContract';
import ContractValidation from '@helpers/validation/ContractValidation';

const adminsRoutes = Router();

adminsRoutes
  .post('/auth', (request: Request, response: Response) =>
    authenticateAdminController.handle(request, response),
  )
  .get('/contracts', (request: Request, response: Response) =>
    listContractsController.handle(request, response),
  )
  .get(
    '/',
    (request: Request, response: Response, next: NextFunction) =>
      authentication.authorizeAdmin(request, response, next),
    (request: Request, response: Response) =>
      findAdminController.handle(request, response),
  )
  .post(
    '/employees',
    EmployeeValidation.create(),
    (request: Request, response: Response) =>
      createEmployeeController.handle(request, response),
  )
  .get('/employees', (request: Request, response: Response) =>
    listEmployeesController.handle(request, response),
  )
  .post(
    '/contracts',
    ContractValidation.create(),
    (request: Request, response: Response) =>
      createContractController.handle(request, response),
  );

export { adminsRoutes };
