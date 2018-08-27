var express = require("express");
// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

var router = express.Router();


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
	burger.all(function(data) {
		var hbsObject = {burgers: data};
		res.render("index", hbsObject);
	});
});



router.post("/", function(req, res) {
	burger.create(["burger_name"], [req.body.name], function(data) {
		res.redirect("/");
	});
});



router.put("/:id", function(req, res) {
	var condition = "id = " + req.params.id;
	console.log("condition", condition);
	burger.update({ devoured: req.body.devoured}, condition, function() {
		res.redirect("/");
	});
});

// Export routes for server.js to use.
module.exports = router;