import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { MpiService } from './mpi.service';
import { CreateMpiDto } from './dto/create-mpi.dto';
import { UpdateMpiDto } from './dto/update-mpi.dto';
@Controller('mpi')
export class MpiController {
  constructor(private readonly mpiService: MpiService) {}

  @Post()
  create(@Body() createMpiDto: CreateMpiDto) {
    return this.mpiService.create(createMpiDto);
  }
  // src/mpi/mpi.controller.ts

@Get('search/:stationName')
findByStationName(@Param('stationName') stationName: string) {
  return this.mpiService.findByStationName(stationName);
}


  @Get()
  findAll() {
    return this.mpiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mpiService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMpiDto: UpdateMpiDto) {
    return this.mpiService.update(id, updateMpiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mpiService.remove(id);
  }
}
