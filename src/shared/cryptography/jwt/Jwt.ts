import { IUserPayload } from './../ICryptography';
import { ICryptographyJWT } from '../ICryptography';

import jwt from 'jsonwebtoken';

export class Jwt implements ICryptographyJWT {
  constructor(
    private readonly secret: string,
    private readonly expiresIn: number,
  ) {}

  async encrypt(userPayload: IUserPayload): Promise<string> {
    return jwt.sign(userPayload, this.secret, {
      expiresIn: this.expiresIn,
    });
  }

  async decrypt(ciphertext: string): Promise<IUserPayload> {
    return jwt.verify(ciphertext, this.secret) as any;
  }
}
