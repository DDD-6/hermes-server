import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('authentication')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get('google')
    @UseGuards(AuthGuard('google'))
    async googleAuth(@Req() req) {}

    @Get('google/callback')
    @UseGuards(AuthGuard('google'))
    googleAuthRedirect(@Req() req) {
        return this.authService.googleLogin(req);
    }

    @Get('kakao')
    @UseGuards(AuthGuard('kakao'))
    async kakaoAuth(@Req() req) {}

    @Get('kakao/callback')
    @UseGuards(AuthGuard('kakao'))
    kakaoAuthRedirect(@Req() req) {
        console.log("kakao");
    }

    @Get('naver')
    @UseGuards(AuthGuard('naver'))
    async naverAuth(@Req() req) {}

    @Get('naver/callback')
    @UseGuards(AuthGuard('naver'))
    naverAuthRedirect(@Req() req) {
        console.log("naver");
    }
}
