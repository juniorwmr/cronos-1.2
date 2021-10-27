import { AppError } from '@shared/errors/AppError';
import { Request, Response, NextFunction } from 'express';
import { ITokenValidation } from '@helpers/auth/ITokenValidation';
import { ICryptographyJWT } from '@shared/cryptography/ICryptography';
import { IEmployeeRepository } from '@repositories/IEmployeeRepository';
import { IClientRepository } from '@repositories/IClientRepository';

export class Authentication {
  constructor(
    private employeeRepository: IEmployeeRepository,
    private clientRepository: IClientRepository,
    private cryptographyJWT: ICryptographyJWT,
    private validateToken: ITokenValidation,
  ) {}

  async authorizeEmployee(
    request: Request,
    _response: Response,
    next: NextFunction,
  ): Promise<void> {
    const token = this.validateToken.validate(request);

    try {
      const payload = await this.cryptographyJWT.decrypt(token);
      const employee = await this.employeeRepository.findById(payload.user.id);

      if (employee?.type !== 'Employee') {
        throw new AppError("You don't have permission.", 401);
      }

      request.user = payload as any;

      next();
    } catch (error) {
      throw new AppError('Invalid token.', 401);
    }
  }

  async authorizeClient(
    request: Request,
    _response: Response,
    next: NextFunction,
  ): Promise<void> {
    const token = this.validateToken.validate(request);

    try {
      const payload = await this.cryptographyJWT.decrypt(token);
      const client = await this.clientRepository.findById(payload.user.id);

      if (client?.type !== 'Client') {
        throw new AppError("You don't have permission.", 401);
      }

      request.user = payload as any;

      next();
    } catch (error: any) {
      if (error?.message) {
        throw new AppError(error.message, 401);
      }
      throw new AppError('Invalid token.', 401);
    }
  }
}
