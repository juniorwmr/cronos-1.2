import { ICryptographyBcrypt } from '../ICryptography';

import bcrypt from 'bcrypt';

export class Bcrypt implements ICryptographyBcrypt {
  constructor(private readonly salt: number) {}

  async hash(plaintext: string): Promise<string> {
    return bcrypt.hash(plaintext, this.salt);
  }

  async compare(plaintext: string, digest: string): Promise<boolean> {
    return bcrypt.compare(plaintext, digest);
  }
}
