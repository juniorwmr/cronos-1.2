import { MongooseEmployeeRepository } from '@repositories/implementations/MongooseEmployeeRepository';
import { MongooseClientRepository } from '@repositories/implementations/MongooseClientRepository';

import { TokenValidation } from '@helpers/auth/implementation/TokenValidation';
import { Jwt } from '@shared/cryptography/jwt/Jwt';

import authConfig from '@config/auth';
import { Authentication } from './authentication';

const mongooseEmployeeRepository = new MongooseEmployeeRepository();
const mongooseClientRepository = new MongooseClientRepository();
const jwt = new Jwt(authConfig.secretKey, authConfig.jwtExpiresIn);
const tokenValidation = new TokenValidation();

const authentication = new Authentication(
  mongooseEmployeeRepository,
  mongooseClientRepository,
  jwt,
  tokenValidation,
);

export { authentication };
