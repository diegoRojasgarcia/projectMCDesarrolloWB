import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class getProyectosbyIdDto {
  @Field(() => Int)
  id: number;
}
