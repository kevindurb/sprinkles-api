const express = require('express');
const router = new express.Router();

const transactions = require('../transactions/session');

router.get('/', transactions.getCurrentSession);
router.post('/', transactions.login);

module.exports = router;
