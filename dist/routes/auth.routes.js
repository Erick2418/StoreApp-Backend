"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var loginUsuario_controller_1 = require("../controller/loginUsuario.controller");
var validateSchemaUsuario_1 = require("../middlewares/validateSchemaUsuario");
var usuario_schema_1 = require("../schemas/usuario.schema");
var router = (0, express_1.Router)();
router.post('/', (0, validateSchemaUsuario_1.validateSchemaUsuario)(usuario_schema_1.loginUsuarioSchema), loginUsuario_controller_1.loginUsuario);
exports.default = router;
