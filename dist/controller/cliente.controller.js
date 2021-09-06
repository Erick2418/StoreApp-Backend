"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCliente = exports.updateCliente = exports.createCliente = exports.getCliente = exports.getClientes = void 0;
var typeorm_1 = require("typeorm"); //tre un repo o una tabla de una base de datos
var Usuario_1 = require("../entity/Usuario");
var bcryptjs_1 = __importDefault(require("bcryptjs"));
;
// import { generarJWT } from '../helpers/jwt';
var idRolCliente = 1;
var getClientes = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var clientes, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, typeorm_1.getRepository)(Usuario_1.Usuario)
                        .createQueryBuilder("usuario")
                        .leftJoinAndSelect("usuario.rol", "rol")
                        .where("rol.id = :id", { id: idRolCliente })
                        .getMany()];
            case 1:
                clientes = _a.sent();
                return [2 /*return*/, res.json({
                        ok: true,
                        clientes: clientes
                    })];
            case 2:
                error_1 = _a.sent();
                return [2 /*return*/, res.status(500).json({
                        ok: false,
                        msg: 'Conectate con el administrador'
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getClientes = getClientes;
var getCliente = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var idCliente, cliente, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                idCliente = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, typeorm_1.getRepository)(Usuario_1.Usuario)
                        .createQueryBuilder("usuario")
                        .leftJoinAndSelect("usuario.rol", "rol")
                        .where("rol.id = :idRol AND usuario.id = :idUser", { idRol: idRolCliente, idUser: idCliente })
                        .getOne()];
            case 2:
                cliente = _a.sent();
                if (!cliente) {
                    return [2 /*return*/, res.status(404).json({
                            ok: false,
                            msg: ' Cliente no existe con ese ID'
                        })];
                }
                return [2 /*return*/, res.json({
                        ok: true,
                        cliente: cliente
                    })];
            case 3:
                error_2 = _a.sent();
                return [2 /*return*/, res.status(500).json({
                        ok: false,
                        msg: 'Conectate con el administrador'
                    })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getCliente = getCliente;
var createCliente = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, emailExist, userNew, salt, newUser, result, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, email = _a.email, password = _a.password;
                return [4 /*yield*/, (0, typeorm_1.getRepository)(Usuario_1.Usuario)
                        .createQueryBuilder("usuario")
                        .select("usuario.id")
                        .where("usuario.email= :email", { email: email })
                        .getOne()];
            case 1:
                emailExist = _b.sent();
                if (emailExist != undefined) {
                    return [2 /*return*/, res.status(400).json({
                            ok: false,
                            msg: 'email exist' // cambiar por "Email o Password Incorrecto"
                        })];
                }
                userNew = req.body;
                salt = bcryptjs_1.default.genSaltSync();
                userNew.rolId = idRolCliente;
                userNew.password = bcryptjs_1.default.hashSync(password, salt);
                _b.label = 2;
            case 2:
                _b.trys.push([2, 4, , 5]);
                newUser = (0, typeorm_1.getRepository)(Usuario_1.Usuario).create(userNew);
                return [4 /*yield*/, (0, typeorm_1.getRepository)(Usuario_1.Usuario).save(newUser)];
            case 3:
                result = _b.sent();
                return [2 /*return*/, res.json({
                        ok: true,
                        user: result
                    })];
            case 4:
                error_3 = _b.sent();
                return [2 /*return*/, res.status(500).json({
                        ok: false,
                        msg: 'Conectate al administrador'
                    })];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.createCliente = createCliente;
var updateCliente = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, password, email, clienteNew, salt, emailExist, clienteID, cliente, results, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, password = _a.password, email = _a.email;
                clienteNew = req.body;
                if (password != undefined) {
                    salt = bcryptjs_1.default.genSaltSync();
                    clienteNew.password = bcryptjs_1.default.hashSync(password, salt);
                }
                return [4 /*yield*/, (0, typeorm_1.getRepository)(Usuario_1.Usuario)
                        .createQueryBuilder("usuario")
                        .select("usuario.id")
                        .where("usuario.email= :email", { email: email })
                        .getOne()];
            case 1:
                emailExist = _b.sent();
                if (emailExist != undefined) {
                    return [2 /*return*/, res.status(400).json({
                            ok: false,
                            msg: 'email exist' // cambiar por "Email o Password Incorrecto"
                        })];
                }
                clienteID = req.params.id;
                _b.label = 2;
            case 2:
                _b.trys.push([2, 5, , 6]);
                return [4 /*yield*/, (0, typeorm_1.getRepository)(Usuario_1.Usuario)
                        .createQueryBuilder("usuario")
                        .where("usuario.rolId = :idRol AND usuario.id= :idUser", { idRol: idRolCliente, idUser: clienteID })
                        .getOne()];
            case 3:
                cliente = _b.sent();
                if (cliente == undefined) {
                    console.log('NO SE ENCONTRO');
                    return [2 /*return*/, res.status(404).json({
                            ok: false,
                            msg: 'Cliente no existe'
                        })];
                }
                (0, typeorm_1.getRepository)(Usuario_1.Usuario).merge(cliente, clienteNew);
                return [4 /*yield*/, (0, typeorm_1.getRepository)(Usuario_1.Usuario).save(cliente)];
            case 4:
                results = _b.sent();
                return [2 /*return*/, res.json({
                        ok: true,
                        response: results,
                    })];
            case 5:
                error_4 = _b.sent();
                return [2 /*return*/, res.status(500).json({
                        ok: false,
                        msg: 'Conectate al administrador'
                    })];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.updateCliente = updateCliente;
var deleteCliente = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var idCliente, cliente, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                idCliente = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, typeorm_1.getRepository)(Usuario_1.Usuario)
                        .createQueryBuilder("usuario")
                        .delete()
                        .from(Usuario_1.Usuario)
                        .where("rolId = :idRol AND usuario.id = :idUser", { idRol: idRolCliente, idUser: idCliente })
                        .execute()];
            case 2:
                cliente = _a.sent();
                if (cliente.affected == 0) {
                    return [2 /*return*/, res.status(404).json({
                            ok: false,
                            msg: ' Cliente no existe con ese ID'
                        })];
                }
                return [2 /*return*/, res.json({
                        ok: true,
                        msg: ' Cliente eliminado con exito'
                    })];
            case 3:
                error_5 = _a.sent();
                return [2 /*return*/, res.status(500).json({
                        ok: false,
                        msg: 'Conectate al administrador'
                    })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deleteCliente = deleteCliente;
