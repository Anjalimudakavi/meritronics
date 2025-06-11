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
import { FlowChartService } from './flow-chart.service';
import { CreateFlowChartDto } from './dto/create.dto';
import { UpdateFlowChartDto } from './dto/update.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('flowcharts')
export class FlowChartController {
  constructor(private readonly service: FlowChartService) {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor(
      [{ name: 'files', maxCount: 10 }],
      {
        storage: diskStorage({
          destination: './uploads/flowcharts',
          filename: (req, file, cb) => {
            const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
            cb(null, `${uniqueSuffix}${extname(file.originalname)}`);
          },
        }),
      },
    ),
  )
  async create(
    @Body() body: any,
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
  update(@Param('id') id: string, @Body() dto: UpdateFlowChartDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
