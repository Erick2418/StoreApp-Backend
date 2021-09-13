"use strict";
//  Ruta de cliente /api/cli
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var validarJwt_1 = require("../middlewares/validarJwt");
// import { validarClienteSchema } from '../middlewares/validarShemaClient';
// import { createClienteSchema, loginClienteSchema, updateClienteSchema } from '../schemas/cliente.schema';
var cliente_controller_1 = require("../controller/cliente.controller");
var validateSchemaUsuario_1 = require("../middlewares/validateSchemaUsuario");
var usuario_schema_1 = require("../schemas/usuario.schema");
var router = (0, express_1.Router)();
router.post('/newCli', (0, validateSchemaUsuario_1.validateSchemaUsuario)(usuario_schema_1.createUsuarioSchema), cliente_controller_1.createCliente);
router.use(validarJwt_1.validarJwt);
router.get('/', cliente_controller_1.getClientes);
router.get('/:id', cliente_controller_1.getCliente);
router.put('/:id', (0, validateSchemaUsuario_1.validateSchemaUsuario)(usuario_schema_1.updateUsuarioSchema), cliente_controller_1.updateCliente);
router.delete('/:id', cliente_controller_1.deleteCliente);
exports.default = router;
