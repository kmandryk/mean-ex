var mongoose = require('mongoose');

var BeerSchema = new mongoose.Schema({
  name: String,
  brewery: String,
  type: String,
  description: String,
  style: String,
  location: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Beer', BeerSchema);
