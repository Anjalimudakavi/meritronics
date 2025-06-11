// src/specification/dto/update-specification.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateSpecificationDto } from './create-specification.dto';

export class UpdateSpecificationDto extends PartialType(CreateSpecificationDto) {}