// role.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class RoleService {
  constructor(private prisma: PrismaService) {}

  async createRole(name: string, organizationId: string, description?: string) {
    return this.prisma.role.create({
      data: {
        name,
        description,
        organization: { connect: { id: organizationId } },
      },
    });
  }

  async findAllRoles() {
    return this.prisma.role.findMany();
  }

  async findRoleById(id: string) {
    return this.prisma.role.findUnique({ where: { id } });
  }
}
