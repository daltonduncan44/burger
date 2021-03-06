
var orm = require("../config/orm.js");



var burger = {
	all: function(cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
	},
  // The variables cols and vals are arrays.
	create: function(cols, vals, cb) {
		orm.insertOne("burgers", cols, vals, function(res) {
			cb(res);
		});
	},

	update: function(colVals, condition, cb) {
		orm.updateOne("burgers", colVals, condition, function(res) {
			cb(res);
		});
	}
};


// Export the database functions for the controller (burger.js)
module.exports = burger;