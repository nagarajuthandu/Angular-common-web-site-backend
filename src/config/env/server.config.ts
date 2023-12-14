import { registerAs } from '@nestjs/config';

export default registerAs('server', () => ({
  host: process.env.HOST || 'localhost',
  port: parseInt(process.env.PORT, 10) || 3000,
}));
