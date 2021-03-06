"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVentaSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.createVentaSchema = joi_1.default.object({
    fecha: joi_1.default.date().required(),
    usuarioId: joi_1.default.number().required(),
});
