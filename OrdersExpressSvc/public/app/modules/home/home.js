angular.module('orders.home', [
'auth0'])
.controller('HomeCtrl', function ($scope, auth, $http, $location, store) {
    $scope.shipments = [];
    $scope.auth = auth;

    function viewShipment() {
        $http({
            url: SERVICE_BASE + '/api/shipments',  //TODO: SERVICE_BASE is supposed to be part of appConfig.js constant.
            method: 'GET'
        }).then(function (response) {
            $scope.shipments = response.data;
        }, function (error) {    //TODO: .catch is perhaps a better design pattern.
            console.log('error', error);
        });
    }

    $scope.viewShipment = viewShipment;

    $scope.logout = function () {
        auth.signout();
        store.remove('profile');
        store.remove('token');
        store.remove('refreshToken');
        $location.path('/login');
    };

    viewShipment();
});
