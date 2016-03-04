var app = require('../../server/server');
module.exports = function(Business) {
    Business.validateMPIN = function(body, req, res, cb) {
        /*
         *  Body attributes
         *  mpin (required)
         *  customerId (required)
         *	businessId (required)
         *  billValue (optional)
         *	type (required)
         */

        Business.findById(body.businessId, function(err, business) {
            business.businessSecurities(function(err, security) {
                if (security.mpin != body.mpin) {
                    var err = new Error();
                    err.message = "Invalid MPIN";
                    err.status = 101;
                    res.statusCode = 200;
                    res.send({
                        error: err
                    });
                } else { //mpin is valid. Now get customer
                    var customerModel = app.models.Customer;
                    customerModel.findById(body.customerId, function(err, customer) {
                        if (err || !customer) {
                            res.send({
                                error: 'No customer'
                            });
                        } else { // customer found. Process according to type of mpin validation
                            switch (body.type) {
                                case 'QR_SCAN':
                                    if (body.billValue) {
                                        customer.updateAttributes({
                                            visitCount: customer.visitCount + 1,
                                            points: business.pointRules.perVisit + customer.points + business.pointRules.billRules.points * (Math.floor(body.billValue / business.pointRules.billRules.value)),
                                            lastVisit: Date.now()
                                        }, function(err, updatedCustomer) {
                                            cb(null, updatedCustomer)
                                        })
                                    } else { //no bill value. just update visit points
                                        customer.updateAttributes({
                                            visitCount: customer.visitCount + 1,
                                            points: business.pointRules.perVisit + customer.points,
                                            lastVisit: Date.now()
                                        }, function(err, updatedCustomer) {
                                            cb(null, updatedCustomer)
                                        })
                                    }
                                    break;
                            }
                        }
                    })
                }
            })
        })

    }
    Business.remoteMethod('validateMPIN', {
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
            type: 'object'
        }],
        http: {
            path: '/validate',
            verb: 'POST'
        }
    });
};