import { Router } from "express";
const router = Router();
import db from "../database/connection_mysql.js";

router.get("/animalfeedstock", async (req, res) => {
    const [rows, fields] = await db.query("SELECT * FROM animal_feed_stock;");
    
    res.send({ data: rows });
});

router.post("/animalfeedstock", async (req, res) => {
    // task write pseudo-code or comments and reflect on what steps you need to do here
    const {initialAmount, remainingAmount, animalFeedTypeId} = req.body

    if(!animalFeedTypeId) return res.status(400).send({message: "missing the key animalFeedTypeId"})
    if(!initialAmount) return res.status(400).send({message: "missing the key initialAmount"})
    
    const data = await db.query("INSERT INTO animal_feed_stock (initial_amount, remaining_amount, animal_feed_type_id) VALUES(?, ?, ?)", 
    [initialAmount, remainingAmount || initialAmount, animalFeedTypeId])

    res.send({});
});

export default router;