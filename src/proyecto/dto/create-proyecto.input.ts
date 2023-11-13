import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProyectoInput {
  @Field()
  nombre: string;

  @Field()
  area: string;

  @Field(() => Int)
  idAdmin: number;
}
