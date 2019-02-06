const { Client } = require('pg')
const express = require('express')
const userRouter = express.Router('router')
const client = new Client({
	user:'postgres',
	password:'Cameraball1!',
	port: 5432,
	database:'MagicCards'
})

client.connect()
.then(console.log('You are connected to users db'))
.catch(error=>(console.log(error)))


userRouter.get('/users', (request, response)=>{
	let cardSearch ='SELECT * FROM card_table'
	client.query(cardSearch)
	.then(results=> response.send(results.rows))
	.catch(error=> console.log(error))
})

userRouter.post('/users', (request, response)=>{
	let toDb = 'INSERT INTO user_table (ID) VALUES ($1)'
	let name = [1]
	
	client.query(toDb, name)
	.then((results)=>response.send(results.rows))
	.catch(error=>console.log(error))
})

module.exports = userRouter