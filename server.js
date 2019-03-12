const express = require('express')
const app = express()
const port = 3000

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.listen(port, () => {
  console.log(`The HTTP server is running on port ${port}.`)
})

app.get('/api/v1/states', (request, response) => {
    database('states').select()
      .then((states) => {
        response.status(200).json(states);
      })
      .catch((error) => {
        response.status(500).json({ error });
      });
  });