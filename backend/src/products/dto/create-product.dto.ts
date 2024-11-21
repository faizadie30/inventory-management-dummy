import { IsString, IsNumber, IsUUID, IsArray, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  sku: string;

  @ApiProperty()
  @IsString()
  barcode: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsNumber()
  stockQuantity: number;

  @ApiProperty()
  @IsNumber()
  costPrice: number;

  @ApiProperty({ type: [String] })
  @IsArray()
  @IsUUID(4, { each: true })
  @IsOptional()
  categoryIds: string[];
}