import { Router, Request, Response } from 'express';
import { authenticateEmployeeController } from '@useCases/AuthenticateEmployee';

const employeesRoutes = Router();

employeesRoutes.post('/auth', (request: Request, response: Response) =>
  authenticateEmployeeController.handle(request, response),
);

export { employeesRoutes };
