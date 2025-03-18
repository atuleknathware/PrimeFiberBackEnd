import express from 'express';
import upload from "../Middlewares/Upload.js"; // Correct import
import { 
  createlogo, getSunglelogo, updateLogo, getOneLogo
} from '../Controllers/LogoController.js';

const router = express.Router(); // Correctly instantiate the router

// Define routes
router
  .post('/create', upload, createlogo)  // Use 'upload' middleware correctly
  .get('/', getSunglelogo) 
  .get('/getone/:id', getOneLogo) 
  .put('/:id',upload, updateLogo);

export default router;
