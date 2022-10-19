import express from "express"
import { users ,documentation, getUser } from "./util/fakeDataBase.js"
//import bodyParser from "body-parser" // Maybe needed for login process
const app = express()

app.use(express.static("public"))
//app.use(bodyParser.json) // Maybe needed for login process


import { renderPage } from "./util/templateEngine.js"

const homepagePage = renderPage("/content/content.html",{
    tabTitle: documentation[0].titleName,
    content: documentation[0].text
})

const expressPage = renderPage("/content/content.html",{
    tabTitle: documentation[1].titleName,
    content: documentation[1].text
})

const renderingPage = renderPage("/content/content.html",{
    tabTitle: documentation[2].titleName,
    content: documentation[2].text
})
const loginPage = renderPage("/login/login.html",{
    tabTitle:"Login-page"
})

const signupPage = renderPage("/signup/signup.html",{
    tabTitle:"Sign up-page"
})


app.get("/", (req, res) => {
    res.send(homepagePage)
})

app.get("/express", (req, res) => {
    res.send(expressPage)
})

app.get("/rendering", (req, res) => {
    res.send(renderingPage)
})

app.get("/login", (req, res) => {
    res.send(loginPage)
})

app.get("/sign-up", (req, res) => {
    res.send(signupPage)
})










const PORT = process.env.PORT || 8080

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error)
    }
    console.log("Server is running on port", server.address().port);
})