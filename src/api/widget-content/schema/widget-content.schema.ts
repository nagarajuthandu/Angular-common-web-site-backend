import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Widget } from 'src/api/widgets/schema/widgets.schema';

export type WidgetContentDocument = WidgetContent & Document;

@Schema()
export class WidgetContent {
  @Prop({ required: true, type:mongoose.Types.ObjectId, ref:'Widget' })
  widget: Widget;

  @Prop({ required: true, type: Object })
  content: Record<string, any>;

  @Prop()
  order:number
}

export const WidgetContentSchema = SchemaFactory.createForClass(WidgetContent);
