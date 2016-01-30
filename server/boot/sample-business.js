'use strict';

module.exports = function(app) {
    var businessModel = app.models.Business;
    var ds = app.dataSources.mongoDs;
    var sample_businesses = [{
        name: 'Ohri, Hyderabad',
        qr: 'ohri_hyderabad'
    }, {
        name: 'Taj, Chandigarh',
        qr: 'taj_chandigarh'
    }]
    ds.once('connected', function() {
        sample_businesses.forEach(function(business) {
            businessModel.findOrCreate({
                where: {
                    name: business.name
                }
            },business, function(err, createdBusiness, created) {
                if (err) {
                    console.log(err)
                }
                //console.log(createdBusiness);
                (created) ? console.log('Created business', createdBusiness.name) : console.log('Found business', createdBusiness.name);
            })
        })
    })
}