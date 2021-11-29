import { PostgresContractRepository } from '@repositories/implementations/PostgresContractRepository';
import { getRepository } from 'typeorm';
import { Contract } from '@entities/contract';

import { ListContractsController } from './ListContractsController';
import { ListContractsUseCase } from './ListContractsUseCase';

const contractsRepository = getRepository(Contract);
const postgresContractRepository = new PostgresContractRepository(
  contractsRepository,
);

const listContractsUseCase = new ListContractsUseCase(
  postgresContractRepository,
);

const listContractsController = new ListContractsController(
  listContractsUseCase,
);

export { listContractsUseCase, listContractsController };
