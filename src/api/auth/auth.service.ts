import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../users/schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

  async checkUser(req: any): Promise<UserDocument | null> {
      const user = await this.userModel.findOne(req).exec();
      if (!user || user===null) {
        throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
      }
      return user;
  }
  async createUser(req:any): Promise<UserDocument | null>  {
    const user = await this.userModel.create(req);
    return user
  }
}
