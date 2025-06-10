// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);

//   // Enable CORS for local and LAN access (you can restrict these later)
//   app.enableCors({
//     origin: [
//       'http://localhost:3000',          // local dev frontend
//       'http://192.168.93.88:3000',      // if frontend is hosted on same machine via IP
//       'http://192.168.0.130:3000'       // another frontend IP (e.g. your dev PC or LAN device)
//     ],
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     allowedHeaders: 'Content-Type,Authorization',
//     credentials: true
//   });

//   // Listen on all network interfaces so other devices can reach it
//   await app.listen(3000, '0.0.0.0');
// }
// bootstrap();



import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for local and LAN access (you can restrict these later)
  app.enableCors({
    origin: [
      'http://localhost:3000',          // local dev frontend
      'http://192.168.93.88:3000',      // if frontend is hosted on same machine via IP
      'http://192.168.0.130:3000'       // another frontend IP (e.g. your dev PC or LAN device)
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true
  });

  // Listen on all network interfaces so other devices can reach it
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
