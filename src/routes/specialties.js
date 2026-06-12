import express from "express";
import specialtiesController from "../controllers/specialtiesController.js"

const router = express.Router()

router.route("/")
.get(specialtiesController.getSpecialties)
.post(specialtiesController.postSpecialty)

router.route("/:id")
.put(specialtiesController.putSpecialty)
.delete(specialtiesController.deleteSpecialty)

export default router