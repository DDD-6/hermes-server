import { Injectable } from '@nestjs/common';
import { UserModel } from 'src/core/models/user.model';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(private userModel: UserModel) {}
  async getBypassUserToken() {
    // DO NOT USE IN PRODUCTION
    const bypass = await this.userModel.getBypass();
    return jwt.sign(bypass.id, 'bypass');
  }
}
