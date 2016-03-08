var app = require('../../server/server'),
    FB = require('fb'),
    shortid = require('shortid');
var loopback = require('loopback');
var moment = require('moment');
var response = {};
var appuserHelper = require('./appuserHelper.js')
module.exports = function(Appuser) {
    Appuser.afterRemoteError('**', function(ctx, next) {
        console.log(ctx.error);
        if (ctx.error.statusCode == 401) {
            var err = {};
            err.name = "Error";
            if (ctx.error.code == "LOGIN_FAILED") {
                err.message = "Invalid credentials";
                err.status = 701;
            }
            if (ctx.error.code == "AUTHORIZATION_REQUIRED") {
                err.message = "could not find accessToken";
                err.status = 601;
            }
            ctx.res.statusCode = 200;
            //console.log(err);
            ctx.res.send({
                error: err
            });
        } else {
            next();
        }
    })
    Appuser.afterRemote('login', function(ctx, result, next) {
        Appuser.findById(result.userId, function(err, appuser) {
            if (err)
                next(err);
            else {
                ctx.result.fname = appuser.fname;
                console.log(ctx.result);
                next();
            }
        })
    })
    Appuser.beforeRemote('prototype.updateAttributes', function(ctx, result, next) {
        if (ctx.args.data.gcm_id) {
            app.sns.createPlatformEndpoint({
                PlatformApplicationArn: 'arn:aws:sns:us-west-2:048063244432:app/GCM/freaCo',
                Token: ctx.args.data.gcm_id,
                CustomUserData: ctx.req.params.id
            }, function(err, data) {
                if (err) {
                    console.log(err.stack);
                    next(err);
                } else {
                    console.log(data);
                    ctx.args.data.EndpointArn = data.EndpointArn;
                    next();
                }
            })
        } else {
            next();
        }
    });
    Appuser.afterRemote('logout', function(ctx, result, next) {
        //console.log(ctx.reslt);
        if (ctx.result == null) {
            ctx.res.send({
                message: 'success'
            })
            //next();
        } else {
            var err = {};
            err.name = "Error";
            err.message = "could not find accessToken";
            err.status = 601;
            ctx.res.statusCode = 200;
            //console.log(err);
            ctx.res.send({
                error: err
            });
        }

    });

    Appuser.processQR = function(body, req, res, cb) {
        var accessTokenModel = app.models.AccessToken;
        if (body.qr === undefined) {
            var err = new Error();
            err.message = "Invalid QR";
            err.status = 501;
            //console.log(error);
            res.statusCode = 200;
            res.send({
                error: err
            });
        } else {
            accessTokenModel.findForRequest(req, {}, function(err, token) {
                if (err) {
                    cb(null, err)
                } else {
                    //console.log(token);
                    var businessModel = app.models.Business;
                    businessModel.findOne({
                        where: {
                            qr: body.qr
                        }
                    }, function(err, business) {
                        if (err || business == null) {
                            var err = new Error();
                            err.message = "Invalid QR";
                            err.status = 501;
                            //console.log(error);
                            res.statusCode = 200;
                            res.send({
                                error: err
                            });
                        } else {
                            var customerModel = app.models.Customer;
                            customerModel.findOrCreate({
                                where: {
                                    and: [{
                                        appuserId: token.userId
                                    }, {
                                        businessId: business.id
                                    }]
                                }
                            }, {
                                visitCount: 1,
                                points: business.pointRules.perVisit,
                                appuserId: token.userId,
                                businessId: business.id,
                                Business: {
                                    name: business.name,
                                    img: business.img,
                                    requiresBill: business.pointRules.requiresBill
                                },
                                lastVisit: Date.now(),
                                created: Date.now()
                            }, function(err, customer, created) {
                                if (err) {
                                    cb(null, err)
                                } else {
                                    (created) ? console.log('Created customer') : console.log('Found customer');
                                    if (!created) {
                                        var sinceLastVisit = moment.duration(moment() - customer.lastVisit).asHours();
                                        if (sinceLastVisit < 1200) {
                                            cb(null, customer)
                                        } else {
                                            var err = new Error();
                                            err.message = "12 hours not passed since last visit";
                                            err.status = 502;
                                            //console.log(error);
                                            res.statusCode = 200;
                                            res.send({
                                                error: err
                                            });
                                        }
                                    } else {
                                        customer.appuser(function(err, appuser) {
                                            if (err || !customer) {
                                                var err = new Error();
                                                err.message = "No user of customer";
                                                err.status = 501;
                                                //console.log(error);
                                                res.statusCode = 200;
                                                res.send({
                                                    error: err
                                                });
                                            } else {
                                                var birthday;
                                                if (!appuser.birthday) {
                                                    birthday = null;
                                                } else {
                                                    birthday = appuser.birthday;
                                                }
                                                customer.updateAttributes({
                                                    birthday: birthday
                                                }, function(err, updatedCustomer) {
                                                    cb(null, updatedCustomer)
                                                })
                                            }
                                        })

                                    }

                                }
                            })
                        }
                    })

                }
            })
        }
    }
    Appuser.remoteMethod('processQR', {
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
                arg: 'customer',
                type: 'object'
            }, {
                arg: 'enabled',
                type: 'object'
            }],
            http: {
                path: '/scanQR',
                verb: 'POST'
            }
        }

    );

    Appuser.notify = function(body, req, res, cb) {
        Appuser.findById(body.appUserId, function(err, appuser) {
            if (err || !appuser) {
                var err = new Error();
                err.message = "Invalid appuser ID";
                err.status = 801;
                res.statusCode = 200;
                res.send({
                    error: err
                });
            } else {
                var payload = {
                    default: 'Hello World',
                    GCM: {
                        data: {
                            message: body.message,
                            description: body.description,
                            type: 'REDEMPTION'
                        }
                    }
                };
                // first have to stringify the inner APNS object...
                payload.GCM = JSON.stringify(payload.GCM);
                // then have to stringify the entire message payload
                payload = JSON.stringify(payload);
                app.sns.publish({
                    Message: payload,
                    MessageStructure: 'json',
                    TargetArn: appuser.EndpointArn
                }, function(err, data) {
                    if (err) {
                        err.message = "Unable to push";
                        err.status = 801;
                        res.statusCode = 200;
                        res.send({
                            error: err
                        });
                    }
                    //Offer redeemed notification sent successfully. Now reduce user points.
                    var customerModel = app.models.Customer;
                    customerModel.findOne({
                        where: {
                            and: [{
                                appuserId: body.appUserId
                            }, {
                                businessId: body.businessId
                            }]
                        }
                    }, function(customer) {
                        var updatedPoints = customer.points - body.offer.points;
                        customer.updateAttributes({
                            points: updatedPoints
                        }, function(err, updatedCustomer) {
                            if (err) {
                                err.status = 900; // cannot update customer points
                                res.statusCode = 200;
                                res.send({
                                    error: err
                                });
                            }
                            cb(null, 'success');
                        })
                    })
                    console.log('push sent');
                    console.log(data);

                });
            }
        });
    }
    Appuser.remoteMethod('redeem', {
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
                arg: 'uid',
                type: 'string'
            }],
            http: {
                path: '/redeem',
                verb: 'POST'
            }
        }

    );
    Appuser.redeem = function(body, req, res, cb) {
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
                offer.business(function(err, business) {
                    if (err || !business) {
                        res.statusCode = 200;
                        res.send({
                            error: 'some error occured'
                        });
                    } else {
                        var accessTokenModel = app.models.AccessToken;
                        accessTokenModel.findForRequest(req, {}, function(err, token) {
                            if (err || !token) {
                                res.statusCode = 200;
                                res.send({
                                    error: 'some error occured'
                                });
                            } else {
                                business.codes.create({
                                    uid: shortid.generate().slice(0, 5).toUpperCase(),
                                    offerId: body.offerId,
                                    userId: token.userId
                                }, function(err, code) {
                                    if (err) {
                                        res.statusCode = 200;
                                        res.send({
                                            error: 'some error occured'
                                        });
                                    } else {
                                        cb(null, code.uid);
                                    }
                                })
                            }
                        })
                    }
                })
            }
        });
    }
    Appuser.remoteMethod('notify', {
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
                arg: 'status',
                type: 'string'
            }],
            http: {
                path: '/notify',
                verb: 'POST'
            }
        }

    );
    Appuser.getpushOffers = appuserHelper.getpushOffers;
    Appuser.remoteMethod('getpushOffers', {
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
                arg: 'offers',
                type: 'Array'
            }],
            http: {
                path: '/pushOffers',
                verb: 'GET'
            }
        }

    );
    var dummy_pass = '@39?C5(nfMyRv2zW';
    Appuser.loginWithAccessTokenfb = function(body, req, ress, cb) {
        console.log('Token received: ' + body.accessToken);
        //response = 'hi ! i am responding';
        //cb(null,response);
        var ret = {};
        FB.setAccessToken(body.accessToken);

        FB.api('/me', {
            fields: ['id', 'first_name', 'last_name', 'email', 'gender', 'picture', 'birthday']
        }, function(res) {
            if (!res || res.error) {
                var err = {};
                err.message = "could not find accessToken";
                err.status = 601;
                ress.statusCode = 200;
                ress.send({
                    error: err
                });

            } else {
                console.log(res);
                response.id = res.id;
                response.email = res.email;
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
                            email: query.email,
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
            }
        });
    };

    Appuser.remoteMethod(
        'loginWithAccessTokenfb', {
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
                arg: 'accessToken',
                type: 'string'
            }, {
                arg: 'email',
                type: 'string'
            }, {
                arg: 'userId',
                type: 'number'
            }, {
                arg: 'user',
                type: 'object'
            }],
            http: {
                path: '/loginWithFb',
                verb: 'POST'
            }
        }
    );

};