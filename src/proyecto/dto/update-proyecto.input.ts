import { CreateProyectoInput } from './create-proyecto.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProyectoInput extends PartialType(CreateProyectoInput) {
  @Field(() => Int)
  id: number;
}
