import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AvailableElement } from './available-element.entity';
import { ElementsController } from './elements.controller';
import { ElementsService } from './elements.service';

@Module({
  controllers: [ElementsController],
  providers: [ElementsService],
  imports: [TypeOrmModule.forFeature([AvailableElement])],
  exports: [ElementsService],
})
export class ElementsModule {}
