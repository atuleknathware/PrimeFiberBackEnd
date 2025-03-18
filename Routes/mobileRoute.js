import {
  createMobileNo,
  getallMobileNo,
  getOneMobileNo,
  deleteMobileNo,
  updateMobileNo,
} from "../Controllers/mobileController.js";
import express from "express";

const router = express.Router();

router
  .post("/", createMobileNo)
  .get("/", getallMobileNo)
  .get("/:id", getOneMobileNo)
  .put("/:id", updateMobileNo)
  .delete("/:id", deleteMobileNo);

export default router;
