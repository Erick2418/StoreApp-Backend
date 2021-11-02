import {Request,response,Response} from 'express'

import { getConnection, getRepository } from 'typeorm' //tre un repo o una tabla de una base de datos
import { Producto } from '../entity/Producto';

export const getProductos = async (req:Request,res:Response): Promise<Response> => {

    try {

        const producto = await getRepository(Producto)
                        .createQueryBuilder("producto")
                        .leftJoinAndSelect("producto.categoria", "categoria")
                        .getMany(); //getRawMany trae todo sin que se cree un nuevo objeto dentro

        return res.json({
            ok:true,
            producto
        });
    }catch (error) {
       
        return res.status(500).json({
            ok:false,
            msg: 'Conectate con el administrador'
        })
    }

}


export const getProducto = async (req:Request,res:Response): Promise<Response> => {

    const idProducto:string = req.params.id;
    
    try { 
        // SELECT * FROM `usuario` WHERE rolId=1 AND usuario.id=2;
        const producto = await getRepository(Producto)
                                .createQueryBuilder("producto")
                                .where("producto.id = :id", { id:idProducto })
                                .leftJoinAndSelect("producto.categoria", "categoria")
                                .getOne();
        if(!producto){
            return res.status(404).json({
                ok:false,
                msg: 'Producto no existe con ese ID'
            })
        }

        return res.json({
            ok:true,
            producto
        });
    }catch (error) {
        
        return res.status(500).json({
            ok:false,
            msg: 'Conectate con el administrador'
        })
    }
}


