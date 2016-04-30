'use strict';
/** 
 * A directive used for "close buttons" (eg: alert box).
 * It hides its parent node that has the class with the name of its value.
 */
app.directive('visitRewards', function() {
    return {
        restrict: 'E',
        scope: {
            percent: '=',
            ppv: '=',
            reward: '=?',
            businessId: '@'
        },
        templateUrl: 'assets/views/visit_rewards.html',
        controller: function($rootScope, $scope, $element, Business) {

            function rewardCons() {
                this.type = 'visit';
                this.visits = null;
                this.points = null;
                this.worth = null;
                this.name = null;
            }
            if (!$scope.reward)
                $scope.reward = new rewardCons();
            $scope.$watchGroup(['reward.visits', 'percent', 'ppv'], function() {
                console.log('ppv changed');
                $scope.reward.points = $scope.reward.visits * $scope.ppv;
                $scope.reward.worth = $scope.reward.points * ($scope.percent / 100);
            })
            $scope.print = function() {
                console.log($scope.reward);
                console.log($scope.$parent.test);
            }
            $scope.Delete = function(e) {
                //remove element and also destoy the scope that element
                if ($scope.reward.id)
                    Business.offers.destroyById({
                        id: $scope.businessId,
                        fk: $scope.reward.id
                    }, function() {
                        $element.remove();
                        $scope.$destroy();
                    })
                else {
                    $element.remove();
                    $scope.$destroy();
                }

            }
            $scope.Save = function() {
                // create reward
                if (!$scope.reward.id) {
                    Business.offers.create({
                        id: $scope.businessId
                    }, $scope.reward, function(createdReward) {
                        $scope.reward = createdReward;
                        console.log('created reward');
                    })
                } else {
                    // update
                    Business.offers.updateById({
                        id: $scope.businessId,
                        fk: $scope.reward.id
                    }, $scope.reward, function(updatedReward) {
                        $scope.reward = updatedReward;
                        console.log('update reward');
                    })
                }
            }
        }
    };
});