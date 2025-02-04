const {Query}=require('../Controllers/AuthController')
const {QueryFormValidation}=require('../Middlewares/AuthValidation')


const router=require('express').Router();

router.post('/query',QueryFormValidation,Query);

module.exports=router;