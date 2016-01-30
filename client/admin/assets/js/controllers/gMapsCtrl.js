//'use strict';
/** 
  * controllers used for the dashboard
  */
  app.controller('WindowCtrl', function ($scope) {
    $scope.place = {};
    $scope.showPlaceDetails = function(param) {
      $scope.place = param;
    }
  })
  app.controller('SearchBoxController',['$scope', '$timeout', 'uiGmapLogger', '$http','uiGmapGoogleMapApi'
    , function ($scope, $timeout, $log, $http, GoogleMapApi) {
      $log.doLog = true

      $scope.toggleMap = function () {
        $scope.searchbox.options.visible = !$scope.searchbox.options.visible
      }

      GoogleMapApi.then(function(maps) {
        maps.visualRefresh = true;
        $scope.defaultBounds = new google.maps.LatLngBounds(
          new google.maps.LatLng(40.82148, -73.66450),
          new google.maps.LatLng(40.66541, -74.31715));


        $scope.map.bounds = {
          northeast: {
            latitude:$scope.defaultBounds.getNorthEast().lat(),
            longitude:$scope.defaultBounds.getNorthEast().lng()
          },
          southwest: {
            latitude:$scope.defaultBounds.getSouthWest().lat(),
            longitude:-$scope.defaultBounds.getSouthWest().lng()

          }
        }
        $scope.searchbox.options.bounds = new google.maps.LatLngBounds($scope.defaultBounds.getNorthEast(), $scope.defaultBounds.getSouthWest());
      });

      angular.extend($scope, {
        selected: {
          options: {
            visible:false

          },
          templateurl:'window.tpl.html',
          templateparameter: {}
        },
        map: {
          control: {},
          center: {
            latitude: 28.612,
            longitude: 77.210
          },
          zoom: 16,
          dragging: false,
          bounds: {},
          markers: [],
          idkey: 'place_id',
          events: {
            idle: function (map) {

            },
            dragend: function(map) {
          //update the search box bounds after dragging the map
          var bounds = map.getBounds();
          var ne = bounds.getNorthEast();
          var sw = bounds.getSouthWest(); 
          console.log(map.markers);
          
          $scope.searchbox.options.bounds = new google.maps.LatLngBounds(sw, ne);
          //$scope.searchbox.options.visible = true;
        },
        click: function(mapModel, eventName, originalEventArgs)
        {
          $scope.$apply(function(){
           console.log('map clicked');
           var e = originalEventArgs[0];
           var marker = {
            id:Date.now(),
            place_id:Date.now(),
		              //place_id: place.place_id,
		              //name: place.name,
		              latitude: e.latLng.lat(),
		              longitude: e.latLng.lng(),
		              options: {
                    visible:false
                  }
                };
                console.log(marker);
                $scope.$parent.business.lat = marker.latitude;
                $scope.$parent.business.lon = marker.longitude;
                $scope.map.markers=[];
                $scope.map.markers.push(marker);
              });
        }
      }
    },
    marker:{
    	options:{draggable:true},
      events:{
        drag : function(marker){
          $scope.$parent.business.lat = marker.position.lat();
          $scope.$parent.business.lon = marker.position.lng();
        },
        dragend : function(marker){
          
        }
      }
    },
    searchbox: {
      template: 'searchbox.tpl.html',
      //position:'top-right',
      position:'top-left',
      options: {
      	autocomplete:true,
        types: [],
        componentRestrictions: {country: 'in'}
      },
      parentdiv:'custom-search-input',
      events: {
      	
        place_changed: function (autocomplete){

          place = autocomplete.getPlace()

          if (place.address_components) {

            newMarkers = [];
            // var bounds = new google.maps.LatLngBounds();

            var marker = {
              id:place.place_id,
              place_id: place.place_id,
              name: place.address_components[0].long_name,
              latitude: place.geometry.location.lat(),
              longitude: place.geometry.location.lng(),
              options: {
                visible:false
              },
              templateurl:'window.tpl.html',
              templateparameter: place
            };
            
            newMarkers.push(marker);

            // bounds.extend(place.geometry.location);

            // $scope.map.bounds = {
            //   northeast: {
            //     latitude: bounds.getNorthEast().lat(),
            //     longitude: bounds.getNorthEast().lng()
            //   },
            //   southwest: {
            //     latitude: bounds.getSouthWest().lat(),
            //     longitude: bounds.getSouthWest().lng()
            //   }
            // }
            $scope.map.center={
              latitude: marker.latitude,
              longitude: marker.longitude
            };
            $scope.$parent.business.lat = marker.latitude;
            $scope.$parent.business.lon = marker.longitude;
            _.each(newMarkers, function(marker) {
              marker.closeClick = function() {
                $scope.selected.options.visible = false;
                marker.options.visble = false;
                return $scope.$apply();
              };
              marker.onClicked = function() {
                $scope.selected.options.visible = false;
                $scope.selected = marker;
                $scope.selected.options.visible = true;
              };
            });
            //$scope.map.zoom=8;
            $scope.map.markers = newMarkers;
          } else {
            console.log("do something else with the search string: " + place.name);
          }
        }
      }
    }
  });
}]);