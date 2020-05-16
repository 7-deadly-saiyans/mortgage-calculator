const express = require('express');
const api = express();
const db = require('./db/');
const path = require('path');
const compression = require('compression');

api.use(compression());

api.get('/:id?', (request, response) => {
  const id = request.params.id;
  if (!id || Number.isInteger(+id)) {
    response.sendFile(path.join(__dirname, 'public', 'index.html'));
  } else {
    response.sendFile(path.join(__dirname, 'public', id));
  }
});

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

