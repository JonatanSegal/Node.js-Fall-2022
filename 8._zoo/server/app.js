import  express  from "express";
const app = express()


//import path from "path"
// Ways to send file via express
// res.sendFile()
//app.use(express.static(path.resolve("../client/dist")))
app.use(express.json())

// Not safe but allows us to work around CORS problems
import cors from "cors"
app.use(cors())

import animalsRouter from "./routers/animalsRouter.js"
app.use(animalsRouter)


const PORT = 8080 || process.env.PORT
app.listen(PORT, () =>console.log("App is running on: ", PORT) )