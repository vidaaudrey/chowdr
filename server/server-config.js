var express = require('express');

// NOTE: Do not delete
var db = require('./db.js');

var app = express();

require('./config/middleware.js')(app, express);

module.exports = app;
