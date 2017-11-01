const Sprint = require('../models/Sprint');

module.exports = {
  createSprint(data) {
    return (new Sprint(data)).save();
  },
  getAllSprints() {
    return Sprint.find({}).exec();
  }
};
