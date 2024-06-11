const express = require('express');
const dotenv = require('dotenv').config();
const taskRouter = require('./routes/taskRouter');
const cors = require('cors');
const app = express(); 

app.set('port', process.env.PORT || 3005);
app.use(express.json());
app.use(cors());
app.use('/api', taskRouter);

module.exports = app;
