import { Router } from "express";
import { mailer } from "../util/nodeMailer.js";
const router = Router();

router.post("/api/contact", (req, res) => {
    console.log(req.body)
    let sender = req.body.email
    let message = req.body.message
    let name = req.body.name
    mailer(sender, message, name)
    .then(result => {
        console.log(result)
        res.send(`<a href="${result}" target="_blank">Generated email</a><br><a href="/">Home</a>`)})
    .catch(console.error)
});

export default router;