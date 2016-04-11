(function () {
  'use strict';

  //https://auth0.com/docs/client-platforms/angularjs#2-add-the-module-dependency-and-configure-the-service
  angular.module('oa-login-auth0', ['auth0', 'angular-storage', 'angular-jwt', 'oa-common'])
    .config(['authProvider', 'constants', function (authProvider, constants) {
      authProvider.init({
        domain: constants.auth0.domain,
        clientID: constants.auth0.clientID
      });
    }])
    .run(['auth', function(auth) {
      // This hooks al auth events to check everything as soon as the app starts
      auth.hookEvents();
    }])
  ;

}());
