"use strict";
//  Ruta de Producto /api/producto
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
// import { validarJwt } from '../middlewares/validarJwt';
// import { getClientes, getCliente, createCliente, updateCliente, deleteCliente } from '../controller/cliente.controller';
// import { validateSchemaUsuario } from '../middlewares/validateSchemaUsuario';
// import { createUsuarioSchema, updateUsuarioSchema } from '../schemas/usuario.schema';
var producto_controller_1 = require("../controller/producto.controller");
var router = (0, express_1.Router)();
// router.post('/newProducto',validateSchemaUsuario(createUsuarioSchema),createCliente);
// router.use(validarJwt);
router.get('/', producto_controller_1.getProductos);
router.get('/:id', producto_controller_1.getProducto);
// router.get('/:id',getCliente);
// router.put('/:id',validateSchemaUsuario(updateUsuarioSchema),updateCliente);
// router.delete('/:id',deleteCliente);
exports.default = router;
