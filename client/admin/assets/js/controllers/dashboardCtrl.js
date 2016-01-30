'use strict';
/** 
  * controllers used for the dashboard
  */
  app.controller('dashboardCtrl', ["$scope","$rootScope", "Business","usSpinnerService","$timeout", function ($scope,$rootScope,Business,usSpinnerService,$timeout) {
    $scope.redemptionCode;
    $scope.validationRes = false;
    $scope.resStatus = false
    $scope.redemptionValidate = function(){
      usSpinnerService.spin('spinner-1');
      $scope.resStatus = false;
      Business.codes({id:'564620fb33dc44670d5847e7',filter:{where:{uid:$scope.redemptionCode}}},function(res){
        console.log(res.length);
        if(res.length>0)
          $scope.resStatus = true;
        $scope.validationRes = true;
        $timeout(function(){
          $scope.validationRes=false;
          $scope.resStatus = false;
        },3000);
        usSpinnerService.stop('spinner-1');
      },function(err){
        $scope.validationRes = true;
        usSpinnerService.stop('spinner-1');
        console.log(err);
      });
    }

  }]);

