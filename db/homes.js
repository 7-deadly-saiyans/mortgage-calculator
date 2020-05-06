const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/trulia', {useNewUrlParser: true, useUnifiedTopology: true});

const Homes = mongoose.Schema({
  id: Number,
  price: Number,
  hoaFees: Number,
  zipCode: Number,
  propertyTax: Number
});

const Home = mongoose.model('Home', Homes);

const set = (homes, callback) => {
  homes.forEach(home => new Home(home).save(callback));
};

const get = (id, callback) => {
  Home.find({id}).exec(callback);
};

module.exports.set = set;
module.exports.get = get;

