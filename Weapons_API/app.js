const express = require("express")
const app = express()


app.get('/', (request, response) => {
    response.send({message: "Weapons API is W.I.P"});
})

app.get("/weapons", (req, res) => {
    res.send({
        Glock18:{
            type:"Handgun",
            ammo:"9x19mm",
            fireRate:"fully-automatic"
        },
        AK74u:{
        type:"Submachine gun",
        ammo:"5.45x39mm",
        fireRate:"fully-automatic"
    }})
})

app.get("/weapons/:id", (req,res) =>{
    
    if(Number(req.params.id) === 1){
        res.send({ Glock18:{
            type:"Handgun",
            ammo:"9x19mm",
            fireRate:"fully-automatic"
        }})
    } else if(Number(req.params.id) === 2){
        res.send({AK74u:{
            type:"Submachine gun",
            ammo:"5.45x39mm",
            fireRate:"fully-automatic"
        }})
    } else{
        res.send("No weapons found")
    }
})

app.listen(8080, () => {
console.log("Server is running on port:", 8080)
})