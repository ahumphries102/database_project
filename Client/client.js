const axios = require('axios')

axios.post('/users', (request, response)=>{
	let cardSearch ='SELECT id FROM card_table WHERE id = 1'
	let userAdd = 'INSERT INTO user_table VALUES ($1)'
	client.query(userAdd)
	.then(results=> response.send(results.rows))
	.catch(error=>console.log(error))
})
