import { Module } from '@nestjs/common';
import { SpaceModule } from './space/space.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [SpaceModule, PostModule],
})
export class APIModule {}
