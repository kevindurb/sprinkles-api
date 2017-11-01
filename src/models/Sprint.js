const mongoose = require('../createMongoose');

const Schema = new mongoose.Schema({
  name: String,
  start: Date,
  end: Date,
});

module.exports = mongoose.model('Sprint', Schema);
