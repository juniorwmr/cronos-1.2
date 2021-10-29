import { PostgresContractRepository } from '@repositories/implementations/PostgresContractRepository';
import { PostgresEmployeeRepository } from '@repositories/implementations/PostgresEmployeeRepository';
import { getRepository } from 'typeorm';
import { Contract } from '@entities/contract';
import { Employee } from '@entities/user';

import { CreateEmployeeController } from './CreateContractController';
import { CreateContractUseCase } from './CreateContractUseCase';

const contractsRepository = getRepository(Contract);
const employeesRepository = getRepository(Employee);
const postgresContractRepository = new PostgresContractRepository(
  contractsRepository,
);

const postgresEmployeeRepository = new PostgresEmployeeRepository(
  employeesRepository,
);

const createContractUseCase = new CreateContractUseCase(
  postgresContractRepository,
  postgresEmployeeRepository,
);

const createContractController = new CreateEmployeeController(
  createContractUseCase,
);

export { createContractUseCase, createContractController };
