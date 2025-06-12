import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTechnicalSpecificationDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  value: string;

  @IsString()
  @IsNotEmpty()
  stationId: string;
}
