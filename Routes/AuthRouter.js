import { addQuery, getAllQuery } from '../Controllers/AuthController.js';
import { QueryFormValidation } from '../Middlewares/AuthValidation.js';


import router from 'express';

export default router.Router()
    .post('/query', QueryFormValidation, addQuery)
    .get('/query', getAllQuery);

