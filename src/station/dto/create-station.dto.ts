// src/stations/dto/create-station.dto.ts
import {
  LabelLocation,
  PCBBoardSide,
  PrintingMaterial,
  SolderPasteType,
  SqueegeeType,
} from '../enums'; // Adjust path if needed

import {
  IsString,
  IsEnum,
  IsNumber,
  IsInt,
  IsOptional,
} from 'class-validator';

export class CreateStationDto {
  @IsString()
  stationId: string;

  @IsString()
  stationName: string;

  @IsEnum(LabelLocation)
  labelLocation: LabelLocation;

  @IsString()
  programName: string;

  @IsString()
  labelFormat: string;

  @IsString()
  labelRange: string;

  @IsString()
  boardDirectionFirstSide: string;

  @IsString()
  boardDirectionSecondSide: string;

  @IsEnum(PCBBoardSide)
  pcbBoardSide: PCBBoardSide;

  @IsString()
  stencilName: string;

  @IsString()
  stencilRevision: string;

  @IsString()
  pwb: string;

  @IsString()
  pwbRevision: string;

  @IsNumber()
  stencilThickness: number;

  @IsEnum(PrintingMaterial)
  printingMaterial: PrintingMaterial;

  @IsEnum(SolderPasteType)
  solderPasteType: SolderPasteType;

  @IsEnum(SqueegeeType)
  squeegeeType: SqueegeeType;

  @IsInt()
  squeegeeSettingsId: number;

  @IsOptional()
  @IsInt()
  processFlowId?: number;
}
