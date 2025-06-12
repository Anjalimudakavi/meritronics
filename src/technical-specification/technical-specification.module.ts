import { Module } from '@nestjs/common';
import { TechnicalSpecificationService } from './technical-specification.service';
import { TechnicalSpecificationController } from './technical-specification.controller';

@Module({
  providers: [TechnicalSpecificationService],
  controllers: [TechnicalSpecificationController]
})
export class TechnicalSpecificationModule {}
