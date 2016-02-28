var vendorHelper = require('./vendorHelper.js')
module.exports = function(Vendor) {

    Vendor.pushOffer = vendorHelper.pushOffer;
    Vendor.remoteMethod('pushOffer', {
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
                arg: 'response',
                type: 'object'
            }, {
                arg: 'enabled',
                type: 'object'
            }],
            http: {
                path: '/pushOffer',
                verb: 'POST'
            }
        }

    );
};