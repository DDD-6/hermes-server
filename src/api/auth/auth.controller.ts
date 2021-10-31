import { Controller, Get, HttpCode, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/core/decorator/user.decorator';
import { AuthService } from './auth.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger'

@ApiTags('Social Login')
@Controller('authentication')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @ApiOperation({ summary: "구글 소셜 로그인 API"})
    @Get('google')
    @UseGuards(AuthGuard('google'))
    @HttpCode(200)
    async googleAuth(@User() user) {}

    @Get('google/callback')
    @UseGuards(AuthGuard('google'))
    @HttpCode(200)
    googleAuthRedirect(@User() user): Promise<string> {
        return this.authService.socialLogin(user);
    }

    @ApiOperation({ summary: "카카오 소셜 로그인 API"})
    @Get('kakao')
    @UseGuards(AuthGuard('kakao'))
    @HttpCode(200)
    async kakaoAuth(@User() user) {}

    @Get('kakao/callback')
    @UseGuards(AuthGuard('kakao'))
    @HttpCode(200)
    kakaoAuthRedirect(@User() user) {
        return this.authService.socialLogin(user);
    }

    @ApiOperation({ summary: "네이버 소셜 로그인 API"})
    @Get('naver')
    @UseGuards(AuthGuard('naver'))
    @HttpCode(200)
    async naverAuth(@User() user) {}

    @Get('naver/callback')
    @UseGuards(AuthGuard('naver'))
    @HttpCode(200)
    naverAuthRedirect(@User() user) {
        return this.authService.socialLogin(user);
    }
}
