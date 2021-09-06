import { Entity,Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";
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
    password: string;

    @Column('date')
    fecha:string;


    @Column()
    rolId: number;
    @ManyToOne(() => Rol, rol => rol.usuarios)
    @JoinColumn()
    rol: Rol;


    //Relacion con ventas.
    @OneToMany(() => Venta, venta => venta.usuario)
    ventas: Venta[];
}
// nullable: false 