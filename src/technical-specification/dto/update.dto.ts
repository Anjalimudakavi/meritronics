import { PartialType } from '@nestjs/mapped-types';
import { CreateTechnicalSpecificationDto } from './create.dto';

export class UpdateTechnicalSpecificationDto extends PartialType(CreateTechnicalSpecificationDto) {}
