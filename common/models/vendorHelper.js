var app = require('../../server/server');


exports.pushOffer = function(body, req, res, cb) {

    var payload = {
        default: 'Hello World',
        GCM: {
            data: {
                message: body.offer.message,
                description: body.offer.description
                // type: 'OFFER'
            }
        }
    };
    // first have to stringify the inner APNS object...
    payload.GCM = JSON.stringify(payload.GCM);
    // then have to stringify the entire message payload
    payload = JSON.stringify(payload);

    //push for each in list 
    body.customerList.forEach(function(customer) {
        //if endpoint is present, then send notification
        if (customer.user.EndpointArn) {
            app.sns.publish({
                Message: payload,
                MessageStructure: 'json',
                TargetArn: customer.user.EndpointArn
            }, function(err, data) {
                if (err) {
                    console.log(err);
                }
                console.log('push sent');
                // console.log(data);
            });
        } else {
            console.log('No sns endpoint found for ' + customer.user.fname);
        }
    })
    // console.log(body.offer);
    cb(null, 'success');
}