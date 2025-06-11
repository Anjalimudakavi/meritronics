import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateSpecificationDto } from './dto/create-specification.dto';
import { UpdateSpecificationDto } from './dto/update.specification.dto';

@Injectable()
export class SpecificationService {
  constructor(private prisma: PrismaService) {}

async create(data: CreateSpecificationDto) {
  try {
    // Generate slug if not provided
    const slug = data.slug ?? data.name.toLowerCase().replace(/\s+/g, '-');

    // Check if the station exists
    const station = await this.prisma.station.findUnique({
      where: { id: data.stationId },
    });

    if (!station) {
      throw new Error(`Station with id '${data.stationId}' does not exist.`);
    }

    // Check for duplicate name in same station (optional but useful)
    const existing = await this.prisma.specification.findFirst({
      where: {
        name: data.name,
        stationId: data.stationId,
      },
    });

    if (existing) {
      throw new Error(`Specification '${data.name}' already exists for this station.`);
    }

    // Create the specification
    return await this.prisma.specification.create({
      data: {
        ...data,
        slug,
      },
    });
  } catch (err) {
    if (err.code === 'P2002') {
      throw new Error(`Specification with name '${data.name}' already exists.`);
    }
    throw err;
  }
}



  async findAll() {
    return this.prisma.specification.findMany();
  }

  async findOne(id: string) {
    return this.prisma.specification.findUnique({
      where: { id },
    });
  }

  async update(id: string, data: UpdateSpecificationDto) {
    return this.prisma.specification.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return this.prisma.specification.delete({
      where: { id },
    });
  }
}
