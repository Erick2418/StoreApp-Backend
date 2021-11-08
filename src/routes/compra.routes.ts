//  Ruta de Producto /api/compra
import {Router} from 'express'
import { crearVenta, createDetalleVenta } from '../controller/compra.controller';
import { validateSchemaVenta } from '../middlewares/validarteSchemaVenta';
import { validateSchemaDetalleVenta } from '../middlewares/validateSchemaDetalleVenta';
import { createdetalleVentaSchema } from '../schemas/detalleVenta.schema';
import { createVentaSchema } from '../schemas/venta.schema';

const router = Router();

// router.use(validarJwt);

router.post('/newDetalleVenta',validateSchemaDetalleVenta(createdetalleVentaSchema),createDetalleVenta);

router.post('/newVenta',validateSchemaVenta(createVentaSchema),crearVenta);


export default router;