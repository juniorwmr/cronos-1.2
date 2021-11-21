import { PostgresAdminRepository } from '@repositories/implementations/PostgresAdminRepository';
import { getRepository } from 'typeorm';
import { Administrator } from '@entities/user';

import { AuthenticateAdminController } from './AuthenticateAdminController';
import { AuthenticateAdminUseCase } from './AuthenticateAdminUseCase';

import { Bcrypt } from '@shared/cryptography/bcrypt/Bcrypt';
import { Jwt } from '@shared/cryptography/jwt/Jwt';
import authConfig from '@config/auth';
import hashConfig from '@config/hash';

const bcrypt = new Bcrypt(hashConfig.passwordSalt);
const jwt = new Jwt(authConfig.secretKey, authConfig.jwtExpiresIn);

const adminsRepository = getRepository(Administrator);
const postgresAdminRepository = new PostgresAdminRepository(adminsRepository);

const authenticateAdminUseCase = new AuthenticateAdminUseCase(
  postgresAdminRepository,
  bcrypt,
  jwt,
);

const authenticateAdminController = new AuthenticateAdminController(
  authenticateAdminUseCase,
);

export { authenticateAdminUseCase, authenticateAdminController };
