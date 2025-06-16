import { Module } from '@nestjs/common';

// Core module for Prisma DB access
import { PrismaModule } from '../prisma/prisma.module';

// Business logic modules
import { StationModule } from './station/station.module';

import { SpecificationModule } from './specification/specification.module';
import { FlowChartModule } from './flow-chart/flow-chart.module';
import { DocumentationModule } from './documentation/documentation.module';
import { TechnicalSpecificationModule } from './technical-specification/technical-specification.module';
import { AuthorizationModule } from './authorization/authorization.module';
import { UserModule } from './user/user.module';
import { DepartmentService } from './department/department.service';
import { DepartmentModule } from './department/department.module';
import { EmployeeModule } from './employee/employee.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    PrismaModule,
    StationModule,
    SpecificationModule,
AuthModule,
    FlowChartModule,

    DocumentationModule,

    TechnicalSpecificationModule,

    AuthorizationModule,

    UserModule,

    DepartmentModule,

    EmployeeModule,
  ],
  providers: [DepartmentService],
  controllers: [],
})
export class AppModule {}
