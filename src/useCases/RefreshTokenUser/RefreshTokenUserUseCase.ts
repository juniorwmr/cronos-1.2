import { ICryptographyJWT } from '@shared/cryptography/ICryptography';
import { IRefreshTokenRepository } from '@repositories/IRefreshTokenRepository';
import { RefreshTokenResponseDTO } from './RefreshTokenDTO';

class RefreshTokenUserUseCase {
  constructor(
    private refreshTokenRepository: IRefreshTokenRepository,
    private cryptographyJWT: ICryptographyJWT,
    private cryptographyJWTRefreshToken: ICryptographyJWT,
  ) {}

  async execute(refresh_token: string): Promise<RefreshTokenResponseDTO> {
    const refreshTokenExists = await this.refreshTokenRepository.find(
      refresh_token,
    );

    if (!refreshTokenExists) {
      throw new Error('Refresh token invalid.');
    }

    const { user } = await this.cryptographyJWT.decrypt(refresh_token);

    const isTokenExpired =
      refreshTokenExists.expiry_date.getTime() < new Date().getTime();

    if (isTokenExpired) {
      throw new Error('Refresh token is expired.');
    }

    const payload = {
      user: {
        id: user.id as string,
        type: user.type,
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
      user_type: user.type as any,
      user: refreshTokenExists.user as string,
      expiry_date: expiredAt,
    });

    return { accessToken, refreshToken };
  }
}

export { RefreshTokenUserUseCase };
