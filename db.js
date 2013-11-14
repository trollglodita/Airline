var mongoose = require('mongoose');

mongoose.connect('mongodb://flights:winerwiner@ds053658.mongolab.com:53658/flights');

module.exports = mongoose.connection;