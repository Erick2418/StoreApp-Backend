import { Request, Response, NextFunction } from 'express';
import { Usuario } from '../entity';
import { Schema } from 'joi';

export const validateSchemaUsuario= (schema: Schema)=>{
    return  async (req:Request,res:Response,next:NextFunction) => {
        const usuario:Usuario = req.body;
        try{
            await schema.validateAsync(usuario);
            next();
        }catch (error) {
            return res.status(400).json({
                ok:false,
                msg: error+""
            })
        }
    }
    
}