var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var candies = [	{"id":1,"name":"Chewing Gum","color":"Red"},
				{"id":2,"name":"Pez","color":"Green"},
				{"id":3,"name":"Marshmallow","color":"Pink"},
				{"id":4,"name":"Candy Stick","color":"Blue"} ];

// - GET all candies
router.get('/', function(req, res) {
	res.send(candies);
});
// - GET specific candy
router.get('/:index', function(req, res) {
	res.send(candies[req.params.index-1]);
});
// - POST new candy
router.post('/', function(req, res) {
	candies.push(req.body);
});
// - PUT updated candy in given index
router.put('/:index', function(req, res) {
	candies[req.params.index-1] = req.body;
});
// - DELETE specific candy
router.delete('/:index', function(req, res) {
	candies[req.params.index-1] = null;
});

module.exports = router;