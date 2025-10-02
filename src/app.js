const express = require('express');
const app = express();
app.use(express.json());

const { getAllTasks, createTask } = require('./taskController');

app.get('/', (req, res) => res.json({ message: 'Task API Running' }));
app.get('/tasks', getAllTasks);
app.post('/tasks', createTask);

module.exports = app;
