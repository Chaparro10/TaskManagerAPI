

import Joi from 'joi';

const name = Joi.string().min(3).max(16);
const email = Joi.string().max(255)
const user = Joi.string().max(255)
const status = Joi.number().max(2)

export const createUserSchema = Joi.object({
    name: name.required(),
    email: email.required(),
});


export const updateUserSchema = Joi.object({
    name: name,
    email: email,
    user: user
})

