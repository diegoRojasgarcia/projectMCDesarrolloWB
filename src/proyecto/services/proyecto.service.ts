import { Injectable } from '@nestjs/common';
import { CreateProyectoInput } from '../dto/create-proyecto.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Proyecto } from '../entities/proyecto.entity';
import { Like, Repository } from 'typeorm';
import { getProyectoInput } from '../dto/getproyect.input';
import { findProyectoLikeDto } from '../dto/findproyect';

@Injectable()
export class ProyectoService {
  constructor(
    @InjectRepository(Proyecto)
    private proyectoRepository: Repository<Proyecto>,
  ) {}

  async createProyecto(
    createProyectoInput: CreateProyectoInput,
  ): Promise<Proyecto> {
    const newUser = this.proyectoRepository.create(createProyectoInput);
    return this.proyectoRepository.save(newUser);
  }

  async findAll(): Promise<Proyecto[]> {
    return this.proyectoRepository.find({ order: { nombre: 'ASC' } });
  }

  async findOne(getProyectosbyIdDto): Promise<Proyecto> {
    const { id } = getProyectosbyIdDto;
    return this.proyectoRepository.findOne({
      where: {
        id,
      },
    });
  }

  async findProyectoId(getProyectosbyIdDto): Promise<Proyecto> {
    const { id } = getProyectosbyIdDto;
    return this.proyectoRepository.findOne({
      where: {
        id,
      },
    });
  }

  async findProyectoLike({
    idUser,
    nombre,
  }: getProyectoInput): Promise<Proyecto[]> {
    return this.proyectoRepository.find({
      where: {
        nombre: Like(`%${nombre}%`),
        idAdmin: idUser,
      },
    });
  }

  async findProyectoByUserId(getProyectosbyUserIdDto): Promise<Proyecto[]> {
    const { id } = getProyectosbyUserIdDto;
    const proyectos = this.findAll();
    const proyectobyidAdmin = (await proyectos).filter(
      (proyecto) => proyecto.idAdmin === id,
    );
    if (!proyectobyidAdmin) return [];
    return proyectobyidAdmin;
  }

  // update(id: number, updateProyectoInput: UpdateProyectoInput) {
  //   return `This action updates a #${id} proyecto`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} proyecto`;
  // }

  async forAdminId(userId: number) {
    const proyectos = await this.proyectoRepository.find();
    if (!proyectos) return [];
    return proyectos.filter((proyectos) => proyectos.idAdmin === userId);
  }
}
