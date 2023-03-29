import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AvailableElement } from './elements/available-element.entity';
import { DepartmentElement } from './elements/department-element.entity';
import { ElementsModule } from './elements/elements.module';
import { UserPosition } from './user-position/user-position.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [DepartmentElement, AvailableElement, UserPosition],
      synchronize: true,
    }),
    ElementsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
