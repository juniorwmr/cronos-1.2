import { Administrator } from '@entities/user/Administrator';

import { IAdminRepository } from '@repositories/IAdminRepository';
import { FindAdminDTO } from './FindAdminDTO';

export class FindAdminUseCase {
  constructor(private adminsRepository: IAdminRepository) {}

  async execute(
    { email, cpf, id }: FindAdminDTO,
    adminId?: string,
  ): Promise<Administrator> {
    let admin: Administrator;
    if (email) {
      admin = await this.adminsRepository.findByEmail(email);
    } else if (cpf) {
      admin = await this.adminsRepository.findByCPF(cpf);
    } else if (id) {
      admin = await this.adminsRepository.findById(id);
    } else {
      if (adminId) {
        admin = await this.adminsRepository.findById(adminId);
      } else {
        admin = null;
      }
    }

    return admin;
  }
}
