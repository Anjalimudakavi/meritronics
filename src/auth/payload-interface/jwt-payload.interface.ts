// src/auth/payload-interface/jwt-payload.interface.ts
export interface JwtPayload {
  userId: string;
  email: string;
  sub: string;
  roleId: string;       // Add this
  role: string;         // Add this (this is the role name like 'Sales Executive')
}