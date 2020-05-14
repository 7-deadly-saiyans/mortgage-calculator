const express = require('express');
const api = express();
const db = require('./db/');

api.use(express.static('public'));

api.get('/mortgageId/:id', (request, response) => {
  db.homes.get(request.params.id, (error, results, fields) => {
    if (error) {
      console.error(error);
      response.sendStatus(404);
    } else {
      console.log(results);
      response.json(results);
    }
  });
});

api.get('/mortgageRate/:zipCode', (request, response) => {
  db.rates.get(request.params.zipCode, (error, results, fields) => {
    if (error) {
      console.error(error);
      response.sendStatus(404);
    } else {
      console.log(results);
      response.json(results);
    }
  });
});

api.listen(3004, ()=>console.log('listening on localhost:3004'));

