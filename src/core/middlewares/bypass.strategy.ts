import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { UserModel } from '../models/user.model';
import { User } from '../schemas/mysql/user.entity';

@Injectable()
export class BypassStrategy extends PassportStrategy(Strategy, 'BYPASS') {
  constructor(private userModel: UserModel) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'bypass',
    } as StrategyOptions);
  }

  async validate(id: number): Promise<User> {
    const user = await this.userModel.findById(id);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
