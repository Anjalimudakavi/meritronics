import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpecificationService } from './specification.service';
import { CreateSpecificationDto } from './dto/create-specification.dto';
import { UpdateSpecificationDto } from './dto/update.specification.dto';
import { Type } from './enum';

@Controller('specifications')
export class SpecificationController {
  constructor(private readonly service: SpecificationService) {}

  @Post()
  create(@Body() dto: CreateSpecificationDto) {
    return this.service.create(dto);
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
  update(@Param('id') id: string, @Body() dto: UpdateSpecificationDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }

  // Endpoint to get all enum values
  @Get('types/enum')
  getTypes() {
    return Object.values(Type);
  }
}
