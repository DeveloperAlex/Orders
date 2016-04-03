(function () {
  'use strict';

  //https://auth0.com/docs/client-platforms/angularjs#2-add-the-module-dependency-and-configure-the-service
  angular.module('oa-login-auth0', ['auth0', 'angular-storage', 'angular-jwt'])
    .config(['authProvider', function (authProvider) {
      authProvider.init({
        domain: 'developeralex.auth0.com',
        clientID: 'zK2QYeeXHcR5NsyULkSudRfv3QytCueH'
      });
    }])
    .run(['auth', function(auth) {
      // This hooks al auth events to check everything as soon as the app starts
      auth.hookEvents();
    }])
  ;

}());
