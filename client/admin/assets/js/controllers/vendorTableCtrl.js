'use strict';
/**
 * controllers for for city

 * Simple table with sorting and filtering on AngularJS
 */
 app.controller('vendorTableController', ["$scope", "$filter","$timeout", "Upload", "ngTableParams", "Vendor","$q","$modal",
    function ($scope,$filter,$timeout, $upload, ngTableParams, Vendor,$q,$modal) {
        var promises = [];
        $scope.statusChange = function(vendorId,vendorStatus){
            console.log(vendorId+ 'is' + vendorStatus);
            Vendor.prototype$updateAttributes({id:vendorId},{status:vendorStatus},function(success){
                //console.log(success);
            },function(err){
                //console.log(err);
            })
        };
        $scope.openModal = function(vendorId){
            var modalInstance = $modal.open({
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            resolve: {
                business: function () {
                    return Vendor.businesses({id:vendorId}).$promise;
                }
            }
        });
        }
        $scope.deleteVendor = function(vendorId){
            Vendor.deleteById({id:vendorId},
                function(success){console.log('delete success');$scope.tableParams.reload();},
                function(error){console.log('delete error :'+error)});
        }

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
                angular.forEach(data,function(vendor){
                    promises.push(Vendor.businesses({id:vendor.id}).$promise.then(function(business){
                    vendor.contact = business.contact;    
                    }));
                    // Vendor.businesses({id:vendor.id}).$promise.then(function(business){
                    //     console.log(business.name);
                    
                    // })
                });
                $q.all(promises).then(function(){
                params.total(data.length);
                var orderedData = params.filter() ? $filter('filter')(data, params.filter()) : data;
                orderedData = params.sorting() ? $filter('orderBy')(orderedData, params.orderBy()) : orderedData;
                $scope.vendors = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
                params.total(orderedData.length);
                // set total for recalc pagination
                $defer.resolve($scope.vendors);    
                });
                
            },function(res){
                //failed
                console.log(res);
            });
            
        }
    });

    $scope.exportCSV = function(){
        console.log('clicked');
        JSONToCSVConvertor($scope.vendors, "Vehicle Report", true);
    }
    var JSONToCSVConvertor = function(JSONData, ReportTitle, ShowLabel) {
    //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
    var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
    console.log('hi');
    var CSV = '';    
    //Set Report title in first row or line
    
    CSV += ReportTitle + '\r\n\n';

    //This condition will generate the Label/Header
    if (ShowLabel) {
        var row = "";
        
        //This loop will extract the label from 1st index of on array
        for (var index in arrData[0]) {
            
            //Now convert each value to string and comma-seprated
            row += index + ',';
        }

        row = row.slice(0, -1);
        
        //append Label row with line break
        CSV += row + '\r\n';
    }
    
    //1st loop is to extract each row
    for (var i = 0; i < arrData.length; i++) {
        var row = "";
        
        //2nd loop will extract each column and convert it in string comma-seprated
        for (var index in arrData[i]) {
            row += '"' + arrData[i][index] + '",';
        }

        row.slice(0, row.length - 1);
        
        //add a line break after each row
        CSV += row + '\r\n';
    }

    if (CSV == '') {        
        alert("Invalid data");
        return;
    }   
    
    //Generate a file name
    var fileName = "MyReport_";
    //this will remove the blank-spaces from the title and replace it with an underscore
    fileName += ReportTitle.replace(/ /g,"_");   
    
    //Initialize file format you want csv or xls
    var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);
    
    // Now the little tricky part.
    // you can use either>> window.open(uri);
    // but this will not work in some browsers
    // or you will not get the correct file extension    
    
    //this trick will generate a temp <a /> tag
    var link = document.createElement("a");    
    link.href = uri;
    
    //set the visibility hidden so it will not effect on your web-layout
    link.style = "visibility:hidden";
    link.download = fileName + ".csv";
    
    //this part will append the anchor tag and remove it after automatic click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
}]);

app.controller('ModalInstanceCtrl', ["$scope", "$modalInstance", "business","Business", function ($scope, $modalInstance, business,Business) {

    Business.businessCategory({id:business.id},function(busCat){
        $scope.business.businessCategory = busCat.name;
        })
    Business.city({id:business.id},function(city){
        $scope.business.city = city.name;
    })
    $scope.business = business;
    $scope.selected = {
        
    };

    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);