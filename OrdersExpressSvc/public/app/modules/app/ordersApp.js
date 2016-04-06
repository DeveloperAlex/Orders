
//https://github.com/angular-ui/ui-router/wiki#state-change-events
angular.module('ordersApp')
  .run(['$rootScope',
    function ($rootScope) {
      //Debugging hooks
      $rootScope.$on('$stateChangeStart',
        function (event, toState, toParams, fromState, fromParams) {
          console.log('$stateChangeStart fired!');
        });
      $rootScope.$on('$stateNotFound',
        function (event, unfoundState, fromState, fromParams) {
          console.log(unfoundState.to);
          console.log(unfoundState.toParams);
          console.log(unfoundState.options);
        });
      $rootScope.$on('$stateChangeSuccess',
        function (event, toState, toParams, fromState, fromParams) {
          console.log('$stateChangeSuccess fired!');
        });
      $rootScope.$on('$stateChangeError',
        function (event, toState, toParams, fromState, fromParams, error) {
          console.log('$stateChangeError: ' + error);
        });
    }
]);


//TODO: Move Constants to a separate file - so its easier to modify them for different environments.
//TODO: Move secret keys out of my code (& reset them to different values - obviously).
angular.module('ordersApp')
  .constant('Auth0Constant', {
    AUTH0_DOMAIN: 'developeralex.auth0.com',
    AUTH0_CLIENT_ID: 'zK2QYeeXHcR5NsyULkSudRfv3QytCueH',
    SERVICE_BASE: 'http://app.developeralex.com' //'http://localhost:36740'

    // restfulUrl: 'http://apitrans.thomsonreuters.com/api/', //Suffix url w/ a "/".
    // restfulVersion: 'v1',
    // webAppUrl: 'http://otptrans.thomsonreuters.com/' //Suffix url w/ a "/".
  })
  .constant('restfulUrl', 'http://asdf/api');  //TODO: Refactor constants to be 1 json object.






angular.module('ordersApp')
  .run( ['$rootScope', 'auth', 'store', 'jwtHelper', '$location',
    function ($rootScope, auth, store, jwtHelper, $location) {
    var refreshingToken = null;
    $rootScope.$on('$locationChangeStart', function () { //TODO: S/this be $stateChangeStart instead??
      var token = store.get('token');
      var refreshToken = store.get('refreshToken');

      if (token) {
        if (!jwtHelper.isTokenExpired(token)) {
          if (!auth.isAuthenticated) {
            auth.authenticate(store.get('profile'), token);
          }
        } else {
          if (refreshToken) {
            if (refreshingToken === null) {
              refreshingToken = auth.refreshIdToken(refreshToken).then(function (idToken) {
                store.set('token', idToken);
                auth.authenticate(store.get('profile'), idToken);
              }).finally(function () {
                refreshingToken = null;
              });
            }
            return refreshingToken;
          } else {
            $location.path('/login');
          }
        }
      }
    });
    auth.hookEvents();
  } ] );




/*
    //Turn off by passing false to debugEnabled.
    //Usage: $log.debug('Debug msg');  //Better than console.log("can't be turned off easily");
    .config(['$logProvider', function ($logProvider) {
        $logProvider.debugEnabled(true);
    }])
*/

/*
  .config(function($compileProvider){
    $compileProvider.debugInfoEnabled(false);  //Perhaps turn this off in Prod (slight performance improvement).
})
*/
