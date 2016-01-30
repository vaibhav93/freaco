'use strict';
/**
 * controllers for for city
 
 * Simple table with sorting and filtering on AngularJS
 */
app.controller('rewardsCtrl', ["$scope", "$filter", "$localStorage", "Upload", "ngTableParams", "Business", "$q", "$modal",
    function($scope, $filter, $localStorage, $upload, ngTableParams, Business, $q, $modal) {


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

                Business.offers({
                    id: $localStorage.business.id
                }, function(data) {
                    //success

                    params.total(data.length);
                    var orderedData = params.filter() ? $filter('filter')(data, params.filter()) : data;
                    orderedData = params.sorting() ? $filter('orderBy')(orderedData, params.orderBy()) : orderedData;
                    $scope.offers = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
                    params.total(orderedData.length);
                    // set total for recalc pagination
                    $defer.resolve($scope.offers);


                }, function(res) {
                    //failed
                    console.log(res);
                });

            }
        });

    }
]);