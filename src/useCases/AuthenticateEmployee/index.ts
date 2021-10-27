import { MongooseEmployeeRepository } from '@repositories/implementations/MongooseEmployeeRepository';
import { MongooseRefreshTokenRepository } from '@repositories/implementations/MongooseRefreshTokenRepository';

import { AuthenticateEmployeeController } from './AuthenticateEmployeeController';
import { AuthenticateEmployeeUseCase } from './AuthenticateEmployeeUseCase';

import { Bcrypt } from '@shared/cryptography/bcrypt/Bcrypt';
import { Jwt } from '@shared/cryptography/jwt/Jwt';
import authConfig from '@config/auth';

const bcrypt = new Bcrypt(10);
const jwt = new Jwt(authConfig.secretKey, authConfig.jwtExpiresIn);
const jwtRefresh = new Jwt(
  authConfig.secretKey,
  authConfig.jwtRefreshExpiresIn,
);

const mongooseEmployeeRepository = new MongooseEmployeeRepository();
const mongooseRefreshTokenRepository = new MongooseRefreshTokenRepository();

const authenticateEmployeeUseCase = new AuthenticateEmployeeUseCase(
  mongooseEmployeeRepository,
  mongooseRefreshTokenRepository,
  bcrypt,
  jwt,
  jwtRefresh,
);

const authenticateEmployeeController = new AuthenticateEmployeeController(
  authenticateEmployeeUseCase,
);

export { authenticateEmployeeUseCase, authenticateEmployeeController };
