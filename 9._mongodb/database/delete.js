import db from "./connection.js"


const deleteShoe = await db.shoes.deleteMany({brand: "addidas"})