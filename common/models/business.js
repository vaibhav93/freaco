var app = require('../../server/server');
module.exports = function(Business) {
	Business.validate = function(body,req,res,cb){
		var codesModel = app.models.Codes;
		codesModel.findOne({where:{uid:body.uid}},function(err,code){
			if(err || !code){
				cb(null,false);
			}
			else{
				cb(null,true);
			}
	});
	}
	Business.remoteMethod('validate', {
		accepts: [{
			arg: 'data',
			type: 'object',
			http: {
				source: 'body'
			}
		}, {
			arg: 'req',
			type: 'object',
			'http': {
				source: 'req'
			}
		}, {
			arg: 'res',
			type: 'object',
			'http': {
				source: 'res'
			}
		}],
		returns: [{
			arg: 'validity',
			type: 'boolean'
		}],
		http: {
			path: '/validate',
			verb: 'POST'
		}
	});
};
