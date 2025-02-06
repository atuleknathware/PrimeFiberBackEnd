import Joi from 'joi';

export const QueryFormValidation = (req, res, next) => {
    const schema = Joi.object({
        Full_Name: Joi.string().min(3).max(100).required(),
        Mobile_No: Joi.string().pattern(/^[0-9]{10}$/).required(),
        Email: Joi.string().email().min(5).max(100).required(),
        Address: Joi.string().min(8).max(100).required(),
        Service_Type: Joi.string().valid("Home Broadband", "Bandwidth for Business").required()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: "Bad Request", error });
    }
    next();
};
