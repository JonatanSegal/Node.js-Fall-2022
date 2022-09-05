//import express
const express = require("express");
//instantiate the libary express
const app = express();

//route     //callback function
app.get('/', (request, response) => {
    response.send({message: "Created my first route. Check."});
});

        //endpoint
app.get("/deers", (req, res) => {
    res.send({size: "BIG"})
});

app.get("/deers/:id", (req,res) =>{
    if(Number(req.params.id) === 1){
        res.send({name:"Bambi", theBestAndOGDeer: true});
    }else{
        res.send({errorMessage:"I don't know that deer" });
    }
    
});

app.get("/actors",(req,res)=>{
    console.log(req.query.name)
    res.send({
        message: "Information about actor",
        ...req.query //spreading out the query paramters instead of creating a nested object
    });
});


app.get("/cups",(req,res) => {
    res.send({type: "Tea cup"})
})


app.listen(8080, () => {
    console.log("Server is running on port",8080)
});

//ways to send data with GET
// this also works for all HTTP methods
//1.
//path 
// /deers/id

//2.
//query paramter (query string)
// /deers?key=value&key2=value2
