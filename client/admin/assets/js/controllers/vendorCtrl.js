'use strict';
/** 
  * controllers used for the dashboard
  */
  app.controller('vendorController',["$scope","City","BusinessCategory", "Business", "toaster", "$stateParams","Upload","Vendor","$rootScope",
  	function($scope,City,BusinessCategory, Business, toaster,$stateParams,$upload,Vendor,$rootScope){
  		City.find(function(cities){
  			$scope.cities = cities;
  		},function(err){
  			console.log(err);
  		});
  		BusinessCategory.find(function(categories){
  			$scope.categories = categories;
  		},function(err){
  			console.log(err);
  		})
	// initalize controller with vriables if this is fir editing
	if($stateParams.vendorId){
		$scope.vendor = Vendor.findById({id:$stateParams.vendorId},function(foundVendor){
			$scope.business = Vendor.businesses({id:foundVendor.id},function(foundBusiness){
             angular.forEach($scope.cities,function(city){
              if(city.id===foundBusiness.cityId)
               city.ticked=true;
       });
             angular.forEach($scope.categories,function(category){
              if(category.id===foundBusiness.businessCategoryId){
               category.ticked=true;
               $scope.businessCategory = category;
               $scope.businessCategory.properties = foundBusiness.properties;
           }
       })
             $scope.files = foundBusiness.imageurls;
             $scope.sections = Business.sections({id:foundBusiness.id});
             $scope.showOptions=true;

         },function(err){
            console.log('business not found'+err);
        })
		},function(err){
			console.log('vendor not found'+err);
		})

	}
	else{
		$scope.showOptions=false;
		$scope.addSection=false;
		$scope.vendor = {};
		$scope.business={};
		$scope.selectedCity=[];
	}
	//scope variables
  $scope.toaster = {
    type: 'success',
    title: 'Data Saved',
    text: 'Success'
};
$scope.map = {};
$scope.enableMap = false;
$scope.sections=[];
$scope.section={min:'',max:'',costs:['','','','']};

var resetAll = function(){
    $scope.map = {};
    $scope.enableMap = false;
    $scope.sections=[];
    $scope.section={min:'',max:'',costs:['','','','']};
    $scope.showOptions=false;
    $scope.addSection=false;
    $scope.vendor = {};
    $scope.business={};
    $scope.selectedCity=[];
    $scope.businessCategory=undefined;
    $scope.businessCat = [];
    $scope.files=undefined;
    angular.forEach($scope.categories,function(category){
        category.ticked=false;
    })
    angular.forEach($scope.cities,function(city){
        city.ticked=false;
    })
}
$scope.submitSection = function(){
  if($stateParams.vendorId){
   Business.sections.create({id:$scope.business.id},$scope.section,function(createdSection){
    $scope.sections.push(createdSection);
})
}
else{
   $scope.sections.push($scope.section);
}
$scope.section={min:'',max:'',costs:['','','','']};
console.log($scope.sections);
}
$scope.removeSection =function(index,sectionId){
  if($stateParams.vendorId){
   Business.sections.destroyById({id:$scope.business.id,fk:sectionId},function(success){
    console.log('deleted section');
})
}
$scope.sections.splice(index,1);
console.log($scope.sections);
}
$scope.refreshScope = function(property){
		//console.log(property);
		if(property.name=='Slots'){
			if(!property.values[0].value)
				$scope.section.costs[0]='';
			if(!property.values[1].value)
				$scope.section.costs[1]='';
			if(!property.values[2].value)
				$scope.section.costs[2]='';
			if(!property.values[3].value)
				$scope.section.costs[3]='';
		}

	};

	$scope.cityClick = function(data){
		console.log($scope.selectedCity);
		$scope.business.cityId = data.id;
	};
	$scope.businessCategoryClick = function(data){
		$scope.showOptions=true;
		$scope.businessCategory=data;
		$scope.business.businessCategoryId = data.id;
        switch(data.name){
            case "Farms":
            $scope.abr = 'FA';
            break;
            case "Priest":
            $scope.abr = 'PR';
            break;
            case "Banquet":
            $scope.abr = 'BA';
            break;
            case "Groom Wear":
            $scope.abr = 'GW';
            break;
            case "Videographer":
            $scope.abr = 'VD';
            break;
            case "Bridal Wear":
            $scope.abr = 'BW';
            break;
            case "Bridal Makeup":
            $scope.abr = 'BM';
            break;
            case "Wedding Invite":
            $scope.abr = 'WI';
            break;
            case "Catering":
            $scope.abr = 'CT';
            break;
            case "Music and Entertainment":
            $scope.abr = 'MU';
            break;
            case "Brass Band":
            $scope.abr = 'BB';
            break;
            case "Decorator":
            $scope.abr = 'DC';
            break;
            case "Photographer":
            $scope.abr = 'PH';
            break;
            case "Rentals and staff":
            $scope.abr = 'RN';
            break;
        }
        //console.log($scope.abr);
		//console.log($scope.showOptions);
		//console.log($rootScope.app.layout.theme);
	}
	$scope.reset = function(){
		$scope.showOptions=false;
		$scope.businessCategory = undefined;
	}


	//file upload
	$scope.upload = function(files) {
		$scope.files = files; 
		$scope.progress = 0;
		$scope.business.imageurls = [];
		angular.forEach(files, function(file) {
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
					$scope.business.imageurls.push(data.img)
				});
			}
		});
        //console.log($scope.imageurls)
    };

    //show MAP
    $scope.showMap = function(){
    	if(!$scope.enableMap)
    		$scope.enableMap = true;
    	else
    		$scope.enableMap = false;
    	console.log($scope.map);
    }
    $scope.addOrUpdate = function(){
    	if($stateParams.vendorId){
    		var vendorId = $stateParams.vendorId;
    		Vendor.prototype$updateAttributes({id:vendorId},$scope.vendor,function(success){
    			$scope.business.properties = $scope.businessCategory.properties;
    			Vendor.businesses.update({id:vendorId},$scope.business,function(success){
    				toaster.pop($scope.toaster.type, $scope.toaster.title, $scope.toaster.text);

    			},function(err){

    			})

    		},function(err){
    			console.log(err);
    		})
    	}
    	else{
    		$scope.vendor.password = $scope.business.contact;
            $scope.vendor.uid = $scope.abr + Math.floor($scope.business.lat*1000);
            $scope.vendor.status = true;
            Vendor.create($scope.vendor,function(createdVendor){
             $scope.business.properties = $scope.businessCategory.properties;
             $scope.business.vendorName = $scope.vendor.name;
             $scope.business.vendorEmail = $scope.vendor.email;
             $scope.business.uid = $scope.vendor.uid
             console.log($scope.vendor.uid);
             Vendor.businesses.create({id:createdVendor.id},$scope.business,function(createdBusiness){
                Business.sections.createMany({id:createdBusiness.id},$scope.sections,function(createSections){
                   console.log(createSections);
                   toaster.pop($scope.toaster.type, $scope.toaster.title, $scope.toaster.text);
                   resetAll();
               },function(err){

               })
    				//console.log(createdBusiness);
    			},function(err){

    			})
         },function(err){

         })

        }


    };


}])