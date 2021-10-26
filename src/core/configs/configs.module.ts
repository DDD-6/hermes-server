import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigsService } from './configs.service';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [ConfigsService],
  exports: [ConfigsService],
})
export class ConfigsModule {}
