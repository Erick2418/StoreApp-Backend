"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Ruta de Producto /api/compra
var express_1 = require("express");
var compra_controller_1 = require("../controller/compra.controller");
var validarteSchemaVenta_1 = require("../middlewares/validarteSchemaVenta");
var validateSchemaDetalleVenta_1 = require("../middlewares/validateSchemaDetalleVenta");
var detalleVenta_schema_1 = require("../schemas/detalleVenta.schema");
var venta_schema_1 = require("../schemas/venta.schema");
var router = (0, express_1.Router)();
// router.use(validarJwt);
router.post('/newDetalleVenta', (0, validateSchemaDetalleVenta_1.validateSchemaDetalleVenta)(detalleVenta_schema_1.createdetalleVentaSchema), compra_controller_1.createDetalleVenta);
router.post('/newVenta', (0, validarteSchemaVenta_1.validateSchemaVenta)(venta_schema_1.createVentaSchema), compra_controller_1.crearVenta);
exports.default = router;
