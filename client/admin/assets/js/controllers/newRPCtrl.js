'use strict';
/**
 * controllers for for city
 
 * Simple table with sorting and filtering on AngularJS
 */
app.controller('newRPCtrl', ["$scope", "$filter", "$compile", "$timeout", "Business", "PushOffer", "$localStorage", "Vendor", "Template", "$q", "$modal",
    function($scope, $filter, $compile, $timeout, Business, PushOffer, $localStorage, Vendor, Template, $q, $modal) {
        $scope.filter = {
            allCustomers: false,
            filter: -1,
            visits: null
        }
        $scope.currentTemplate = '';
        $scope.newPO = {

        };
        $scope.saveRewards = function() {
            var rewardList = retriveValue('rewards');
            var promises = [];
            angular.forEach(rewardList, function(reward) {
                promises.push(Business.offers.create({
                    id: $localStorage.business.id
                }, reward).$promise)
            })
            $q.all(promises).then(function() {
                console.log('success');
            })
        }
        $scope.saveConfig = function() {
            var extraPoints = [];
            extraPoints.length = 0;
            $scope.config.extra = {};
            extraPoints = retriveValue('extraPoints');
            //add signup extra
            if ($scope.signup.points > 0) {
                extraPoints.push($scope.signup)
            } else {
                // no sign up extra points
                extraPoints.push({
                    type: 'signup',
                    points: 0,
                    worth: 0
                })
            }
            // console.log(extraPoints);
            //$scope.config.extra = extraPoints.slice();
            angular.forEach(extraPoints, function(object) {
                $scope.config.extra[object.type] = object;
            });
            Business.prototype$updateAttributes({
                id: $localStorage.business.id
            }, {
                config: $scope.config
            }, function(success) {
                console.log(success);
            }, function(err) {
                console.log(err);
            })
        }
        var extraRules = [];
        $scope.signup = {
            type: 'signup',
            points: null,
            worth: null
        }
        $scope.config = {
            extra: {}
        }

        // calculate each point worth
        $scope.$watch('config.basket', function() {
            if ($scope.config.type && $scope.config.type == 'visit') {
                $scope.config.pointWorth = $scope.config.percent / 100;
                // points per visit
                $scope.config.ppv = $scope.config.basket;
            } else {

            }
        });
        $scope.$watch('signup.points', function() {
            $scope.signup.worth = $scope.signup.points * $scope.config.pointWorth;
        })
        $scope.$watch('signup.worth', function() {
            $scope.signup.points = $scope.signup.worth / $scope.config.pointWorth;
        })
        // get rewards from directives
        var retriveValue = function(type) {
            var List = [];
            var ChildHeads = [$scope.$$childHead];
            var currentScope;
            while (ChildHeads.length) {
                currentScope = ChildHeads.shift();
                while (currentScope) {
                    if (type == 'rewards' && currentScope.reward !== undefined)
                        List.push(currentScope.reward);
                    else if (type == 'extraPoints' && currentScope.extra !== undefined)
                        if (currentScope.extra.type != -1)
                            List.push(currentScope.extra);

                    currentScope = currentScope.$$nextSibling;
                }
            }
            return List;
        }
        $scope.addReward = function() {
            var compiledDirective = $compile('<purchase-rewards ppv="config.ppv" percent="config.percent"></purchase-rewards>');
            var directiveElement = compiledDirective($scope);
            $('.rewardslist-container').append(directiveElement);
        }
        $scope.openModal = function(festive) {
            console.log(festive)
            var modalInstance = $modal.open({
                templateUrl: 'assets/views/newTemplateModal.html',
                controller: 'newTemplateCtrl',
                resolve: {
                    festive: function() {
                        return festive;
                    }
                }
            });
        };
        $scope.customers = [];
        $scope.allCustomersChange = function() {
            if ($scope.filter.allCustomers) {
                Business.customers({
                    id: $localStorage.business.id
                }, function(customers) {
                    $scope.customers = customers;
                })
            } else {
                $scope.customers = [];
            }
            $scope.filter.days = 0;
            $scope.filter.xDays = undefined;
            $scope.filter.gtxVisits = 0;
            $scope.filter.ltxVisits = 0;
            $scope.filter.bday = 0;
            $scope.filter.visits = 0;
            console.log($scope.filter.allCustomers);
        }
        //filter to get customers with birthdays next/this month
        var filterBirthdays = function(customer) {
            if (!customer.birthday)
                return false;
            else {
                var momentBday = moment(customer.birthday);
                var daysLeft = moment.duration((momentBday.month() + 1) * 30 + momentBday.date() - ((moment().month + 1) * 30 + moment().date())).asDays()

                if ($scope.filter.bday == 30 && $scope.filter.bday > daysLeft)
                    return true;
                else if ($scope.filter.bday == 60 && daysLeft <= 60 && daysLeft >= 30)
                    return true;
                else
                    return false;
            }

        }
        $scope.visitsChange = function() {
            if ($scope.filter.visits > 0) {
                if ($scope.filter.visits == 22) {
                    Business.customers({
                        id: $localStorage.business.id,
                        filter: {
                            where: {
                                visitCount: {
                                    gt: $scope.filter.gtxVisits
                                }
                            }
                        }
                    }, function(customers) {
                        $scope.customers = customers;
                    })
                } else {
                    Business.customers({
                        id: $localStorage.business.id,
                        filter: {
                            where: {
                                visitCount: {
                                    lt: $scope.filter.ltxVisits
                                }
                            }
                        }
                    }, function(customers) {
                        $scope.customers = customers;
                    })
                }

            }
        }
        $scope.gotoStep3 = function() {
            $scope.panel3 = false;
        }
        $scope.bdayChange = function() {
            if ($scope.filter.bday > 0) {
                Business.customers({
                    id: $localStorage.business.id
                }, function(customers) {
                    $scope.customers = customers.filter(filterBirthdays);
                })
            }
        }
        $scope.daysChanged = function() {
            $scope.customers = [];
            var filterDate;
            if ($scope.filter.days > 0)
                filterDate = moment().subtract($scope.filter.days, 'days').toDate();
            else {
                if ($scope.filter.xDays)
                    filterDate = moment().subtract($scope.filter.xDays, 'days').toDate();
                else
                    filterDate = 0;
            }
            Business.customers({
                id: $localStorage.business.id,
                filter: {
                    where: {
                        lastVisit: {
                            lt: filterDate
                        }
                    }
                }
            }, function(customers) {
                $scope.customers = customers;
            })


            console.log(filterDate);
        }
        Template.find({
            filter: {
                where: {
                    and: [{
                        festive: true
                    }, {
                        or: [{
                            businessId: 0
                        }, {
                            ownerBusiness: $localStorage.business.id.toString()
                        }]

                    }]
                }
            }
        }, function(festiveTemplates) {
            $scope.festivals = festiveTemplates;
        })
        Template.find({
            filter: {
                where: {
                    and: [{
                        festive: false
                    }, {
                        ownerBusiness: $localStorage.business.id.toString()
                    }]
                }
            }
        }, function(businessTemplates) {
            $scope.businessTemplates = businessTemplates;
        })
        $scope.setTemplate = function(template) {
            if (template != 'festive') {
                Template.find({
                    filter: {
                        where: {
                            name: template
                        }
                    }
                }, function(templates) {
                    // console.log(templates);
                    $scope.newPO.title = templates[0].title;
                    $scope.newPO.description = templates[0].description;
                    // console.log($scope.newPO);
                })
            }
            $scope.panel2 = false;
            $scope.currentTemplate = template;
        }
        $scope.setBackground = function(template) {
            if (template == $scope.currentTemplate) {
                return 'greenBG ';
            }
        }
        $scope.currentFestival = '';
        $scope.createOffer = function() {
            Business.pushOffers.create({
                id: $localStorage.business.id
            }, {
                businessName: $localStorage.business.name,
                title: $scope.newPO.title,
                description: $scope.newPO.description,
                validFrom: $scope.start,
                validTill: $scope.end
            }, function(pushOffer) {
                console.log(pushOffer);
                Vendor.pushOffer({

                    pushOffer: pushOffer,
                    customerList: $scope.customers

                }, function(res) {

                })
            })
        }
        $scope.today = function() {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.clear = function() {
            $scope.dt = null;
        };

        $scope.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.opened = !$scope.opened;
        };
        $scope.endOpen = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.startOpened = false;
            $scope.endOpened = !$scope.endOpened;
        };
        $scope.startOpen = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.endOpened = false;
            $scope.startOpened = !$scope.startOpened;
        };

        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };

        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];

        $scope.hstep = 1;
        $scope.mstep = 15;

        // Time Picker
        $scope.options = {
            hstep: [1, 2, 3],
            mstep: [1, 5, 10, 15, 25, 30]
        };

        $scope.ismeridian = true;
        $scope.toggleMode = function() {
            $scope.ismeridian = !$scope.ismeridian;
        };

        $scope.update = function() {
            var d = new Date();
            d.setHours(14);
            d.setMinutes(0);
            $scope.dt = d;
        };

        $scope.changed = function() {
            $log.log('Time changed to: ' + $scope.dt);
        };

        $scope.clear = function() {
            $scope.dt = null;
        };

    }
]);

app.controller('newTemplateCtrl', ["$scope", "$modalInstance", "$localStorage", "Business", "festive", "SweetAlert", "Template",
    function($scope, $modalInstance, $localStorage, Business, festive, SweetAlert, Template) {

        $scope.festive = festive;
        $scope.template = {
            name: '',
            title: '',
            description: '',
            festive: festive,
            ownerBusiness: $localStorage.business.id.toString()
        }
        $scope.ok = function() {
            Template.create(
                $scope.template, function(success) {
                    $modalInstance.close();
                    setTimeout(function() {
                        SweetAlert.swal({
                            title: "Sucess!",
                            text: "Template created",
                            type: "success",
                            confirmButtonColor: "#007AFF"
                        }, function(isConfirm) {

                        });
                    }, 500);
                }, function(error) {
                    setTimeout(function() {
                        SweetAlert.swal({
                            title: "Error!",
                            text: "Could not create template",
                            type: "danger",
                            confirmButtonColor: "#007AFF"
                        }, function(isConfirm) {

                        });
                    }, 500);
                })

        };

        $scope.cancel = function() {
            $modalInstance.dismiss('cancel ');
        };
    }
]);