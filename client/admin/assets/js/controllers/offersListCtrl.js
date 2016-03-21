'use strict';
/**
 * controllers for for city
 
 * Simple table with sorting and filtering on AngularJS
 */
app.controller('offersListCtrl', ["$scope", "$filter", "$timeout", "Business", "$localStorage", "Vendor", "$q", "$modal",
    function($scope, $filter, $timeout, Business, $localStorage, Vendor, $q, $modal) {
        Business.pushOffers({
            id: $localStorage.business.id
        }, function(pushOffers) {
            $scope.pushOffers = pushOffers;
        });
        $scope.deletePushOffer = function(pushOfferId) {
            console.log('delete');
        }
        $scope.switchsetting = true;
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