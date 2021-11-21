import 'dotenv/config';
import PostgresConnection from '../typeorm/index';

PostgresConnection().then(async connection => {
  console.log(`Connected to database: ${connection.name}.`);
  const app = await import('./app');
  app.default.listen(3333, () => {
    console.log('Server running on port 3333.');
  });
});
