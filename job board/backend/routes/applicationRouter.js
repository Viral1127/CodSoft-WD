import express from "express";
import {
  hrGetAllApplications,
  candidateDeleteApplication,
  candidateGetAllApplications,
  postApplication,
} from "../controllers/applicationController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/post", isAuthenticated, postApplication);
router.get("/hr/getall", isAuthenticated, hrGetAllApplications);
router.get("/candidate/getall", isAuthenticated, candidateGetAllApplications);
router.delete("/delete/:id", isAuthenticated, candidateDeleteApplication);

export default router;
