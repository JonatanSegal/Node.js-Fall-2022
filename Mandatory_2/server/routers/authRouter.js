import { Router } from "express"
import db from "../database/connection.js"
import bcrypt from "bcrypt"
import { checkIfLoginSession, setLoginSession } from "../services/sessionService.js"
import session from "express-session"

const saltRounds = 12
const router = Router()

router.get("/api/sign-up", async (req, res) => {
    const DATA = await db.all("SELECT * FROM users")
    res.send(DATA)
})

router.get("/api/login", (req, res) => {
    res.send({message: "You are about to login"})
})

router.get("/authorized", checkIfLoginSession, (req, res , next) => {   
    res.send({message: "Welcome to the secret page only for logged in members"})
})

router.post("/api/sign-up", async (req, res) => {
    const body = req.body
    const dbEmail = await db.get(`SELECT email FROM users WHERE email = ?`, body.email)
    console.log(dbEmail.email)
    if(dbEmail.email === body.email){
        return res.send({message: "User already exists"})
    }
    
    const encryptedpassword = await bcrypt.hash(body.password, saltRounds)
    console.log(encryptedpassword)
    body.password = encryptedpassword
   
    const newUser ={...body}
    console.log(newUser)
   
    const updateDB = await db.run(`INSERT INTO users(name, email, password) VALUES (?,?,?) `,[body.name, body.email, body.password])
    console.log(updateDB.changes)
    const DATA = await db.all("SELECT * FROM users")
    res.send(DATA)
})

router.post("/api/login", async (req,res) => {
    const body = req.body
    const dbEmail = await db.get(`SELECT email FROM users WHERE email = ?`, body.email) || ""
    console.log(dbEmail.email)
    if(dbEmail.email !== body.email){
        return res.send({message: "User does not exists"})
    }

    const user = findUserByEmail(req.body.email)
    const loginPassword = req.body.password
    const encryptedpassword = user.password
    const passwordComparison = await bcrypt.compare(loginPassword, encryptedpassword)

    if(!passwordComparison){
        res.send({message: "Password incorrect"})
    }
    
    res.redirect("/authorized")
})



export default router