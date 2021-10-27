import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService
    ) {}

    googleLogin(user) {
        return {
            access_token: this.jwtService.sign({email: user.email}),
        }
    }

    kakaoLogin(user) {
        return {
            access_token: this.jwtService.sign({email: user.email}),
        }
    }

    naverLogin(user) {
        return {
            access_token: this.jwtService.sign({email: user.email}),
        }
    }
}
