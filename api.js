const express = require('express');
const api = express();
const db = require('./db/');
const cors = require('cors');

api.use(cors());

api.get('/home/:id', (request, response) => {
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

api.get('/rate/:zipCode', (request, response) => {
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

api.use(express.static('public'));

api.listen(3004, ()=>console.log('listening on localhost:3004'));

