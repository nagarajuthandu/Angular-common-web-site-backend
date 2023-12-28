// widgets.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateWidgetDto } from './dto/create-widget.dto';
import { Widget, WidgetDocument } from './schema/widgets.schema';

@Injectable()
export class WidgetsService {
  constructor(@InjectModel(Widget.name) private readonly widgetModel: Model<WidgetDocument>) {}

  async create(createWidgetDto: CreateWidgetDto): Promise<Widget> {
    const createdWidget = new this.widgetModel(createWidgetDto);
    return createdWidget.save();
  }

  async findAll(): Promise<Widget[]> {
    return this.widgetModel.find().exec();
  }

  async findOne(id: string): Promise<Widget> {
    return this.widgetModel.findById(id).exec();
  }

  async update(id: string, updateWidgetDto: CreateWidgetDto): Promise<Widget> {
    return this.widgetModel.findByIdAndUpdate(id, updateWidgetDto, { new: true }).exec();
  }
}
