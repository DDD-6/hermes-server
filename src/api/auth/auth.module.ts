import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './strategies/google.strategy';
import { AuthService } from './auth.service';
import { ConfigModule } from '@nestjs/config';
import { KakaoStrategy } from './strategies/kakao.strategy';
import { JwtModule } from '@nestjs/jwt';
import { NaverStrategy } from './strategies/naver.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
    imports: [
        ConfigModule.forRoot(),
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '60s' },
        })
    ],
    providers: [
        AuthService, 
        GoogleStrategy, 
        KakaoStrategy,
        NaverStrategy,
        JwtStrategy
    ],
    controllers: [AuthController],
    exports: [AuthModule]
})
export class AuthModule {}
