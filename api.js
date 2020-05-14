const express = require('express');
const api = express();
const db = require('./db/');
const path = require('path');

api.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'public', 'index.html'));
});

api.get('/:id', (request, response) => {
  const id = +request.params.id;
  if (id) {
    response.sendFile(path.join(__dirname, 'public', 'index.html'));
  } else {
    response.sendFile(path.join(__dirname, 'public', request.params.id));
  }
});

api.get('/mortgageId/:id', (request, response) => {
  db.homes.get(request.params.id, (error, results, fields) => {
    if (error) {
      console.error(error);
      response.sendStatus(404);
    } else {
      console.log(results);
      response.end(JSON.stringify(results));
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
      response.end(JSON.stringify(results));
    }
  });
});

api.listen(3004, ()=>console.log('listening on localhost:3004'));

