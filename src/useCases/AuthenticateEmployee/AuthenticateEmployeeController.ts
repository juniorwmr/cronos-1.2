import { Request, Response } from 'express';

import { AuthenticateEmployeeUseCase } from '@useCases/AuthenticateEmployee/AuthenticateEmployeeUseCase';

export class AuthenticateEmployeeController {
  constructor(
    private authenticateEmployeeUseCase: AuthenticateEmployeeUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { cpf, password } = request.body;

    const user = await this.authenticateEmployeeUseCase.execute({
      cpf,
      password,
    });

    return response.status(200).json(user);
  }
}
