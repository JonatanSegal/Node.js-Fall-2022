import db from "./connection.js"


const insertShoe = await db.shoes.insertOne({brand:"addidas", type: "sneakers"})

const allShoes = await db.shoes.find().toArray()
console.log(allShoes)