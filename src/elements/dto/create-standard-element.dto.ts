import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';
import { ElementType } from 'src/config';

export class CreateStandardElementDto {
  @IsString({ message: 'Element name should be string' })
  @IsNotEmpty({ message: 'Element name required' })
  @MaxLength(255, { message: 'Element name is too long' })
  readonly name: string;

  @IsNotEmpty({ message: 'Element width required' })
  @IsNumber()
  readonly width: number;

  @IsNotEmpty({ message: 'Element width required' })
  @IsNumber()
  readonly height: number;

  @IsEnum(ElementType)
  type: ElementType;
}
