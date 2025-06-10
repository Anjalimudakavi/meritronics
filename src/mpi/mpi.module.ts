import { Module } from '@nestjs/common';
import { MpiService } from './mpi.service';
import { MpiController } from './mpi.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [MpiController],
  providers: [MpiService, PrismaService],
})
export class MpiModule {}
