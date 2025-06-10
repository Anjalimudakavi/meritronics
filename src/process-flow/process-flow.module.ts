import { Module } from '@nestjs/common';
import { ProcessFlowService } from './process-flow.service';
import { ProcessFlowController } from './process-flow.controller';

@Module({
  controllers: [ProcessFlowController],
  providers: [ProcessFlowService],
})
export class ProcessFlowModule {}