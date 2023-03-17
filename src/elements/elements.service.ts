import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServerMessages } from 'src/config';
import { unprocessableEntity } from 'src/config/errors';
import { Repository } from 'typeorm';

import { CreateStandardElementInterface } from './interface/standard-element.interface';
import { StandardElement } from './standard-element.entity';

@Injectable()
export class ElementsService {
  constructor(
    @InjectRepository(StandardElement)
    private readonly standardElementRepository: Repository<StandardElement>,
  ) {}

  async getStandardElementByName(name: string) {
    return this.standardElementRepository.findOne({
      where: { name },
      select: { id: true, name: true, type: true },
    });
  }

  async createStandardElement(elementData: CreateStandardElementInterface) {
    const standardElementRecord = await this.getStandardElementByName(
      elementData.name,
    );

    if (standardElementRecord) {
      unprocessableEntity(ServerMessages.ELEMENT_ALREADY_EXIST);
    }

    return this.standardElementRepository.save({
      ...elementData,
    });
  }
}
