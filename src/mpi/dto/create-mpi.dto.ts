import { IsString, IsDateString } from 'class-validator';

export class CreateMpiDto {
  @IsString()
  revision: string;

  @IsDateString()
  effectiveDate: string;

  @IsString()
  purpose: string;

  @IsString()
  scope: string;

  @IsString()
  equipment: string;

  @IsString()
  materials: string;

  @IsString()
  responsibilities: string;

  @IsString()
  procedure: string;

  @IsString()
  safety: string;

  @IsString()
  processControl: string;

  @IsString()
  stationName: string; // this is the foreign key
}
