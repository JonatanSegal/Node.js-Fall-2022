import express from "express"
import path from "path"

const app = express()
const port = 8080

app.use(express.static("public"));


app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/index.html"))
})


app.listen(port, (error) => {
    console.log("Error:", error)
    console.log("Server is running on port:", port)
})