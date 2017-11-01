const services = require('../services/sprints');
const presenter = require('../presenters/sprint');

module.exports = {
  createSprint(req, res) {
    services.createSprint(req.body)
      .then(sprint => res.send(presenter(sprint)));
  },
  getAllSprints(req, res) {
    services.getAllSprints()
      .then(sprints => res.send(sprints.map(presenter)));
  }
};
