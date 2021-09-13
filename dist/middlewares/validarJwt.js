"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarJwt = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var validarJwt = function (req, res, next) {
    // x-token   headers
    var token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: ' No hay token en la peticion'
        });
    }
    try {
        var payload = jsonwebtoken_1.default.verify(token, process.env.TOKER_SECRET || 'tokentest'); // le mandamos esas props
        req.userId = payload.id;
        req.nombre = payload.nombre;
    }
    catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no valido'
        });
    }
    next();
};
exports.validarJwt = validarJwt;
