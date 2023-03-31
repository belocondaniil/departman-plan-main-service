import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServerMessages } from 'src/config';
import { unprocessableEntity } from 'src/config/errors';
import { Repository } from 'typeorm';

import { AvailableElement } from './available-element.entity';
import { CreateStandardElementInterface } from './interface/standard-element.interface';
import { UpdateAvailableElementInterface } from './interface/update-element.interface';

@Injectable()
export class ElementsService {
  constructor(
    @InjectRepository(AvailableElement)
    private readonly standardElementRepository: Repository<AvailableElement>,
  ) {}

  async getAvailableElementByName(name: string) {
    return this.standardElementRepository.findOne({
      where: { name },
      select: { id: true, name: true, type: true },
    });
  }

  async createAvailableElement(elementData: CreateStandardElementInterface) {
    const standardElementRecord = await this.getAvailableElementByName(
      elementData.name,
    );

    if (standardElementRecord) {
      unprocessableEntity(ServerMessages.ELEMENT_ALREADY_EXIST);
    }

    return this.standardElementRepository.save({
      ...elementData,
    });
  }

  async updateAvailableElement(elementData: UpdateAvailableElementInterface) {
    const { id: elementId, ...data } = elementData;

    return this.standardElementRepository.update(
      {
        id: elementId,
      },
      {
        ...data,
      },
    );
  }
}
