'use strict';

module.exports = function(app) {
	var AWS = require('aws-sdk');

	AWS.config.update({
		accessKeyId: 'AKIAIRODQNH4K5XSU5CQ',
		secretAccessKey: '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',
		region: 'us-west-2'
	});

	app.sns = new AWS.SNS();
}