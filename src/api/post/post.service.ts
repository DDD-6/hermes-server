import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from 'src/entities/post.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create.post.dto';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Posts)
        private postsRepository: Repository<Posts>
    ) {}

    async createPost(spaceId: string, createPostDto: CreatePostDto): Promise<Posts> {
        console.log(createPostDto);
        const new_post = this.postsRepository.create(createPostDto);        
        // spaceId 연결하는 코드 추가 필요
        return await this.postsRepository.save(new_post);
    }

    async getPost(postId): Promise<Posts> {
        const post = await this.postsRepository.findOne({ id: postId })

        if (!post) {
            throw new NotFoundException();
        }

        return post;

    }
}
