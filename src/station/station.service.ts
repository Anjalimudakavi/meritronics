import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateStationDto } from './dto/create-station.dto';
import { UpdateStationDto } from './dto/update-station.dto';

@Injectable()
export class StationService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateStationDto) {
    const {
      specifications,
      technicalSpecifications,
      flowCharts,
      documentation,
      ...stationFields
    } = data;

    return this.prisma.station.create({
      data: {
        ...stationFields,

        specifications: {
          create: specifications?.map((spec) => ({
            ...spec,
            slug: spec.name
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/^-+|-+$/g, ''),
            isRequired: spec.isRequired ?? false,
            isActive: spec.isActive ?? true,
            suggestions: spec.suggestions ?? [],
          })) ?? [],
        },

        technicalSpecifications: {
          create: technicalSpecifications?.map((ts) => ({
            name: ts.name,
            value: ts.value,
          })) ?? [],
        },

        flowCharts: {
          create: flowCharts?.map((fc) => ({
            content: fc.content,
            files: {
              create: fc.files?.map((f) => ({
                name: f.name,
                size: f.size,
                url: f.url,
              })) ?? [],
            },
          })) ?? [],
        },

        documentation: {
          create: documentation?.map((doc) => ({
            content: doc.content,
            files: {
              create: doc.files?.map((f) => ({
                name: f.name,
                size: f.size,
                url: f.url,
              })) ?? [],
            },
          })) ?? [],
        },
      },
      include: {
        specifications: true,
        technicalSpecifications: true,
        flowCharts: { include: { files: true } },
        documentation: { include: { files: true } },
      },
    });
  }

  async findAll() {
    return this.prisma.station.findMany({
      include: {
        specifications: true,
        technicalSpecifications: true,
        flowCharts: { include: { files: true } },
        documentation: { include: { files: true } },
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.station.findUnique({
      where: { id },
      include: {
        specifications: true,
        technicalSpecifications: true,
        flowCharts: { include: { files: true } },
        documentation: { include: { files: true } },
      },
    });
  }

  async update(id: string, dto: UpdateStationDto) {
    const {
      specifications,
      technicalSpecifications,
      flowCharts,
      documentation,
      ...stationFields
    } = dto;

    return this.prisma.station.update({
      where: { id },
      data: {
        ...stationFields,

        specifications: specifications
          ? {
              deleteMany: {},
              create: specifications.map((spec) => ({
                ...spec,
                slug: spec.name
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, '-')
                  .replace(/^-+|-+$/g, ''),
                isRequired: spec.isRequired ?? false,
                isActive: spec.isActive ?? true,
                suggestions: spec.suggestions ?? [],
              })),
            }
          : undefined,

        technicalSpecifications: technicalSpecifications
          ? {
              deleteMany: {},
              create: technicalSpecifications.map((ts) => ({
                name: ts.name,
                value: ts.value,
              })),
            }
          : undefined,

        flowCharts: flowCharts
          ? {
              deleteMany: {},
              create: flowCharts.map((fc) => ({
                content: fc.content,
                files: {
                  create: fc.files?.map((f) => ({
                    name: f.name,
                    size: f.size,
                    url: f.url,
                  })) ?? [],
                },
              })),
            }
          : undefined,

        documentation: documentation
          ? {
              deleteMany: {},
              create: documentation.map((doc) => ({
                content: doc.content,
                files: {
                  create: doc.files?.map((f) => ({
                    name: f.name,
                    size: f.size,
                    url: f.url,
                  })) ?? [],
                },
              })),
            }
          : undefined,
      },
      include: {
        specifications: true,
        technicalSpecifications: true,
        flowCharts: { include: { files: true } },
        documentation: { include: { files: true } },
      },
    });
  }

  async remove(id: string) {
    return this.prisma.station.delete({
      where: { id },
    });
  }
}

