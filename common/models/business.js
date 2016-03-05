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
         *  offerId (optional) if type REDEEM_REWARD
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
                            //log activity
                            var updateActivity = function() {
                                business.activities.create({
                                    time: Date.now(),
                                    customerId: customer.id,
                                    type: body.type
                                }, function(err, activity) {
                                    // console.log(visit);
                                });
                            }
                            switch (body.type) {
                                case 'QR_SCAN':
                                    if (body.billValue) {
                                        customer.updateAttributes({
                                            visitCount: customer.visitCount + 1,
                                            points: business.pointRules.perVisit + customer.points + business.pointRules.billRules.points * (Math.floor(body.billValue / business.pointRules.billRules.value)),
                                            lastVisit: Date.now()
                                        }, function(err, updatedCustomer) {
                                            updateActivity();
                                            cb(null, updatedCustomer)
                                        })
                                    } else { //no bill value. just update visit points
                                        customer.updateAttributes({
                                            visitCount: customer.visitCount + 1,
                                            points: business.pointRules.perVisit + customer.points,
                                            lastVisit: Date.now()
                                        }, function(err, updatedCustomer) {
                                            updateActivity();
                                            cb(null, updatedCustomer)
                                        })
                                    }
                                    break;
                                case 'REDEEM_REWARD':
                                    var offerModel = app.models.Offer;
                                    offerModel.findById(body.offerId, function(err, offer) {
                                        if (err || !offer) {
                                            var err = new Error();
                                            err.message = "Invalid offer ID";
                                            err.status = 801;
                                            res.statusCode = 200;
                                            res.send({
                                                error: err
                                            });
                                        } else {
                                            var updatedPoints = customer.points - offer.points;
                                            //reduce customer points
                                            customer.updateAttributes({
                                                points: updatedPoints
                                            }, function(err, updatedCustomer) {
                                                if (err) {
                                                    err.status = 901; // cannot update customer points
                                                    res.statusCode = 200;
                                                    res.send({
                                                        error: err
                                                    });
                                                } else {
                                                    updateActivity();
                                                    cb(null, updatedCustomer);
                                                }
                                            })
                                        }
                                    })
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
            arg: 'success',
            type: 'object'
        }],
        http: {
            path: '/validate',
            verb: 'POST'
        }
    });
};