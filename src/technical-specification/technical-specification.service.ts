import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTechnicalSpecificationDto } from './dto/create.dto';
import { UpdateTechnicalSpecificationDto } from './dto/update.dto';

@Injectable()
export class TechnicalSpecificationService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateTechnicalSpecificationDto) {
    return this.prisma.technicalSpecification.create({ data: dto });
  }

  findAll() {
    return this.prisma.technicalSpecification.findMany({
      include: { station: true }, // Optional: include station info
    });
  }

  findOne(id: number) {
    return this.prisma.technicalSpecification.findUnique({
      where: { id },
      include: { station: true },
    });
  }

  update(id: number, dto: UpdateTechnicalSpecificationDto) {
    return this.prisma.technicalSpecification.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: number) {
    return this.prisma.technicalSpecification.delete({
      where: { id },
    });
  }
}
