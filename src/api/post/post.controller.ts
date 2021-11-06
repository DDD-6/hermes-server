import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePostDto } from './dto/create.post.dto';
import { PostService } from './post.service';

@Controller('spaces/:spaceId/posts')
export class PostController {
    constructor(
        private readonly postService: PostService
    ) {}

    @Post()
    createPost(@Param('spaceId') spaceId: string, @Body() createPostDto: CreatePostDto) {
        return this.postService.createPost(spaceId, createPostDto);
    }
}
