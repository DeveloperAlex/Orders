'use strict';
angular.module('oa-login-auth0')
  .controller('loginAuth0Controller', ['auth', '$location', 'store', 'notification',
    function (auth, $location, store, notification) {  //TODO: Not using ControllerAs here.
      var vm = this;
      
      vm.login = function () {
        //debugger;
        //To get a "refresh token" need "offline_access".
        auth.signin({
            authParams: {scope: 'openid offline_access'}
          },
          function (profile, token, access_token, state, refresh_token) {
            //debugger;
            store.set('profile', profile);
            store.set('token', token);
            store.set('refreshToken', refresh_token);
            $location.path('/');
            notification.success(' ', 'Logged in');
          },
          function (error) {
            //debugger;
            console.log('There was an error in loginAuth0Controller', error);  //TODO: Toast
            notification.error('Login failed', error);
          }
        );
      };

    }]);
