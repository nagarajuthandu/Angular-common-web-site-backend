import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  development: {
    host: process.env.DATABASE_HOST || 'localhost',
    srv: process.env.DATABASE_SRV === 'true' || false,
    port: parseInt(process.env.DATABASE_PORT) || 27017,
    name: process.env.DATABASE_NAME || 'my-app-db',
    username: process.env.DATABASE_USERNAME || null,
    password: process.env.DATABASE_PASSWORD || null,
    authenticationDatabase: process.env.AUTHENTICATION_DATABASE || null,
    ssl: process.env.DATABASE_SSL === 'true' || false,
  },
  production: {
    host: process.env.DATABASE_HOST || 'localhost',
    srv: process.env.DATABASE_SRV === 'true' || false,
    port: parseInt(process.env.DATABASE_PORT) || 27017,
    name: process.env.DATABASE_NAME || 'my-app-db',
    username: process.env.DATABASE_USERNAME || null,
    password: process.env.DATABASE_PASSWORD || null,
    authenticationDatabase: process.env.AUTHENTICATION_DATABASE || null,
    ssl: process.env.DATABASE_SSL === 'true' || false,
  },
}));