import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateFlowChartDto } from './dto/create.dto';
import { UpdateFlowChartDto } from './dto/update.dto';
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

 async update(id: string, dto: UpdateFlowChartDto) {
  const { content, stationId, files = [], deleteFileIds = [] } = dto;

  // Delete old files if requested
  if (deleteFileIds.length) {
    await this.prisma.flowChartFile.deleteMany({
      where: {
        id: { in: deleteFileIds },
        flowChartId: id,
      },
    });
  }

  // Add new files
  if (files.length) {
    await this.prisma.flowChartFile.createMany({
      data: files.map(file => ({
        name: file.name,
        size: file.size,
        url: file.url,
        flowChartId: id,
      })),
    });
  }

  // Update FlowChart metadata
  return this.prisma.flowChart.update({
    where: { id },
    data: {
      content,
      stationId,
    },
    include: { files: true }, // Optional: return full file list
  });
}


  async remove(id: string) {
    return this.prisma.flowChart.delete({
      where: { id },
    });
  }
}
