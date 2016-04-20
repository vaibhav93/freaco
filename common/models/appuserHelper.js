var app = require('../../server/server');


exports.getpushOffers = function(body, req, res, cb) {
    var accessTokenModel = app.models.AccessToken;
    accessTokenModel.findForRequest(req, {}, function(err, token) {
        if (err) {
            cb(null, err)
        } else {
            var appUserModel = app.models.appuser;
            appUserModel.findById(token.userId, function(err, appUser) {
                if (err || !appUser)
                    cb(null, err)
                else {
                    appUser.customers(function(err, customers) {
                        var customerIdList = [];
                        customers.forEach(function(customer) {
                            customerIdList.push(customer.id);
                        })
                        console.log(customerIdList);
                        var customerOfferModel = app.models.customerOffer;
                        customerOfferModel.find({
                            where: {
                                customerId: {
                                    inq: customerIdList
                                }
                            }
                        }, function(err, offers) {
                            cb(null, offers);
                        })
                    })

                }
            })

        }
    })
}