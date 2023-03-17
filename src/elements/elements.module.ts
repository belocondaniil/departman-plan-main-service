import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ElementsController } from './elements.controller';
import { ElementsService } from './elements.service';
import { StandardElement } from './standard-element.entity';

@Module({
  controllers: [ElementsController],
  providers: [ElementsService],
  imports: [TypeOrmModule.forFeature([StandardElement])],
  exports: [ElementsService],
})
export class ElementsModule {}
