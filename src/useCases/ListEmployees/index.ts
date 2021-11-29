import { PostgresEmployeeRepository } from '@repositories/implementations/PostgresEmployeeRepository';
import { getRepository } from 'typeorm';
import { Employee } from '@entities/user';

import { ListEmployeesController } from './ListEmployeesController';
import { ListEmployeesUseCase } from './ListEmployeesUseCase';

const employeesRepository = getRepository(Employee);
const postgresEmployeeRepository = new PostgresEmployeeRepository(
  employeesRepository,
);

const listEmployeesUseCase = new ListEmployeesUseCase(
  postgresEmployeeRepository,
);

const listEmployeesController = new ListEmployeesController(
  listEmployeesUseCase,
);

export { listEmployeesUseCase, listEmployeesController };
