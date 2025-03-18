import express from "express";
import upload from "../Middlewares/Upload.js"; // Correct import
import {
  createPatnerlogo,
  getSinglepatnerlogo,
  updatepatnerLogo,
  getOnepatnerLogo,
  getAllPatnerLogos,
} from "../Controllers/ourPatners.js";

const router = express.Router(); // Correctly instantiate the router

// Define routes
router
  .post("/", upload, createPatnerlogo) // Use 'upload' middleware correctly
  .get("/", getSinglepatnerlogo)
  .get("/", getAllPatnerLogos)
  .get("/:id", getOnepatnerLogo)
  .put("/:id", upload, updatepatnerLogo);

export default router;
