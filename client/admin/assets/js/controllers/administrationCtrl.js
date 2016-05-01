'use strict';
/**
 * controllers for for city
 
 * Simple table with sorting and filtering on AngularJS
 */
app.controller('administrationCtrl', ["$scope", "$filter", "$timeout", "Business", "$localStorage", "Vendor", "Upload",
    function($scope, $filter, $timeout, Business, $localStorage, Vendor, $upload) {
        $scope.upload = function(file, num) {
            if (num === 1)
                $scope.f = file;
            $scope.progress = 0;
            if (file && !file.error) {
                $upload.upload({
                    url: '/img',
                    fields: {
                        'businessId': $localStorage.business.id
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
    }
]);