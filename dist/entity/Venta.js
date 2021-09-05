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
exports.Venta = void 0;
var typeorm_1 = require("typeorm");
var Usuario_1 = require("./Usuario");
var DetalleVenta_1 = require("./DetalleVenta");
var Venta = /** @class */ (function () {
    function Venta() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Venta.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)('date'),
        __metadata("design:type", String)
    ], Venta.prototype, "fecha", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Usuario_1.Usuario; }, function (usuario) { return usuario.ventas; }),
        __metadata("design:type", Usuario_1.Usuario)
    ], Venta.prototype, "usuario", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return DetalleVenta_1.DetalleVenta; }, function (detalleVenta) { return detalleVenta.venta; }),
        __metadata("design:type", Array)
    ], Venta.prototype, "detalleVentas", void 0);
    Venta = __decorate([
        (0, typeorm_1.Entity)()
    ], Venta);
    return Venta;
}());
exports.Venta = Venta;
