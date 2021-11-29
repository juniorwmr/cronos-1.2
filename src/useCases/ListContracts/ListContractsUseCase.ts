import { Contract } from '@entities/contract';

import { IContractRepository } from '@repositories/IContractRepository';

export class ListContractsUseCase {
  constructor(private contractRepository: IContractRepository) {}

  async execute(employeeId?: string): Promise<Contract[]> {
    let contracts;
    if (employeeId) {
      contracts = await this.contractRepository.findByEmployeeId(employeeId);
    } else {
      contracts = await this.contractRepository.find();
    }

    return contracts;
  }
}
