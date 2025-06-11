import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateStationDto } from './dto/create-station.dto';
import { UpdateStationDto } from './dto/update-station.dto';

@Injectable()
export class StationService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateStationDto) {
    const { specifications, ...stationData } = data;
    return this.prisma.station.create({
      data: {
        ...stationData,
        specifications: {
          create: specifications || [],
        },
      },
      include: { specifications: true },
    });
  }

  async findAll() {
    return this.prisma.station.findMany({
      include: { specifications: true },
    });
  }

  async findOne(id: string) {
    return this.prisma.station.findUnique({
      where: { id },
      include: { specifications: true },
    });
  }

  async update(id: string, data: UpdateStationDto) {
    const { specifications, ...stationData } = data;
    return this.prisma.station.update({
      where: { id },
      data: {
        ...stationData,
        specifications: {
          deleteMany: {}, // delete all existing first
          create: specifications || [],
        },
      },
      include: { specifications: true },
    });
  }

  async remove(id: string) {
    return this.prisma.station.delete({
      where: { id },
    });
  }
}
