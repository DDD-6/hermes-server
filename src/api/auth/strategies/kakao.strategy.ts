import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { VerifyCallback } from "passport-google-oauth20";
import { Strategy } from "passport-kakao";

@Injectable()
export class KakaoStrategy extends PassportStrategy(Strategy, 'kakao') {
    constructor() {
        super({
            clientID: process.env.KAKAO_KEY,
            callbackURL: "http://localhost:3000/authentication/kakao/callback",
        });
    }

    async validate(
        accessToken: string,
        refreshToken: string,
        profile: any,
        done: VerifyCallback,
    ): Promise<any> {
        const user = {
            id: profile.id,
            name: profile.username,
            providers: 'kakao',
            accessToken
        };
        done(null, user);
    }
}