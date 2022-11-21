import mysql from "mysql2"

const connection = mysql.createConnection({
    host: "localhost",
    user:"root",
    password: "K53x5nj#",
    database: "zoo",
})

export default connection