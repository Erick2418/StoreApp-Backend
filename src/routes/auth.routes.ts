import {Router} from 'express'

import { loginUsuario } from '../controller/loginUsuario.controller';
import { validateSchemaUsuario } from '../middlewares/validateSchemaUsuario';
import { loginUsuarioSchema } from '../schemas/usuario.schema';

const router = Router();

router.post('/',validateSchemaUsuario(loginUsuarioSchema),loginUsuario);


export default router;