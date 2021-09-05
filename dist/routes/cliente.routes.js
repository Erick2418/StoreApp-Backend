"use strict";
//  Rutas de usuarios /api/user
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
// import { createCliente, getClientes, getCliente, updateCliente, deleteCliente, loginClienteAuth } from '../controllers/cliente.controller';
// import { validarJwt } from '../middlewares/validarJwt';
// import { validarClienteSchema } from '../middlewares/validarShemaClient';
// import { createClienteSchema, loginClienteSchema, updateClienteSchema } from '../schemas/cliente.schema';
var cliente_controller_1 = require("../controller/cliente.controller");
var router = (0, express_1.Router)();
// router.post('/login',validarShemaAuth(shemaAuth),loginUserAuth);
// router.post('/',validarClienteSchema(createClienteSchema),createCliente);
// router.use(validarJwt);
router.get('/', cliente_controller_1.getClientes);
// router.get('/:id',getCliente);
// router.put('/:id',validarClienteSchema(updateClienteSchema),updateCliente);
// router.delete('/:id',deleteCliente);
exports.default = router;
