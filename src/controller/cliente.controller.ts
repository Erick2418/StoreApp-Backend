import {Request,response,Response} from 'express'

import { getConnection, getRepository } from 'typeorm' //tre un repo o una tabla de una base de datos
import { Usuario } from '../entity/Usuario';
import bcrypt from 'bcryptjs';
;
// import { generarJWT } from '../helpers/jwt';
const idRolCliente=1;

export const getClientes = async (req:Request,res:Response): Promise<Response> => {

    try {

        const clientes = await getRepository(Usuario)
                        .createQueryBuilder("usuario")
                        .leftJoinAndSelect("usuario.rol", "rol")
                        .where("rol.id = :id", { id: idRolCliente })
                        .getMany(); //getRawMany trae todo sin que se cree un nuevo objeto dentro

        return res.json({
            ok:true,
            clientes
        });
    }catch (error) {
       
        return res.status(500).json({
            ok:false,
            msg: 'Conectate con el administrador'
        })
    }

}

export const getCliente = async (req:Request,res:Response): Promise<Response> => {

    const idCliente:string = req.params.id;
    
    try { 
        // SELECT * FROM `usuario` WHERE rolId=1 AND usuario.id=2;
        const cliente = await getRepository(Usuario)
                        .createQueryBuilder("usuario")
                        .leftJoinAndSelect("usuario.rol", "rol")
                        .where("rol.id = :idRol AND usuario.id = :idUser", { idRol: idRolCliente,idUser:idCliente })
                        .getOne(); //getRawMany trae todo sin que se cree un nuevo objeto dentro

        if(!cliente){
            return res.status(404).json({
                ok:false,
                msg: ' Cliente no existe con ese ID'
            })
        }

        return res.json({
            ok:true,
            cliente
        });
    }catch (error) {
        
        return res.status(500).json({
            ok:false,
            msg: 'Conectate con el administrador'
        })
    }
}

export const createCliente = async (req:Request,res:Response): Promise<Response> => {

    const {email,password}:Usuario= req.body;            
    const emailExist =  await getRepository(Usuario)
                        .createQueryBuilder("usuario")
                        .select("usuario.id")
                        .where("usuario.email= :email",{email:email})
                        .getOne();
    if(emailExist!=undefined){

        return res.status(400).json({
            ok:false,
            msg: 'email exist'// cambiar por "Email o Password Incorrecto"
        })
    }
     
    const userNew:Usuario=req.body;

    const salt= bcrypt.genSaltSync();
    userNew.rolId=idRolCliente;
    userNew.password= bcrypt.hashSync(password,salt);


    try {

        const newUser= getRepository(Usuario).create(userNew);

        const result = await getRepository(Usuario).save(newUser);

        return res.json({
            ok:true,
            user:result
        })
        }catch (error) {
        return res.status(500).json({
            ok:false,
            msg: 'Conectate al administrador'
        })
    }
}

export const updateCliente = async (req:Request,res:Response): Promise<Response> => {

    const {password,email}:Usuario= req.body;

    const clienteNew:Usuario=req.body;

    if(password!=undefined){
        const salt= bcrypt.genSaltSync();
        clienteNew.password= bcrypt.hashSync(password,salt);
    }

    const emailExist =  await getRepository(Usuario)
                .createQueryBuilder("usuario")
                .select("usuario.id")
                .where("usuario.email= :email",{email:email})
                .getOne();
    if(emailExist!=undefined){
        return res.status(400).json({
            ok:false,
            msg: 'email exist'// cambiar por "Email o Password Incorrecto"
        })
    }
    const clienteID:string= req.params.id;
  
    try {
        //  SELECT * FROM usuario WHERE usuario.rolId=1 AND usuario.id=6 AND usuario.email="sara@gmail.com";
        const cliente = await getRepository(Usuario)
                    .createQueryBuilder("usuario")
                    .where("usuario.rolId = :idRol AND usuario.id= :idUser" , { idRol: idRolCliente,idUser:clienteID})
                    .getOne(); 

        if(cliente==undefined){
            console.log('NO SE ENCONTRO');
            return res.status(404).json({
                ok:false,
                msg: 'Cliente no existe'
            })
        }

        getRepository(Usuario).merge(cliente, clienteNew);

        const results = await getRepository(Usuario).save(cliente);

        return res.json({
            ok:true,
            response:results,
        });

    } catch (error) {
        return res.status(500).json({
            ok:false,
            msg: 'Conectate al administrador'
        })
    }
    
}

export const deleteCliente = async (req:Request,res:Response): Promise<Response> => {

    const idCliente:string= req.params.id;

    try {
        const cliente = await getRepository(Usuario)
                .createQueryBuilder("usuario")
                .delete()
                .from(Usuario)
                .where("rolId = :idRol AND usuario.id = :idUser", { idRol: idRolCliente,idUser:idCliente })
                .execute();

        if(cliente.affected==0){
            return res.status(404).json({
                ok:false,
                msg: ' Cliente no existe con ese ID'
            })
        }
        return res.json({
            ok:true,
            msg: ' Cliente eliminado con exito'
        });
    } catch (error) {
        return res.status(500).json({
            ok:false,
            msg: 'Conectate al administrador'
        })
    }    
}

