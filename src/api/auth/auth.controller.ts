import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthRequestDto } from './dto/auth.request.dto';

@Controller('authentication')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) {}

    @Post()
    socialLogin(@Body() authRequestDto: AuthRequestDto) {
        return this.authService.socialLogin(authRequestDto);
    }
}
