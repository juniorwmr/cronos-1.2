import { Employee } from '@entities/user';

export interface AuthenticateEmployeeRequestDTO {
  email: string;
  password: string;
}

export interface IAuthenticateEmployeeResponseDTO {
  user: Employee;
  accessToken: string;
  refreshToken: string;
}
