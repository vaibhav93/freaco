//'use strict';

module.exports = function(app) {
	var AWS = require('aws-sdk');
	
	AWS.config.loadFromPath('/home/'+process.env['USER']+'/awsconfig.json');
	
	app.sns = new AWS.SNS();
}