import { Module } from '@nestjs/common';
import { SpaceModule } from './space/space.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { config } from 'process';
import { ConfigsModule } from 'src/core/configs/configs.module';
import { ConfigsService } from 'src/core/configs/configs.service';

@Module({
  imports: [
    SpaceModule, 
    AuthModule,
  ],
})
export class APIModule {}
