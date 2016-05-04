angular.module('myApp', [])
    .constant('BLANK', "Add-A-Word")
    .run(function (BLANK, $rootScope) {
        $rootScope.femaleName = BLANK;
        $rootScope.jobTitle = BLANK;
    })
    .controller('MyCtrl', function ($scope) {
        $scope.gender = {};
    });
