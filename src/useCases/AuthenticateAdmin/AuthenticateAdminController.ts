import { Request, Response } from 'express';

import { AuthenticateAdminUseCase } from './AuthenticateAdminUseCase';

export class AuthenticateAdminController {
  constructor(private authenticateAdminUseCase: AuthenticateAdminUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { cpf, password } = request.body;

    const user = await this.authenticateAdminUseCase.execute({
      cpf,
      password,
    });

    return response.status(200).json(user);
  }
}
