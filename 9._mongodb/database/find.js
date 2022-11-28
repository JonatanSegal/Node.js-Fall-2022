import db from "./connection.js"

const allShoes = await db.shoes.find().toArray()
console.log(allShoes)

const findSalesmenOver4500 = await db.salesmen.find({salary:{$gt: 4500}}).toArray()
//console.log(findSalesmenOver4500)
