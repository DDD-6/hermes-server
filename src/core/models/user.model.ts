import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../schemas/mysql/user.entity';

@Injectable()
export class UserModel {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async getBypass() {
    const exist = await this.userRepository.findOne({ name: 'bypass' });
    if (exist) return exist;

    const bypass = this.userRepository.create({ name: 'bypass' });
    return this.userRepository.save(bypass);
  }

  findById(id: number) {
    return this.userRepository.findOne(id);
  }
}
