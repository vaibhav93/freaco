'use strict';

module.exports = function(app) {
    var userModel = app.models.Appuser;
    var vendorModel = app.models.Vendor;
    var ds = app.dataSources.mongoDs;
    var sampleVendor = {name:'vendor',email:'vendor@abc.com',password:'vendor'};
    var sample_users = [{
        name: 'Vaibhav',
        email:'vaibhav@gmail.com',
        password:'12345'
    }, {
        name: 'Sahil',
        email:'sahil@gmail.com',
        password:'12345'
    },
    {
        name: 'Neeraj',
        email:'neeraj@gmail.com',
        password:'12345'
    }]
    ds.once('connected', function() {
        vendorModel.findOrCreate({where:
            {email:sampleVendor.email}},sampleVendor,function(err,createdVendor,created){
                if(err){
                    console.log(err);
                }
                (created ) ? console.log('Created vendor', createdVendor.email) : console.log('Found vendor', createdVendor.email);
            });
        sample_users.forEach(function(user) {
            userModel.findOrCreate({
                where: {
                    email: user.email
                }
            },user, function(err, createdUser, created) {
                if (err) {
                    console.log(err)
                }
                //console.log(createdBusiness);
                (created) ? console.log('Created user', createdUser.name) : console.log('Found user', createdUser.name);
            })
        })
    })
}