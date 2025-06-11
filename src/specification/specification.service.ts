import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateSpecificationDto } from './dto/create-specification.dto';
import { UpdateSpecificationDto } from './dto/update.specification.dto';

@Injectable()
export class SpecificationService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateSpecificationDto) {
    return this.prisma.specification.create({
      data,
    });
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
