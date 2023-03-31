import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { ElementType } from 'src/config';

export class UpdateAvailableElementDto {
  @IsString({ message: 'Element id should be string' })
  @IsNotEmpty({ message: 'Element id required' })
  @MaxLength(255, { message: 'Element id is too long' })
  readonly id: string;

  @IsString({ message: 'Element name should be string' })
  @IsOptional()
  @IsNotEmpty({ message: 'Element name required' })
  @MaxLength(255, { message: 'Element name is too long' })
  readonly name?: string;

  @IsNotEmpty({ message: 'Element width required' })
  @IsOptional()
  @IsNumber()
  readonly width?: number;

  @IsNotEmpty({ message: 'Element width required' })
  @IsOptional()
  @IsNumber()
  readonly height?: number;

  @IsEnum(ElementType)
  @IsOptional()
  type?: ElementType;
}
