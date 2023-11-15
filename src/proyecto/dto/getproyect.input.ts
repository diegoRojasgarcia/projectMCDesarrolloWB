import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class getProyectoInput {
  @Field(() => Int)
  idUser: number;

  @Field()
  nombre: string;
}
