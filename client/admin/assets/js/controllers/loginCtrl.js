'use strict';
/** 
  * Controller for login
*/
app.controller('LoginCtrl', ["Vendor","$scope","$state","$rootScope","$localStorage","toaster", 
	function (Vendor,$scope,$state,$rootScope,$localStorage,toaster) {
	    $scope.toaster = {
        type: 'error',
        title: 'Invalid login',
        text: 'Unauthorized access'
    };

	$scope.credentials = {
    email: '',
    password: ''
  	};
  	$rootScope.$on('$stateChangePermissionDenied',function(){
  		toaster.pop($scope.toaster.type, $scope.toaster.title, $scope.toaster.text);
  	});

	$scope.login = function (){
		$scope.loginResult = Vendor.login($scope.credentials,
			function(res) {
			$localStorage.accessToken = res.id;
			$rootScope.user = res.user; 
			$localStorage.user = res.user;
      Vendor.businesses({id:res.user.id},function(business){
        $localStorage.business = business;
        $state.go('app.dashboard');
      },function(err){
        console.log(err);
      })
        	
      }, function(res) {
        //console.log('invalid login');
      	toaster.pop($scope.toaster.type, $scope.toaster.title, $scope.toaster.text);
        $state.go('login.signin');
      });		
	};

	
}]);