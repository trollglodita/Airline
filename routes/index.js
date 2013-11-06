
/*
 * GET home page.
 */

var flight = require('../flight');

var flight1 = flight({
	number: 847,
	origin: 'PDF',
	destination: 'LAX',
	departs: '9AM',
	arrives: '4AM'
});

var flight2 = flight({
	number: 382,
	origin: 'AUS',
	destination: 'DCA',
	departs: '10AM',
	arrives: '12AM'
});

exports.flight1 = function(req, res){
  res.json(flight1.getInformation());
};

exports.flight2 = function(req, res){
  res.json(flight2.getInformation());
};