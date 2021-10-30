import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
        private jwtService: JwtService
    ) {}

    async socialLogin(user) {
        try {
            const checksum = await this.usersRepository.findOne({ id: user.id });
            
            if (!checksum) {
                const new_user = this.usersRepository.create();
                new_user.id = user.id;
                new_user.name = "";
                await this.usersRepository.save(new_user);
            }

            return this.jwtService.sign({email: user.email})
        } catch(err) {
            console.log(err);
            throw new BadRequestException()
        }
    }
}
