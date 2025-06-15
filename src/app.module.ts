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


@Module({
  imports: [
    PrismaModule,
    StationModule,
    SpecificationModule,

    FlowChartModule,

    DocumentationModule,

    TechnicalSpecificationModule,

    AuthorizationModule,

    UserModule,
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
