import { Module } from '@nestjs/common';
import { WidgetsService } from './widgets.service';
import { WidgetsController } from './widgets.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Widget, WidgetSchema } from './schema/widgets.schema';

@Module({
  imports:[MongooseModule.forFeature([{name: Widget.name, schema:WidgetSchema}])],
  controllers: [WidgetsController],
  providers: [WidgetsService],
})
export class WidgetsModule {}
