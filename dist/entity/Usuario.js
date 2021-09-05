"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var typeorm_1 = require("typeorm");
var Rol_1 = require("./Rol");
var Venta_1 = require("./Venta");
var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Usuario.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", length: 200 }),
        __metadata("design:type", String)
    ], Usuario.prototype, "nombre", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", length: 200 }),
        __metadata("design:type", String)
    ], Usuario.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", length: 200 }),
        __metadata("design:type", Boolean)
    ], Usuario.prototype, "password", void 0);
    __decorate([
        (0, typeorm_1.Column)('date'),
        __metadata("design:type", String)
    ], Usuario.prototype, "fecha", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Rol_1.Rol; }, function (rol) { return rol.usuarios; }),
        __metadata("design:type", Rol_1.Rol)
    ], Usuario.prototype, "rol", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Venta_1.Venta; }, function (venta) { return venta.usuario; }),
        __metadata("design:type", Array)
    ], Usuario.prototype, "ventas", void 0);
    Usuario = __decorate([
        (0, typeorm_1.Entity)()
    ], Usuario);
    return Usuario;
}());
exports.Usuario = Usuario;