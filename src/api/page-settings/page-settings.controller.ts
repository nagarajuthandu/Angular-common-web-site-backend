import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PageSettingsService } from './page-settings.service';
import { CreatePageSettingDto } from './dto/create-page-setting.dto';
import { UpdatePageSettingDto } from './dto/update-page-setting.dto';

@Controller('page-settings')
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

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePageSettingDto: UpdatePageSettingDto) {
    return await this.pageSettingsService.update(id, updatePageSettingDto);
  }
}
