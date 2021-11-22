import { getRepository } from 'typeorm';
import { PostgresEmployeeRepository } from '@repositories/implementations/PostgresEmployeeRepository';

import { TokenValidation } from '@helpers/auth/implementation/TokenValidation';
import { Jwt } from '@shared/cryptography/jwt/Jwt';

import authConfig from '@config/auth';
import { Authentication } from './authentication';
import { Employee } from '@entities/user';

const employeesRepository = getRepository(Employee);
const postgresEmployeeRepository = new PostgresEmployeeRepository(
  employeesRepository,
);
const jwt = new Jwt(authConfig.secretKey, authConfig.jwtExpiresIn);
const tokenValidation = new TokenValidation();

const authentication = new Authentication(
  postgresEmployeeRepository,
  jwt,
  tokenValidation,
);

export { authentication };
