const axios = require('axios')

axios.post('http://localhost:9000/users')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });