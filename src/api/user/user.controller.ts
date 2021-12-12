import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { BypassAuthGuard } from 'src/core/middlewares/bypass.guard';

@UseGuards(BypassAuthGuard)
@Controller('users')
export class UserController {
  @Get('mypage')
  getLoginUser(@Req() req: Request) {
    return req.user;
  }
}
