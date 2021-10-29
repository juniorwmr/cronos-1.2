import { Router, Request, Response } from 'express';
import { createUserController } from '@useCases/CreateEmployee';
import EmployeeValidation from '@helpers/validation/EmployeeValidation';

const employeesRoutes = Router();

employeesRoutes.post(
  '/',
  EmployeeValidation.create(),
  (request: Request, response: Response) =>
    createUserController.handle(request, response),
);

export { employeesRoutes };
