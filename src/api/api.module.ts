import { Module } from '@nestjs/common';
import { SpaceModule } from './space/space.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [SpaceModule, AuthModule, UserModule],
})
export class APIModule {}
