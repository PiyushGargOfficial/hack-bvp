const joi = require('@hapi/joi');

const regValid = (data) => {
    const schema = {
        name: joi.string().min(6).required(),
        email: joi.string().min(6).required().email(),
        password: joi.string().min(6).required()
    };
    return joi.validate(data, schema); //predefined function gives an error obj if fails.
}
const loginValid = (data) => {
    const schema = {
        email: joi.string().min(6).required().email(),
        password: joi.string().min(6).required()
    };
    return joi.validate(data, schema);
}
module.exports.regValid = regValid;
module.exports.loginValid = loginValid;