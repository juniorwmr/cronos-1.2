import { AppError } from '@shared/errors/AppError';
import { Contract } from '@entities/contract';

import { IContractRepository } from '@repositories/IContractRepository';
import { IEmployeeRepository } from '@repositories/IEmployeeRepository';
import { CreateContractDTO } from './CreateContractDTO';

export class CreateContractUseCase {
  constructor(
    private contractsRepository: IContractRepository,
    private employeesRepository: IEmployeeRepository,
  ) {}

  async execute(data: CreateContractDTO): Promise<Contract> {
    const contractAlreadyExists =
      await this.contractsRepository.findByRegistration(data.registration);

    if (contractAlreadyExists) {
      throw new AppError('Contract already exists.', 400);
    }

    const employeeAlreadyExists = await this.employeesRepository.findById(
      data.employeeId,
    );

    if (!employeeAlreadyExists) {
      throw new AppError("Employee doesn't exists.", 404);
    }

    return await this.contractsRepository.saveContract(
      data,
      employeeAlreadyExists,
    );
  }
}
