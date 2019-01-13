//'use strict';

module.exports = function(app) {
	var AWS = require('aws-sdk');
    console.log(process.cwd());
	AWS.config.loadFromPath('server/boot/awsconfig.json');
	
	app.sns = new AWS.SNS();
}
