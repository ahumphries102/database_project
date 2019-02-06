const express = require('express')
const userRouter = require('./users_db.js')
const mainRouter = require('./main_db.js')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const port = 9000
//set app
let app = express()

app.use(morgan('combined'),bodyParser.urlencoded({extended: true}),userRouter, mainRouter)
app.use(bodyParser.json())

app.listen(port, ()=>{
console.log("locked and loaded")
})
