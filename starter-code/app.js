var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var candyRouter = require('./candyRouter');

app.use(bodyParser.json());

app.use(express.static('public'));
app.use('/candies', candyRouter);

app.listen(3000, function() {
	console.log('port 3000');
});