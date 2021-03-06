'use strict';
/**
 * controllers for for city
 
 * Simple table with sorting and filtering on AngularJS
 */
app.controller('offersListCtrl', ["$scope", "$filter", "$timeout", "Business", "PushOffer", "$localStorage", "Vendor", "$q", "$modal",
    function($scope, $filter, $timeout, Business, PushOffer, $localStorage, Vendor, $q, $modal) {
        $scope.updateStatus = function(pushOffer) {
            var status;
            //pushOffer.status ? status = 'enabled' : status = 'disabled';
            PushOffer.prototype$updateAttributes({
                id: pushOffer.id
            }, {
                status: pushOffer.status
            })
        }
        $scope.pushNotification = function(pushOffer) {
            Vendor.pushOffer({

                pushOffer: pushOffer,
                type: 'PUSH_OFFER_NOTIFICATION'
            }, function(res) {
                SweetAlert.swal({
                    title: "Sucess!",
                    text: "Hooray ! Offer sent to customers.",
                    type: "success",
                    confirmButtonColor: "#007AFF"
                }, function(isConfirm) {
                    $state.go('app.table.pushoffers');
                });
            })
        }
        var getpushOffers = function() {
            Business.pushOffers({
                id: $localStorage.business.id
            }, function(pushOffers) {
                $scope.pushOffers = pushOffers;
                angular.forEach(pushOffers, function(pushOffer) {
                    PushOffer.customerOffers({
                        id: pushOffer.id
                    }, function(customerOffers) {
                        pushOffer.customerList = customerOffers;
                    })
                    Business.activities({
                            id: $localStorage.business.id,
                            filter: {
                                where: {
                                    redeemId: pushOffer.id
                                }
                            }
                        },
                        function(activities) {
                            pushOffer.activities = activities;
                        })
                })
            });
        }
        getpushOffers();
        $scope.deletePushOffer = function(pushOfferId) {
            Business.pushOffers.destroyById({
                id: $localStorage.business.id,
                fk: pushOfferId
            }, function(success) {
                getpushOffers();
            })
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