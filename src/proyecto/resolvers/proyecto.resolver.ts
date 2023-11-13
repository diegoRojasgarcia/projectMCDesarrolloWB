import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveReference,
  Int,
} from '@nestjs/graphql';
import { ProyectoService } from '../services/proyecto.service';
import { Proyecto } from '../entities/proyecto.entity';
import { CreateProyectoInput } from '../dto/create-proyecto.input';

@Resolver(() => Proyecto)
export class ProyectoResolver {
  constructor(private readonly proyectoService: ProyectoService) {}

  @Mutation(() => Proyecto)
  createProyecto(
    @Args('createProyectoInput') createProyectoInput: CreateProyectoInput,
  ) {
    return this.proyectoService.createProyecto(createProyectoInput);
  }

  @Query(() => [Proyecto])
  getProyectos() {
    return this.proyectoService.findAll();
  }

  @Query(() => [Proyecto])
  getProyectosbyUserId(@Args('id', { type: () => Int }) id: number) {
    return this.proyectoService.findProyectoByUserId(id);
  }

  // @Query(() => Proyecto, { name: 'proyecto' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.proyectoService.findOne(id);
  // }

  // @Mutation(() => Proyecto)
  // updateProyecto(
  //   @Args('updateProyectoInput') updateProyectoInput: UpdateProyectoInput,
  // ) {
  //   return this.proyectoService.update(
  //     updateProyectoInput.id,
  //     updateProyectoInput,
  //   );
  // }

  // @Mutation(() => Proyecto)
  // removeProyecto(@Args('id', { type: () => Int }) id: number) {
  //   return this.proyectoService.remove(id);
  // }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: number }) {
    return this.proyectoService.findOne(reference.id);
  }
}
