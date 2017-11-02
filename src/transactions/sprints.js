const services = require('../services/sprints');
const presenter = require('../presenters/sprint');
const goalsPresenter = require('../presenters/goal');
const goalsServices = require('../services/goals');

module.exports = {
  updateSprint(req, res) {
    services.updateSprint(req.params.id, req.body)
      .then(sprint => res.send(presenter(sprint)));
  },
  createSprint(req, res) {
    services.createSprint(req.body)
      .then(sprint => res.send(presenter(sprint)));
  },
  getAllSprints(req, res) {
    services.getAllSprints()
      .then(sprints => res.send(sprints.map(presenter)));
  },
  getSprint(req, res) {
    services.getById(req.params.id)
      .then(sprint => res.send(presenter(sprint)));
  },
  getSprintGoals(req, res) {
    services.getById(req.params.id)
      .then(sprint => sprint.goals || [])
      .then(goals => res.send(goals.map(goalsPresenter)));
  },
  async addNewSprintGoal(req, res) {
    try {
      const sprint = await services.getById(req.params.id);
      const goal = await goalsServices.createGoal(req.body);

      if (sprint.goals) {
        sprint.goals.push(goal);
      } else {
        sprint.goals = [goal];
      }
      await sprint.save();

      res.send(goalsPresenter(goal))
    } catch(e) {
      res.status(404);
      res.end();
    }
  }
};
