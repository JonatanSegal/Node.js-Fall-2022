import express from "express"
import rateLimit from 'express-rate-limit'
import session from "express-session"
import helmet from "helmet"

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(helmet())
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))
const generalLimiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 80,
})
app.use(generalLimiter)
/*
const loginLimit = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 5, // Limit each IP to 5 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})
*/
import signupRouter from "./routers/signupRouter.js"
app.use(signupRouter)


app.get("*", (req, res) => {
    res.send(`<h1>404</h1><br><h3>Could not find page</h3>`)
})

const PORT = 8080
app.listen(PORT, () => {
    console.log(`APP is running on: ${PORT}`)
})