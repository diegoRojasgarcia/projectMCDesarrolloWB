import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class updateProyectoDto {
  @Field({ nullable: true })
  nombre?: string;

  @Field({ nullable: true })
  area?: string;
}
