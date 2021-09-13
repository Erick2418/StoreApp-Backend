import { Entity,Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne } from "typeorm";
import { Categoria } from "./Categoria";
import { DetalleVenta } from './DetalleVenta';

@Entity()
export class Producto{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"varchar", length:200})
    nombre: string;

    @Column("decimal",{precision:5,scale:2})
    precio: number;

    @Column()
    status: boolean;

    //USUARIO  === Producto
    //relacion prudcto detalleventas
    @OneToMany(() => DetalleVenta, detalleVenta => detalleVenta.producto)
    detalleVentas: DetalleVenta[];

    // Categoria
    @Column()
    categoriaId: number;
    @ManyToOne(() => Categoria, categoria => categoria.productos)
    @JoinColumn()
    categoria: Categoria;


}