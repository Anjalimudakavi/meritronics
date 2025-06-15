//seed.ts
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  try {
    
    const org = await prisma.organization.upsert({
      where: { name: 'meritronics' },
      update: {},
      create: { name: 'meritronics', isActive: true },
    });
    console.log('✅ Organization Seeded:', org);

    const adminRole = await prisma.role.upsert({
      where: { name: 'Admin' },
      update: {},
      create: {
        name: 'Admin',
        description: 'Administrator role',
        isActive: true,
      },
    });
    console.log('✅ Admin Role Seeded:', adminRole);

    const employeeRole = await prisma.role.upsert({
      where: { name: 'Employee' },
      update: {},
      create: {
        name: 'Employee',
        description: 'Employee role',
        isActive: true,
      },
    });

    const customerRole = await prisma.role.upsert({
      where: { name: 'Customer' },
      update: {},
      create: {
        name: 'Customer',
        description: 'Customer role',
        isActive: true,
      },
    });

    // Create Permissions
    const readPermission = await prisma.permission.upsert({
      where: { name: 'READ_DATA' },
      update: {},
      create: { name: 'READ_DATA', description: 'Permission to read data', isActive: true },
    });

    const writePermission = await prisma.permission.upsert({
      where: { name: 'WRITE_DATA' },
      update: {},
      create: { name: 'WRITE_DATA', description: 'Permission to write data', isActive: true },
    });

    console.log('✅ Database seeded successfully!');
  } catch (error) {
    console.error('❌ Database seeding failed:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

main();