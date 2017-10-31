const mongoose = require('../createMongoose');

const Schema = new mongoose.Schema({
  username: String,
  hash: String,
  firstName: String,
  lastName: String,
});

module.exports = mongoose.model('User', Schema);
