import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { AddBlockItemDto, BlockItemDto, BlockListDto, BlockListQueryDto } from './dto';
import { GetSessionDTO } from 'src/auth/dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { Session } from 'src/auth/session-info.decoratror';
import { BlockListService } from './block-list.service';

@Controller('block-list')
@UseGuards(AuthGuard)
export class BlockListController {
  constructor(private blockListService: BlockListService) {}

  @Get()
  @ApiOkResponse({
    type: BlockListDto,
  })
  getList(
    @Query() query: BlockListQueryDto,
    @Session() session: GetSessionDTO,
  ): Promise<BlockListDto> {
    return this.blockListService.getByUserId(session.id, query);
  }

  @Post()
  @ApiCreatedResponse({
    type: BlockListDto,
  })
  addBlockListItem(
    @Body() body: AddBlockItemDto,
    @Session() session: GetSessionDTO,
  ): Promise<BlockItemDto> {
    return this.blockListService.addItem(session.id, body);
  }

  @Delete('item/:id')
  @ApiOkResponse({
    type: BlockItemDto,
  })
  async removeBlockItem(
    @Param("id", ParseIntPipe) id: number,
    @Session() session: GetSessionDTO,
  ): Promise<BlockItemDto> {
    return await this.blockListService.removeItem(session.id, id);
  }
}
