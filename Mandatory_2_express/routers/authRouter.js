import { Router } from "express"
import bcrypt from "bcrypt"
import { getAllUsers, findUserByEmail, checkUserExists, saveUser } from "../services/userService.js"
import { checkIfLoginSession, setLoginSession } from "../services/sessionService.js"
import session from "express-session"

const saltRounds = 12
const router = Router()

router.get("/sign-up", (req, res) => {
    res.send(getAllUsers())
})

router.get("/login", (req, res) => {
    res.send({message: "You are about to login"})
})

router.get("/authorized", checkIfLoginSession, (req, res , next) => {   
    res.send({message: "Welcome to the secret page only for logged in members"})
})

router.post("/sign-up", async (req, res) => {
    const body = req.body

    if(checkUserExists(body.email)){
        return res.send({message: "User already exists"})
    }
    
    const encryptedpassword = await bcrypt.hash(body.password, saltRounds)
    console.log(encryptedpassword)
    body.password = encryptedpassword
   
    const newUser ={...body}
    console.log(newUser)
   
    const updatedDB = getAllUsers()
    updatedDB.push(newUser)
    console.log(updatedDB)
    saveUser(updatedDB)
    res.send(getAllUsers())
})

router.post("/login", async (req,res) => {
    if(!checkUserExists(req.body.email)){
        res.send({message: "User not found"})
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