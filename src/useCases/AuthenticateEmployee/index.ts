import { PostgresEmployeeRepository } from '@repositories/implementations/PostgresEmployeeRepository';
import { getRepository } from 'typeorm';
import { Employee } from '@entities/user';

import { AuthenticateEmployeeController } from './AuthenticateEmployeeController';
import { AuthenticateEmployeeUseCase } from './AuthenticateEmployeeUseCase';

import { Bcrypt } from '@shared/cryptography/bcrypt/Bcrypt';
import { Jwt } from '@shared/cryptography/jwt/Jwt';
import authConfig from '@config/auth';
import hashConfig from '@config/hash';

const bcrypt = new Bcrypt(hashConfig.passwordSalt);
const jwt = new Jwt(authConfig.secretKey, authConfig.jwtExpiresIn);

const employeesRepository = getRepository(Employee);
const postgresEmployeeRepository = new PostgresEmployeeRepository(
  employeesRepository,
);

const authenticateEmployeeUseCase = new AuthenticateEmployeeUseCase(
  postgresEmployeeRepository,
  bcrypt,
  jwt,
);

const authenticateEmployeeController = new AuthenticateEmployeeController(
  authenticateEmployeeUseCase,
);

export { authenticateEmployeeUseCase, authenticateEmployeeController };
