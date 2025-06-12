import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateDocumentationDto } from './dto/create.dto';
import { UpdateDocumentationtDto } from './dto/update.dto'; // ✅ You must create this
import { Prisma } from '@prisma/client';
import * as path from 'path';

@Injectable()
export class DocumentationService {
  constructor(private prisma: PrismaService) {}

  async create(body: CreateDocumentationDto, files: Express.Multer.File[]) {
    const { content, stationId } = body;

    const fileData: Prisma.DocumentationFileCreateWithoutDocumentationInput[] =
      files?.map((file) => ({
        name: file.originalname,
        size: file.size,
        url: `/uploads/documentation/${path.basename(file.path)}`,
      })) || [];

    return this.prisma.documentation.create({
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
    return this.prisma.documentation.findMany({
      include: { files: true },
    });
  }

  async findOne(id: string) {
    return this.prisma.documentation.findUnique({
      where: { id },
      include: { files: true },
    });
  }

  async update(id: string, data: UpdateDocumentationtDto, files?: Express.Multer.File[]) {
    const { content, stationId } = data;

    const fileData: Prisma.DocumentationFileCreateWithoutDocumentationInput[] =
      files?.map((file) => ({
        name: file.originalname,
        size: file.size,
        url: `/uploads/documentation/${path.basename(file.path)}`,
      })) || [];

    return this.prisma.documentation.update({
      where: { id },
      data: {
        ...(content && { content }),
        ...(stationId && { stationId }),
        ...(files?.length
          ? {
              files: {
                deleteMany: {}, // ✅ Remove old files
                create: fileData,
              },
            }
          : {}),
      },
      include: {
        files: true,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.documentation.delete({
      where: { id },
    });
  }
}
