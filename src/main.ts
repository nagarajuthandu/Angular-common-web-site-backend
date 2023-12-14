import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);
  const port = configService.get(`server.${process.env.NODE_ENV}.port`);
  app.enableCors();
  await app.listen(port);
  Logger.log(`OneLern-Connect-Backend service is ready: ${await app.getUrl()}`);
}
bootstrap();
