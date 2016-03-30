'use strict';

module.exports = function(app) {
    var templateModel = app.models.Template;

    var ds = app.dataSources.mongoDs;

    var sample_templates = [{
        id: 11,
        name: 'cbCustomer',
        title: 'Hello ! Exciting offer for you !',
        description: 'We @ <<business name>> have\'t seen you in a long time. 10% off on your next visit',
        festive: false,
        businessId: 0
    }, {
        id: 22,
        name: 'birthday',
        title: 'It\'s your Birthday ! Special offer for you',
        description: 'Bring your friends to <<business name>> for a birthday bash and save 15% on bill.',
        festive: false,
        businessId: 0
    }, {
        id: 33,
        name: 'weekend',
        title: 'Weekend\'s here ! Let\' party',
        description: 'Happy hours between <<time>>. Drink like a fish @ <<business name>>',
        festive: false,
        businessId: 0
    }, {
        id: 44,
        name: 'Valentines',
        title: 'Come celebrate love',
        description: 'Bring your date to <<business name>> on Valentine\'s day and avail huge discount',
        festive: true,
        businessId: 0
    }, {
        id: 55,
        name: 'Diwali',
        title: 'Lightning offers thi Diwali @ <<business name>>',
        description: 'It\'s the annual discount season.Get a whooping 20% off.',
        festive: true,
        businessId: 0
    }]
    ds.once('connected', function() {

        sample_templates.forEach(function(sampleTemplate) {
            templateModel.findOrCreate({
                where: {
                    id: sampleTemplate.id
                }
            }, sampleTemplate, function(err, createdTemplate, created) {
                if (err) {
                    console.log(err)
                }
                //console.log(createdBusiness);
                (created) ? console.log('Created template', createdTemplate.name) : console.log('Found template', createdTemplate.name);
            })
        })
    })
}