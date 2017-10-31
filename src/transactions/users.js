const services = require('../services/users');
const userPresenter = require('../presenters/user');

module.exports = {
  createUser(req, res) {
    services.createUser(req.body)
      .then(user => res.send(userPresenter(user)));
  }
};
