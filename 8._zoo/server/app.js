import  express  from "express";
const app = express()

//import path from "path"
// Ways to send file via express
// res.sendFile()
//app.use(express.static(path.resolve("../client/dist")))

// Not safe but allows us to work around CORS problems
import cors from "cors"
app.use(cors())


const animals = ["🐒", "🦝", "🐼", "🦦"]

app.get("/api/animals", (req, res) =>{
    res.send({data: animals})
})

const PORT = 8080 || process.env.PORT
app.listen(PORT, () =>console.log("App is running on: ", PORT) )