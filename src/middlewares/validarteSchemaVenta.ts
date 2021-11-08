import { Request, Response, NextFunction } from 'express';
import {  Venta } from '../entity';
import { Schema } from 'joi';

export const validateSchemaVenta= (schema: Schema)=>{
    return  async (req:Request,res:Response,next:NextFunction) => {
        const venta:Venta = req.body;
        try{
            await schema.validateAsync(venta);
            next();
        }catch (error) {
            return res.status(400).json({
                ok:false,
                msg: error+", Formato no valido"
            })
        }
    }
    
}