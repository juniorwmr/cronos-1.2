import { MongooseRefreshTokenRepository } from '@repositories/implementations/MongooseRefreshTokenRepository';

import { RefreshTokenUserController } from './RefreshTokenUserController';
import { RefreshTokenUserUseCase } from './RefreshTokenUserUseCase';

import { Jwt } from '@shared/cryptography/jwt/Jwt';
import authConfig from '@config/auth';

const mongooseRefreshTokenRepository = new MongooseRefreshTokenRepository();

const jwt = new Jwt(authConfig.secretKey, authConfig.jwtExpiresIn);
const jwtRefresh = new Jwt(
  authConfig.secretKey,
  authConfig.jwtRefreshExpiresIn,
);

const refreshTokenUserUseCase = new RefreshTokenUserUseCase(
  mongooseRefreshTokenRepository,
  jwt,
  jwtRefresh,
);

const refreshTokenUserController = new RefreshTokenUserController(
  refreshTokenUserUseCase,
);

export { refreshTokenUserUseCase, refreshTokenUserController };
