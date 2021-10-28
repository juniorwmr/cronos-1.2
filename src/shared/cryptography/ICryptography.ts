export interface IUserPayload {
  user: {
    id: string;
  };
}

export interface ICryptographyBcrypt {
  hash(plaintext: string): Promise<string>;

  compare(plaintext: string, digest: string): Promise<boolean>;
}

export interface ICryptographyJWT {
  encrypt(userPayload: IUserPayload): Promise<string>;

  decrypt(ciphertext: string): Promise<IUserPayload>;
}
