import express from "express";
import equipmentController from "../controllers/equipmentController.js"

const router = express.Router()

router.route("/")
.get(equipmentController.getSpecialties)
.post(equipmentController.postSpecialty)

router.route("/:id")
.put(equipmentController.putSpecialty)
.delete(equipmentController.deleteSpecialty)

export default router