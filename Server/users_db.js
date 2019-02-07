const { Client } = require('pg')
const axios = require('axios')
const express = require('express')
const userRouter = express.Router('router')

//Establishing a link to the MagicCards database
const client = new Client({
	user:'postgres',
	password:'Cameraball1!',
	port: 5432,
	database:'MagicCards'
})

//Client connected and on connect 
client.connect()
.then(console.log('You are connected to users db'))
.catch(error=>(console.log(error)))

// axios.get('https://api.scryfall.com/cards/search?order=set&q=e%3Arna&unique=prints')
//   .then(function (cardInfo) {
//   		let newArray = cardInfo.data.data.map(item=>{
//   		if(item.oracle_text.includes("of")){
//     	  	item.oracle_text = item.oracle_text.replace(/of/gi, '/of')
    	  	
//  		  }

//     	return `INSERT INTO card_table (name, mana_cost, cmc, type_line, oracle_text, power, toughness, colors, color_id, setIf, rarity) VALUES (${item.name}, ${item.mana_cost}, ${item.cmc}, ${item.type_line}, ${item.oracle_text}, ${item.power}, ${item.toughness}, ${item.colors}, ${item.color_id}, ${item.setIf}, ${item.rarity});`
//   	})
//   		return newArray.join(' ')
//   })
//   .then(function(insert){
//   		console.log(insert)
//   		client.query(insert)
//   		.then(results=> console.log(results))
//   		.catch(error=> console.log(error))
//   })
//   .catch(function (error) {
//     console.log(error)
//   })

//ON GET
userRouter.get('/users', (request, response)=>{
	//sql script that grabs all the data from the card_table
	let cardSearch ='SELECT * FROM card_table'

	//query the MagicCards db and send the results of the query
	client.query(cardSearch)
	.then(results=> response.send(results.rows))
	.catch(error=> console.log(error))
})

//ON POST
userRouter.post('/addCard', (request, response)=>{
	//SQL script that inserts data into the users_table
	let toDb = 'INSERT INTO user_table (ID) VALUES ($1)'
	//The data inserted is based on what the client declares in the body
	let name = [request.body.cardId]

	//query the MagicCards db and the parameters are the sql script and the users declaration
	client.query(toDb, name)
	.then((results)=>response.send(results.rows))
	.catch(error=>console.log(error))
})

// userRouter.put('/users', (request, response)=>{
// 	let userDeckName = request.body.deckName
// 	response.send(userDeckName)
// })

//This block deletes a card from the users table
userRouter.delete('/deleteCard', (request, response)=>{
	let deleteFrom = 'DELETE FROM user_table WHERE ID = ($1)'
	let toDelete = [request.body.deleteId]
	
	client.query(deleteFrom, toDelete)
	.then((results)=>response.send(results.rows))
	.catch(error=>console.log(error))
})

module.exports = userRouter