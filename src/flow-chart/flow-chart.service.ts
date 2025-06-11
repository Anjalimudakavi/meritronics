import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateFlowChartDto } from './dto/create.dto';
import { Prisma } from '@prisma/client';
import * as path from 'path';

@Injectable()
export class FlowChartService {
  constructor(private prisma: PrismaService) {}

  async create(body: CreateFlowChartDto, files: Express.Multer.File[]) {
    const { content, stationId } = body;

    const fileData: Prisma.FlowChartFileCreateWithoutFlowChartInput[] =
      files?.map((file) => ({
        name: file.originalname,
        size: file.size,
        url: `/uploads/flowcharts/${path.basename(file.path)}`, // or full URL if serving
      })) || [];

    return this.prisma.flowChart.create({
      data: {
        content,
        stationId,
        files: {
          create: fileData,
        },
      },
      include: {
        files: true,
      },
    });
  }

  async findAll() {
    return this.prisma.flowChart.findMany({
      include: { files: true },
    });
  }

  async findOne(id: string) {
    return this.prisma.flowChart.findUnique({
      where: { id },
      include: { files: true },
    });
  }

  async update(id: string, data: any) {
    // Optional: Add file support in update logic as needed
  }

  async remove(id: string) {
    return this.prisma.flowChart.delete({
      where: { id },
    });
  }
}
