import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu, MenuDocument } from './schema/menu.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class MenuService {
  constructor(@InjectModel(Menu.name) private readonly menuModel:Model<MenuDocument>){}

  async create(createMenuDto: CreateMenuDto) {
    return await this.menuModel.create(createMenuDto)
  }

  async findAll() {
    return await this.menuModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} menu`;
  }

  update(id: number, updateMenuDto: UpdateMenuDto) {
    return `This action updates a #${id} menu`;
  }

  remove(id: number) {
    return `This action removes a #${id} menu`;
  }
}
