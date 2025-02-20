import express from 'express';
import { 
  createHomePlan, 
  getallHomePlan, 
  getOneHomePlan, 
  updateHomePlan, 
  deleteHomePlan 
} from '../Controllers/PlanController.js';



const router = express.Router(); // Correctly instantiate the router

// Define routes
router
  .post('/create', createHomePlan) // Create home plan
  .get('/getall', getallHomePlan) // Get all home plans
  .get('/getone/:id', getOneHomePlan) // Get one home plan by ID
  .put('/update/:id', updateHomePlan) // Update home plan by ID
  .delete('/delete/:id', deleteHomePlan); // Delete home plan by ID

export default router;
