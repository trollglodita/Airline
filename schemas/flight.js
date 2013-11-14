var mongoose = require('mongoose');

module.exports = mongoose.model('flights', {
	number: Number,
	origin: String,
	destination: String,
	departs: String,
	arrives: String,
	actualDepart: Number,
	actualArrive: Number
});