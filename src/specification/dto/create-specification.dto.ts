import { IsBoolean, IsEnum, IsNotEmpty, IsString, IsArray } from 'class-validator';
import { Type } from '@prisma/client';

export class CreateSpecificationDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  slug: string;

  @IsEnum(Type)
  type: Type;

  @IsBoolean()
  isRequired: boolean;

  @IsBoolean()
  isActive: boolean;

  @IsArray()
  @IsString({ each: true })
  suggestions: string[];

  @IsString()
  @IsNotEmpty()
  stationId: string;
}
