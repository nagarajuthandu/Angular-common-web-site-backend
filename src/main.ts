import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const confiService = app.get(ConfigService)
  const serverConfig = confiService.get('server')
  app.enableCors();
  await app.listen(serverConfig.port,serverConfig.host);
  console.log(`API host is running: ${await app.getUrl()}`);
}
bootstrap();
