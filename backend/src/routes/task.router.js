const express = require('express');
const router = express.Router();
const { fetchAllTask, createTask, updateTask, deleteTask } = require('../controllers/task.controller');

// Fetch all tasks
router.get('/fetchAllTask', fetchAllTask);

// Create a task
router.post('/createTask', createTask);

// Update a task
router.put('/updateTask/:id',updateTask);

// Delete a task
router.delete('/deleteTask/:id', deleteTask);

module.exports = router;
