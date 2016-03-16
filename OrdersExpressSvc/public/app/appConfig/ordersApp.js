// Create empty modules so that we could attach things to them later
// This is needed because Angular doesn't allow you to specify module
// references each time - only first time.

//angular.module("ordersApp", ['OTPWeb.Directives', 'ngynSelectKey', 'bento.modern', 'aa.notify', 'ui.router', 'ui.bootstrap', 'angular-data.DSCacheFactory', 'wijmo', 'wijspread']);
angular.module('ordersApp', [
    'auth0', 'angular-storage', 'angular-jwt',
    'ui.grid', 'ui.grid.pagination', 'ui.router',
    'orders.login', 'orders.home',
    'oa-common', 'oa-employee'
]); //['ui.bootstrap']);

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
  .config([
        '$stateProvider', '$urlRouterProvider', 'authProvider', '$httpProvider',
        'jwtInterceptorProvider', 'Auth0Constant', '$logProvider',
function (
      $stateProvider, $urlRouterProvider, authProvider, $httpProvider,
      jwtInterceptorProvider, Auth0Constant, $logProvider
    ) {

  $logProvider.debugEnabled(true);

      $stateProvider
      // .state('login', {
      //         url: '/login',
      //         controller: 'loginController as login',
      //         templateUrl: 'app/feature/login.html'
      //     })

        //.state('/', {
        //  controller: 'HomeCtrl',
        //  templateUrl: 'app/modules/home/home.html',
        //  pageTitle: 'Homepage',
        //  requiresLogin: true
        //})
        .state('home', {
          url: '/',
          controller: 'HomeCtrl',
          controllerAs: 'home',
          templateUrl: 'app/modules/home/home.html',
          pageTitle: 'Homepage',
          requiresLogin: true
        })


        .state('login', {
          controller: 'LoginCtrl',
          templateUrl: 'app/modules/login/login.html',
          pageTitle: 'Login'
        })
        .state('user', {
          url: '/user/:username',
          controller: 'userController as user',
          templateUrl: 'app/feature/user.html',
          pageTitle: 'User',
          requiresLogin: true
        })
        .state('order', {
          url: '/order',
          controller: 'orderController as order',
          templateUrl: 'app/feature/order.html',
          pageTitle: 'Order',
          requiresLogin: true
        })
        //resolve: {  //TODO: Add resolve to each of these - for any Mongo calls (that might take time).
        //  event: function($route, eventData){
        //    //$route.current.locals.event = use in controller to read below promise.
        //    return eventData.getEvent($route.current.pathParams.eventId).$promise;
        //  }
        //}

        .state('page1', {
          url: '/page1',
          templateUrl: 'app/test/page1.html',
          pageTitle: 'Page1',
          requiresLogin: true
        })
        .state('page2', {
          url: '/page2',
          templateUrl: 'app/test/page2.html',
          pageTitle: 'Page2',
          requiresLogin: true
        })
        .state('page3', {
          url: '/page3',
          templateUrl: 'app/test/page3.html',
          pageTitle: 'Page3',
          requiresLogin: true
        })
        .state('employee', {
          url: '/employee',
          controller: 'employeeController as employees',
          templateUrl: 'app/modules/employee/employee.html',
          pageTitle: 'Employee Listing',
          requiresLogin: true,
          resolve: {
            employeelist: function(restSvc){
              //return restSvc.getEmployees().$promise;  //$route.current.locals.employeeslist
              return restSvc.getEmployees();  //$route.current.locals.employeeslist
            }
          }
        })
        .state('employee_detail', {
          url: '/employee/:user',
          controller: 'employeeDetailController as employeedetail',
          templateUrl: 'app/modules/employee/employeeDetail.html',
          pageTitle: 'Employee Detail',
          requiresLogin: true,
          resolve: {
            resolveduser: function($stateParams){
              return 'resolveduser123';  //$stateParams.user;  //Later hit restSvc.getUser('user...')
            }
          }
        })
        ;

      $urlRouterProvider.otherwise('/');


      authProvider.init({
        domain: Auth0Constant.AUTH0_DOMAIN,
        clientID: Auth0Constant.AUTH0_CLIENT_ID,
        loginUrl: '/login'
      });

      var refreshingToken = null;
      jwtInterceptorProvider.tokenGetter = function (store, jwtHelper) {
        var token = store.get('token');
        var refreshToken = store.get('refreshToken');
        if (token) {
          if (!jwtHelper.isTokenExpired(token)) {
            return store.get('token');
          } else { //https://github.com/auth0/auth0-angular/blob/master/docs/refresh-token.md
            if (refreshingToken === null) {
              refreshingToken = auth.refreshIdToken(refreshToken).then(function (idToken) { //TODO: Possible bug w/ "auth".
                store.set('token', idToken);
                return idToken;
              }).finally(function () {
                refreshingToken = null;
              });
            }
            return refreshingToken;
          }
        }
      };
      $httpProvider.interceptors.push('jwtInterceptor');

}]);




angular.module('ordersApp')
  .run(function ($rootScope, auth, store, jwtHelper, $location) { //TODO: Not minsafe!!
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
  });



angular.module('ordersApp')
  .controller('AppCtrl', function AppCtrl($scope, $location) { //TODO: Not minsafe
    var vm = this;
    //$scope.test01 = "testing test01";
    vm.test01 = 'testing test01';

    //TODO: Fix pageTitle - used to work. S/b @stateChangeSuccess now.
    $scope.$on('$routeChangeSuccess', function (e, nextRoute) {
      if (nextRoute.$$route && angular.isDefined(nextRoute.$$route.pageTitle)) {
        $scope.pageTitle = nextRoute.$$route.pageTitle + ' | Demo App';
        //$route.current.pageTitle is typical way.
        //$route.current.params.foo if ?foo=123 is in querystring (params does either). pathParams...
      }
    });
    //$rootScope.$on('$routeChangeSuccess', function (e, nextRoute) {
    //  if (nextRoute.$$route && angular.isDefined(nextRoute.$$route.pageTitle)) {
    //    vm.pageTitle = nextRoute.$$route.pageTitle + ' | Demo App';
    //  }
    //});
  });



/*
    //Turn off by passing false to debugEnabled.
    //Usage: $log.debug('Debug msg');  //Better than console.log("can't be turned off easily");
    .config(['$logProvider', function ($logProvider) {
        $logProvider.debugEnabled(true);
    }])
*/




//angular.module('ordersApp')
//    .controller('testController', ['$scope', function($scope) {
//        $scope.name = 'Testing 123';
//    }]);

//angular.module('ordersApp')
//.directive('myDirective', function() {
//    return {
//        restrict: 'E',
//        template: '<div>This is my directive</div>'
//    };
//});