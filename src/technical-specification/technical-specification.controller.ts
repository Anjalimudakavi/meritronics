import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TechnicalSpecificationService } from './technical-specification.service';
import { CreateTechnicalSpecificationDto } from './dto/create.dto';
import { UpdateTechnicalSpecificationDto } from './dto/update.dto';

@Controller('technical-specifications')
export class TechnicalSpecificationController {
  constructor(private readonly service: TechnicalSpecificationService) {}

  @Post()
  create(@Body() dto: CreateTechnicalSpecificationDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateTechnicalSpecificationDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
