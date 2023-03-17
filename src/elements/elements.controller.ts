import { Body, Controller, Post } from '@nestjs/common';

import { CreateStandardElementDto } from './dto/create-standard-element.dto';
import { ElementsService } from './elements.service';

@Controller('elements')
export class ElementsController {
  constructor(private readonly elementsService: ElementsService) {}

  @Post('/standard-element/create')
  async createStandardElement(@Body() dto: CreateStandardElementDto) {
    return await this.elementsService.createStandardElement(dto);
  }
}
