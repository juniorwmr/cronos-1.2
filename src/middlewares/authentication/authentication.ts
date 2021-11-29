import { AppError } from '@shared/errors/AppError';
import { Request, Response, NextFunction } from 'express';
import { ITokenValidation } from '@helpers/auth/ITokenValidation';
import { ICryptographyJWT } from '@shared/cryptography/ICryptography';
import { IEmployeeRepository } from '@repositories/IEmployeeRepository';
import { IAdminRepository } from '@repositories/IAdminRepository';

export class Authentication {
  constructor(
    private employeesRepository: IEmployeeRepository,
    private adminsRepository: IAdminRepository,
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
      const employee = await this.employeesRepository.findById(payload.user.id);

      if (!employee) {
        throw new AppError("You don't have permission.", 401);
      }

      request.user = payload.user as any;

      next();
    } catch (error) {
      throw new AppError('Invalid token.', 401);
    }
  }

  async authorizeAdmin(
    request: Request,
    _response: Response,
    next: NextFunction,
  ): Promise<void> {
    const token = this.validateToken.validate(request);

    try {
      const payload = await this.cryptographyJWT.decrypt(token);
      const admin = await this.adminsRepository.findById(payload.user.id);

      if (!admin) {
        throw new AppError("You don't have permission.", 401);
      }

      request.user = payload.user as any;

      next();
    } catch (error) {
      throw new AppError('Invalid token.', 401);
    }
  }
}
