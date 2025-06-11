import { Module } from '@nestjs/common';
import { FlowChartService } from './flow-chart.service';
import { FlowChartController } from './flow-chart.controller';

@Module({
  providers: [FlowChartService],
  controllers: [FlowChartController]
})
export class FlowChartModule {}
