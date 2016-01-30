'use strict';
/**
 * controllers for ng-table
 * Simple table with sorting and filtering on AngularJS
 */

app.controller('ngTableCtrl', ["$scope", "ngTableParams", function ($scope, ngTableParams) {
    $scope.tableParams = new ngTableParams({
        page: 1, // show first page
        count: 5 // count per page
    }, {
        total: data.length, // length of data
        getData: function ($defer, params) {
            $defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });
}]);
app.controller('ngTableCtrl2', ["$scope", "$filter", "ngTableParams", function ($scope, $filter, ngTableParams) {
    $scope.tableParams = new ngTableParams({
        page: 1, // show first page
        count: 5, // count per page
        sorting: {
            name: 'asc' // initial sorting
        }
    }, {
        total: data.length, // length of data
        getData: function ($defer, params) {
            // use build-in angular filter
            var orderedData = params.sorting() ? $filter('orderBy')(data, params.orderBy()) : data;
            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });
}]);
app.controller('ngCatergoryTableCtrl', ["$scope", "$filter","$timeout", "Upload", "ngTableParams", "Category", "SweetAlert", function ($scope,$filter,$timeout, $upload, ngTableParams, Category, SweetAlert) {

        //Code for deleting category
        $scope.deletePopUp = function (catId,catName) {
        SweetAlert.swal({
            title: "Are you sure?",
            text: "Your will not be able to "+catName +" category",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel please!",
            closeOnConfirm: false,
            closeOnCancel: false
        }, function (isConfirm) {
            if (isConfirm) {
                Category.deleteById({id:catId},
                    function(success){console.log('delete success')},
                    function(error){console.log('delete error :'+error)});
                SweetAlert.swal({
                    title: "Deleted!", 
                    text: catName+" category has been deleted.", 
                    type: "success",
                    confirmButtonColor: "#007AFF"
                });
                $scope.tableParams.reload();

            } else {
                SweetAlert.swal({
                    title: "Cancelled", 
                    text: "Delete cancelled", 
                    type: "error",
                    confirmButtonColor: "#007AFF"
                });
            }
        });
    };
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
        msg:'Error! Check if this category name or orderId already exists'
        };
        $scope.submitError=-1;
       $scope.upload = function(file) {
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
                });
            }
        };

        $scope.submitCategory = function(){
        console.log('submit executed');
        Category.create({name:$scope.catName,
            description:$scope.catDesc,
            imgUrl:$scope.imageurl,orderId:$scope.catorderId},function(success){
                console.log('success');
                $scope.alertSuccess.val=1;
                $scope.alertDanger.val=-1;
                $scope.tableParams.reload();
                $timeout(function(){
                    $scope.alertSuccess.val=-1,
                    $scope.catName='';
                    $scope.catDesc='';
                    },2000);
                $timeout(function(){$scope.f=undefined;},3000);
            },function(error){
                console.log('error');
                $scope.alertSuccess.val=-1;
                $scope.alertDanger.val=1;
            });
        };
        //editing category
        $scope.editId = -1;   
        $scope.setEditId = function (catid) {
        $scope.editId = catid;
        };

        //update category
        $scope.updateCategory = function(category){
            Category.prototype$updateAttributes({id:category.id},{name:category.name,description:category.description,orderId:category.orderId},function(newCategory){
            $scope.alertUpdate.val=1;
            //console.log($scope.alert.val);
            $timeout(function(){$scope.alertUpdate.val=-1},2000);
            $timeout(function(){$scope.editId=-1},3000);
        },function(err){
            console.log(err);
        });
        }

        $scope.addCategoryflag=-1;
        $scope.showForm = function(){
            $scope.addCategoryflag=1;
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
            
            Category.find(function(data){
                //success
                angular.forEach(data,function(category){
                    category.subcats=[];
                    Category.subcategories({id:category.id},function(response){
                        //category.subcategories
                        angular.forEach(response,function(subcategory){
                            category.subcats.push(subcategory);
                        })
                    });
                    
                });
                params.total(data.length);
                var orderedData = params.filter() ? $filter('filter')(data, params.filter()) : data;
                orderedData = params.sorting() ? $filter('orderBy')(orderedData, params.orderBy()) : orderedData;
                $scope.categories = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
                params.total(orderedData.length);
                // set total for recalc pagination
                $defer.resolve($scope.categories);
            },function(res){
                //failed
            });
            
        }
    });
}]);
app.controller('ngTableCtrl3', ["$scope", "$filter", "$http", "$timeout", "ngTableParams","User", function ($scope, $filter,$http, $timeout, ngTableParams, User) {
        $scope.disabled = false;
        $scope.test='i am custom directive';
          $scope.enable = function() {
            $scope.disabled = false;
          };

          $scope.disable = function() {
            $scope.disabled = true;
          };
          $scope.address = {};
              $scope.refreshAddresses = function(address) {
                var params = {address: address, sensor: false};
                return $http.get(
                  'assets/json/states.json',
                  {params: params}
                ).then(function(response) {
                    //console.log(response.data);
                  $scope.addresses = response.data;
                });
            };
    
    $scope.editId = -1;
    $scope.alert = {
    val:-1,
    type:'success',
    msg:'Data saved successfully'
    };
    $scope.setEditId = function (pid) {
        $scope.editId = pid;
    };
    $scope.updateUser = function(user) {
        //call lb ng service function to update user
        //console.log($scope.alert.val);
        user.state = user.state.name;
        User.prototype$updateAttributes({id:user.id},user,function(newUser){
            $scope.alert.val=1;
            //console.log($scope.alert.val);
            $timeout(function(){$scope.alert.val=-1},2000);
            $timeout(function(){$scope.editId=-1},3000);
        },function(err){
            console.log(err);
        });

    }
    $scope.tableParams = new ngTableParams({
        page: 1, // show first page
        count: 5, // count per page
        filter: {
            
        },
    }, {
        total: 0, // length of data
        getData: function ($defer, params) {
            // use build-in angular filter
            User.find(function(data){
                //success
                params.total(data.length);
                var orderedData = params.filter() ? $filter('filter')(data, params.filter()) : data;
                orderedData = params.sorting() ? $filter('orderBy')(orderedData, params.orderBy()) : orderedData;
                $scope.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
                params.total(orderedData.length);
                // set total for recalc pagination
                $defer.resolve($scope.users);
            },function(res){
                //failed
            });
            
        }
    });
}]);
app.controller('ngTableCtrl4', ["$scope", "$filter", "ngTableParams", function ($scope, $filter, ngTableParams) {
    $scope.tableParams = new ngTableParams({
        page: 1, // show first page
        count: 10 // count per page

    }, {
        total: data.length, // length of data
        getData: function ($defer, params) {
            // use build-in angular filter
            var orderedData = params.sorting() ? $filter('orderBy')(data, params.orderBy()) : data;
            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));

        }
    });
}]);
app.controller('ngTableCtrl5', ["$scope", "$filter", "ngTableParams", function ($scope, $filter, ngTableParams) {
    $scope.tableParams = new ngTableParams({
        page: 1, // show first page
        count: 10 // count per page
    }, {
        total: data.length, // length of data
        getData: function ($defer, params) {
            // use build-in angular filter
            var orderedData = params.sorting() ? $filter('orderBy')(data, params.orderBy()) : data;

            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });
}]);
app.controller('ngTableCtrl6', ["$scope", "$filter", "ngTableParams", function ($scope, $filter, ngTableParams) {
    var data = [{
        "id": 1,
        "lm": 138661285100,
        "ln": "Smith",
        "fn": "John",
        "dc": "CEO",
        "em": "j.smith@company.com",
        "ph": "617-321-4567",
        "ac": true,
        "dl": false
    }, {
        "id": 2,
        "lm": 138661285200,
        "ln": "Taylor",
        "fn": "Lisa",
        "dc": "VP of Marketing",
        "em": "l.taylor@company.com",
        "ph": "617-522-5588",
        "ac": true,
        "dl": false
    }, {
        "id": 3,
        "lm": 138661285300,
        "ln": "Jones",
        "fn": "James",
        "dc": "VP of Sales",
        "em": "j.jones@company.com",
        "ph": "617-589-9977",
        "ac": true,
        "dl": false
    }, {
        "id": 4,
        "lm": 138661285400,
        "ln": "Wong",
        "fn": "Paul",
        "dc": "VP of Engineering",
        "em": "p.wong@company.com",
        "ph": "617-245-9785",
        "ac": true,
        "dl": false
    }, {
        "id": 5,
        "lm": 138661285500,
        "ln": "King",
        "fn": "Alice",
        "dc": "Architect",
        "em": "a.king@company.com",
        "ph": "617-244-1177",
        "ac": true,
        "dl": false
    }, {
        "id": 6,
        "lm": 138661285600,
        "ln": "Brown",
        "fn": "Jan",
        "dc": "Software Engineer",
        "em": "j.brown@company.com",
        "ph": "617-568-9863",
        "ac": true,
        "dl": false
    }, {
        "id": 7,
        "lm": 138661285700,
        "ln": "Garcia",
        "fn": "Ami",
        "dc": "Software Engineer",
        "em": "a.garcia@company.com",
        "ph": "617-327-9966",
        "ac": true,
        "dl": false
    }, {
        "id": 8,
        "lm": 138661285800,
        "ln": "Green",
        "fn": "Jack",
        "dc": "Software Engineer",
        "em": "j.green@company.com",
        "ph": "617-565-9966",
        "ac": true,
        "dl": false
    }, {
        "id": 9,
        "lm": 138661285900,
        "ln": "Liesen",
        "fn": "Abraham",
        "dc": "Plumber",
        "em": "a.liesen@company.com",
        "ph": "617-523-4468",
        "ac": true,
        "dl": false
    }, {
        "id": 10,
        "lm": 138661286000,
        "ln": "Bower",
        "fn": "Angela",
        "dc": "Product Manager",
        "em": "a.bower@company.com",
        "ph": "617-877-3434",
        "ac": true,
        "dl": false
    }, {
        "id": 11,
        "lm": 138661286100,
        "ln": "Davidoff",
        "fn": "Fjodor",
        "dc": "Database Admin",
        "em": "f.davidoff@company.com",
        "ph": "617-446-9999",
        "ac": true,
        "dl": false
    }, {
        "id": 12,
        "lm": 138661286200,
        "ln": "Vitrovic",
        "fn": "Biljana",
        "dc": "Director of Communications",
        "em": "b.vitrovic@company.com",
        "ph": "617-111-1111",
        "ac": true,
        "dl": false
    }, {
        "id": 13,
        "lm": 138661286300,
        "ln": "Valet",
        "fn": "Guillaume",
        "dc": "Software Engineer",
        "em": "g.valet@company.com",
        "ph": "617-565-4412",
        "ac": true,
        "dl": false
    }, {
        "id": 14,
        "lm": 138661286400,
        "ln": "Tran",
        "fn": "Min",
        "dc": "Gui Designer",
        "em": "m.tran@company.com",
        "ph": "617-866-2554",
        "ac": true,
        "dl": false
    }];
    $scope.tableParams = new ngTableParams({
        page: 1,
        count: 10
    }, {
        total: data.length,
        getData: function ($defer, params) {
            var orderedData = params.sorting() ? $filter('orderBy')(data, params.orderBy()) : data;
            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });

    $scope.editId = -1;

    $scope.setEditId = function (pid) {
        $scope.editId = pid;
    };
}]);
