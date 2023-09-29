import { InputType, Field } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';

@InputType()
export class CreateItemInput {
  @IsAlpha()
  @Field()
  title: string;

  @Field()
  type: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  portion?: string;

  @Field()
  price: string;
}
