'use strict';

module.exports = function(app) {
    var userModel = app.models.Appuser;
    var vendorModel = app.models.Vendor;
    var ds = app.dataSources.mongoDs;
    var sampleVendor = {
        name: 'vendor',
        email: 'vendor@abc.com',
        password: 'vendor'

    };
    var sample_users = [{
        fname: 'Vaibhav',
        email: 'vaibhav@gmail.com',
        password: '12345',
        img: 'assets/images/media-user.png'
    }, {
        fname: 'Sahil',
        email: 'sahil@gmail.com',
        password: '12345',
        img: 'assets/images/media-user.png'
    }, {
        fname: 'Neeraj',
        email: 'neeraj@gmail.com',
        password: '12345',
        img: 'assets/images/media-user.png'
    }, {
        fname: 'Abhishek',
        email: 'abhishek@gmail.com',
        password: '12345',
        img: 'assets/images/media-user.png'
    }]
    ds.once('connected', function() {
        vendorModel.findOrCreate({
            where: {
                email: sampleVendor.email
            }
        }, sampleVendor, function(err, createdVendor, created) {
            if (err) {
                console.log(err);
            }
            (created) ? console.log('Created vendor', createdVendor.email) : console.log('Found vendor', createdVendor.email);
        });
        sample_users.forEach(function(user) {
            userModel.findOrCreate({
                where: {
                    email: user.email
                }
            }, user, function(err, createdUser, created) {
                if (err) {
                    console.log(err)
                }
                //console.log(createdBusiness);
                (created) ? console.log('Created user', createdUser.fname) : console.log('Found user', createdUser.fname);
            })
        })
    })
}