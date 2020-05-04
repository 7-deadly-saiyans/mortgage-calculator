const express = require('express');
const api = express();
const db = require('./db/');

api.param('id', (request, response, next, id) => {
  request.id = id;
  next();
});

api.get('/home/:id', (request, response) => {
  db.homes.get(request.id, (error, results, fields) => {
    if (error) {
      console.error(error);
      response.sendStatus(404);
    } else {
      console.log(results);
      response.end(JSON.stringify(results));
    }
  });
});

api.param('zipCode', (request, response, next, zipCode) => {
  request.zipCode = zipCode;
  next();
});

api.get('/rate/:zipCode', (request, response) => {
  db.rates.get(request.zipCode, (error, results, fields) => {
    if (error) {
      console.error(error);
      response.sendStatus(404);
    } else {
      console.log(results);
      response.end(JSON.stringify(results));
    }
  });
});

api.use(express.static('public'));

api.listen(3000, ()=>console.log('listening on localhost:3000'));

