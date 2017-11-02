const Sprint = require('../models/Sprint');

module.exports = {
  getById(id) {
    return Sprint.findOne({ _id: id }).exec();
  },
  updateSprint(id, data) {
    return this.getById(id)
      .then((sprint) => {
        sprint.set(data);
        return sprint.save();
      });
  },
  createSprint(data) {
    return (new Sprint(data)).save();
  },
  getAllSprints() {
    return Sprint.find({}).exec();
  }
};
