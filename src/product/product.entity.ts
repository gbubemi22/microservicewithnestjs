/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  image: string;
  @Column()
  title: string;
  @Column({default: 0})
  likes: number;
  
  
}
