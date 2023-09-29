import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Item {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  type: string;

  @Column()
  @Field()
  title: string;

  @Column({ nullable: true })
  @Field()
  description: string;

  @Column({ nullable: true })
  @Field()
  portion: string | null;

  @Column()
  @Field()
  price: string;
}
