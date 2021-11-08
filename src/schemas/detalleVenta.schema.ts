import Joi from "joi"
export  const createdetalleVentaSchema = Joi.object({
    cantidad: Joi.number().required(),
    precio: Joi.number().required(),
    subtotal: Joi.number().required(),
    productoId: Joi.number().required(),
    ventaId: Joi.number().required(),
})