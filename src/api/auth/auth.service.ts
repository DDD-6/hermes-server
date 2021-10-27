import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
    constructor(
        // @InjectRepository(Users)
        // private usersRepository: Repository<Users>,
        private jwtService: JwtService
    ) {}

    async googleLogin(req) {
        // const user = await this.usersRepository.findOneOrFail({ email: email });
        // if (!user) {
        //     // 새로운 회원 닉네임 받기 -> redirect?
        // }
        // const payload = { email: user.email, sub: user.id }
        return {
            access_token: this.jwtService.sign("payload"),
        }
    }

}
