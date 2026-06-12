import express from "express";
import appointmentsController from "../controllers/appointmentsController.js"

const router = express.Router()

router.route("/")
.get(appointmentsController.getSpecialties)
.post(appointmentsController.postSpecialty)

router.route("/:id")
.put(appointmentsController.putSpecialty)
.delete(appointmentsController.deleteSpecialty)

export default router