import { PartialType } from '@nestjs/mapped-types';
import { CreateMpiDto } from './create-mpi.dto';

export class UpdateMpiDto extends PartialType(CreateMpiDto) {}
