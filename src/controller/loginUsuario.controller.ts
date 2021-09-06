import {Request,Response} from 'express'

import { getRepository } from 'typeorm' //tre un repo o una tabla de una base de datos
// import { Auth } from '../entity/Auth';
import bcrypt from 'bcryptjs';

import { generarJWT } from '../helpers/jwt';
import { Usuario } from '../entity/Usuario';

export const loginUsuario = async (req:Request,res:Response): Promise<Response> => {
    
    const {email,password}:Usuario= req.body;

    try {
        
        const emailExist =  await getRepository(Usuario).findOne({email});
      
        if(emailExist?.email==undefined){

            return res.status(400).json({
                ok:false,
                msg: 'email o password  incorrecto'// cambiar por "Email o Password Incorrecto"
            })
        }

        //confirmamos password
        const validPassword=  bcrypt.compareSync(password,emailExist.password);

        if(!validPassword){
            return res.status(400).json({
                ok:false,
                msg: 'email o password  incorrecto'// cambiar por "Email o Password Incorrecto"
            })
        }

        //GENERAR JWT
        const token =  await generarJWT(emailExist.id+"",emailExist.nombre)

        return res.status(201).json({
            ok:true,
            id:emailExist.id,
            email:emailExist.email,
            nombre:emailExist.nombre,
            token
        })

    }catch (error) {
        return res.status(500).json({
            ok:false,
            msg: 'Conectate al administrador'
        })
    }
}