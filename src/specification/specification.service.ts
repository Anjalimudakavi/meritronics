import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateSpecificationDto } from './dto/create-specification.dto';
import { UpdateSpecificationDto } from './dto/update.specification.dto';
import slugify from 'slugify';
import { Type } from '@prisma/client'; // <-- Make sure this is from Prisma, not your DTO enum

@Injectable()
export class SpecificationService {
  constructor(private prisma: PrismaService) {}


async create(dto: CreateSpecificationDto) {
  const baseSlug = slugify(dto.name, { lower: true, strict: true });
  let slug = baseSlug;
  let count = 1;

  while (await this.prisma.specification.findUnique({ where: { slug } })) {
    slug = `${baseSlug}-${count++}`;
  }

  return this.prisma.specification.create({
    data: {
      ...dto,
      slug,
      type: Type[dto.type as keyof typeof Type], // <-- Enum-safe conversion
    },
  });
}


  // other methods...


  findAll() {
    return this.prisma.specification.findMany({ where: { isDeleted: false } });
  }

  findOne(id: string) {
    return this.prisma.specification.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateSpecificationDto) {
    const existing = await this.findOne(id);
    if (!existing) throw new NotFoundException('Specification not found');
    return this.prisma.specification.update({ where: { id }, data });
  }

  async remove(id: string) {
    const existing = await this.findOne(id);
    if (!existing) throw new NotFoundException('Specification not found');
    return this.prisma.specification.update({
      where: { id },
      data: { isDeleted: true },
    });
  }
}
