import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  /**
   * Signup with validation and hashed password
   * Requires: name, email, password, organizationId
   * Optional: roleId
   */
  async signup(
    name: string,
    email: string,
    password: string,
    organizationId: string,
    roleId?: string,
  ) {
    const existingUser = await this.userService.findByEmail(email);
    if (existingUser) {
      throw new BadRequestException('Email already in use');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.userService.createUser({
      name,
      email,
      password: hashedPassword,
      organizationId,
      roleId,
    });

    return { message: 'User registered', userId: user.id };
  }

  /**
   * Login and return JWT token if valid
   */
  async login(email: string, password: string) {
    const user = await this.userService.findByEmail(email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const token = this.jwtService.sign({
      sub: user.id,
      email: user.email,
    });

    return {
      access_token: token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role?.name ?? null,  // Optional chaining and fallback
        organization: user.organization?.name ?? null,
      },
    };
  }
}  // <-- Add this closing brace to close the AuthService class
