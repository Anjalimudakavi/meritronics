import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateMpiDto } from './dto/create-mpi.dto';
import { UpdateMpiDto } from './dto/update-mpi.dto';

@Injectable()
export class MpiService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateMpiDto) {
    return this.prisma.mpi.create({ data });
  }

  findAll() {
    return this.prisma.mpi.findMany({
      include: { station: true },
    });
  }


// src/mpi/mpi.service.ts
async findByStationName(stationName: string) {
  return this.prisma.mpi.findMany({
    where: {
      station: {
        stationName: {
          contains: stationName,
          mode: 'insensitive', // Case-insensitive search
        },
      },
    },
    include: {
      station: {
        include: {
          processFlow: true,
        },
      },
    },
  });
}



  findOne(id: string) {
    return this.prisma.mpi.findUnique({
      where: { id },
      include: { station: true },
    });
  }

  update(id: string, data: UpdateMpiDto) {
    return this.prisma.mpi.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.mpi.delete({
      where: { id },
    });
  }
}
