var express = require('express');
var app = express();
var db = require('./db');

var user = require('./router/user');
app.use('/users', user);

module.exports = app;