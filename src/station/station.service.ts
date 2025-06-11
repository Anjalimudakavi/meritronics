import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateStationDto } from './dto/create-station.dto';
import { UpdateStationDto } from './dto/update-station.dto';

@Injectable()
export class StationService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateStationDto) {
    const { specifications, flowCharts, documentation, ...stationData } = data;

    return this.prisma.station.create({
      data: {
        ...stationData,
        specifications: {
          create: specifications || [],
        },
        flowCharts: {
          create: flowCharts?.map((chart) => ({
            content: chart.content,
            files: {
              create: chart.files || [],
            },
          })) || [],
        },
        documentation: {
          create: documentation?.map((doc) => ({
            content: doc.content,
            files: {
              create: doc.files || [],
            },
          })) || [],
        },
      },
      include: {
        specifications: true,
        flowCharts: {
          include: { files: true },
        },
        documentation: {
          include: { files: true },
        },
      },
    });
  }

  async findAll() {
    return this.prisma.station.findMany({
      include: {
        specifications: true,
        flowCharts: {
          include: { files: true },
        },
        documentation: {
          include: { files: true },
        },
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.station.findUnique({
      where: { id },
      include: {
        specifications: true,
        flowCharts: {
          include: { files: true },
        },
        documentation: {
          include: { files: true },
        },
      },
    });
  }

  async update(id: string, data: UpdateStationDto) {
    const { specifications, flowCharts, documentation, ...stationData } = data;

    return this.prisma.station.update({
      where: { id },
      data: {
        ...stationData,
        specifications: {
          deleteMany: {},
          create: specifications || [],
        },
        flowCharts: {
          deleteMany: {},
          create: flowCharts?.map((chart) => ({
            content: chart.content,
            files: {
              create: chart.files || [],
            },
          })) || [],
        },
        documentation: {
          deleteMany: {},
          create: documentation?.map((doc) => ({
            content: doc.content,
            files: {
              create: doc.files || [],
            },
          })) || [],
        },
      },
      include: {
        specifications: true,
        flowCharts: {
          include: { files: true },
        },
        documentation: {
          include: { files: true },
        },
      },
    });
  }

  async remove(id: string) {
    return this.prisma.station.delete({
      where: { id },
    });
  }
}
