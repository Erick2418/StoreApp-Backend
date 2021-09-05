import { Entity,Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { Producto } from './Producto';
import { Venta } from './Venta';

@Entity()
export class DetalleVenta{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"int"})
    cantidad:number;

    @Column("decimal",{precision:5,scale:2})
    precio: number;

    @Column("decimal",{precision:5,scale:2})
    subtotal: number;
    
    //IDPRODUCTO
    @ManyToOne(() => Producto, producto => producto.detalleVentas)
    producto: Producto;

    //IDVENTA
    // PHOTO == DetalleVentas
    //PHOTO
    @ManyToOne(() => Venta, venta => venta.detalleVentas)
    venta: Venta;




}