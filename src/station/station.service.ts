import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateStationDto } from './dto/create-station.dto';
import { UpdateStationDto } from './dto/update-station.dto';

@Injectable()
export class StationService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateStationDto) {
    const { processFlowId, ...rest } = dto;

    return this.prisma.station.create({
      data: {
        ...rest,
        ...(processFlowId && {
          processFlow: {
            connect: { id: processFlowId },
          },
        }),
      },
    });
  }

  async update(stationId: string, dto: UpdateStationDto) {
    const { processFlowId, ...rest } = dto;

    return this.prisma.station.update({
      where: { stationId },
      data: {
        ...rest,
        ...(processFlowId !== undefined && {
          processFlow: processFlowId
            ? { connect: { id: processFlowId } }
            : { disconnect: true },
        }),
      },
    });
  }

  async findAll() {
    return this.prisma.station.findMany({
      include: {
        processFlow: true,
      },
    });
  }

  async findOne(stationId: string) {
    return this.prisma.station.findUnique({
      where: { stationId },
      include: {
        processFlow: true,
      },
    });
  }

  async remove(stationId: string) {
    return this.prisma.station.delete({
      where: { stationId },
    });
  }
}
