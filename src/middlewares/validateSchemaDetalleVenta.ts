import { Request, Response, NextFunction } from 'express';
import { DetalleVenta } from '../entity';
import { Schema } from 'joi';

export const validateSchemaDetalleVenta= (schema: Schema)=>{
    return  async (req:Request,res:Response,next:NextFunction) => {
        const detalleVenta:DetalleVenta = req.body;
        try{
            await schema.validateAsync(detalleVenta);
            next();
        }catch (error) {
            return res.status(400).json({
                ok:false,
                msg: error+", Formato no valido"
            })
        }
    }
    
}