import app from "./app.js";
import "./database.js"
import { config } from "./config.js";

async function main(){
    try {
        app.listen(4000)
        console.log(`Running on port ${config.port.PORT}`)
    } catch (error) {
        console.log("Error al iniciar el puerto")
    }
}

main();