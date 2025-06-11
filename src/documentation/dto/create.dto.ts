export class CreateDocumentationDto {
  content: string;
  stationId: string;
  files: {
    name: string;
    size: number;
    url: string;
  }[];
}
