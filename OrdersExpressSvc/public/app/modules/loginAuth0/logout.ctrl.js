(function () {
  'use strict';

  angular.module('oa-login-auth0')
    .controller('logoutAuth0Controller', ['auth', '$location', 'store', 'notification', 'oaState',
      function (auth, $location, store, notification, oaState) {
        var vm = this;
        //vm.shipments = [];
        vm.auth = auth;

        // function viewShipment() {
        //   $http({
        //     //url: SERVICE_BASE + '/api/shipments', //TODO: SERVICE_BASE is supposed to be part of appConfig.js constant.
        //     url: 'FixMe_SERVICE_BASE/' + '/api/shipments', //TODO: SERVICE_BASE is supposed to be part of appConfig.js constant.
        //     method: 'GET'
        //   }).then(function (response) {
        //     $scope.shipments = response.data;
        //   }, function (error) { //TODO: .catch is perhaps a better design pattern.
        //     console.log('error', error);
        //   });
        // }

        // $scope.viewShipment = viewShipment;

        vm.logout = function () {
          auth.signout();
          store.remove('profile');
          store.remove('token');
          store.remove('refreshToken');
          $location.path('/loginAuth0');  //TODO: Refactor
          notification.info('Logged out', ' ');
          oaState.logout();
        };

        // viewShipment();
      }]);

}());
