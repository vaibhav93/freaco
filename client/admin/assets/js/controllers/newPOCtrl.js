'use strict';
/**
 * controllers for for city
 
 * Simple table with sorting and filtering on AngularJS
 */
app.controller('newPOCtrl', ["$scope", "$filter", "$timeout", "Business", "PushOffer", "$localStorage", "Vendor", "$q", "$modal",
    function($scope, $filter, $timeout, Business, PushOffer, $localStorage, Vendor, $q, $modal) {
        var currentTemplate = ''
        $scope.setTemplate = function(template) {
            console.log(template);
            currentTemplate = template;
        }
        $scope.setBackground = function(template) {
            if (template == currentTemplate) {
                return 'greenBG';
            }
        }
    }
]);

app.controller('ModalInstanceCtrl', ["$scope", "$modalInstance", "business", "Business",
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
            $modalInstance.dismiss('cancel');
        };
    }
]);