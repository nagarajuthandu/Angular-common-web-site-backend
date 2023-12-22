import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}
  async create(createUserDto: CreateUserDto) {
    return await this.userModel.create(createUserDto);
  }

  async findAll() {
    return await this.userModel.find();
  }

  async findOne(id: ObjectId) {
    return await this.userModel.findOne(id);
  }

  async update(id: ObjectId, updateUserDto: UpdateUserDto) {
    return await this.userModel.findByIdAndUpdate(id,updateUserDto);
  }

  async remove(id: ObjectId) {
    return await this.userModel.findByIdAndDelete(id);
  }
}
