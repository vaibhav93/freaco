'use strict';

module.exports = function(app) {
	var AWS = require('aws-sdk');

	AWS.config.loadFromPath('/home/ubuntu/awsconfig.json');
	
	app.sns = new AWS.SNS();
}