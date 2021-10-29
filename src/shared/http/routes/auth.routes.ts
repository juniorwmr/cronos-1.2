import { Router, Request, Response } from 'express';
import { authenticateEmployeeController } from '@useCases/AuthenticateEmployee';

const authRoutes = Router();

authRoutes.post('/employee', (request: Request, response: Response) =>
  authenticateEmployeeController.handle(request, response),
);

export { authRoutes };
