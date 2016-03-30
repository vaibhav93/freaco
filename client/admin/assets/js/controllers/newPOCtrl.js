'use strict';
/**
 * controllers for for city
 
 * Simple table with sorting and filtering on AngularJS
 */
app.controller('newPOCtrl', ["$scope", "$filter", "$timeout", "Business", "PushOffer", "$localStorage", "Vendor", "$q", "$modal",
    function($scope, $filter, $timeout, Business, PushOffer, $localStorage, Vendor, $q, $modal) {
        $scope.filter = {
            allCustomers: false,
            filter: -1,
            visits: null
        }
        $scope.currentTemplate = '';
        $scope.setTemplate = function(template) {
            console.log(template);
            $scope.currentTemplate = template;
        }
        $scope.setBackground = function(template) {
            if (template == $scope.currentTemplate) {
                return 'greenBG ';
            }
        }
        $scope.currentFestival = '';
        $scope.festivals = [{
            name: 'Diwali '
        }, {
            name: 'Holi '
        }, {
            name: 'Valentines Day '
        }, {
            name: 'Eid '
        }]
        $scope.today = function() {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.clear = function() {
            $scope.dt = null;
        };


        $scope.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.opened = !$scope.opened;
        };
        $scope.endOpen = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.startOpened = false;
            $scope.endOpened = !$scope.endOpened;
        };
        $scope.startOpen = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.endOpened = false;
            $scope.startOpened = !$scope.startOpened;
        };

        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };

        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];

        $scope.hstep = 1;
        $scope.mstep = 15;

        // Time Picker
        $scope.options = {
            hstep: [1, 2, 3],
            mstep: [1, 5, 10, 15, 25, 30]
        };

        $scope.ismeridian = true;
        $scope.toggleMode = function() {
            $scope.ismeridian = !$scope.ismeridian;
        };

        $scope.update = function() {
            var d = new Date();
            d.setHours(14);
            d.setMinutes(0);
            $scope.dt = d;
        };

        $scope.changed = function() {
            $log.log('Time changed to: ' + $scope.dt);
        };

        $scope.clear = function() {
            $scope.dt = null;
        };

    }
]);

app.controller('ModalInstanceCtrl ', ["$scope", "$modalInstance", "business", "Business",
    function($scope, $modalInstance, business, Business) {

        Business.businessCategory({
            id: business.id
        }, function(busCat) {
            $scope.business.businessCategory = busCat.name;
        })
        Business.city({
            id: business.id
        }, function(city) {
            $scope.business.city = city.name;
        })
        $scope.business = business;
        $scope.selected = {

        };

        $scope.ok = function() {
            $modalInstance.close();
        };

        $scope.cancel = function() {
            $modalInstance.dismiss('cancel ');
        };
    }
]);