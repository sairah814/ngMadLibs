angular.module('myApp', [])
    .constant('BANANA', 1.4)
    .run(function (BANANA, $rootScope) {
        $rootScope.version = BANANA;
    })
    .controller('MyCtrl', function (BANANA, $scope) {
        $scope.version = BANANA;
        $scope.gender = {};
    });
