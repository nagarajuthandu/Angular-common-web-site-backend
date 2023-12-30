import { Injectable } from '@nestjs/common';
import { CreateWidgetContentDto } from './dto/create-widget-content.dto';
import { UpdateWidgetContentDto } from './dto/update-widget-content.dto';
import { InjectModel } from '@nestjs/mongoose';
import { WidgetContent, WidgetContentSchema } from './schema/widget-content.schema';
import { Model, ObjectId } from 'mongoose';
import { query } from 'express';

@Injectable()
export class WidgetContentService {

  constructor(@InjectModel(WidgetContent.name) private readonly widgetContentModel:Model<WidgetContent>){}
  
  async create(createWidgetContentDto: CreateWidgetContentDto) {
    return await this.widgetContentModel.create(createWidgetContentDto);
  }

  async findAll(query:any) {
    return await this.widgetContentModel.find(query).populate('widget');
  }

  findOne(id: number) {
    return `This action returns a #${id} widgetContent`;
  }

  async update(id: ObjectId, updateWidgetContentDto: UpdateWidgetContentDto) {
    return await this.widgetContentModel.findByIdAndUpdate(id,updateWidgetContentDto);
  }

  async remove(id: ObjectId) {
    return await this.widgetContentModel.findByIdAndDelete(id);
  }
}
