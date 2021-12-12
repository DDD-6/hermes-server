import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from 'src/core/models/user.model';
import { schemas } from '../schemas/mysql/schema.module';

const models = [UserModel];

@Module({
  imports: [TypeOrmModule.forFeature(schemas)],
  providers: models,
  exports: models,
})
export class ModelModule {}
