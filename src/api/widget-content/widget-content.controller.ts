import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { WidgetContentService } from './widget-content.service';
import { CreateWidgetContentDto } from './dto/create-widget-content.dto';
import { UpdateWidgetContentDto } from './dto/update-widget-content.dto';
import { ObjectId } from 'mongoose';

@Controller('widget-content')
export class WidgetContentController {
  constructor(private readonly widgetContentService: WidgetContentService) {}

  @Post()
  async create(@Body() createWidgetContentDto: CreateWidgetContentDto) {
    return await this.widgetContentService.create(createWidgetContentDto);
  }

  @Get()
  async findAll(@Query() query:any) {
    return this.widgetContentService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.widgetContentService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: ObjectId, @Body() updateWidgetContentDto: UpdateWidgetContentDto) {
    return await this.widgetContentService.update(id, updateWidgetContentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: ObjectId) {
    return await this.widgetContentService.remove(id);
  }
}
