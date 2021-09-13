//  Ruta de Producto /api/producto

import {Router} from 'express'
// import { validarJwt } from '../middlewares/validarJwt';


// import { getClientes, getCliente, createCliente, updateCliente, deleteCliente } from '../controller/cliente.controller';
// import { validateSchemaUsuario } from '../middlewares/validateSchemaUsuario';
// import { createUsuarioSchema, updateUsuarioSchema } from '../schemas/usuario.schema';
import { getProductos } from '../controller/producto.controller';

const router = Router();


// router.post('/newProducto',validateSchemaUsuario(createUsuarioSchema),createCliente);


// router.use(validarJwt);

router.get('/',getProductos);

// router.get('/:id',getCliente);

// router.put('/:id',validateSchemaUsuario(updateUsuarioSchema),updateCliente);


// router.delete('/:id',deleteCliente);


export default router;