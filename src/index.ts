import 'reflect-metadata';
import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan';

import {createConnection} from 'typeorm'

import clienteRoute from './routes/cliente.routes';
import authRoute from './routes/auth.routes';
import productoRoute from './routes/producto.routes';
import compraRoute from './routes/compra.routes';


const app = express();


dotenv.config();



createConnection();

app.use(cors()); 

app.use(morgan('dev')) 

app.use(express.json());

//rutas o routs
app.use('/api/login',authRoute); 

app.use('/api/cliente',clienteRoute); 
app.use('/api/producto',productoRoute); 
app.use('/api/compra',compraRoute); 




app.listen(process.env.PORT, ()=>{
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});