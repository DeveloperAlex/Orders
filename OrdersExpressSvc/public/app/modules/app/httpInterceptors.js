(function () {
  'use strict';

  angular.module('ordersApp')
    .config(['$httpProvider', function ($httpProvider) {
      $httpProvider.interceptors.push('oaHttpInterceptor');
    }]);

  angular.module('ordersApp')
    .factory('oaHttpInterceptor', ['$q', '$location', function ($q, $location, $state) {
    return {
      request: function (req) {
        req.headers = req.headers || {};

        //TODO: Add token here:
        // if(token is truthy
        // && req.url.substr(req.url.length - 5) != '.html')  //No need to send token in ng template requests.
        // {
        //   //req.headers['x-session-token'] = SessionService.token;
        //   req.headers.Authorization = 'Bearer ' + token;
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
        if (rejection.status == 401 || rejection.status == 403 || rejection.status == 419) {
          //$location.url('/login');  //Redirect to Login page.  //TODO: $state.go instead?
          $state.go('login');
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
