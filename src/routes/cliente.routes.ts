//  Rutas de usuarios /api/user

import {Router} from 'express'

// import { createCliente, getClientes, getCliente, updateCliente, deleteCliente, loginClienteAuth } from '../controllers/cliente.controller';

// import { validarJwt } from '../middlewares/validarJwt';


// import { validarClienteSchema } from '../middlewares/validarShemaClient';
// import { createClienteSchema, loginClienteSchema, updateClienteSchema } from '../schemas/cliente.schema';
import { getClientes } from '../controller/cliente.controller';

const router = Router();

// router.post('/login',validarShemaAuth(shemaAuth),loginUserAuth);

// router.post('/',validarClienteSchema(createClienteSchema),createCliente);

// router.use(validarJwt);


router.get('/',getClientes);

// router.get('/:id',getCliente);


// router.put('/:id',validarClienteSchema(updateClienteSchema),updateCliente);

// router.delete('/:id',deleteCliente);


export default router;