import { Router } from "express"
import db from "../database/connection.js"
import bcrypt from "bcrypt"
import { signUpMail } from "../services/emailService.js"
import session from "express-session"

const saltRounds = 12
const router = Router()

//GET - used to see all users in db REMOVE AT SOME POINT
router.get("/api/sign-up", async (req, res) => {
    const DATA = await db.all("SELECT * FROM users")
    res.send(DATA)
})

router.get("/api/login", (req, res) => {
    res.send({message: "You are about to login"})
})

router.get("/api/authorized", (req, res ) => {   
    res.send({message: "Welcome to the secret page only for logged in members"})
})

//POST - Sign up new user
router.post("/api/sign-up", async (req, res) => {
    const body = req.body
    
    if (!body.name) return res.status(400).send({ message: "Name not defined" })
    if (!body.email) return res.status(400).send({ message: "Email not defined" })
    if (!body.password) return res.status(400).send({ message: "Password not defined" })
   
    try{
        const result = await db.get(`SELECT * FROM users WHERE email = ?`, body.email)
        
        if(result === undefined){             
            const encryptedpassword = await bcrypt.hash(body.password, saltRounds)
            console.log(encryptedpassword)
            body.password = encryptedpassword
        
            const newUser ={...body}
            console.log(newUser)
        
            const updateDB = await db.run(`INSERT INTO users(name, email, password) VALUES (?,?,?) `,[body.name, body.email, body.password])
            console.log(updateDB.changes)
            signUpMail(body.email, body.name)    
            .then(result => {
                console.log(result)
                res.status(200).send({Changes: updateDB.changes, Link: result})})
            .catch(console.error)
        }
        else{
            console.log(result.email)

            if(result.email === body.email){
                return res.status(400).send({message: "User already exists"})
            }
        }
    }catch{
        console.error()
    }
})

//POST - Login
router.post("/api/login", async (req,res) => {
    const body = req.body

    if(!body.email || !body.password || body.email === "" || body.password === ""){
        res.sendStatus(401)
    }
    try{
        const result = await db.get(`SELECT * FROM users WHERE email = ?`, body.email)
        
        if(result === undefined){
            res.sendStatus(401)
            console.log("result was undefined")
        }
        else{
            const encryptedpassword = result.password
            const loginPassword = body.password
            const passwordComparison = await bcrypt.compare(loginPassword, encryptedpassword)
            
            if(passwordComparison  === true){
                req.session.loggedIn = true
                console.log(req.session)
                res.sendStatus(200)
            }
            else {
                res.sendStatus(401).send("Passwords didn't match")
            }
        }
    }catch{
        console.error()
    }
})



export default router