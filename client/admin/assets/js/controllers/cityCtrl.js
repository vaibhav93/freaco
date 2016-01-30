'use strict';
/**
 * controllers for for city

 * Simple table with sorting and filtering on AngularJS
 */
app.controller('cityController', ["$scope", "$filter","$timeout", "Upload", "ngTableParams", "City", 
    function ($scope,$filter,$timeout, $upload, ngTableParams, City) {

        //Code for deleting category
        $scope.imgNotUploaded = true;
        $scope.imageurl='';
        $scope.deleteCity = function(cityId){
            City.deleteById({id:cityId},
                    function(success){console.log('delete success');$scope.tableParams.reload();},
                    function(error){console.log('delete error :'+error)});
        }

        //alerts
        $scope.alertSuccess = {
        val:-1,
        type:'success',
        msg:'Data saved successfully'
        };
        $scope.alertUpdate = {
        val:-1,
        type:'success',
        msg:'Data updated successfully'
        };
        $scope.alertDanger = {
        val:-1,
        type:'danger',
        msg:'Error! Check if this city name or orderId already exists'
        };
        $scope.submitError=-1;
       $scope.upload = function(file,num) {
        if(num===1)
            $scope.f = file; 
        $scope.progress = 0;
            if(file && !file.error){
                $upload.upload({
                  url: '/img',
                  fields: {
                    'username': 'vaibhav'
                  },
                  file: file
                }).progress(function(evt) {
                  var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                  $scope.progress = progressPercentage;
                }).success(function(data, status, headers, config) {
                  console.log(data.img);
                  $scope.imageurl = data.img;
                  $scope.imgNotUploaded = false;
                });
            }
        };

        $scope.submitCity = function(){
        console.log('submit executed');
        City.create({name:$scope.cityName,
            orderId:$scope.cityOrderId,
            imgUrl:$scope.imageurl},function(success){
                console.log('success');
                $scope.alertSuccess.val=1;
                $scope.alertDanger.val=-1;
                $scope.imgNotUploaded = true;
                $scope.imageurl ='';
                $scope.tableParams.reload();
                $timeout(function(){
                    $scope.alertSuccess.val=-1,
                    $scope.cityName='';
                    $scope.cityOrderId='';
                    },2000);
                $timeout(function(){$scope.f=undefined;$scope.addCity=-1;$scope.progress=0;},3000);
            },function(error){
                console.log('error');
                $scope.alertSuccess.val=-1;
                $scope.alertDanger.val=1;
            });
        };
        //editing category
        $scope.editId = -1;   
        $scope.setEditId = function (cityid) {
        $scope.addCity=-1;
        $scope.editId = cityid;
        };

        //update category
        $scope.updateCity = function(city){
            var imageUrl;
            if($scope.imageurl.length>1)
                imageUrl=$scope.imageurl;
            else
                imageUrl=city.imgUrl;
            City.prototype$updateAttributes({id:city.id},{name:city.name,orderId:city.orderId,imgUrl:imageUrl},function(newCity){
            $scope.alertUpdate.val=1;
            $scope.imageurl ='';
            $scope.tableParams.reload();
            //console.log($scope.alert.val);
            $timeout(function(){$scope.alertUpdate.val=-1},2000);
            $timeout(function(){$scope.editId=-1,$scope.progress=0;},3000);
        },function(err){
            console.log(err);
            $scope.imageurl ='';
        });
        }

        $scope.addCity=-1;
        $scope.showForm = function(){
            $scope.addCity=1;
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
            
            City.find(function(data){
                //success
                params.total(data.length);
                var orderedData = params.filter() ? $filter('filter')(data, params.filter()) : data;
                orderedData = params.sorting() ? $filter('orderBy')(orderedData, params.orderBy()) : orderedData;
                $scope.cities = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
                params.total(orderedData.length);
                // set total for recalc pagination
                $defer.resolve($scope.cities);
            },function(res){
                //failed
            });
            
        }
    });
}]);