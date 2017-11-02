const mongoose = require('../createMongoose');

module.exports = new mongoose.Schema({
  name: String,
  start: Date,
  end: Date,
  goals: [require('./Goal')],
});
