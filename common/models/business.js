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
         *  pushOfferId (optional) if type REDEEM_PUSH_OFFER
         */

        Business.findById(body.businessId, function(err, business) {
            if (err || !business) {
                var err = new Error();
                err.message = "No business found";
                err.status = 111;
                res.statusCode = 200;
                res.send({
                    error: err
                });
            } else {
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
                                var updateActivity = function(redeemId) {
                                    business.activities.create({
                                        time: Date.now(),
                                        customerId: customer.id,
                                        type: body.type,
                                        redeemId: redeemId //can be rewardId or pushOfferId depending on context
                                    }, function(err, activity) {
                                        // console.log(visit);
                                    });
                                }
                                switch (body.type) {
                                    case 'QR_SCAN':
                                        if (body.billValue) {
                                            var newPoints = 0;
                                            customer.updateAttributes({
                                                visitCount: customer.visitCount + 1,
                                                points: newPoints,
                                                lastVisit: Date.now()
                                            }, function(err, updatedCustomer) {
                                                updateActivity(null);
                                                cb(null, updatedCustomer)
                                            })
                                        } else { //no bill value. just update visit points
                                            var newPoints
                                            if (business.config.type == 'visit')
                                                newPoints = customer.points + business.config.ppv;
                                            customer.updateAttributes({
                                                visitCount: customer.visitCount + 1,
                                                points: newPoints,
                                                lastVisit: Date.now()
                                            }, function(err, updatedCustomer) {
                                                updateActivity(null);
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
                                                        var err = new Error();
                                                        err.status = 901; // cannot update customer points
                                                        res.statusCode = 200;
                                                        res.send({
                                                            error: err
                                                        });
                                                    } else {
                                                        updateActivity(offer.id);
                                                        cb(null, updatedCustomer);
                                                    }
                                                })
                                            }
                                        })
                                        break;
                                    case 'REDEEM_PUSH_OFFER':
                                        var pushOfferModel = app.models.pushOffer;
                                        pushOfferModel.findById(body.pushOfferId, function(err, pushOffer) {
                                            if (err || !pushOffer) {
                                                var err = new Error();
                                                err.status = 121; // cannot update customer points
                                                res.statusCode = 200;
                                                res.send({
                                                    error: 'No push offer found'
                                                });
                                            } else {
                                                updateActivity(pushOffer.id);
                                                cb(null, pushOffer);
                                            }
                                        })
                                        break;
                                }
                            }
                        })
                    }
                })
            }
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