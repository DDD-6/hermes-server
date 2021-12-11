import { Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export class Space {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  icon: string;

  @Column({ type: 'varchar' })
  image: string;

  @CreateDateColumn()
  createdAt: Date;
}
