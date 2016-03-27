'use strict';
angular.module('orders.login', ['auth0'])
.controller('LoginCtrl', ['$scope', 'auth', '$location', 'store', function ($scope, auth, $location, store) {  //TODO: Not using ControllerAs here.
    
    $scope.login = function() {
        auth.signin({
                authParams: { scope: 'openid offline_access' }  //To get a "refresh token" need "offline_access".
            }, 
            function (profile, token, access_token, state, refresh_token) {
                store.set('profile', profile);
                store.set('token', token);
                store.set('refreshToken', refresh_token);
                $location.path('/');
            }, 
            function(error) {
                console.log('There was an error', error);  //TODO: Toast
            }
        );
    };
    
} ] );
