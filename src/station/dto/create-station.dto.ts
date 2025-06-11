import { CreateSpecificationDto } from '../../specification/dto/create-specification.dto';

export class CreateStationDto {
  stationId: string;
  stationName: string;
  status: string;
  staticCode: string;
  description: string;
  location: string;
  operator: string;
  addStation: string;
  specifications?: CreateSpecificationDto[];
}
