import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Widget, WidgetSchema } from '../../widgets/schema/widgets.schema';

export type PageSettingDocument = PageSetting & Document;

@Schema()
export class PageSetting {
  @Prop({ required: true })
  pagename: string;

  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref:'Widget' })
  widgets: Widget;
}

export const PageSettingSchema = SchemaFactory.createForClass(PageSetting);
