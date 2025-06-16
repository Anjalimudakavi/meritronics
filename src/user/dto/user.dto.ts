import { IsString, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  username:string;

  @IsString()
  employeeId:string;
  
  @IsString()
  phone:string;

  @IsString()
  password: string;

  @IsString()
  roleId: string;

  @IsOptional()
  @IsString()
  customerId?: string;
}

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  email: string;

  @IsString()
  username:string;

  @IsString()
  phone:string;
  
  @IsString()
  employeeId:string;

  @IsOptional()
  @IsString()
  roleId: string;

  @IsOptional()
  @IsString()
  customerId?: string;
}