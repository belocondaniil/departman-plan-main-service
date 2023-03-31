import { ElementType } from 'src/config';

export interface UpdateAvailableElementInterface {
  id: string;
  width?: number;
  height?: number;
  name?: string;
  type?: ElementType;
}
