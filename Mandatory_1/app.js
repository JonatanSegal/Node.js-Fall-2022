import express from "express";
//import bodyParser from "body-parser" // Maybe needed for login process
const app = express();

app.use(express.static("public"));
//app.use(bodyParser.json) // Maybe needed for login process


import { renderPage } from "./util/templateEngine.js";

const homepagePage = renderPage("/homepage/homepage.html",{
    tabTitle: "Node-mandatory"
});

const expressPage = renderPage("/express/express.html");
const renderingPage = renderPage("/rendering/rendering.html");

app.get("/", (req, res) => {
    res.send(homepagePage);
});

app.get("/express", (req, res) => {
    res.send(expressPage);
});

app.get("/rendering", (req, res) => {
    res.send(renderingPage);
});









const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});