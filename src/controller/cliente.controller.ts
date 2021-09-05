import {Request,Response} from 'express'

import { getRepository } from 'typeorm' //tre un repo o una tabla de una base de datos
import { Usuario } from '../entity/Usuario';
// import bcrypt from 'bcryptjs';
// import { generarJWT } from '../helpers/jwt';

export const getClientes = async (req:Request,res:Response): Promise<Response> => {

    try {

        const users =  await getRepository(Usuario).find();

        return res.json({
            ok:true,
            users
        });
    }catch (error) {
        return res.status(500).json({
            ok:false,
            msg: 'Conectate con el administrador'
        })
    }

}
