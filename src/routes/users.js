const express = require('express');
const router = new express.Router();
const transaction = require('../transactions/users')

router.post('/', transaction.createUser);

module.exports = router;
