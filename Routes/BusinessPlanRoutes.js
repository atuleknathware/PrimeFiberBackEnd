import express from 'express';
import { 
  createBusiness, 
  getallBusiness, 
  getOneBusiness, 
  updateBusiness, 
   deleteBusinessPlan
} from '../Controllers/BusinessPlan.js';

const router = express.Router(); 


router
  .post('/create', createBusiness) 
  .get('/getall', getallBusiness) 
  .get('/getone/:id', getOneBusiness) 
  .put('/update/:id', updateBusiness) 
  .delete('/delete/:id', deleteBusinessPlan); 

export default router;
