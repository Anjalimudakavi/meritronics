// src/auth/auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup(@Body() body: { 
    name: string; 
    email: string; 
    password: string; 
    organizationId: string;   // add this
    roleId?: string;          // optional
  }) {
    return this.authService.signup(
      body.name,
      body.email,
      body.password,
      body.organizationId,
      body.roleId,
    );
  }

  @Post('login')
  login(@Body() body: { email: string; password: string }) {
    return this.authService.login(body.email, body.password);
  }
}
