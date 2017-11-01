const express = require('express');
const router = new express.Router();

router.use('/session', require('./session'));
router.use('/sprints', require('./sprints'));
router.use('/users', require('./users'));

module.exports = router;
