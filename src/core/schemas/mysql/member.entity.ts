import { Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export class Member {
  @PrimaryGeneratedColumn()
  id: number;

  // +user join

  @Column()
  authority: number;

  @CreateDateColumn()
  createdAt: Date;
}
