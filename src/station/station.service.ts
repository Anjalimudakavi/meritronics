import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateStationDto } from './dto/create-station.dto';
import { UpdateStationDto } from './dto/update-station.dto';

@Injectable()
export class StationService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateStationDto) {
    return this.prisma.station.create({
      data: {
        ...dto, // includes processFlowId and squeegeeSettingsId directly
      },
    });
  }

  async update(stationId: string, dto: UpdateStationDto) {
    return this.prisma.station.update({
      where: { stationId },
      data: {
        ...dto,
      },
    });
  }

  async findAll() {
    return this.prisma.station.findMany({
      include: {
        processFlow: true,
        squeegeeSettings: true,
      },
    });
  }

  async findOne(stationId: string) {
    return this.prisma.station.findUnique({
      where: { stationId },
      include: {
        processFlow: true,
        squeegeeSettings: true,
      },
    });
  }

  async remove(stationId: string) {
    return this.prisma.station.delete({
      where: { stationId },
    });
  }
}
