import { ObjectType, Field, Int, Directive } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
@Directive('@key(fields: "id")')
export class Proyecto {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  nombre: string;

  @Column()
  @Field()
  area: string;

  @Column()
  @Field(() => Int)
  idAdmin: number;
}
