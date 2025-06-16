
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class AuthorizationService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Assign a role to a user
   */
  async assignRoleToUser(userId: string, roleId: string) {
    return await this.prisma.user.update({
      where: { id: userId },
      data: { roleId },
    });
  }

  /**
   * Get all roles
   */
  async getAllRoles() {
    return await this.prisma.role.findMany({
      include: {
        permissions: {
          include: { permission: true },
        },
      },
    });
  }

  /**
   * Create a new role
   */
async createRole(name: string, description?: string, departmentId?: string) {
  return await this.prisma.role.create({
    data: {
      name,
      description: description ?? null,
      department: departmentId ? { connect: { id: departmentId } } : undefined,
    },
  });
}


  /**
   * Get all permissions
   */
  async getAllPermissions() {
    return await this.prisma.permission.findMany();
  }

  /**
   * Create a new permission
   */
  async createPermission(permissionId: string, name: string, description?: string) {
    return await this.prisma.permission.create({
      data: {
        id: permissionId,
        name,
        description: description || null,
        isActive: true,
      },
    });
  }

  /**
   * Assign a permission to a role
   */
  async assignPermissionToRole(roleId: string, permissionId: string) {
    return await this.prisma.rolePermission.create({
      data: {
        role: { connect: { id: roleId } },
        permission: { connect: { id: permissionId } },
      },
    });
  }

  /**
   * Get permissions for a role
   */
  async getPermissionsForRole(roleId: string) {
    return await this.prisma.rolePermission.findMany({
      where: { roleId },
      include: {
        permission: true,
        role: true,
      },
    });
  }

  /**
   * Remove a permission from a role
   */
  async removePermissionFromRole(roleId: string, permissionId: string) {
    return await this.prisma.rolePermission.deleteMany({
      where: {
        roleId,
        permissionId,
      },
    });
  }
}
