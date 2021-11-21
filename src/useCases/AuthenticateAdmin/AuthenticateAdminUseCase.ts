import { AppError } from '@shared/errors/AppError';
import { Administrator } from '@entities/user';
import { IAdminRepository } from '@repositories/IAdminRepository';
import {
  AuthenticateEmployeeRequestDTO,
  IAuthenticateEmployeeResponseDTO,
} from './AuthenticateAdminDTO';
import {
  ICryptographyBcrypt,
  ICryptographyJWT,
} from '@shared/cryptography/ICryptography';

export class AuthenticateAdminUseCase {
  constructor(
    private adminRepository: IAdminRepository,
    private cryptographyBcrypt: ICryptographyBcrypt,
    private cryptographyJWT: ICryptographyJWT,
  ) {}

  async execute({
    cpf,
    password,
  }: AuthenticateEmployeeRequestDTO): Promise<IAuthenticateEmployeeResponseDTO> {
    const adminAlreadyExists = (await this.adminRepository.findByCPF(
      cpf,
    )) as Administrator;

    if (!adminAlreadyExists) {
      throw new AppError("User doesn't already exists.", 404);
    }
    console.log(adminAlreadyExists);

    const passwordMatch = await this.cryptographyBcrypt.compare(
      password,
      adminAlreadyExists.password,
    );

    if (!passwordMatch) {
      throw new AppError('Invalid password.', 401);
    }

    const payload = {
      user: {
        id: adminAlreadyExists.id as string,
      },
    };

    const accessToken = await this.cryptographyJWT.encrypt(payload);

    const expiredAt = new Date();

    expiredAt.setSeconds(expiredAt.getSeconds() + 86400);

    return {
      user: adminAlreadyExists,
      accessToken,
    };
  }
}
