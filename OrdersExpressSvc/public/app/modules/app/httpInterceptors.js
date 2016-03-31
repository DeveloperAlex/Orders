(function () {
  'use strict';

  angular.module('ordersApp')
    .config(['$httpProvider', function ($httpProvider) {
      $httpProvider.interceptors.push('oaHttpInterceptor');
    }]);

  angular.module('ordersApp').factory('oaHttpInterceptor', ['$q', function ($q) {
    return {
      request: function (config) {
        //TODO: Add token here:
        // if(token is truthy ...) { config.headers['x-session-token'] = SessionService.token; }

        if (config.url.indexOf('/api/') > -1) {
          console.log('restful request', config);
        }
        return config;
      },

      response: function (result) {
        if (result.config.url.indexOf('/api/') > -1) {
          console.log('restful response', result);
        }
        return result;
      },

      responseError: function (rejection) {
        //TODO: Show Toastr notification.
        if (rejection.status == 401) {
          ;  //Redirect to Login page.
        }
        return $q.reject(rejection);
      }
    };
  }]);

}());
