import { Type } from '../enum';

export class CreateSpecificationDto {
  name: string;
  slug: string;
  type?: Type;
  isRequired?: boolean;
  isActive?: boolean;
  suggestions?: string[];
  stationId: string;
}