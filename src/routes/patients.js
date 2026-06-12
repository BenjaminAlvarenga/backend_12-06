import express from "express";
import patientsController from "../controllers/patientsController.js"

const router = express.Router()

router.route("/")
.get(patientsController.getSpecialties)
.post(patientsController.postSpecialty)

router.route("/:id")
.put(patientsController.putSpecialty)
.delete(patientsController.deleteSpecialty)

export default router