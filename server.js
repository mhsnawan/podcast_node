var express = require('express');
var ejs = require('ejs');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 8080;
var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view-engine', '.ejs');
app.set('views', 'src/views');
var mainRouter = require('./src/routes/mainRouter');
app.use('/', mainRouter);
app.use('/album/:id', mainRouter);
app.use('/postalbum', mainRouter);
app.use('/postepisodes', mainRouter);

app.listen(port, function () {
    console.log("Listening on port " + port);
});