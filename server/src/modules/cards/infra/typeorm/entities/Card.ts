import {
  Entity,
  Column,
  Index,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import Tag from "../../../../tags/infra/typeorm/entities/Tag";

@Entity('cads')
class Card {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  text: string;

  @ManyToMany(() => Tag)
  @JoinTable()
  tags:  Tag[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Card;
