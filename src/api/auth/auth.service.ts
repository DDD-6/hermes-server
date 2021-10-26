import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class AuthService {
    googleLogin(req) {
        if (!req.user) {
            throw new NotFoundException();
        }
        return {
            user: req.user,
        }
    }

}
