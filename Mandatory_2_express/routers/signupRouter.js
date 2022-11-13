import { Router } from "express"
import bcrypt from "bcrypt"
import { getAllUsers, checkUserExists, saveUser } from "../services/userService.js"

const saltRounds = 12
const router = Router()

router.get("/sign-up", (req, res) => {
    res.send(getAllUsers())
})

router.post("/sign-up", async (req, res) => {
    const body = req.body

    if(checkUserExists(body.email)){
        return res.send({message: "User exists"})
    }
    
    const encryptedpassword = await bcrypt.hash(body.password, saltRounds)
    console.log(encryptedpassword)
    res.send({message: encryptedpassword})
})



export default router