import express from 'express'
import { incrementId } from './weapon-utils.js'

const app = express()

app.use(express.json())

let weapons = [
    {
        id: 1,
        name:'Glock18',
        type:"Handgun",
        ammo:"9x19mm",
        fireRate:"fully-automatic"
    },
    {
        id:2,
        name:'AK74u',
        type:"Submachine gun",
        ammo:"5.45x39mm",
        fireRate:"fully-automatic"
    }   
]

//Homepage
app.get('/', (request, response) => {
    response.send("Weapons API is W.I.P");
})

// GET all weapons
app.get("/weapons", (req, res) => {
    res.send({data : weapons })
})

// GET specific weapon based on id
app.get("/weapons/:id", (req,res) =>{
    const weaponToFind = weapons.find(weapon => weapon.id === parseInt(req.params.id))

    if(weaponToFind){
        return res.send({data : weaponToFind})
    }else{
        res.status(404).send('No weapon found')
    }
})

// Post method creates a weapon resource
app.post("/weapons", (req, res) =>{
    req.body.id = incrementId()
    weapons.push(req.body)
    res.status(201).send({data:weapons})
})

//PUT update a weapon resource
// There has to be an easier way can't see it right now
app.put("/weapons/:id", (req,res) =>{
    const weaponToUpdate = weapons.find(weapon => weapon.id === parseInt(req.params.id))
    
    if(weaponToUpdate){
        weaponToUpdate.name = req.body.name
        weaponToUpdate.type = req.body.type
        weaponToUpdate.ammo = req.body.ammo
        weaponToUpdate.fireRate = req.body.fireRate
        return res.status(201).send({data : weapons})
    }else{
        return res.status(404).send('No weapon with that ID found')
    }
})

//PATCH update part of the weapon
// There has to be an easier way can't see it right now
app.patch("/weapons/:id", (req,res) =>{
    const weaponToUpdate = weapons.find(weapon => weapon.id === parseInt(req.params.id))

    if(req.body.name){
        weaponToUpdate.name = req.body.name
    }if(req.body.type){
        weaponToUpdate.type = req.body.type
    }if(req.body.ammo){
        weaponToUpdate.ammo = req.body.ammo
    }if(req.body.fireRate){
        weaponToUpdate.fireRate = req.body.fireRate
    }else{
        return res.status(404).send('No weapon with that ID found')
    }
    return res.status(201).send({data : weapons})
})

//DELETE weapon resource
app.delete("/weapons/:id", (req,res) =>{
    const weaponToDelete = weapons.find(weapon => weapon.id === parseInt(req.params.id))
    
    if(weaponToDelete){
        weapons = weapons.filter(weapon => weapon.id !== parseInt(req.params.id))
        return res.status(201).send({data : weapons})
    }else{
        return res.status(404).send('No weapon with that ID found')
    }
})

app.listen(8080, () => {
console.log("Server is running on port:", 8080)
})