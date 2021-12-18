import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PassportModule } from '@nestjs/passport';
import { BypassStrategy } from 'src/core/middlewares/bypass.strategy';
import { ModelModule } from 'src/core/models/model.module';

@Module({
  imports: [PassportModule, ModelModule],
  providers: [UserService, BypassStrategy],
  controllers: [UserController],
})
export class UserModule {}
