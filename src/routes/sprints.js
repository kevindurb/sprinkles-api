const express = require('express');
const router = new express.Router();
const transactions = require('../transactions/sprints');

router.post('/', transactions.createSprint);
router.put('/:id', transactions.updateSprint);
router.get('/', transactions.getAllSprints);
router.get('/:id', transactions.getSprint);
router.get('/:id/goals', transactions.getSprintGoals);
router.post('/:id/goals', transactions.addNewSprintGoal);

module.exports = router;
