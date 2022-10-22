import express from "express"
import { users ,documentation ,getDoc,saveDoc} from "./util/fakeDataBase.js"
const app = express()

app.use(express.static("public"))
app.use(express.json())


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

app.get("/api/documentation", (req, res) => {
    res.send(getDoc())
})

app.get("/api/documentation/:id", (req, res) => {
    const documentationTextToEdit = documentation.find(documentation => documentation.id === Number(req.params.id))
    console.log(documentationTextToEdit)
    res.send(documentationTextToEdit)
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

app.patch("/api/documentation/:id", (req, res) => {
    let docToPatch = getDoc()
    const foundIndex = getDoc().findIndex(documentation => documentation.id === Number(req.params.id))
    console.log(foundIndex)
    if(foundIndex !== -1){
        const foundDocumentation = documentation[foundIndex]
        const documentationToUpdate = {...foundDocumentation, ...req.body}
        docToPatch[foundIndex] = documentationToUpdate
        saveDoc(docToPatch)
        res.send({data: documentationToUpdate})
    }else {
        res.status(404).send({ data: undefined, message: `No documentation mfound by id: ${req.params.id}` });
    }  
})





const PORT = process.env.PORT || 8080

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error)
    }
    console.log("Server is running on port", server.address().port);
})