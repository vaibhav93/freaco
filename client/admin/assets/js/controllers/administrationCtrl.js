'use strict';
/**
 * controllers for for city
 
 * Simple table with sorting and filtering on AngularJS
 */
app.controller('administrationCtrl', ["$scope", "$filter", "$timeout", "Business", "$localStorage", "Vendor", "Upload", "SweetAlert",
    function($scope, $filter, $timeout, Business, $localStorage, Vendor, $upload, SweetAlert) {
        Business.findById({
            id: $localStorage.business.id
        }, function(business) {
            $scope.business = business;
        })
        Business.businessSecurities({
            id: $localStorage.business.id
        }, function(BS) {
            $scope.mpin = BS.mpin;
        })
        $scope.saveBusiness = function() {
            Business.prototype$updateAttributes({
                id: $scope.business.id
            }, $scope.business, function(updatedBusiness) {
                SweetAlert.swal({
                    title: "Sucess!",
                    text: "Profile update successfully",
                    type: "success",
                    confirmButtonColor: "#007AFF"
                });
            })
        }
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