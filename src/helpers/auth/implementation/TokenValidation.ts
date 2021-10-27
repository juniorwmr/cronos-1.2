import { Request } from 'express';

import { ITokenValidation } from './../ITokenValidation';
import { AppError } from '@shared/errors/AppError';

export class TokenValidation implements ITokenValidation {
  validate(request: Request): string {
    const authHeader: string | undefined = request.headers.authorization;
    if (!authHeader) {
      throw new AppError('Not token provided.', 401);
    }

    const parts: string[] = authHeader.split(' ');

    if (parts.length !== 2) {
      throw new AppError('Invalid token.', 401);
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
      throw new AppError('Malformatted token.', 401);
    }

    return token;
  }
}
