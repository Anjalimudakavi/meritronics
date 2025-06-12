import { CreateSpecificationDto } from '../../specification/dto/create-specification.dto';
import { CreateTechnicalSpecificationDto } from '../../technical-specification/dto/create.dto'; // ✅ Import this


export class CreateStationDto {
  stationId: string;
  stationName: string;
  status: string;
  stationCode: string;
  description: string;
  location: string;
  operator: string;
  addStation: string;

  specifications?: CreateSpecificationDto[];
  technicalSpecifications?: CreateTechnicalSpecificationDto[]; // ✅ Add this line

  flowCharts?: {
    content: string;
    files?: {
      name: string;
      size: number;
      url: string;
    }[];
  }[];

  documentation?: {
    content: string;
    files?: {
      name: string;
      size: number;
      url: string;
    }[];
  }[];

}



// import { CreateSpecificationDto } from '../../specification/dto/create-specification.dto';
// import { CreateFlowChartDto } from '../../flow-chart/dto/create.dto';
// import { CreateDocumentationDto } from '../../documentation/dto/create.dto';

// export class CreateStationDto {
//   stationId: string;
//   stationName: string;
//   status: string;
//   staticCode: string;
//   description: string;
//   location: string;
//   operator: string;
//   addStation: string;

//   specifications?: CreateSpecificationDto[];
//   flowCharts?: CreateFlowChartDto[];
//   documentation?: CreateDocumentationDto[];
// }
