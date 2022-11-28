import db from "./connection.js"

const updateShoe = await db.shoes.updateOne({brand: "addidas"}, {$set :{price: 300}})
console.log(updateShoe)