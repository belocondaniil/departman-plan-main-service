import { ElementType } from 'src/config';

export interface CreateStandardElementInterface {
  type: ElementType;
  name: string;
  width: number;
  height: number;
}
