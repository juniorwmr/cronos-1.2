import { Request, Response } from 'express';

import { RefreshTokenUserUseCase } from '@useCases/RefreshTokenUser/RefreshTokenUserUseCase';

export class RefreshTokenUserController {
  constructor(private refreshTokenUserUseCase: RefreshTokenUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { refresh_token } = request.body;

    const tokens = await this.refreshTokenUserUseCase.execute(refresh_token);

    return response.status(200).json(tokens);
  }
}
