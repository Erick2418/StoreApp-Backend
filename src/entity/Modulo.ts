import { Entity,Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
// import { Usuario } from './Usuario';

@Entity()
export class Modulo{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"varchar", length:50})
    nombre: string;

    // @OneToMany(() => Usuario, usuario => usuario.rol)
    // usuarios: Usuario[];
}
