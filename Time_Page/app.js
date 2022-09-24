import express from "express";
import path from "path";

const app = express();

app.use(express.static("public"));


app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/index.html"))
})


app.listen(8080, (error) => {
    console.log("Error:", error)
    console.log("Server is running on port:", 8080)
})