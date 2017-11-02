const Goal = require('../models/Goal');

module.exports = {
  createGoal(data) {
    return (new Goal(data)).save();
  },
};
