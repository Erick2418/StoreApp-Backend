import { Entity,Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Usuario } from './Usuario';
import { Producto } from './Producto';

@Entity()
export class Categoria{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"varchar", length:50})
    nombre: string;

    @OneToMany(() => Producto, producto => producto.categoria)
    productos: Producto[];
}