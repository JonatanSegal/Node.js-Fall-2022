import {MongoClient} from "mongodb"

//Default port 27017              :// protocol indicator
const url = "mongodb://127.0.0.1:27017"

const client = new MongoClient(url)

await client.connect()

const shoesDB = client.db("shoes")
const salesmenDB = client.db("shoes_salesmen")

const shoes = shoesDB.collection("shoes")
const salesmen = salesmenDB.collection("shoes_salesmen")

export default {
    shoes,
    salesmen
}