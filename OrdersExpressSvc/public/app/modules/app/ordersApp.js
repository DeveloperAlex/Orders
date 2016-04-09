
//https://github.com/angular-ui/ui-router/wiki#state-change-events
angular.module('ordersApp')
  .run(['$rootScope', 'notification',
    function ($rootScope, notification) {
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
          notification.error('$stateNotFound', 'ugh');
        });
      $rootScope.$on('$stateChangeSuccess',
        function (event, toState, toParams, fromState, fromParams) {
          console.log('$stateChangeSuccess fired!');
        });
      $rootScope.$on('$stateChangeError',
        function (event, toState, toParams, fromState, fromParams, error) {
          console.log('$stateChangeError: ' + error);
          notification.error('$stateChangeError', error);
        });
    }
]);



angular.module('ordersApp')
  .run( ['$rootScope', 'auth', 'store', 'jwtHelper', '$location', 'notification',
    function ($rootScope, auth, store, jwtHelper, $location, notification) {
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
            notification.info('Please login', ' ');
            $location.path('/loginAuth0');
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

  .config(function($compileProvider){
    $compileProvider.debugInfoEnabled(false);  //Perhaps turn this off in Prod (slight performance improvement).
})
*/
