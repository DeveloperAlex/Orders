angular.module('ordersApp')
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('oaHttpInterceptor');
  }]);

angular.module('ordersApp').factory('oaHttpInterceptor', ['$q', function($q) {
  return {
    request: function(config) {
      //TODO: Add token here:
      // if(token is truthy ...) { config.headers['x-session-token'] = SessionService.token; }

      console.log('request config', config);
      return config;
    },

    response: function(response) {
      console.log('response', response);
      return response;
    },

    responseError: function(rejection) {
      if (rejection.status == 401) {
        ;  //Redirect to Login page.
      }
      return $q.reject(rejection);
    }
  };
}]);
