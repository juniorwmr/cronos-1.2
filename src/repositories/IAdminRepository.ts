import { Administrator } from '@entities/user';

export interface IAdminRepository {
  findByEmail(email: string): Promise<Administrator | null>;
  findByCPF(cpf: string): Promise<Administrator | null>;
  saveAdmin(admin: Administrator): Promise<Administrator>;
  find(): Promise<Administrator[]>;
  findById(id: string): Promise<Administrator | null>;
}
