import { Controller, Post, Get, Body } from '@nestjs/common';
import { RoleService } from './role.service';

@Controller('roles')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @Post()
  async createRole(
    @Body() createRoleDto: { name: string; organizationId: string; description?: string }
  ) {
    return this.roleService.createRole(
      createRoleDto.name,
      createRoleDto.organizationId,
      createRoleDto.description
    );
  }



  @Get()
  async getAllRoles() {
    return this.roleService.findAllRoles();
  }
}
