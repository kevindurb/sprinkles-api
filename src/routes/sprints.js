const express = require('express');
const router = new express.Router();
const transactions = require('../transactions/sprints');

router.post('/', transactions.createSprint);
router.get('/', transactions.getAllSprints);

module.exports = router;