import { Controller, Get, Post, Body, Patch, Param, Delete,Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly jwtService: JwtService,private readonly configService: ConfigService) {}

  @Post('login')
  async login(@Body() req: any) {
    const user:any = this.authService.generateToken(req);
    const payload = { sub: user._id, username: user.username }; 
    const token =  this.jwtService.sign(payload,{
      secret: this.configService.get<string>('jwt.secret'),
      expiresIn: this.configService.get<string>('jwt.expiresIn'),
    });
    return {token}
  }

 
}
