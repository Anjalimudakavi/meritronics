import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  /**
   * Create a new user with optional role assignment
   */
  async createUser(data: {
    name: string;
    email: string;
    password: string;
    organizationId: string;
    roleId?: string;
  }) {
    const { organizationId, roleId, ...rest } = data;

    return this.prisma.user.create({
      data: {
        ...rest, // name, email, password
        organization: {
          connect: { id: organizationId },
        },
        ...(roleId && {
          role: {
            connect: { id: roleId },
          },
        }),
      },
    });
  }

  /**
   * Assign a role to an existing user
   */
  async assignRoleToUser(userId: string, roleId: string) {
    return this.prisma.user.update({
      where: { id: userId },
      data: {
        role: {
          connect: { id: roleId },
        },
      },
    });
  }

  /**
   * Get user by ID with role and organization included
   */
  async findUserById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        role: true,
        organization: true,
      },
    });
  }

  /**
   * Find user by email with role and organization included
   */
  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
      include: {
        role: true,
        organization: true,
      },
    });
  }

  /**
   * Get all users with role and organization included
   */
  async findAllUsers() {
    return this.prisma.user.findMany({
      include: {
        role: true,
        organization: true,
      },
    });
  }
}
