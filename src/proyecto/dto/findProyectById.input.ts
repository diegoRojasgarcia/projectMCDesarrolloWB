import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FindProyectoByIdInput {
  @Field()
  id: number;
}
