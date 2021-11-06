import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Posts {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    content: string;
}