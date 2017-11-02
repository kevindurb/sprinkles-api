const bcrypt = require('bcrypt');
const services = require('../services/users');
const userPresenter = require('../presenters/user');

module.exports = {
  getCurrentSession(req, res) {
    const userId = req.session.userId;
    if (!userId) {
      res.status(404);
      res.end();
      return;
    }
    services.getUserById(userId)
      .then(user => res.send(userPresenter(user)));
  },
  login(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    if (!username || !password) {
      res.status(400);
      res.end();
      return;
    }

    services.getUserByUsername(username)
      .then((user) => {
        if (!user) {
          return false;
        }

        return bcrypt.compare(password, user.hash)
          .then((result) => result ? user : null);
      })
      .then((result) => {
        if (!result) {
          res.status(400);
          res.end();
          return;
        }

        req.session.userId = result.id;
        res.send(userPresenter(result));
      });
  },
};
