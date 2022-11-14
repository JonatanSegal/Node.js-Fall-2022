import  express  from "express";
const app = express()

import path from "path"
// Ways to send file via express
// res.sendFile()
//app.use(express.static(path.resolve("../client/dist")))

app.get("/api/test", (req, res) =>{
    res.send({message: "You found me"})
})

const PORT = 8080 || process.env.PORT
app.listen(PORT, () =>console.log("App is running on: ", PORT) )