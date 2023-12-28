import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import serverConfig from './config/env/server.config';
import databaseConfig from './config/env/database.config';
import { UsersModule } from './api/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './api/auth/auth.module';
import jwtConfig from './config/env/jwt.config';
import { WidgetsModule } from './api/widgets/widgets.module';
import { PageSettingsModule } from './api/page-settings/page-settings.module';
import { MenuModule } from './api/menu/menu.module';


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [serverConfig,databaseConfig,jwtConfig],
  }),
  MongooseModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      const env = process.env.NODE_ENV.trim();
      const host = configService.get<string>(`database.${env}.host`);
      const port = configService.get<number>(`database.${env}.port`);
      const name = configService.get<string>(`database.${env}.name`);
      const uri = `mongodb://${host}:${port}/${name}`
      console.log({uri})
      return { uri: uri };
    },
  }),
  AuthModule,
  UsersModule,
  WidgetsModule,
  PageSettingsModule,
  MenuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
