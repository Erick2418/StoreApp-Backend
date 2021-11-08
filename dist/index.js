"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
var typeorm_1 = require("typeorm");
var cliente_routes_1 = __importDefault(require("./routes/cliente.routes"));
var auth_routes_1 = __importDefault(require("./routes/auth.routes"));
var producto_routes_1 = __importDefault(require("./routes/producto.routes"));
var compra_routes_1 = __importDefault(require("./routes/compra.routes"));
var app = (0, express_1.default)();
dotenv_1.default.config();
(0, typeorm_1.createConnection)();
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
//rutas o routs
app.use('/api/login', auth_routes_1.default);
app.use('/api/cliente', cliente_routes_1.default);
app.use('/api/producto', producto_routes_1.default);
app.use('/api/compra', compra_routes_1.default);
app.listen(process.env.PORT, function () {
    console.log("Servidor corriendo en puerto " + process.env.PORT);
});
