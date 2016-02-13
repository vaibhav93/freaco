'use strict';
/** 
 * controllers used for the dashboard
 */
app.controller('dashboardCtrl', ["$scope", "$localStorage", "Business","Offer", "Appuser", "usSpinnerService", "$timeout",
    function($scope, $localStorage, Business,Offer, Appuser, usSpinnerService, $timeout) {
        $scope.redemptionCode;
        $scope.validationRes = false;
        $scope.resStatus = false
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
                    Offer.findById({id:code.offerId},function(offer){
                    Appuser.notify({appUserId:code.userId,message:'Offer redeemed',description:'You have successfully redeemed '+offer.name},function(res){
                      if(res.err){
                         $scope.resStatus = false;
                      }
                    })
                  },function(err){$scope.resStatus = false;})
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