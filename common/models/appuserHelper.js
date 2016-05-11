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

exports.loginWithAccessTokenGoogle = function(body, req, ress, cb) {
    console.log('Token received: ' + body.accessToken);
    //response = 'hi ! i am responding';
    //cb(null,response);
    var ret = {};



    console.log(res);
    response.id = res.id;
    if (res.email)
        response.email = res.email;
    else
        response.email = res.id + '@facebook.com';
    response.first_name = res.first_name + ' ' + res.last_name;
    response.img = res.picture.data.url;
    response.gender = res.gender;
    if (res.birthday)
        response.birthday = res.birthday;
    else
        response.birthday = null;
    console.log(response.id);
    console.log(response.first_name);
    console.log(response.email);


    //Check if user with this email already exists. If yes, then login. If No, then create and login
    var query = {
        email: response.email
    };
    Appuser.findOne({
        where: query
    }, function(err, user) {
        var defaultError = new Error('Login Failed');
        defaultError.statusCode = 401;

        if (err) {
            cb(defaultError);
        } else if (!user) {
            //create user here
            Appuser.create({
                fname: response.first_name,
                email: response.email,
                username: response.id,
                img: response.img,
                birthday: response.birthday,
                gender: response.gender,
                password: dummy_pass
            }, function(err, user) {
                if (err) {
                    cb(defaultError);
                } else {
                    console.log('Appuser created: ' + query.email);
                    Appuser.login({
                        email: query.email,
                        password: dummy_pass
                    }, function(err, new_accessToken) {
                        ret.accessToken = new_accessToken.id;
                        ret.email = query.email
                        cb(null, ret.accessToken, query.email, new_accessToken.userId, user);
                    });
                }
            });
        }
        //Appuser found .. log him in
        else {
            console.log('Appuser found: ' + query.email);
            Appuser.login({
                email: query.email,
                password: dummy_pass
            }, function(err, new_accessToken) {
                if (err) {
                    cb(defaultError);
                } else {
                    ret.accessToken = new_accessToken.id;
                    ret.email = query.email
                    cb(null, ret.accessToken, query.email, new_accessToken.userId, user);
                    //cb(null,new_accessToken.id,query.email);
                }
            });
        }

    });


};