'use strict';
angular.module('oa-login-auth0')
  .controller('loginAuth0Controller', ['auth', '$location', 'store',
    function (auth, $location, store) {  //TODO: Not using ControllerAs here.
      var vm = this;
      
      vm.login = function () {
        //debugger;
        auth.signin({
            authParams: {scope: 'openid offline_access'}  //To get a "refresh token" need "offline_access".
          },
          function (profile, token, access_token, state, refresh_token) {
            store.set('profile', profile);
            store.set('token', token);
            store.set('refreshToken', refresh_token);
            $location.path('/');
          },
          function (error) {
            console.log('There was an error', error);  //TODO: Toast
          }
        );
      };

    }]);
