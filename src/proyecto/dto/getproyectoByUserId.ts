import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class getProyectosbyUserIdDto {
  @Field(() => Int)
  id: number;
}
