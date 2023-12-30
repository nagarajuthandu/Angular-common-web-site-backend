import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WidgetDocument = Widget & Document;

@Schema()
export class Widget {
  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  title: string
}

export const WidgetSchema = SchemaFactory.createForClass(Widget);
