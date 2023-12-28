import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MenuDocument = Menu & Document;

@Schema()
export class Menu {
  @Prop({ required: true })
  label: string;

  @Prop({ required: true })
  link: string;

}

export const MenuSchema = SchemaFactory.createForClass(Menu);
