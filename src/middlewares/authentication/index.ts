import { getRepository } from 'typeorm';
import { PostgresEmployeeRepository } from '@repositories/implementations/PostgresEmployeeRepository';
import { PostgresAdminRepository } from '@repositories/implementations/PostgresAdminRepository';

import { TokenValidation } from '@helpers/auth/implementation/TokenValidation';
import { Jwt } from '@shared/cryptography/jwt/Jwt';

import authConfig from '@config/auth';
import { Authentication } from './authentication';
import { Administrator, Employee } from '@entities/user';

const adminsRepository = getRepository(Administrator);
const employeesRepository = getRepository(Employee);
const postgresEmployeeRepository = new PostgresEmployeeRepository(
  employeesRepository,
);
const postgresAdminRepository = new PostgresAdminRepository(adminsRepository);
const jwt = new Jwt(authConfig.secretKey, authConfig.jwtExpiresIn);
const tokenValidation = new TokenValidation();

const authentication = new Authentication(
  postgresEmployeeRepository,
  postgresAdminRepository,
  jwt,
  tokenValidation,
);

export { authentication };
