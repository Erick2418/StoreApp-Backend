import { Entity,Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { Usuario } from './Usuario';
import { DetalleVenta } from './DetalleVenta';

@Entity()
export class Venta{

    @PrimaryGeneratedColumn()
    id:number;

    @Column('date')
    fecha:string;
    // usuarioID
    @ManyToOne(() => Usuario, usuario => usuario.ventas)
    usuario: Usuario;

    //
    //relacion ventas detalleventas
    @OneToMany(() => DetalleVenta, detalleVenta => detalleVenta.venta)
    detalleVentas: DetalleVenta[];

}