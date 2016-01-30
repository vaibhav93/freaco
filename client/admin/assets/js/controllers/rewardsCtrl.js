'use strict';
/**
 * controllers for for city
 
 * Simple table with sorting and filtering on AngularJS
 */
 app.controller('rewardsCtrl', ["$scope", "$filter", "$localStorage", "Upload", "ngTableParams", "Business", "$q", "$modal","usSpinnerService",
    function($scope, $filter, $localStorage, $upload, ngTableParams, Business, $q, $modal,usSpinnerService) {
        $scope.offer = {
            name:null,
            points:null
        };
        $scope.createOffer = function(){
            usSpinnerService.spin('spinner-1');
            if($scope.offer.name && $scope.offer.points){
                Business.offers.create({id:$localStorage.business.id},$scope.offer,function(offer){
                    $scope.tableParams.reload();
                    usSpinnerService.stop('spinner-1');
                    $scope.offer = {
                        name:null,
                        points:null
                    };
                },function(err){
                    usSpinnerService.stop('spinner-1');
                    console.log(err);
                    $scope.offer = {
                        name:null,
                        points:null
                    };
                })
            }
        }
        $scope.deleteOffer = function(offerId){
            usSpinnerService.spin('spinner-2');
            Business.offers.destroyById({id:$localStorage.business.id,fk:offerId},
                function(success){console.log('delete success');$scope.tableParams.reload();
            usSpinnerService.stop('spinner-2');},
                function(error){console.log('delete error :'+error);
                usSpinnerService.stop('spinner-2');});
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