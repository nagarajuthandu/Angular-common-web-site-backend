import { Module } from '@nestjs/common';
import { PageSettingsService } from './page-settings.service';
import { PageSettingsController } from './page-settings.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PageSetting, PageSettingSchema } from './schema/page-settings.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: PageSetting.name, schema: PageSettingSchema }])],
  controllers: [PageSettingsController],
  providers: [PageSettingsService],
})
export class PageSettingsModule {}
