import { Entity,Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { Rol } from './Rol';
import { Venta } from './Venta';

@Entity()
export class Usuario{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"varchar", length:200})
    nombre: string;

    @Column({type:"varchar", length:200})
    email: string;

    @Column({type:"varchar", length:200})
    password: boolean;

    @Column('date')
    fecha:string;

    @ManyToOne(() => Rol, rol => rol.usuarios)
    rol: Rol;
    //Relacion con ventas.
    @OneToMany(() => Venta, venta => venta.usuario)
    ventas: Venta[];
}