import { Entity,Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Usuario } from './Usuario';

@Entity()
export class Rol{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"varchar", length:200})
    nombre: string;

    @OneToMany(() => Usuario, usuario => usuario.rol)
    usuarios: Usuario[];
}