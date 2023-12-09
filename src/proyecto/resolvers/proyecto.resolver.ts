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
import { getProyectoInput } from '../dto/getproyect.input';
import { BadRequestException } from '@nestjs/common';
import { getProyectosbyIdDto } from '../dto/getpoyectoById';
import { getProyectosbyUserIdDto } from '../dto/getproyectoByUserId';
import { updateProyectoDto } from '../dto/update-proyecto.input';
import { FindProyectoByIdInput } from '../dto/findProyectById.input';
import { messageDeteled } from '../dto/messageDeteled.dto';

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
  getProyectos(): Promise<Proyecto[]> {
    try {
      return this.proyectoService.findAll();
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Query(() => Proyecto)
  getProyectosbyId(
    @Args('getProyectosbyIdinput') data: getProyectosbyIdDto,
  ): Promise<Proyecto> {
    try {
      return this.proyectoService.findProyectoId(data);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Query(() => [Proyecto])
  getProyectosbyUserId(
    @Args('getProyectosbyUserInput') data: getProyectosbyUserIdDto,
  ): Promise<Proyecto[]> {
    try {
      return this.proyectoService.findProyectoByUserId(data);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Query(() => [Proyecto])
  getProyectobyUserIdName(
    @Args('getProyectoInput') getProyectoInput: getProyectoInput,
  ): Promise<Proyecto[]> {
    try {
      return this.proyectoService.findProyectoLike(getProyectoInput);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Mutation(() => Proyecto)
  updateProyecto(
    @Args('findProyectoByIdInput') findProyectoByIdInput: FindProyectoByIdInput,
    @Args('updateProyectoInput') updateProyectoDto: updateProyectoDto,
  ): Promise<Proyecto> {
    return this.proyectoService.update(
      findProyectoByIdInput,
      updateProyectoDto,
    );
  }

  @Mutation(() => Proyecto)
  removeProyecto(
    @Args('findProyectoByIdInput') findProyectoByIdInput: FindProyectoByIdInput,
  ): Promise<Proyecto> {
    return this.proyectoService.remove(findProyectoByIdInput);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: number }) {
    return this.proyectoService.findOne(reference.id);
  }
}
