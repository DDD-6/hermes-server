import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { CreateSpaceDTO, CreateSpaceFiles } from './space.dto';
import { SpaceService } from './space.service';

@ApiTags('space')
@Controller('spaces')
export class SpaceController {
  constructor(private spaceService: SpaceService) {}

  @Post('')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'image', maxCount: 1 },
      { name: 'icon', maxCount: 1 },
    ]),
  )
  createSpace(
    @UploadedFiles() files: CreateSpaceFiles,
    @Body() dto: CreateSpaceDTO,
  ) {
    files;
    dto;
    // TODO : 스페이스 정보 만들기
  }

  @Get('')
  getUserSpaceList() {
    // TODO : 로그인한 유저의 Space 정보를 가져옴
  }

  @Get('/:id')
  getSpaceDetail() {
    // TODO : 스페이스 정보를 가져옴
  }

  @Put('/:id')
  modifySpaceDetail() {
    // TODO : 스페이스 정보 수정
  }

  @Delete('/:id')
  removeSpace() {
    // TODO : 스페이스 정보 삭제
  }
}
