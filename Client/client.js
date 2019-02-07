const axios = require('axios')


axios.get('http://localhost:9000/users')
  .then(function (response) {
    console.log(response.data)
  })
  .catch(function (error) {
    console.log(error)
  })

// POST REQUEST: This adds a card to the users deck table
// axios.post('http://localhost:9000/addCard', {
// 	cardId:1
// })
//   .then(function (response) {
//     console.log(response.data)
//   })
//   .catch(function (error) {
//     console.log(error)
//   })


//POST PUT REQUEST: For now this does nothing
// axios.put('http://localhost:9000/users', {
// 	deckName:"Gorp"
// })
//   .then(function (response) {
//     console.log(response.data)
//   })
//   .catch(function (error) {
//     console.log(error)
//   })

//POST DELETE REQUEST: Delete a card of the users choice from their table
// axios.delete('http://localhost:9000/deleteCard', {
// 	deleteId:1
// })
//   .then(function (response) {
//     console.log(response.data)
//   })
//   .catch(function (error) {
//     console.log(error)
//   })

