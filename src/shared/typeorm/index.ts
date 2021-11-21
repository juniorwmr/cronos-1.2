import 'reflect-metadata';
import 'dotenv/config';
import { Connection, createConnection, getConnectionOptions } from 'typeorm';

const { NODE_ENV } = process.env;
const PostgresConnection = async (name?: string): Promise<Connection> => {
  const connectionOptions = await getConnectionOptions(
    name || NODE_ENV || 'production',
  );
  const connection = await createConnection({
    ...connectionOptions,
    name: 'default',
  });
  return connection;
};

export default PostgresConnection;
