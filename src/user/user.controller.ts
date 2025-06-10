// user.controller.ts
import { Controller, Post, Body, Param, Patch } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createUser(@Body() body: { name: string; email: string; password: string; organizationId: string; roleId?: string }) {
    return this.userService.createUser(body);
  }

  @Patch(':userId/role')
  async assignRole(
    @Param('userId') userId: string,
    @Body() body: { roleId: string },
  ) {
    return this.userService.assignRoleToUser(userId, body.roleId);
  }
}
