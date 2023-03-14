import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

const PORT = process.env.PORT || 4337;
const ADDRESS = process.env.ADDRESS || '';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: {
      origin: process.env.ALLOWED_ORIGINS,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      preflightContinue: false,
      optionsSuccessStatus: 204,
      credentials: true,
    },
  });

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const config = new DocumentBuilder()
    .setTitle('Invalidity charts')
    .setDescription('Invalidity charts API description')
    .setVersion('1.0.0')
    .addTag('invalidity-charts')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(PORT, ADDRESS, () => {
    console.log(`Server started on http://localhost:${PORT}`);
    console.log(`API docs on http://localhost:${PORT}/api/docs`);
  });
}

(async () => await bootstrap())();
