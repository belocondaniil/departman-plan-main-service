import { Body, Controller, Patch, Post } from '@nestjs/common';

import { CreateStandardElementDto } from './dto/create-standard-element.dto';
import { UpdateAvailableElementDto } from './dto/update-available-element.dto';
import { ElementsService } from './elements.service';

@Controller('elements')
export class ElementsController {
  constructor(private readonly elementsService: ElementsService) {}

  @Post('/available-element/create')
  async createAvailableElement(@Body() dto: CreateStandardElementDto) {
    return await this.elementsService.createAvailableElement(dto);
  }

  @Patch('/available-element')
  async updateAvailableElement(@Body() dto: UpdateAvailableElementDto) {
    return await this.elementsService.updateAvailableElement(dto);
  }
}
