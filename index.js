import app from "./app.js";
import "./database.js"
import { config } from "./config.js";

async function main(){
    try {
        app.listen(config.port.PORT)
        console.log(`Running on port ${config.port.PORT}`)
    } catch (error) {
        console.log("Error al iniciar el puerto")
    }
}

main();