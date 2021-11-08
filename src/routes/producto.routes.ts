//  Ruta de Producto /api/producto
import {Router} from 'express'

import { getProductos,getProducto } from '../controller/producto.controller';

const router = Router();

// router.use(validarJwt);

router.get('/',getProductos);

router.get('/:id',getProducto);

export default router;