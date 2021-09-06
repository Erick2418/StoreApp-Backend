//  Ruta de cliente /api/cli

import {Router} from 'express'
// import { validarJwt } from '../middlewares/validarJwt';

// import { validarClienteSchema } from '../middlewares/validarShemaClient';
// import { createClienteSchema, loginClienteSchema, updateClienteSchema } from '../schemas/cliente.schema';
import { getClientes, getCliente, createCliente, updateCliente, deleteCliente } from '../controller/cliente.controller';
import { validateSchemaUsuario } from '../middlewares/validateSchemaUsuario';
import { createUsuarioSchema, updateUsuarioSchema } from '../schemas/usuario.schema';

const router = Router();


router.post('/newCli',validateSchemaUsuario(createUsuarioSchema),createCliente);


// router.use(validarJwt);

router.get('/',getClientes);

router.get('/:id',getCliente);

router.put('/:id',validateSchemaUsuario(updateUsuarioSchema),updateCliente);


router.delete('/:id',deleteCliente);


export default router;