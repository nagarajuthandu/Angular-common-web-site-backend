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

  async findAll(query: any): Promise<Widget[]> {
    return this.widgetModel.find(query);
  }

  async findOne(id: string): Promise<Widget> {
    return this.widgetModel.findById(id);
  }

  async update(id: string, updateWidgetDto: CreateWidgetDto): Promise<Widget> {
    return this.widgetModel.findByIdAndUpdate(id, updateWidgetDto, { new: true }).exec();
  }

  async createWidgetsIfNotExist(): Promise<void> {
    const widgetTypesToCreate: CreateWidgetDto[] = [
      { type: 'carousel', name: 'Carousel', displayName: 'Carousel' },
      { type: 'cards', name: 'Cards', displayName: 'Cards' },
    ];

    for (const widgetType of widgetTypesToCreate) {
      const existingWidget = await this.widgetModel.findOne({ type: widgetType.type });

      if (!existingWidget) {
        await this.create(widgetType);
      }
    }
  }
}
