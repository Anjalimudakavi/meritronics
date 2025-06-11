import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StationService } from './station.service';
import { CreateStationDto } from './dto/create-station.dto';
import { UpdateStationDto } from './dto/update-station.dto';
import {
  LabelLocation,
  PCBBoardSide,
  PrintingMaterial,
  SolderPasteType,
  SqueegeeType,
} from './enums'; // Adjust path if needed

@Controller('stations')
export class StationController {
  constructor(private readonly service: StationService) {}

  @Post()
  create(@Body() dto: CreateStationDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':stationId')
  findOne(@Param('stationId') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':stationId')
  update(@Param('stationId') id: string, @Body() dto: UpdateStationDto) {
    return this.service.update(id, dto);
  }

  @Delete(':stationId')
  remove(@Param('stationId') id: string) {
    return this.service.remove(id);
  }

  
  @Get('enums/label-location')
  getLabelLocations() {
    return Object.values(LabelLocation);
  }

  @Get('enums/pcb-board-side')
  getPCBBoardSides() {
    return Object.values(PCBBoardSide);
  }

  @Get('enums/printing-material')
  getPrintingMaterials() {
    return Object.values(PrintingMaterial);
  }

  @Get('enums/solder-paste-type')
  getSolderPasteTypes() {
    return Object.values(SolderPasteType);
  }

  @Get('enums/squeegee-type')
  getSqueegeeTypes() {
    return Object.values(SqueegeeType);
  }
}
