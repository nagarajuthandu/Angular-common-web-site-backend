// page-settings.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreatePageSettingDto } from './dto/create-page-setting.dto';
import { UpdatePageSettingDto } from './dto/update-page-setting.dto';
import { PageSetting, PageSettingDocument } from './schema/page-settings.schema';

@Injectable()
export class PageSettingsService {
  constructor(@InjectModel(PageSetting.name) private readonly pageSettingModel: Model<PageSettingDocument>) {}

  async create(createPageSettingDto: CreatePageSettingDto): Promise<PageSetting> {
    const createdPageSetting = new this.pageSettingModel(createPageSettingDto);
    return createdPageSetting.save();
  }

  async findAll(query:any): Promise<PageSetting[]> {
    return this.pageSettingModel.find(query).populate('widgets');
  }

  async findOne(id: string): Promise<PageSetting> {
    const pageSetting = await this.pageSettingModel.findById(id).exec();
    if (!pageSetting) {
      throw new NotFoundException('Page setting not found');
    }
    return pageSetting;
  }

  async update(id: string, updatePageSettingDto: UpdatePageSettingDto): Promise<PageSetting> {
    const updatedPageSetting = await this.pageSettingModel.findByIdAndUpdate(id, updatePageSettingDto, { new: true }).exec();
    if (!updatedPageSetting) {
      throw new NotFoundException('Page setting not found');
    }
    return updatedPageSetting;
  }

  async remove(id: ObjectId) {
    return this.pageSettingModel.findByIdAndDelete(id);
  }
}
