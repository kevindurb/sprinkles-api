const mongoose = require('../createMongoose');
module.exports = mongoose.model('Goal', require('../schemas/Goal'));
