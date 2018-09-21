var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');
var app = express();
var mongoose = require('mongoose');

var app = express();

// public settings
app.use(express.static(__dirname + '?public'));
var port = process.env.PORT || 3000;

// db
require("./config/connection");

// bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {
    extended: false
}));

// handlebars
var expressHandlebars = require('express-handlebars');
app.engine('handlebars', expressHandlebars( {
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// routes
var route = require('./controllers/news.js');
app.use(function(req, res) {
    res.render('404');
});

// port
app.listen(port, function() {
    console.log("Listening on port:" + port);
});