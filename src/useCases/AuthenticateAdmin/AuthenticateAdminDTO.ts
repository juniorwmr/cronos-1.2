import { Administrator } from '@entities/user';

export interface AuthenticateEmployeeRequestDTO {
  cpf: string;
  password: string;
}

export interface IAuthenticateEmployeeResponseDTO {
  user: Administrator;
  accessToken: string;
}
