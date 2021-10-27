import { AppError } from '@shared/errors/AppError';
import { Employee } from '@entities/user';
import { IEmployeeRepository } from '@repositories/IEmployeeRepository';
import { IRefreshTokenRepository } from '@repositories/IRefreshTokenRepository';
import {
  AuthenticateEmployeeRequestDTO,
  IAuthenticateEmployeeResponseDTO,
} from './AuthenticateEmployeeDTO';
import {
  ICryptographyBcrypt,
  ICryptographyJWT,
} from '@shared/cryptography/ICryptography';

export class AuthenticateEmployeeUseCase {
  constructor(
    private employeeRepository: IEmployeeRepository,
    private refreshTokenRepository: IRefreshTokenRepository,
    private cryptographyBcrypt: ICryptographyBcrypt,
    private cryptographyJWT: ICryptographyJWT,
    private cryptographyJWTRefreshToken: ICryptographyJWT,
  ) {}

  async execute({
    email,
    password,
  }: AuthenticateEmployeeRequestDTO): Promise<IAuthenticateEmployeeResponseDTO> {
    const employeeAlreadyExists = (await this.employeeRepository.findByEmail(
      email,
    )) as Employee;

    if (!employeeAlreadyExists) {
      throw new AppError("User doesn't already exists.", 404);
    }

    const passwordMatch = await this.cryptographyBcrypt.compare(
      password,
      employeeAlreadyExists.password,
    );

    if (!passwordMatch) {
      throw new AppError('Invalid password.', 401);
    }

    const payload = {
      user: {
        id: employeeAlreadyExists.id as string,
        type: employeeAlreadyExists.type,
      },
    };

    const accessToken = await this.cryptographyJWT.encrypt(payload);

    const refreshToken = await this.cryptographyJWTRefreshToken.encrypt(
      payload,
    );

    const expiredAt = new Date();

    expiredAt.setSeconds(expiredAt.getSeconds() + 86400);

    await this.refreshTokenRepository.save({
      token: refreshToken,
      user_type: employeeAlreadyExists.type,
      user: employeeAlreadyExists.id as string,
      expiry_date: expiredAt,
    });

    return {
      user: employeeAlreadyExists,
      accessToken,
      refreshToken,
    };
  }
}
