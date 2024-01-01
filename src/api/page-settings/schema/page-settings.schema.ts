import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Widget, WidgetSchema } from '../../widgets/schema/widgets.schema';
import { WidgetContent } from 'src/api/widget-content/schema/widget-content.schema';

export type PageSettingDocument = PageSetting & Document;

@Schema()
export class PageSetting {
  @Prop({ required: true })
  pagename: string;

  @Prop({ required: true })
  displayName: string

  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref:'WidgetContent' })
  WidgetContent: WidgetContent;
}

export const PageSettingSchema = SchemaFactory.createForClass(PageSetting);
