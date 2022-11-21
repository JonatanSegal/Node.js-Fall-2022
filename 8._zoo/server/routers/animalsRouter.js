import {Router} from "express"
const router = Router()

import db from "../database/connection_sqlite.js"

//const animals = ["🐒", "🦝", "🐼", "🦦"]

router.get("/api/animals", async (req, res) =>{
    const data = await db.all("SELECT * FROM animals")
    //console.log(data)
    res.send({data})
})

router.post("/api/animals", async (req, res) => {
    const commonName = req.body.commonName
    const latinName = req.body.latinName || "Unknown"
    if(!commonName) return res.status(400).send({message:"Common name not defined"})
   
    const result = await db.run(`INSERT INTO animals(latin_name, common_name) VALUES (?,?) `,[latinName, commonName])
    console.log(result)

    res.send({changes : result.changes})
})


export default router