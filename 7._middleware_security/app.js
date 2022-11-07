import  express  from "express";
const app = express()

import helmet from "helmet";
app.use(helmet())

import session from "express-session";
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))

import rateLimit from 'express-rate-limit'

const generalLimiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 80,
})

app.use(generalLimiter)

const frontdoorLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 5, // Limit each IP to 5 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

app.use("/frontdoor", frontdoorLimiter)

// Task create a frontdoor route and create a frontdoor middleware guardMiddleware
// The query parameter name should contain Anders
// if it does I should be allowed to enter
// otherwise the user should not be premmited to enter

/* Middleware functions */ 
function ipLogger(req, res, next) {
    console.log(req.ip)
    next()
}

function guidingButler(req, res, next) {
    console.log("This way sir.")
    next()
}

function guardMiddleware( req, res, next){
    if(req.query.name !== "Anders"){
        res.send({message: "You are not Anders! Go away."})
    }
    req.fullname = "Anders Latif" 
    next()  
}

// app.use takes in middleware and runs it before every endpoint
/* Setup middlware */
app.use(ipLogger)
app.use("/room" ,guidingButler)

import popcornRouter from "./routers/popcornRouter.js"
app.use(popcornRouter)

app.get("/frontdoor", guardMiddleware, (req, res) =>{
    res.send({message: `Please enter, ${req.fullname}`})
})

app.get("/room" ,(req, res, next) => {
    console.log("Room 1")
    next()
    //res.send({message: "You are in room 1"})
})

app.get("/room" ,(req, res, next) => {
    console.log("Room 2")
    res.send({message: "You are in room 2"})
})

app.get("*", (req, res) => {
    res.send(`<h1>404</h1><br><h3>Could not find page</h3>`)
})

const PORT = 8080
app.listen(PORT, () => console.log("App is running on port: ", PORT))

