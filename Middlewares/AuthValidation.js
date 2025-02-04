const Joi=require('joi');

const QueryFormValidation=(req,res,next)=>{
    const schema=Joi.object({
        Full_Name:Joi.string().min(3).max(100).required(),
        Mobile_No: Joi.string().pattern(/^[0-9]{10}$/).required(),
        Email: Joi.string().email().min(5).max(100).required(),
        Address:Joi.string().min(8).max(100).required()
    });

    const {error}=schema.validate(req.body);
    if(error){
        return res.status(400)
        .json({message:"Bad Request",error})
    }
    next();
}

module.exports={QueryFormValidation}