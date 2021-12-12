import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/bypass')
  getBypassUser() {
    return this.authService.getBypassUserToken();
  }
}
