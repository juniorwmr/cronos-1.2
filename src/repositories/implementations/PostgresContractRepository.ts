import { Employee } from '@entities/user';
import { EntityRepository, Repository } from 'typeorm';
import { IContractRepository } from '@repositories/IContractRepository';
import { Contract } from '@entities/contract';

@EntityRepository(Contract)
export class PostgresContractRepository implements IContractRepository {
  constructor(private contractRepository: Repository<Contract>) {}

  async findByRegistration(registration: string): Promise<Contract | null> {
    return await this.contractRepository.findOne({ registration });
  }
  async findByCity(city: string): Promise<Contract[] | null> {
    return await this.contractRepository.find({ city });
  }
  async findByEmployeeId(employeeId: string): Promise<Contract[]> {
    return await this.contractRepository.find({
      relations: ['employee'],
      where: {
        employee: {
          id: employeeId,
        },
      },
    });
  }
  async find(): Promise<Contract[]> {
    return await this.contractRepository.find({ relations: ['employee'] });
  }

  async findById(id: string): Promise<Contract | null> {
    return await this.contractRepository.findOne({ id });
  }

  async saveContract(
    data: Contract,
    employee: Employee,
  ): Promise<Contract | null> {
    const newContract = this.contractRepository.create({
      ...data,
      employee,
    });
    return await this.contractRepository.save(newContract);
  }
}
