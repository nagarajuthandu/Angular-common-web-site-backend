import { Module } from '@nestjs/common';
import { WidgetContentService } from './widget-content.service';
import { WidgetContentController } from './widget-content.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WidgetContent, WidgetContentSchema } from './schema/widget-content.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:WidgetContent.name,schema:WidgetContentSchema}])],
  controllers: [WidgetContentController],
  providers: [WidgetContentService],
})
export class WidgetContentModule {}
