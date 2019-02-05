const { Client } = require('pg')
const express = require('express')
const  mainDbRouter = express.Router('router')
const client = new Client({
	user:'postgres',
	password:'Cameraball1!',
	port: 5432,
	database:'MagicCards'
})

client.connect()
.then(console.log('You are connected to main db'))
.catch(error=>(console.log(error)))

mainDbRouter.get('/', (request,response)=>{
	response.send({
		message:"Welcome to The Magic Database!"
	})
})

mainDbRouter.get('/', (request, response)=>{
	let cardSearch ='SELECT * FROM card_table WHERE rarity = m'
	client.query(cardSearch)
	.then(results=> response.send(results.rows))
	.catch(error=>console.log(error))
})

module.exports = mainDbRouter