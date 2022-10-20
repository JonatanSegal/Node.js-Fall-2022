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
const editPage = renderPage("/edit-documentation/edit.html",{
    tabTitle:"Edit-page"
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

app.get("/edit", (req, res) => {
    res.send(editPage)
})

app.get("/api/documentation", (req, res) => {
    res.send(documentation)
})

app.get("/api/documentation/:id", (req, res) => {
    const documentationTextToEdit = documentation.find(documentation => documentation.id === Number(req.params.id))
    console.log(documentationTextToEdit)
    res.send(documentationTextToEdit)
})

app.patch("/api/documentation/:id", (req, res) => {
   /* 
    const foundDocumentation = documentation.find(doc => doc.id === Number(req.params.id))
    documentation.find(doc => doc.id === Number(req.params.id)).text = req.body.text
    console.log(foundDocumentation.text)
    res.send({ data: documentation })
   /* const foundIndex = documentation.findIndex(documentation => documentation.id === Number(req.params.id))
    if(foundIndex !== -1){
        const foundDocumentation = documentation[foundIndex]
        const documentationToUpdate = {...foundDocumentation, ...req.body, id: Number(req.params.id) }
        documentation[foundIndex] = documentationToUpdate
        res.send({data: documentation})
    }else {
        res.status(404).send({ data: undefined, message: `No documentation mfound by id: ${req.params.id}` });
    }  
    */
})





const PORT = process.env.PORT || 8080

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error)
    }
    console.log("Server is running on port", server.address().port);
})