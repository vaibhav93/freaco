var app = require('../../server/server');


exports.pushOffer = function(body, req, res, cb) {
    /* body attributes
     *   pushOffer (required)
     *   customerList (required) can be embedded in pushOffer
     *   type : 'CREATE_PUSH_OFFER'/'PUSH_OFFER_NOTIFICATION'
     */
    var payload = {
        default: 'Hello World',
        GCM: {
            data: {
                title: body.pushOffer.title,
                description: body.pushOffer.description,
                type: 'PUSHOFFER'
            }
        }
    };
    // first have to stringify the inner APNS object...
    payload.GCM = JSON.stringify(payload.GCM);
    // then have to stringify the entire message payload
    payload = JSON.stringify(payload);
    var customerList;
    if (body.hasOwnProperty("customerList"))
        customerList = body.customerList;
    else if (body.pushOffer.hasOwnProperty("customerList"))
        customerList = body.pushOffer.customerList;
    //update business activity that push is sent

    app.models.Activity.create({
        time: Date.now(),
        customerId: 0,
        type: body.type,
        redeemId: body.pushOffer.id, //can be rewardId or pushOfferId depending on context
        businessId: body.pushOffer.businessId
    }, function(err, activity) {
        // console.log(visit);
    });

    //push for each in list 
    customerList.forEach(function(customer) {
        //if endpoint is present, then send notification
        var customerOfferModel = app.models.customerOffer;
        customerOfferModel.findOrCreate({
            where: {
                and: [{
                    customerId: customer.id
                }, {
                    pushOfferId: body.pushOffer.id
                }]
            }
        }, {
            customerId: customer.id,
            pushOfferId: body.pushOffer.id,
            pushoffer: {
                title: body.pushOffer.title,
                description: body.pushOffer.description,
                validFrom: body.pushOffer.validFrom,
                validTill: body.pushOffer.validTill,
                businessId: body.pushOffer.businessId,
                businessName: body.pushOffer.businessName
            }
        }, function(err, customerOffer, created) {
            if (err) {
                res.send({
                    err: 'Error'
                })
            } else {

            }
        })
        var appUserModel = app.models.Appuser;
        appUserModel.findById(customer.appuserId, function(err, appUser) {
            if (err || !appUser) {
                console.log('No app user found for customer id' + customer.id);
            } else {
                // console.log(appUser);
                if (appUser.EndpointArn) {
                    app.sns.publish({
                        Message: payload,
                        MessageStructure: 'json',
                        TargetArn: appUser.EndpointArn
                    }, function(err, data) {
                        if (err) {
                            console.log(err);
                        }
                        console.log('push sent');
                        // console.log(data);
                    });
                } else {
                    console.log('No sns endpoint found for ' + appUser.fname);
                }
            }
        })

    })
    // console.log(body.offer);
    cb(null, 'success');
}