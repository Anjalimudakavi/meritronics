import { PartialType } from '@nestjs/mapped-types';
import { CreateStationDto } from './create-station.dto';

export class UpdateStationDto extends PartialType(CreateStationDto) {}



// import {
//   IsString,
//   IsOptional,
//   IsBoolean,
//   ValidateNested,
//   IsArray,
// } from 'class-validator';
// import { Type as TransformType } from 'class-transformer';
// import { UpdateFlowChartDto } from 'src/flow-chart/dto/update.dto';
// import { UpdateSpecificationDto } from 'src/specification/dto/update.specification.dto';
// import { UpdateTechnicalSpecificationDto } from 'src/technical-specification/dto/update.dto';
// import {UpdateDocumentationtDto} from
// export class UpdateStationDto {
//   @IsOptional()
//   @IsString()
//   stationName?: string;

//   @IsOptional()
//   @IsString()
//   status?: string;

//   @IsOptional()
//   @IsString()
//   staticCode?: string;

//   @IsOptional()
//   @IsString()
//   description?: string;

//   @IsOptional()
//   @IsString()
//   location?: string;

//   @IsOptional()
//   @IsString()
//   operator?: string;

//   @IsOptional()
//   @IsString()
//   addStation?: string;

//   @IsOptional()
//   @IsBoolean()
//   isDeleted?: boolean;

//   @IsOptional()
//   @ValidateNested({ each: true })
//   @TransformType(() => UpdateTechnicalSpecificationDto)
//   technicalSpecifications?: UpdateTechnicalSpecificationDto[];

//   @IsOptional()
//   @ValidateNested({ each: true })
//   @TransformType(() => UpdateSpecificationDto)
//   specifications?: UpdateSpecificationDto[];

//   @IsOptional()
//   @ValidateNested({ each: true })
//   @TransformType(() => UpdateFlowChartDto)
//   flowCharts?: UpdateFlowChartDto[];

//   @IsOptional()
//   @ValidateNested({ each: true })
//   @TransformType(() => UpdateDocumentationtDto)
//   documentation?: UpdateDocumentationDto[];
// }