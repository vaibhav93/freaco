'use strict';
/** 
 * A directive used for "close buttons" (eg: alert box).
 * It hides its parent node that has the class with the name of its value.
 */
app.directive('extraPoints', function() {
    return {
        restrict: 'E',
        scope: {
            pointworth: '=',
            extra: '='
        },
        templateUrl: 'assets/views/extra_points.html',
        controller: function($rootScope, $scope, $element) {

            if (!$scope.extra) {
                $scope.extra = {
                    type: -1,
                    points: null,
                    worth: null
                }
            }
            $scope.$watch('extra.points', function() {
                $scope.extra.worth = $scope.extra.points * $scope.pointworth;
            })
            $scope.$watch('pointworth', function() {
                $scope.extra.worth = $scope.extra.points * $scope.pointworth;
            })
            $scope.$watch('extra.worth', function() {
                $scope.extra.points = $scope.extra.worth / $scope.pointworth;
            })
            $scope.Delete = function(e) {
                //remove element and also destoy the scope that element
                $element.remove();
                $scope.$destroy();
            }
        }
    };
});