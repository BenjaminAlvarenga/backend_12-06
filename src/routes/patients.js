import express from "express";
import patientsController from "../controllers/patientsController.js"
import upload from "../utils/cloudinaryConfig.js";

const router = express.Router()

router.route("/")
.get(patientsController.getPatients)
.post(upload.single("image"), patientsController.postPatient)

router.route("/:id")
.put(upload.single("image"), patientsController.putPatient)
.delete(patientsController.deletePatient)

export default router