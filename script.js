angular.module('myApp', ['ngMessages'])
    .controller('MyCtrl', function ($scope) {
        $scope.data = {};
        $scope.minvalue = 10;
        $scope.gender = {};
        $scope.formHide = false;
        //when submit change formHide
        $scope.submit = function () {
            $scope.formHide = true;
        }
        $scope.reset = function () {
            $scope.inputHide = false;
            $scope.data = {};
            location.reload();
        }
    });
