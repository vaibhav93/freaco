'use strict';
/**
 * controllers for for city
 
 * Simple table with sorting and filtering on AngularJS
 */
app.controller('bookingTableCtrl', ["$scope", "$filter", "$timeout", "Upload", "ngTableParams", "Booking", "$q", "$modal",
    function($scope, $filter, $timeout, $upload, ngTableParams, Booking, $q, $modal) {

        $scope.openModal = function(bookingId) {
            var modalInstance = $modal.open({
                templateUrl: 'myModalBooking.html',
                controller: 'BookingModalCtrl',
                resolve: {
                    booking: function() {
                        return Booking.findById({id:bookingId}).$promise;
                    }
                }
            });
        }
        var promises = [];
        $scope.tableParams = new ngTableParams({
            page: 1, // show first page
            count: 10, // count per page
            filter: {

            },
        }, {
            total: 0, // length of data
            getData: function($defer, params) {
                // use build-in angular filter

                Booking.find(function(data) {
                    //success
                    angular.forEach(data, function(booking) {
                        promises.push(Booking.business({
                            id: booking.id
                        }).$promise.then(function(business) {
                            booking.businessName = business.name;
                        }));
                        // Vendor.businesses({id:vendor.id}).$promise.then(function(business){
                        //     console.log(business.name);

                        // })
                    });
                    $q.all(promises).then(function() {
                        params.total(data.length);
                        var orderedData = params.filter() ? $filter('filter')(data, params.filter()) : data;
                        orderedData = params.sorting() ? $filter('orderBy')(orderedData, params.orderBy()) : orderedData;
                        $scope.vendors = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
                        params.total(orderedData.length);
                        // set total for recalc pagination
                        $defer.resolve($scope.vendors);
                    });

                }, function(res) {
                    //failed
                    console.log(res);
                });

            }
        });

    }
]);

app.controller('BookingModalCtrl', ["$scope", "$modalInstance", "booking","Booking", function ($scope, $modalInstance, booking,Booking) {

    Booking.business({id:booking.id},function(business){
        booking.businessName = business.name;
    },function(err){
        console.log(err);
    });
    $scope.booking = booking;

    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);