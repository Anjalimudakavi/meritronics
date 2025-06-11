import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { DocumentationService } from './documentation.service';
import { CreateDocumentationDto } from './dto/create.dto';
import { UpdateDocumentationtDto } from './dto/update.dto';

@Controller('documentation')
export class DocumentationController {
  constructor(private readonly service: DocumentationService) {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor(
      [{ name: 'files', maxCount: 10 }],
      {
        storage: diskStorage({
          destination: './uploads/documentation',
          filename: (req, file, cb) => {
            const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
            cb(null, `${uniqueSuffix}${extname(file.originalname)}`);
          },
        }),
      },
    ),
  )
  async create(
    @Body() body: CreateDocumentationDto,
    @UploadedFiles() files: { files?: Express.Multer.File[] },
  ) {
    return this.service.create(body, files?.files || []);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateDocumentationtDto,
  ) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
