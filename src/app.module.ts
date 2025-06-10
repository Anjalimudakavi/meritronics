import { Module } from '@nestjs/common';

// Core module for Prisma DB access
import { PrismaModule } from '../prisma/prisma.module';

// Business logic modules
import { ProcessFlowModule } from './process-flow/process-flow.module';
import { StationModule } from './station/station.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { RoleService } from './role/role.service';
import { RoleController } from './role/role.controller';
import { RoleModule } from './role/role.module';
import { OrganizationModule } from './organization/organization.module';
import { MpiService } from './mpi/mpi.service';
import { MpiModule } from './mpi/mpi.module';

@Module({
  imports: [
    PrismaModule,
    ProcessFlowModule,
    StationModule,
    AuthModule,
    UserModule,
    RoleModule,
    OrganizationModule,
    MpiModule,
  ],
  providers: [RoleService, MpiService],
  controllers: [RoleController],
})
export class AppModule {}
