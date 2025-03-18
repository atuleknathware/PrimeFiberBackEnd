import express from 'express';
import {User} from '../Controllers/Usercontroller.js';

const router = express.Router(); 


router
   
  .get('/getall', User) 
  

  export default router;
