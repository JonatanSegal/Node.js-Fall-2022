import { Router } from "express";
const router = Router()

router.get("/popcorn/fill", (req, res) => {
    //todo fill the bucket 
    req.session.popcornAmount = 100
    res.send({popcornAmount: req.session.popcornAmount })
})

router.get("/popcorn/eat/:amount", (req, res) => {
    // eat a certain amount of popcorn.
    const amount = Number(req.params.amount)
    if(!amount) return res.send({message: "Amount is not a number"})

    req.session.popcornAmount -= amount
    if(req.session.popcornAmount <= 0){
        return res.redirect("/popcorn/fill")
    }
    res.send({popcornAmount: req.session.popcornAmount })
})

export default router