import { Router } from "express";
import { documentation ,getDoc,saveDoc} from "../util/fakeDataBase.js"
const docRouter = Router();

docRouter.get("/api/documentation", (req, res) => {
    res.send(getDoc())
})

docRouter.get("/api/documentation/:id", (req, res) => {
    const documentationTextToEdit = documentation.find(documentation => documentation.id === Number(req.params.id))
    console.log(documentationTextToEdit)
    res.send(documentationTextToEdit)
})

docRouter.patch("/api/documentation/:id", (req, res) => {
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

export default docRouter