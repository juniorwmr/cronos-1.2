module.exports = [
  {
    name: 'production',
    type: 'postgres',
    host: process.env.TYPEORM_HOST,
    port: process.env.TYPEORM_PORT,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DB,
    entities: ['./build/entities/**/*.js'],
    migrations: ['./build/database/migrations/*.js'],
    cli: {
      migrationsDir: './src/database/migrations',
    },
  },
  {
    name: 'development',
    type: 'postgres',
    host: process.env.TYPEORM_HOST,
    port: process.env.TYPEORM_PORT,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DB,
    entities: ['./src/entities/**/*.ts'],
    migrations: ['./src/database/migrations/*.ts'],
    cli: {
      migrationsDir: './src/database/migrations',
    },
  },
];
