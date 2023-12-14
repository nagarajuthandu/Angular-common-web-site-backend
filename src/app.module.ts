import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import serverConfig from './config/env/server.config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [serverConfig],
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
