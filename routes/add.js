var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/', function(req, res, next) {
  res.render('add_page', { title: 'ADD A PAGE' });
});

router.post('/submit', function(req, res, next) {
	// console.log("params", req.params);
	// console.log("body", req.body);
	// console.log("query", req.query);

	var models = require('../models/');

 	// STUDENT ASSIGNMENT:
  	// add definitions of the `title`, `body` and `url_name` variables here

	var p = new models.Page({ "title": req.title, "body": req.content, "url_name": "" });
	p.save();
	res.redirect('/');
});

module.exports = router;
