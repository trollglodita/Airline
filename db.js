var mongoose = require('mongoose');

mongoose.connect('mongodb://flights:winerwiner@ds053638.mongolab.com:53638/flights');

module.exports = mongoose.connection;