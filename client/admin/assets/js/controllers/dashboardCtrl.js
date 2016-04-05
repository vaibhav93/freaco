'use strict';
/** 
 * controllers used for the dashboard
 */
app.controller('dashboardCtrl', ["$scope", "$localStorage", 'SweetAlert', "Business", "Offer", "Vendor", "Appuser", "$filter", "usSpinnerService", "$timeout", "moment", "Customer", "ngTableParams",
    function($scope, $localStorage, SweetAlert, Business, Offer, Vendor, Appuser, $filter, usSpinnerService, $timeout, moment, Customer, ngTableParams) {
        $scope.showFilterAttributes = false;
        $scope.selectedFilter;
        $scope.redemptionCode;
        $scope.validationRes = false;
        $scope.resStatus = false
        $scope.filteredList = [];
        $scope.parentScope = {};
        $scope.filter = {};
        $scope.newLastWeek = 0;
        var filterArray = [];
        $scope.business = Business.findById({
            id: $localStorage.business.id
        });

        $scope.pushOffer = function() {
            usSpinnerService.spin('spinner-2');
            console.log($scope.filteredList);
            Vendor.pushOffer({
                customerList: $scope.filteredList,
                offer: {
                    message: 'New push offer',
                    description: 'Happy hours between 1pm to 4pm'
                }
            }, function(res) {
                console.log(res);
                usSpinnerService.stop('spinner-2');

                SweetAlert.swal({
                    title: "Sucess!",
                    text: "Offer pushed to customers!",
                    type: "success",
                    confirmButtonColor: "#007AFF"
                });
                $scope.showFilterAttributes = false;
                $scope.filterArray = [];
            })
        }
        $scope.showFilter = function() {
            if ($scope.showFilterAttributes)
                $scope.showFilterAttributes = false;
            else
                $scope.showFilterAttributes = true;
        }

        $scope.applyFilter = function() {
            //reset filter object and array
            filterArray = [];
            var filterObject = {};
            if ($scope.filter.visits) {
                filterObject = {

                    visitCount: {
                        gte: $scope.filter.visits
                    }
                }
                filterArray.push(filterObject);
                filterObject = {};
            }
            if ($scope.filter.days) {
                var filterDate = moment().subtract(7, 'days').toDate();
                filterObject = {
                    lastVisit: {
                        lt: filterDate
                    }
                };
                filterArray.push(filterObject);
                filterObject = {};
            }
            if ($scope.filter.birthday) {
                var filterDate = moment().add(7, 'days').toDate();
                filterObject = {
                    birthday: {
                        lte: filterDate
                    }
                };
                filterArray.push(filterObject);
                filterObject = {};
            }
            // console.log(filterArray);
            $scope.tableParams.reload();
        }
        $scope.clearFilter = function() {
            $scope.filter = {};
            filterArray = [];
            $scope.tableParams.reload();
            // $scope.showFilterAttributes = false;
        }
        $scope.searchByName = function() {
            filterArray = [];
            var filterObject = {
                    // fname: {
                    //     "like": '.*' + $scope.customerNameQuery + '.*',
                    //     "options": "i"
                    // }
                    fname: $scope.customerNameQuery
                }
                //filterArray.push(filterObject);
                //$scope.tableParams.reload();
            $scope.tableParams.filter({
                fname: $scope.customerNameQuery
            });
        }

        Business.customers({
            id: $localStorage.business.id
        }, function(customers) {
            //$scope.parentScope.customers = customers;
            angular.forEach(customers, function(customer) {
                customer.since = calculateSince(customer.lastVisit);
                customer.user = Appuser.findById({
                    id: customer.appuserId
                });

            })
            $scope.newLastWeek = customers.filter(lastWeekFilter).length;
        });
        Business.activities({
            id: $localStorage.business.id,
            filter: {
                where: {
                    type: 'VISIT'
                }
            }
        }, function(visits) {
            $scope.business.totalVisits = visits.length;
            $scope.visitsLastWeek = visits.filter(totalLastWeekVisits).length;
        })

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
            var mins = Math.round(moment.duration(moment() - lastVisit).asMinutes());
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

            $scope.resStatus = false;

            if ($scope.redemptionCode.length > 0) {
                usSpinnerService.spin('spinner-1');
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
        $scope.tableParams = new ngTableParams({
            page: 1, // show first page
            count: 10, // count per page
            filter: {

            },
        }, {
            total: 0, // length of data
            getData: function($defer, params) {
                if (filterArray.length == 0)
                    filterArray.push({});
                Business.customers({
                    id: $localStorage.business.id,
                    filter: {
                        where: {
                            and: filterArray
                        }
                    }
                }, function(customers) {
                    angular.forEach(customers, function(customer) {
                        customer.since = calculateSince(customer.lastVisit);
                        customer.user = Appuser.findById({
                            id: customer.appuserId
                        }, function(user) {
                            customer.fname = user.fname
                        });

                    });
                    $scope.filteredList = customers;
                    applyData(customers);
                });
                var applyData = function(data) {
                    params.total(data.length);
                    var orderedData = params.filter() ? $filter('filter')(data, params.filter()) : data;
                    orderedData = params.sorting() ? $filter('orderBy')(orderedData, params.orderBy()) : orderedData;
                    $scope.vendors = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
                    params.total(orderedData.length);
                    // set total for recalc pagination
                    $defer.resolve($scope.vendors);

                }

            }


        });

    }
]);