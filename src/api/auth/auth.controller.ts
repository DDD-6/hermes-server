import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/core/decorator/user.decorator';
import { AuthService } from './auth.service';

@Controller('authentication')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get('google')
    @UseGuards(AuthGuard('google'))
    async googleAuth(@User() user) {}

    @Get('google/callback')
    @UseGuards(AuthGuard('google'))
    googleAuthRedirect(@User() user) {
        return this.authService.googleLogin(user);
    }

    @Get('kakao')
    @UseGuards(AuthGuard('kakao'))
    async kakaoAuth(@User() user) {}

    @Get('kakao/callback')
    @UseGuards(AuthGuard('kakao'))
    kakaoAuthRedirect(@User() user) {
        return this.authService.kakaoLogin(user);
    }

    @Get('naver')
    @UseGuards(AuthGuard('naver'))
    async naverAuth(@User() user) {}

    @Get('naver/callback')
    @UseGuards(AuthGuard('naver'))
    naverAuthRedirect(@User() user) {
        return this.authService.naverLogin(user);
    }
}
