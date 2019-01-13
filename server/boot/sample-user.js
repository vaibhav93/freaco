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
	    createBusiness(createdVendor.id,app);
        });
        sample_users.forEach(function(user) {
            userModel.findOrCreate({
                where: {
                    email: user.email
                }
            }, user, function(err, createdUser, created) {
                if (err) {
                    console.log(err);
                }
                //console.log(createdBusiness);
                (created) ? console.log('Created user', createdUser.fname) : console.log('Found user', createdUser.fname);
            });
        });
    });
};

function createBusiness(vendorId, app){
    var businessModel = app.models.Business;
    var ds = app.dataSources.mongoDs;
    var sample_businesses = [{
        name: 'Ohri, Hyderabad',
        qr: 'ohri_hyderabad',
        img: 'http://app.freaco.com/admin/assets/images/ohri.jpg',
        totalVisits: 0,
	vendorId: vendorId
    }, {
        name: 'Taj, Chandigarh',
        qr: 'taj_chandigarh',
        img: 'http://app.freaco.com/admin/assets/images/taj.jpg',
        totalVisits: 0,
	vendorId: vendorId
    }];

        sample_businesses.forEach(function(business) {
            businessModel.findOrCreate({
                where: {
                    name: business.name
                }
            }, business, function(err, createdBusiness, created) {
                if (err) {
                    console.log(err);
                }
                //console.log(createdBusiness);
                (created) ? console.log('Created business', createdBusiness.name) : console.log('Found business', createdBusiness.name);
            });
        });

}
