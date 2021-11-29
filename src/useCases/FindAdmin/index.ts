import { PostgresAdminRepository } from '@repositories/implementations/PostgresAdminRepository';
import { getRepository } from 'typeorm';
import { Administrator } from '@entities/user';

import { FindAdminController } from './FindAdminController';
import { FindAdminUseCase } from './FindAdminUseCase';

const adminsRepository = getRepository(Administrator);
const postgresAdminRepository = new PostgresAdminRepository(adminsRepository);

const findAdminUseCase = new FindAdminUseCase(postgresAdminRepository);

const findAdminController = new FindAdminController(findAdminUseCase);

export { findAdminUseCase, findAdminController };
