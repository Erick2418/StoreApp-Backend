import Joi from "joi"
export  const createVentaSchema = Joi.object({
    fecha: Joi.date().required(),
    usuarioId: Joi.number().required(),
})