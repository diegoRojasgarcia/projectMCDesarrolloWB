import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class findProyectoLikeDto {
  @Field()
  nombre: string;
}
