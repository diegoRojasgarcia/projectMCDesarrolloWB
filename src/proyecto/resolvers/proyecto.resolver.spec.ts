import { Test, TestingModule } from '@nestjs/testing';
import { ProyectoResolver } from './proyecto.resolver';
import { ProyectoService } from '../services/proyecto.service';

describe('ProyectoResolver', () => {
  let resolver: ProyectoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProyectoResolver, ProyectoService],
    }).compile();

    resolver = module.get<ProyectoResolver>(ProyectoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
