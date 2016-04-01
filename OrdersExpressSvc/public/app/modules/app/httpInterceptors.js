(function () {
  'use strict';

  angular.module('ordersApp')
    .config(['$httpProvider', function ($httpProvider) {
      $httpProvider.interceptors.push('oaHttpInterceptor');
    }]);

  angular.module('ordersApp')
    .factory('oaHttpInterceptor', ['$q', '$location', function ($q, $location) {
    return {
      request: function (req) {
        //TODO: Add token here:
        // if(token is truthy ...)
        // {
        //   req.headers['x-session-token'] = SessionService.token;
        //   req.headers.Authorization = userService.getAuthorization();
        // }

        if (req.url.indexOf('/api/') > -1) {
          req.timestamp = Date.now();
          //console.log('restful request', req);
        }
        return req;
      },

      response: function (result) {
        if (result.config.url.indexOf('/api/') > -1) {
          console.log('restful round trip took (msec)= ' + (Date.now() - result.config.timestamp));
          //console.log('restful response', result);
        }
        return result;
      },

      responseError: function (rejection) {
        //TODO: Show Toastr notification.
        if (rejection.status == 401 || rejection.status == 403) {
          $location.url('/login');  //Redirect to Login page.  //TODO: $state.go instead?
        }
        return $q.reject(rejection);

        // // Return a new promise
        // return userService.authenticate().then(function() {
        //   return $injector.get('$http')(rejection.config);
        // });
      }
    };
  }]);

}());

//Retry example= https://github.com/witoldsz/angular-http-auth/blob/master/src/http-auth-interceptor.js
