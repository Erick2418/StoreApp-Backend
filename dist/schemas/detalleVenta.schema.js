"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createdetalleVentaSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.createdetalleVentaSchema = joi_1.default.object({
    cantidad: joi_1.default.number().required(),
    precio: joi_1.default.number().required(),
    subtotal: joi_1.default.number().required(),
    productoId: joi_1.default.number().required(),
    ventaId: joi_1.default.number().required(),
});
