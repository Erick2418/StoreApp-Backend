import {Request,response,Response} from 'express'

import {  getRepository } from 'typeorm' //tre un repo o una tabla de una base de datos
import { DetalleVenta } from '../entity/DetalleVenta';

import { Venta } from '../entity/Venta';

export const createDetalleVenta = async (req:Request,res:Response): Promise<Response> => {

    const newDetalleVenta:DetalleVenta=req.body;
    try{

        const result = await getRepository(DetalleVenta).save(newDetalleVenta);
        return res.json({
            ok:true,
            detalleVenta:result
        });

        }catch (error) {
            console.log(error)
        return res.status(500).json({
            ok:false,
            msg: 'Conectate al administrador'
        })
    }
}

export const crearVenta = async (req:Request,res:Response): Promise<Response> => {

    const newVenta:Venta=req.body;
    try{

        const result = await getRepository(Venta).save(newVenta);
        return res.json({
            ok:true,
            detalleVenta:result
        });

        }catch (error) {
            console.log(error)
        return res.status(500).json({
            ok:false,
            msg: 'Conectate al administrador'
        })
    }
}
