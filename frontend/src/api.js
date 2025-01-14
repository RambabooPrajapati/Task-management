import axios from 'axios';

// Use the correct base URL for the API
const API = axios.create({ baseURL: 'http://localhost:5000/api/v1' });

// Fetch all tasks
export const fetchTasks = () => API.get('/fetchAllTask');

// Create a new task
export const createTask = (task) => API.post('/createTask', task);

// Update a specific task by its ID
export const updateTask = (id, task) => API.put(`/updateTask/${id}`, task);

// Delete a specific task by its ID
export const deleteTask = (id) => API.delete(`/deleteTask/${id}`);
