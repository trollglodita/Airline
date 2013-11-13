
/*
 * GET home page.
 */

module.exports = function (flights) {
	var flight = require('../flight');

	for(var number in flights) {
		flights[number] = flight(flights[number]);
	}

	var functions = {};

	functions.flight = function(req, res){
		var number = req.param('number');

		if (typeof flights[number] === 'undefined') {
			res.status(404).json({status: 'error'});
		} else{
			res.json(flights[number].getInformation());
		};
	};

	functions.arrived = function (req, res) {
		var number = req.param('number');

		if (typeof flights[number] === 'undefined') {
			res.status(404).json({status: 'error'});
		} else{
			flights[number].triggerArrive()
			res.json({status: 'done'});
		};
	};

	functions.list = function (req, res) {
		res.render('list', {
			title: 'All Flights', 
			flights: flights});
	};

	// Valid Json format
	functions.listjson = function (req, res) {
		var flightData = [];

		for(var number in flights) {
			flightData.push(flights[number].getInformation());
		}

		res.json(flightData);
	}

	return functions;
}

