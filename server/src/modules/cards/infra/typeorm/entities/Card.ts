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

  @Column({
    length: 400
  })
  text: string;

  @ManyToMany(() => Tag, tag => tag)
  @JoinTable()
  tags:  Tag[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Card;
