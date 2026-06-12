import express from "express";
import filesController from "../controllers/filesController.js"

const router = express.Router()

router.route("/")
.get(filesController.getFiles)
.post(filesController.postFile)

router.route("/:id")
.put(filesController.putFile)
.delete(filesController.deleteFile)

export default router