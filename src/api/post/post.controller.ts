import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Posts } from 'src/entities/post.entity';
import { CreatePostDto } from './dto/create.post.dto';
import { PostService } from './post.service';

@Controller('spaces/:spaceId/posts')
export class PostController {
    constructor(
        private readonly postService: PostService
    ) {}

    @Post()
    createPost(@Param('spaceId') spaceId: string, @Body() createPostDto): Promise<Posts> {
        return this.postService.createPost(spaceId, createPostDto);
    }

    @Get(':postId')
    getPost(@Param('postId') postId: string) {
        return this.postService.getPost(postId);
    }
}
