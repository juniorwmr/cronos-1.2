import { EntityRepository, Repository } from 'typeorm';
import { IAdminRepository } from '@repositories/IAdminRepository';
import { Administrator } from '@entities/user';

@EntityRepository(Administrator)
export class PostgresAdminRepository implements IAdminRepository {
  constructor(private adminsRepository: Repository<Administrator>) {}

  async findByEmail(email: string): Promise<Administrator | null> {
    return await this.adminsRepository.findOne({ email });
  }

  async findByCPF(cpf: string): Promise<Administrator | null> {
    return await this.adminsRepository.findOne({ cpf });
  }

  async saveAdmin(data: Administrator): Promise<Administrator> {
    const newEmployee = this.adminsRepository.create(data);
    return await this.adminsRepository.save(newEmployee);
  }

  async find(): Promise<Administrator[]> {
    return await this.adminsRepository.find();
  }

  async findById(id: string): Promise<Administrator | null> {
    return await this.adminsRepository.findOne(id);
  }
}
