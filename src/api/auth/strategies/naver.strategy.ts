import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { VerifyCallback } from "passport-google-oauth20";
import { Strategy } from "passport-naver";

@Injectable()
export class NaverStrategy extends PassportStrategy(Strategy, 'naver') {
    constructor() {
        super({
            clientID: process.env.NAVER_CLIENT_ID,
            clientSecret: process.env.NAVER_SECRET,
            callbackURL: "http://localhost:3000/authentication/naver/callback",
        });
    }
    
    async validate(
        accessToken: string,
        refreshToken: string,
        profile: any,
        done: VerifyCallback,
    ): Promise<any> {
        const user = {
            email: profile.emails[0].value,
            name: profile.displayName,
            providers: 'naver',
            accessToken
        };
        done(null, user);
    }
}