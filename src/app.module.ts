import { Module } from '@nestjs/common';

// Core module for Prisma DB access
import { PrismaModule } from '../prisma/prisma.module';

// Business logic modules

import { StationModule } from './station/station.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { RoleService } from './role/role.service';
import { RoleController } from './role/role.controller';
import { RoleModule } from './role/role.module';
import { OrganizationModule } from './organization/organization.module';

import { SpecificationModule } from './specification/specification.module';
import { FlowChartModule } from './flow-chart/flow-chart.module';
import { DocumentationModule } from './documentation/documentation.module';
import { TechnicalSpecificationModule } from './technical-specification/technical-specification.module';

@Module({
  imports: [
    PrismaModule,
    StationModule,
    AuthModule,
    UserModule,
    RoleModule,
    OrganizationModule,

    SpecificationModule,

    FlowChartModule,

    DocumentationModule,

    TechnicalSpecificationModule,
  ],
  providers: [RoleService],
  controllers: [RoleController],
})
export class AppModule {}
