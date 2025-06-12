export class UpdateFlowChartDto {
  content?: string;
  stationId?: string;
  files?: {
    name: string;
    size: number;
    url: string;
  }[];
    deleteFileIds?: string[];
}
