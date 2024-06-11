const express = require ('express');
const dotnv = require ('dotenv').config();
const app = express();
 app.set('port', process.env.PORT || 3005);

module.exports = app;

