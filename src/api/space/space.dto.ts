import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class TestDTO {
  @IsNotEmpty()
  @IsNumber()
  id: number;
}

export class CreateSpaceDTO {
  @IsNotEmpty()
  @Transform(({ value }) => Number(value))
  @ApiProperty({ type: 'number' })
  userId: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: 'string' })
  name: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    oneOf: [{ type: 'string' }, { type: 'string', format: 'binary' }],
  })
  icon?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    oneOf: [{ type: 'string' }, { type: 'string', format: 'binary' }],
  })
  image?: string;
}

export interface CreateSpaceFiles {
  icon?: [Express.Multer.File];
  image?: [Express.Multer.File];
}
