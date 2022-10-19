import express from "express";
const app = express();

app.use(express.static("public"));


import { renderPage } from "./util/templateEngine.js";

const homepagePage = renderPage("/homepage/homepage.html",{
    tabTitle: "Node-mandatory"
});

app.get("/", (req, res) => {
    res.send(homepagePage);
});












const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});