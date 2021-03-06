import { Employee } from '@entities/user';

export interface AuthenticateEmployeeRequestDTO {
  cpf: string;
  password: string;
}

export interface IAuthenticateEmployeeResponseDTO {
  user: Employee;
  accessToken: string;
}
