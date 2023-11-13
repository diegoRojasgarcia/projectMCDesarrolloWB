import { Injectable } from '@nestjs/common';
import { CreateProyectoInput } from '../dto/create-proyecto.input';
import { UpdateProyectoInput } from '../dto/update-proyecto.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Proyecto } from '../entities/proyecto.entity';
import { Repository } from 'typeorm';

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
    return this.proyectoRepository.find();
  }

  async findOne(id: number): Promise<Proyecto> {
    return this.proyectoRepository.findOne({
      where: {
        id,
      },
    });
  }

  async findProyectoByUserId(id: number) {
    const proyectos = this.findAll();
    const equiposbyProyecto = (await proyectos).filter(
      (proyecto) => proyecto.idAdmin === id,
    );
    if (!equiposbyProyecto) return [];
    return equiposbyProyecto;
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
