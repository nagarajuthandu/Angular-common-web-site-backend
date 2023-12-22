import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class CreateUserDto {

  @IsNotEmpty()
  username:string

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @MinLength(6)
  @IsNotEmpty()
  password: string;
}
