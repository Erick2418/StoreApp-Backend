"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Ruta de Producto /api/producto
var express_1 = require("express");
var producto_controller_1 = require("../controller/producto.controller");
var router = (0, express_1.Router)();
// router.use(validarJwt);
router.get('/', producto_controller_1.getProductos);
router.get('/:id', producto_controller_1.getProducto);
exports.default = router;
