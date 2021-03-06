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
exports.Producto = void 0;
var typeorm_1 = require("typeorm");
var Categoria_1 = require("./Categoria");
var DetalleVenta_1 = require("./DetalleVenta");
var Producto = /** @class */ (function () {
    function Producto() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Producto.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", length: 200 }),
        __metadata("design:type", String)
    ], Producto.prototype, "nombre", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", length: 250 }),
        __metadata("design:type", String)
    ], Producto.prototype, "descripcion", void 0);
    __decorate([
        (0, typeorm_1.Column)("decimal", { precision: 5, scale: 2 }),
        __metadata("design:type", Number)
    ], Producto.prototype, "precio", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Boolean)
    ], Producto.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return DetalleVenta_1.DetalleVenta; }, function (detalleVenta) { return detalleVenta.producto; }),
        __metadata("design:type", Array)
    ], Producto.prototype, "detalleVentas", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Producto.prototype, "categoriaId", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Categoria_1.Categoria; }, function (categoria) { return categoria.productos; }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", Categoria_1.Categoria)
    ], Producto.prototype, "categoria", void 0);
    Producto = __decorate([
        (0, typeorm_1.Entity)()
    ], Producto);
    return Producto;
}());
exports.Producto = Producto;
