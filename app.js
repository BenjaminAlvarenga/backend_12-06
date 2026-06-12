import express from "express";
import cookieParser from "cookie-parser";
import specialtiesRoutes from "./src/routes/specialties.js";
import filesRoutes from "./src/routes/files.js";

const app = express()

app.use(express.json)

app.use("/api/specialties", specialtiesRoutes)
app.use("/api/files", filesRoutes)

export default app