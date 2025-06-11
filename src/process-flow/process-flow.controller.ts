import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProcessFlowService } from './process-flow.service';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('process-flows')
export class ProcessFlowController {
  constructor(private readonly service: ProcessFlowService) {}
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, `${uniqueSuffix}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const dto = {
      fileName: file.originalname,
      filePath: file.path,
      fileSize: file.size,
    };
    return this.service.create(dto);
  }
}
