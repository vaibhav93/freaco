'use strict';
app.service('ngAuthorize',["$localStorage","$http","$location",function($localStorage,$http,$location){
	var string = 'hello jiii';
	this.printString = function(){
		console.log(string);
	}
	this.getRole = function(deferred){
		var access_token = $localStorage.accessToken;

		return $http.get($location.protocol()+'://'+$location.host()+':'+$location.port()+'/api/getRole?access_token='+access_token)
		.then(function(res){
			if(res.data==='admin'){
				deferred.resolve();
			}
			else{
				console.log('Unauthorized');
				deferred.reject();
			}
		});
	}
}])