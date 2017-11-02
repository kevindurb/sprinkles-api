const mongoose = require('../createMongoose');
module.exports = mongoose.model('Sprint', require('../schemas/Sprint'));
