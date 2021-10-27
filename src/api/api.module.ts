import { Module } from '@nestjs/common';
import { SpaceModule } from './space/space.module';
import { AuthModule } from './auth/auth.module';

@Module({
  providers: [],
  imports: [AuthModule, SpaceModule]
})

export class APIModule {}
