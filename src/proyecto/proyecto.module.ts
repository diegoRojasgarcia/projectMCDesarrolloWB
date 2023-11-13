import { Module } from '@nestjs/common';
import { ProyectoService } from './services/proyecto.service';
import { ProyectoResolver } from './resolvers/proyecto.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proyecto } from './entities/proyecto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Proyecto])],
  providers: [ProyectoResolver, ProyectoService],
  exports: [ProyectoService],
})
export class ProyectoModule {}
