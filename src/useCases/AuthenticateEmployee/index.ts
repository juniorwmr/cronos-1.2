import { PostgresEmployeeRepository } from '@repositories/implementations/PostgresEmployeeRepository';

import { AuthenticateEmployeeController } from './AuthenticateEmployeeController';
import { AuthenticateEmployeeUseCase } from './AuthenticateEmployeeUseCase';

import { Bcrypt } from '@shared/cryptography/bcrypt/Bcrypt';
import { Jwt } from '@shared/cryptography/jwt/Jwt';
import authConfig from '@config/auth';

const bcrypt = new Bcrypt(10);
const jwt = new Jwt(authConfig.secretKey, authConfig.jwtExpiresIn);

const postgresEmployeeRepository = new PostgresEmployeeRepository();

const authenticateEmployeeUseCase = new AuthenticateEmployeeUseCase(
  postgresEmployeeRepository,
  bcrypt,
  jwt,
);

const authenticateEmployeeController = new AuthenticateEmployeeController(
  authenticateEmployeeUseCase,
);

export { authenticateEmployeeUseCase, authenticateEmployeeController };
