import Joi from "joi"
export  const createUsuarioSchema = Joi.object({
    nombre: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    fecha: Joi.date().required(),
})

export  const loginUsuarioSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
})

export  const updateUsuarioSchema = Joi.object({
    nombre: Joi.string(),
    email: Joi.string().email(),
    password: Joi.string(),
    fecha: Joi.date(),
})