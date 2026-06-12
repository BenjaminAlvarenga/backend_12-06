import express from "express";
import cookieParser from "cookie-parser";
import specialtiesRoutes from "./src/routes/specialties.js";
import filesRoutes from "./src/routes/files.js";
import equipmentRoutes from "./src/routes/equipment.js"
import patientRoutes from "./src/routes/patients.js"

const app = express()

app.use(express.json())

app.use("/api/specialties", specialtiesRoutes)
app.use("/api/files", filesRoutes)
app.use("/api/equipment", equipmentRoutes)
app.use("/api/patients", patientRoutes)

export default app