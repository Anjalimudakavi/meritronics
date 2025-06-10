import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],             // ✅ Import PrismaModule to use PrismaService
  providers: [RoleService],            // ✅ Provide RoleService
  controllers: [RoleController],       // ✅ Add RoleController
  exports: [RoleService],              // ✅ Export RoleService if other modules need it
})
export class RoleModule {}
