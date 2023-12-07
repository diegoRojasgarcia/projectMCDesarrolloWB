import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProyectoInput {
  @Field(() => Int)
  id: number;
}
