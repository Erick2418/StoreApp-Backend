"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUsuarioSchema = exports.loginUsuarioSchema = exports.createUsuarioSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.createUsuarioSchema = joi_1.default.object({
    nombre: joi_1.default.string().required(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().required(),
    fecha: joi_1.default.date().required(),
});
exports.loginUsuarioSchema = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().required(),
});
exports.updateUsuarioSchema = joi_1.default.object({
    nombre: joi_1.default.string(),
    email: joi_1.default.string().email(),
    password: joi_1.default.string(),
    fecha: joi_1.default.date(),
});
