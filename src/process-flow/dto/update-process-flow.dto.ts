import { PartialType } from '@nestjs/mapped-types';
import { CreateProcessFlowDto } from './create-process-flow.dto';

export class UpdateProcessFlowDto extends PartialType(CreateProcessFlowDto) {}
