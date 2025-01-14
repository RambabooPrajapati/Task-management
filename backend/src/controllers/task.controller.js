const Task = require("../models/task.model");

// Fetch all tasks
const fetchAllTask = async (req, res) => {
  try {
    const tasks = await Task.find();
    if (!tasks.length) {
      return res.status(404).json({ message: "No tasks found." });
    }
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch tasks.", error: error.message });
  }
};

// Create a task
const createTask = async (req, res) => {
  const { title, description } = req.body;

  // Check if the title is provided
  if (!title) {
    return res.status(400).json({ message: "Title is required." });
  }

  const task = new Task({ title, description });
  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: "Failed to create the task.", error: error.message });
  }
};

// Update a task
const updateTask = async (req, res) => {
  const { title, description, completed } = req.body;

  // Check if the task exists
  const task = await Task.findById(req.params.id);
  if (!task) {
    return res.status(404).json({ message: "Task not found." });
  }

  // Update task fields only if provided
  if (title) task.title = title;
  if (description) task.description = description;
  if (typeof completed !== "undefined") task.completed = completed;

  try {
    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: "Failed to update the task.", error: error.message });
  }
};

// Delete a task
const deleteTask = async (req, res) => {
  try {
    // Find the task by ID
    const task = await Task.findById(req.params.id);

    // Check if the task exists
    if (!task) {
      return res.status(404).json({ message: "Task not found." });
    }

    // Delete the task
    await Task.findByIdAndDelete(req.params.id);

    res.json({ message: "Task deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete the task.", error: error.message });
  }
};

module.exports = {
  fetchAllTask,
  createTask,
  updateTask,
  deleteTask,
};
