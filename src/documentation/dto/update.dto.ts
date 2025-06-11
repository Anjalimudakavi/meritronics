export class UpdateDocumentationtDto {
  content?: string;
  stationId?: string;
  files?: {
    name: string;
    size: number;
    url: string;
  }[];
}
