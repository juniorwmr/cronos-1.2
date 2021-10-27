import { Router, Request, Response } from 'express';
import { authenticateEmployeeController } from '@useCases/AuthenticateEmployee';
import { refreshTokenUserController } from '@useCases/RefreshTokenUser';

const authRoutes = Router();

authRoutes
  .post('/employee', (request: Request, response: Response) =>
    authenticateEmployeeController.handle(request, response),
  )

  .post('/refresh_token', (request: Request, response: Response) =>
    refreshTokenUserController.handle(request, response),
  );

export { authRoutes };
