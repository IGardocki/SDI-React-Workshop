const express = require('express');
const app = express();
const path = require('path');
const port = 3001;
const dummy = require('./dummy.js');
const cors = require('cors');
const axios = require('axios');

app.use(cors())

app.get('/', (req, res) => {
  axios.get('http://thecocktaildb.com/api/json/v1/1/filter.php?i=Gin')
    .then((response) => res.status(200).send(response.data))
})
app.get('/search/:query', (req, res) => {
  axios.get(`http://thecocktaildb.com/api/json/v1/1/filter.php?i=${req.params.query}`)
    .then((response) => {res.status(200).send(response.data)})
})

app.listen(port, () => {
  console.log('Cocktail Server listening on port ' + port);
})
module.exports = app;