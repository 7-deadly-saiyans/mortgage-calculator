const db = require('../db');

const homes = [];
const rates = [];
let count = 100;

while (count) {
  let zipCode = (Math.random() * 100000) >> 0;

  homes.push({
    id: count--,
    price: Math.random() * 2000000 >> 0, //Mean 1000000 randomly distributed [0, 2000000]
    hoaFees: (Math.random() * 2 >> 0) * (Math.random() * 1000) >> 0,
    zipCode: zipCode
  });

  rates.push({
    zipCode: zipCode,
    rates: [
      {rateType: '30-year fixed', rate: 3.5 - Math.random()},
      {rateType: '20-year fixed', rate: 3.4 - Math.random()},
      {rateType: '15-year fixed', rate: 3.3 - Math.random()},
      {rateType: '10-year fixed', rate: 3.2 - Math.random()},
      {rateType: 'FHA 30-year fixed', rate: 3.5 - Math.random()},
      {rateType: 'FHA 15-year fixed', rate: 3.3 - Math.random()},
      {rateType: 'VA 30-year fixed', rate: 3 - Math.random()},
      {rateType: 'VA 15-year fixed', rate: 3 - Math.random()}
    ]
  });
}

db.homes.set(homes, (error, result) => {
  if (error) {
    console.error(error);
  } else {
    console.log(result);
  }
});

db.rates.set(rates, (error, results) => {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
  }
});
