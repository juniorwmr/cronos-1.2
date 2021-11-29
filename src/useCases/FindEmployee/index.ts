import { PostgresEmployeeRepository } from '@repositories/implementations/PostgresEmployeeRepository';
import { getRepository } from 'typeorm';
import { Employee } from '@entities/user';

import { FindEmployeeController } from './FindEmployeeController';
import { FindEmployeeUseCase } from './FindEmployeeUseCase';

const employeesRepository = getRepository(Employee);
const postgresEmployeeRepository = new PostgresEmployeeRepository(
  employeesRepository,
);

const findEmployeeUseCase = new FindEmployeeUseCase(postgresEmployeeRepository);

const findEmployeeController = new FindEmployeeController(findEmployeeUseCase);

export { findEmployeeUseCase, findEmployeeController };
