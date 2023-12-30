import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { PageSettingsService } from './page-settings.service';
import { CreatePageSettingDto } from './dto/create-page-setting.dto';
import { UpdatePageSettingDto } from './dto/update-page-setting.dto';
import { ObjectId } from 'mongoose';

@Controller('page')
export class PageSettingsController {
  constructor(private readonly pageSettingsService: PageSettingsService) {}

  @Post()
  async create(@Body() createPageSettingDto: CreatePageSettingDto) {
    return await this.pageSettingsService.create(createPageSettingDto);
  }

  @Get()
  async findAll(@Query() query :any) {
    return await this.pageSettingsService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.pageSettingsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePageSettingDto: UpdatePageSettingDto) {
    return await this.pageSettingsService.update(id, updatePageSettingDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: ObjectId) {
    return await this.pageSettingsService.remove(id);
  }
}
