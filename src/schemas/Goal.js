const mongoose = require('../createMongoose');

module.exports = new mongoose.Schema({
  name: String,
});
