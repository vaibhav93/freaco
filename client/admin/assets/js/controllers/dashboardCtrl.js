'use strict';
/** 
 * controllers used for the dashboard
 */
app.controller('dashboardCtrl', ["$scope", "$localStorage", "Business", "Offer", "Appuser", "usSpinnerService", "$timeout", "moment", "Customer",
    function($scope, $localStorage, Business, Offer, Appuser, usSpinnerService, $timeout, moment, Customer) {
        $scope.redemptionCode;
        $scope.validationRes = false;
        $scope.resStatus = false
        $scope.parentScope = {};
        $scope.newLastWeek = 0;
        Business.customers({
            id: $localStorage.business.id
        }, function(customers) {
            $scope.parentScope.customers = customers;
            angular.forEach(customers, function(customer) {
                customer.since = calculateSince(customer.lastVisit);
                customer.user = Appuser.findById({
                    id: customer.appuserId
                });

            })
            $scope.newLastWeek = customers.filter(lastWeekFilter).length;
        });

        Business.visits({
            id: $localStorage.business.id
        }, function(visits) {
            $scope.visitsLastWeek = visits.filter(totalLastWeekVisits).length;
        })
        $scope.business = Business.findById({
            id: $localStorage.business.id
        });
        $scope.customerCount = Customer.count({
            filter: {
                where: {
                    businessId: $localStorage.business.id
                }
            }
        });
        $scope.offers = Business.offers({
            id: $localStorage.business.id
        });

        //filter to get total visits last week
        var totalLastWeekVisits = function(visit) {
                var weeks = Math.floor(moment.duration(moment() - visit.time).asWeeks());
                if (weeks <= 1)
                    return true;
                else
                    return false;
            }
            //whether customer was created within last week
        var lastWeekFilter = function(customer) {
            var weeks = Math.floor(moment.duration(moment() - customer.created).asWeeks());
            if (weeks <= 1)
                return true;
            else
                return false;
        }
        var calculateSince = function(lastVisit) {
            var mins = Math.floor(moment.duration(moment() - lastVisit).asMinutes());
            if (mins <= 60) {
                return mins + ' minutes ago';
            } else if (mins > 60 && mins <= 24 * 60) {
                var hours = Math.floor(moment.duration(moment() - lastVisit).asHours());
                return hours + ' hours ago';
            } else {
                var days = Math.floor(moment.duration(moment() - lastVisit).asDays());
                return days + ' days ago';
            }
        }
        $scope.redemptionValidate = function() {
            usSpinnerService.spin('spinner-1');
            $scope.resStatus = false;
            Business.codes({
                id: $localStorage.business.id,
                filter: {
                    where: {
                        uid: $scope.redemptionCode
                    }
                }
            }, function(res) {
                console.log(res.length);
                //show alert
                $scope.validationRes = true;
                if (res.length > 0) {
                    $scope.resStatus = true;
                    var code = res[0];
                    Offer.findById({
                        id: code.offerId
                    }, function(offer) {
                        Appuser.notify({
                            appUserId: code.userId,
                            businessId: $localStorage.business.id,
                            offer: offer,
                            message: 'Offer redeemed',
                            description: 'You have successfully redeemed ' + offer.name
                        }, function(res) {
                            if (res.err) {
                                $scope.resStatus = false;
                            }
                        })
                    }, function(err) {
                        $scope.resStatus = false;
                    })
                }
                $timeout(function() {
                    $scope.validationRes = false;
                    $scope.resStatus = false;
                }, 10000);
                usSpinnerService.stop('spinner-1');
            }, function(err) {
                $scope.validationRes = true;
                usSpinnerService.stop('spinner-1');
                console.log(err);
            });
        }

    }
]);