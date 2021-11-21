import { Router, Request, Response } from 'express';

import { authentication } from '@middlewares/authentication';

import { createEmployeeController } from '@useCases/CreateEmployee';
import { authenticateAdminController } from '@useCases/AuthenticateAdmin';
import EmployeeValidation from '@helpers/validation/EmployeeValidation';
import { createContractController } from '@useCases/CreateContract';
import ContractValidation from '@helpers/validation/ContractValidation';

const adminsRoutes = Router();

adminsRoutes
  .post('/auth', (request: Request, response: Response) =>
    authenticateAdminController.handle(request, response),
  )
  .post(
    '/employees',
    EmployeeValidation.create(),
    (request: Request, response: Response) =>
      createEmployeeController.handle(request, response),
  )
  .post(
    '/contracts',
    ContractValidation.create(),
    (request: Request, response: Response) =>
      createContractController.handle(request, response),
  );

export { adminsRoutes };
