'use strict';
/** 
 * A directive used for "close buttons" (eg: alert box).
 * It hides its parent node that has the class with the name of its value.
 */
app.directive('purchaseRewards', function() {
    return {
        restrict: 'E',
        scope: {
            percent: '=',
            ppv: '=',
            reward: '=?'
        },
        templateUrl: 'assets/views/purchase_rewards.html',
        controller: function($rootScope, $scope, $element) {

            function rewardCons() {
                this.visits = null;
                this.points = null;
                this.worth = null;
                this.name = null;
            }
            if (!$scope.reward)
                $scope.reward = new rewardCons();
            $scope.$watchGroup(['reward.visits', 'percent', 'ppv'], function() {
                $scope.reward.points = $scope.reward.visits * $scope.ppv;
                $scope.reward.worth = $scope.reward.points * ($scope.percent / 100);
            })
            $scope.print = function() {
                console.log($scope.reward);
                console.log($scope.$parent.test);
            }
            $scope.Delete = function(e) {
                //remove element and also destoy the scope that element
                $element.remove();
                $scope.$destroy();
            }
        }
    };
});