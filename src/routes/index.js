const express = require('express');
const router = new express.Router();

router.use('/users', require('./users'));
router.use('/session', require('./session'));

module.exports = router;
