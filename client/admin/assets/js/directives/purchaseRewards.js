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
            pw: '=',
            reward: '=?',
            businessId: '@'
        },
        templateUrl: 'assets/views/purchase_rewards.html',
        controller: function($rootScope, $scope, $element, Business, SweetAlert) {

            function rewardCons() {
                this.type = 'purchase';
                this.amount = null;
                this.points = null;
                this.worth = null;
                this.name = null;
            }
            if (!$scope.reward)
                $scope.reward = new rewardCons();
            $scope.$watchGroup(['reward.amount', 'percent', 'pw'], function() {
                console.log('percent is :' + $scope.percent);
                console.log('point worth: ' + $scope.pw);
                $scope.reward.points = $scope.reward.amount * $scope.pw;
                $scope.reward.worth = $scope.reward.amount * ($scope.percent / 100);
            })
            $scope.print = function() {
                // console.log($scope.reward);
                // console.log($scope.$parent.test);
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
                    }, function(err) {
                        SweetAlert.swal({
                            title: "Error",
                            text: err.data.error.message,
                            type: "error",
                            confirmButtonColor: "#007AFF"
                        });
                    })
                } else {
                    // update
                    Business.offers.updateById({
                        id: $scope.businessId,
                        fk: $scope.reward.id
                    }, $scope.reward, function(updatedReward) {
                        $scope.reward = updatedReward;

                    }, function(err) {
                        console.log(err);
                        SweetAlert.swal({
                            title: "Error",
                            text: err.data.error.message,
                            type: "error",
                            confirmButtonColor: "#007AFF"
                        });
                    })
                }
            }
        }
    };
});