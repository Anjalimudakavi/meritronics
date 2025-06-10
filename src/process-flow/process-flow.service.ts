import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateProcessFlowDto } from './dto/create-process-flow.dto';
import { UpdateProcessFlowDto } from './dto/update-process-flow.dto';

@Injectable()
export class ProcessFlowService {
  constructor(private prisma: PrismaService) {}

  // Create a new ProcessFlow record
  create(dto: CreateProcessFlowDto) {
    return this.prisma.processFlow.create({
      data: dto,
    });
  }

  // Get all ProcessFlow records
  findAll() {
    return this.prisma.processFlow.findMany();
  }

  // Get a single ProcessFlow record by id
  findOne(id: number) {
    return this.prisma.processFlow.findUnique({
      where: { id },
    });
  }

  // Update ProcessFlow record by id
  update(id: number, dto: UpdateProcessFlowDto) {
    return this.prisma.processFlow.update({
      where: { id },
      data: dto,
    });
  }

  // Delete ProcessFlow record by id
  remove(id: number) {
    return this.prisma.processFlow.delete({
      where: { id },
    });
  }
}
