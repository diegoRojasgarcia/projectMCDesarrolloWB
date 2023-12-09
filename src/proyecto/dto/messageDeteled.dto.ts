import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class messageDeteled {
  @Field()
  message: string;
}
