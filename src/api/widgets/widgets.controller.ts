// widgets.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { WidgetsService } from './widgets.service';
import { CreateWidgetDto } from './dto/create-widget.dto';
import { UpdateWidgetDto } from './dto/update-widget.dto'

@Controller('widgets')
export class WidgetsController {
  constructor(private readonly widgetsService: WidgetsService) {}

  async onApplicationBootstrap() {
    await this.widgetsService.createWidgetsIfNotExist();
  }

  @Post()
  async create(@Body() createWidgetDto: CreateWidgetDto) {
    console.log("createWidgetDto",createWidgetDto)
    return await this.widgetsService.create(createWidgetDto);
  }

  @Get()
  async findAll(@Query() query:any) {
    return await this.widgetsService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.widgetsService.findOne(id);
  }
}
