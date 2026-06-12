import express from "express";
import equipmentController from "../controllers/equipmentController.js"
import upload from "../utils/cloudinaryConfig.js";

const router = express.Router()

router.route("/")
.get(equipmentController.getEquipment)
.post(upload.single("image"), equipmentController.postEquipment)

router.route("/:id")
.put(upload.single("image"), equipmentController.putEquipment)
.delete(equipmentController.deleteEquipment)

export default router