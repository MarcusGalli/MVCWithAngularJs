var myApp = angular.module('myApp', []);

myApp.controller('maisController', function ($scope, $http) {
    $http.get('/home/getProducts')
        .sucess(function (result) {
            $scope.products = result;
        })
        .error(function (data) {
            console.log(data);
        })
});