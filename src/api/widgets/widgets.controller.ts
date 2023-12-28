// widgets.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WidgetsService } from './widgets.service';
import { CreateWidgetDto } from './dto/create-widget.dto';
import { UpdateWidgetDto } from './dto/update-widget.dto'

@Controller('widgets')
export class WidgetsController {
  constructor(private readonly widgetsService: WidgetsService) {}

  @Post()
  async create(@Body() createWidgetDto: CreateWidgetDto) {
    console.log("createWidgetDto",createWidgetDto)
    return await this.widgetsService.create(createWidgetDto);
  }

  @Get()
  findAll() {
    return this.widgetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.widgetsService.findOne(id);
  }
}
