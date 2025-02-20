import express from 'express';
import upload from "../Middlewares/Upload.js"; // Correct import
import { 
  createlogo, getlogo, updateLogo, getOneLogo
} from '../Controllers/LogoController.js';

const router = express.Router(); // Correctly instantiate the router

// Define routes
router
  .post('/create', upload, createlogo)  // Use 'upload' middleware correctly
  .get('/getall', getlogo) 
  .get('/getone/:id', getOneLogo) 
  .put('/update/:id',upload, updateLogo);

export default router;
