'use strict';
/**
 * controllers for for city

 * Simple table with sorting and filtering on AngularJS
 */
 app.controller('vendorTableController', ["$scope", "$filter","$timeout", "Upload", "ngTableParams", "Vendor", 
    function ($scope,$filter,$timeout, $upload, ngTableParams, Vendor) {


        $scope.deleteVendor = function(vendorId){
            Vendor.deleteById({id:vendorId},
                function(success){console.log('delete success');$scope.tableParams.reload();},
                function(error){console.log('delete error :'+error)});
        };

        $scope.tableParams = new ngTableParams({
        page: 1, // show first page
        count: 10, // count per page
        filter: {

        },
    }, {
        total: 0, // length of data
        getData: function ($defer, params) {
            // use build-in angular filter
            
            Vendor.find(function(data){
                //success
                params.total(data.length);
                var orderedData = params.filter() ? $filter('filter')(data, params.filter()) : data;
                orderedData = params.sorting() ? $filter('orderBy')(orderedData, params.orderBy()) : orderedData;
                $scope.vendors = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
                params.total(orderedData.length);
                // set total for recalc pagination
                $defer.resolve($scope.vendors);
            },function(res){
                //failed
                console.log(res);
            });
            
        }
    });
}]);