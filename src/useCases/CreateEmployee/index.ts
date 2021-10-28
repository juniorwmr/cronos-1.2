import { PostgresEmployeeRepository } from '@repositories/implementations/PostgresEmployeeRepository';
import { getRepository } from 'typeorm';
import { Employee } from '@entities/user';

import { CreateEmployeeController } from './CreateEmployeeController';
import { CreateEmployeeUseCase } from './CreateEmployeeUseCase';

import { Bcrypt } from '@shared/cryptography/bcrypt/Bcrypt';

const bcrypt = new Bcrypt(10);

const employeesRepository = getRepository(Employee);
const postgresEmployeeRepository = new PostgresEmployeeRepository(
  employeesRepository,
);

const createEmployeeUseCase = new CreateEmployeeUseCase(
  postgresEmployeeRepository,
  bcrypt,
);

const createUserController = new CreateEmployeeController(
  createEmployeeUseCase,
);

export { createEmployeeUseCase, createUserController };