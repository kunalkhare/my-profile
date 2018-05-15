/* Require Express web framework and Express middleware */
var express = require('express');
var path = require('path')
/* Configure Express web application */
var app = express();
app.use('/css',express.static(path.join(__dirname + '/css')));
app.use('/img',express.static(path.join(__dirname + '/img')));
app.use('/vendor',express.static(path.join(__dirname + '/vendor')));
app.use('/js',express.static(path.join(__dirname + '/js')));
app.use('/scss',express.static(path.join(__dirname + '/scss')));
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
  });

/* Run web application */
app.listen(8080);

console.log('Running on http://localhost:8080/');