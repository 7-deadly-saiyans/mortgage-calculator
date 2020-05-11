const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mortgage-calculator', {useNewUrlParser: true, useUnifiedTopology: true});

const Rates = mongoose.Schema({
  zipCode: Number,
  rates: [{rateType: String, rate: Number}]
});

const Rate = mongoose.model('Rate', Rates);

const set = (rates, callback) => {
  rates.forEach(rate => new Rate(rate).save(callback));
};

const get = (zipCode, callback) => {
  Rate.find({zipCode}).exec(callback);
};

module.exports.set = set;
module.exports.get = get;

