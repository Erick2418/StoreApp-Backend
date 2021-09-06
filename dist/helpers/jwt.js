"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generarJWT = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var generarJWT = function (id, nombre) {
    return new Promise(function (resolve, reject) {
        var payload = { id: id, nombre: nombre };
        jsonwebtoken_1.default.sign(payload, process.env.TOKER_SECRET || 'tokentest', {
            expiresIn: '2h'
        }, function (err, token) {
            if (err) {
                console.log(err);
                reject('No se pudo generar el token');
            }
            else {
                resolve(token);
            }
        });
    });
};
exports.generarJWT = generarJWT;
