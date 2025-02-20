
// import router from 'express';
// import { adminLogin } from '../Controllers/AdminController.js';
// import { getAllQuery } from '../Controllers/AuthController.js';
// import { getOneHomePlan,updateHomePlan,deleteHomePlan } from '../Controllers/PlanController.js';  // Ensure correct import here


// export default router.Router()
//     .post('/', adminLogin)
//     .get('/getAll', getAllQuery)
//     .get("/getone/:id",getOneHomePlan)
//     .put("/update/:id",updateHomePlan)
//     .delete("/delete/:id",deleteHomePlan);

import { Router } from 'express'; // ✅ Correct import

import { adminLogin } from '../Controllers/AdminController.js';
import { getAllQuery } from '../Controllers/AuthController.js';
import { getOneHomePlan, updateHomePlan, deleteHomePlan } from '../Controllers/PlanController.js';

const router = Router(); // ✅ Correct instantiation

router.post('/', adminLogin);
router.get('/getAll', getAllQuery);
router.get("/getone/:id", getOneHomePlan);
router.put("/update/:id", updateHomePlan);
router.delete("/delete/:id", deleteHomePlan);

export default router; // ✅ Correct export
