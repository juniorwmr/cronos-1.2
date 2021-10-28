import 'dotenv/config';
import { createConnection, getConnectionOptions } from 'typeorm';

const { NODE_ENV } = process.env;

const Connection = async () => {
  const connectionOptions = await getConnectionOptions(
    NODE_ENV || 'production',
  );
  createConnection({ ...connectionOptions, name: 'default' } as any).then(
    () => {
      console.log('Connected to the database.');
      import('../http/server');
    },
  );
};

export default Connection();
