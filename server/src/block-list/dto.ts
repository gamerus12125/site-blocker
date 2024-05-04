import { ApiProperty } from '@nestjs/swagger';
import { $Enums } from '@prisma/client';
import { IsIn, IsOptional } from 'class-validator';

export class BlockItemDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  blockListId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  data: string;

  @ApiProperty({
    enum: [$Enums.BlockItemType.KeyWord, $Enums.BlockItemType.Website],
  })
  type: $Enums.BlockItemType;
}

export class BlockListDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  ownerId: number;

  @ApiProperty({
    type: [BlockItemDto],
  })
  items: BlockItemDto[];
}

export class AddBlockItemDto {
  @ApiProperty()
  data: string;

  @ApiProperty({
    enum: [$Enums.BlockItemType.KeyWord, $Enums.BlockItemType.Website],
  })
  @IsIn([$Enums.BlockItemType.KeyWord, $Enums.BlockItemType.Website])
  type: $Enums.BlockItemType;
}

export class BlockListQueryDto {
  @ApiProperty({ required: false })
  @IsOptional()
  q?: string;
}
