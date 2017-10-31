const bcrypt = require('bcrypt');
const R = require('ramda');
const User = require('../models/User');

module.exports = {
  getUserByUsername(username) {
    return User.findOne({ username }).exec();
  },
  getUserById(id) {
    return User.findOne({ _id: id }).exec();
  },
  createUser(data) {
    return bcrypt.hash(data.password, 10)
    .then((hash) => (
      (new User(
        R.merge(
          R.omit(
            ['password'],
            data
          ),
          R.objOf('hash', hash)
        )
      )).save()
    ));
  }
};
