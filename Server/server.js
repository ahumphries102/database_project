const express = require('express')
const userRouter = require('./users_db.js')
const mainRouter = require('./main_db.js')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const port = 9000
let app = express()

let errorHandler = function(error, request,response,next){
	console.log("errorHandler is doing something")
	response.status(404).send("All has burned")
}

//
app.use(bodyParser.json())
app.use(morgan('combined'),bodyParser.urlencoded({extended: true}),userRouter, mainRouter, errorHandler)



app.listen(port, ()=>{
console.log("locked and loaded")
})
