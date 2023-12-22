import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User,UserDocument } from '../users/schema/user.schema';
import { Model } from 'mongoose';


@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}
  async generateToken(req :any) {
    return await this.userModel.findOne(req);
    
  }
}
